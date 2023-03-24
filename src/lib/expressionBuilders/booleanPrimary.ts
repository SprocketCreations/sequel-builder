import Query from "../Query";
import ExpressionTypes from "../expressionTypes";
import { BooleanPrimary, Predicate } from "../expressionInterfaces";
import predicate from "./predicate";
import Not from "../Not";
import ComparisonOperator from "../ComparisonOperator";

export default abstract class booleanPrimary extends predicate {
	/**
	 * Checks a boolean for null.
	 * @param booleanPrimary
	 * @returns
	 */
	static isNull(booleanPrimary: BooleanPrimary): BooleanPrimary {
		return new ExpressionTypes.IsNull(booleanPrimary);
	}

	/**
	 * Checks a boolean for not null.
	 * @param booleanPrimary
	 * @returns
	 */
	static isNotNull(booleanPrimary: BooleanPrimary): BooleanPrimary {
		return new Not(new ExpressionTypes.IsNull(booleanPrimary));
	}

	/**
	 * Checks a boolean against a predicate.
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static spaceship(
		booleanPrimary: BooleanPrimary,
		predicate: Query
	): BooleanPrimary {
		return new ExpressionTypes.Spaceship(booleanPrimary, predicate);
	}

	/**
	 * booleanPrimary == predicate
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static equal(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(
			booleanPrimary,
			ComparisonOperator.Equal,
			predicate
		);
	}

	/**
	 * booleanPrimary != predicate
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static notEqual(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(
			booleanPrimary,
			ComparisonOperator.NotEqual,
			predicate
		);
	}

	/**
	 * booleanPrimary > predicate
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static greater(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(
			booleanPrimary,
			ComparisonOperator.Greater,
			predicate
		);
	}

	/**
	 * booleanPrimary >= predicate
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static greaterOrEqual(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(
			booleanPrimary,
			ComparisonOperator.GreaterOrEqual,
			predicate
		);
	}

	/**
	 * booleanPrimary < predicate
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static less(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(
			booleanPrimary,
			ComparisonOperator.Less,
			predicate
		);
	}

	/**
	 * booleanPrimary <= predicate
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static lessOrEqual(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(
			booleanPrimary,
			ComparisonOperator.LessOrEqual,
			predicate
		);
	}

	/**
	 * booleanPrimary == ALL query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static equalToAll(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(
			booleanPrimary,
			ComparisonOperator.Equal,
			query
		);
	}

	/**
	 * booleanPrimary != ALL query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static notEqualToAll(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(
			booleanPrimary,
			ComparisonOperator.NotEqual,
			query
		);
	}

	/**
	 * booleanPrimary > ALL query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static greaterThanAll(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(
			booleanPrimary,
			ComparisonOperator.Greater,
			query
		);
	}

	/**
	 * booleanPrimary >= ALL query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static greaterOrEqualToAll(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(
			booleanPrimary,
			ComparisonOperator.GreaterOrEqual,
			query
		);
	}

	/**
	 * booleanPrimary < ALL query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static lessThanAll(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(
			booleanPrimary,
			ComparisonOperator.Less,
			query
		);
	}

	/**
	 * booleanPrimary <= ALL query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static lessOrEqualToAll(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(
			booleanPrimary,
			ComparisonOperator.LessOrEqual,
			query
		);
	}

	/**
	 * booleanPrimary == ANY query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static equalToAny(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(
			booleanPrimary,
			ComparisonOperator.Equal,
			query
		);
	}

	/**
	 * booleanPrimary != ANY query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static notEqualToAny(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(
			booleanPrimary,
			ComparisonOperator.NotEqual,
			query
		);
	}

	/**
	 * booleanPrimary > ANY query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static greaterThanAny(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(
			booleanPrimary,
			ComparisonOperator.Greater,
			query
		);
	}

	/**
	 * booleanPrimary >= ANY query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static greaterOrEqualToAny(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(
			booleanPrimary,
			ComparisonOperator.GreaterOrEqual,
			query
		);
	}

	/**
	 * booleanPrimary < ANY query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static lessThanAny(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(
			booleanPrimary,
			ComparisonOperator.Less,
			query
		);
	}

	/**
	 * booleanPrimary <= ANY query
	 * @param booleanPrimary
	 * @param query
	 * @returns
	 */
	static lessOrEqualToAny(
		booleanPrimary: BooleanPrimary,
		query: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(
			booleanPrimary,
			ComparisonOperator.LessOrEqual,
			query
		);
	}
}
