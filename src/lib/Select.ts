import Expression from "./Expression";
import Statement from "./Statement";

/**
 * https://dev.mysql.com/doc/refman/8.0/en/select.html
 */
export default class SelectStatement extends Statement {
	// Select method
	private allowDuplicateRows: boolean = true;

	// Bool actions
	private HIGH_PRIORITY: boolean = false;
	private STRAIGHT_JOIN: boolean = false;
	private SQL_SMALL_RESULT: boolean = false;
	private SQL_BIG_RESULT: boolean = false;
	private SQL_BUFFER_RESULT: boolean = false;
	private SQL_CALC_FOUND_ROWS: boolean = false;

	// Expressions
	private columns: Columns[] = [];
	private intoOption: IntoOption;
	private table: Table;
	private partitions: Partition[] = [];

	private whereExpression: Expression;
	private havingExpression: Expression;

	private ascendingOrder = true;
	private groupByColumns: Array<Column | Expression> = [];
	private orderByColumns: Array<Column | Expression> = [];

	private offsetLimit: [number | null, number | null] = [null, null];

	/**
	 * ALL (default) specifies that all matching rows should be returned, including duplicates.
	 */
	all(): SelectStatement {
		this.allowDuplicateRows = true;
		return this;
	}

	/**
	 * DISTINCT specifies that only unique matching rows should be returned.
	 */
	distinct(): SelectStatement {
		this.allowDuplicateRows = false;
		return this;
	}

	/**
	 * DISTINCTROW specifies that only unique matching rows should be returned.
	 * DISTINCTROW is a synonym for DISTINCT.
	 */
	distinctRow(): SelectStatement {
		this.allowDuplicateRows = false;
		return this;
	}

	/**
	 * HIGH_PRIORITY can be used to allow a query to be run even before other queries in a queue.
	 *
	 * Should only be used on simple queries.
	 */
	highPriority(): SelectStatement {
		this.HIGH_PRIORITY = true;
		//TODO: If this select if part of a union, throw an error.
		return this;
	}

	/**
	 * STRAIGHT_JOIN forces the optimizer to join the tables in the order they are listed in the FROM clause.
	 */
	straightJoin(): SelectStatement {
		this.STRAIGHT_JOIN = true;
		return this;
	}

	/**
	 * SQL_SMALL_RESULT instructs the optimizer to keep temporary tables in memory.
	 */
	inMemory(): SelectStatement {
		this.SQL_SMALL_RESULT = true;
		return this;
	}

	/**
	 * SQL_BIG_RESULT orders a GROUP BY to skip creating a temporary table and to instead sort on the the disk.
	 */
	noTemp(): SelectStatement {
		this.SQL_BIG_RESULT = true;
		return this;
	}

	/**
	 * SQL_BUFFER_RESULT instructs the optimizer move the result of the query to a temporary buffer while sending.
	 * This frees the engine to perform other queries on the locked tables on slow connections.
	 */
	buffer(): SelectStatement {
		this.SQL_BUFFER_RESULT = true;
		return this;
	}

	/**
	 * SQL_CALC_FOUND_ROWS allows you to use the FOUND_ROWS() function to calculate the number of rows found.
	 * The result disregards the limit set.
	 */
	calculateFoundRows(): SelectStatement {
		this.SQL_CALC_FOUND_ROWS = true;
		return this;
	}

	/**
	 * Specify one or more columns to select from the query.
	 */
	select(column: Column, ...additionalColumns: Column[]): SelectStatement {
		this.columns = [...this.columns, column, ...additionalColumns];
		return this;
	}

	/**
	 * Only one into may be specified for a query, despite it appearing multiple times in the anatomy.
	 */
	into(intoOption: IntoOption): SelectStatement {
		this.intoOption = intoOption;
		return this;
	}

	/**
	 * Specifies one table to be selected from.
	 */
	from(table: Table): SelectStatement {
		this.table = table;
		return this;
	}

	/**
	 * Specifies one or more partitions to be selected from the table.
	 */
	partition(
		partition: Partition,
		...additionalPartitions: Partition[]
	): SelectStatement {
		this.partitions = [
			...this.partitions,
			partition,
			...additionalPartitions,
		];
		return this;
	}

	/**
	 * @param expression An expression instance built by calling expression functions.
	 */
	where(whereExpression: Expression): SelectStatement {
		this.whereExpression = whereExpression;
		return this;
	}

	/**
	 * Used by aggregate functions.
	 */
	groupBy(
		column: Column | Expression,
		...additionalColumns: Array<Column | Expression>
	): SelectStatement {
		return this;
	}

	/**
	 * While the WHERE clause cannot access values returned from aggregate functions, HAVING can.
	 *
	 * The query will include only groups that match the given condition.
	 *
	 * HAVING is less optimized that WHERE, so though it can do everything that WHERE can, WHERE should be used
	 * instead of HAVING whenever possible.
	 */
	having(havingExpression: Expression): SelectStatement {
		this.havingExpression = havingExpression;
		return this;
	}

	/**
	 * WINDOW clause.
	 */
	window(): SelectStatement {
		return this;
	}

	/**
	 *
	 */
	orderByAscending(
		column: Column | Expression,
		...additionalColumns: Array<Column | Expression>
	): SelectStatement {
		this.ascendingOrder = true;
		return this;
	}

	/**
	 *
	 */
	orderByDescending(
		column: Column | Expression,
		...additionalColumns: Array<Column | Expression>
	): SelectStatement {
		this.ascendingOrder = false;
		return this;
	}

	/**
	 * Sets a maximum for the number of rows to be returned by a query.
	 */
	limit(limit: number | null): SelectStatement {
		this.offsetLimit[1] = limit;
		return this;
	}

	/**
	 * Set an offset for the rows to be returned by a query.
	 */
	offset(offset: number | null): SelectStatement {
		this.offsetLimit[0] = offset;
		return this;
	}

	/**
	 *
	 */
	for(): SelectStatement {
		return this;
	}
}

const [user]: User = await User.selectAll(User.all()).where(
	Ex.equal(User.id, 7)
);

await db.transaction((session) => {
	const rows: User[] = await User.selectAll(User.all()).where(
		Ex.equal(User.id, 7)
	);
	session.reset();
});
