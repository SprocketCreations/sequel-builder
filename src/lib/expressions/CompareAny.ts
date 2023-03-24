import BooleanPrimary from "../BooleanPrimary";
import ComparisonOperator from "../ComparisonOperator";
import Query from "../Query";

export default class CompareAny extends BooleanPrimary {
	private a: BooleanPrimary;
	private operator: ComparisonOperator;
	private subquery: Query;

	/**
	 * @param a
	 * @param operator
	 * @param subquery
	 */
	constructor(
		a: BooleanPrimary,
		operator: ComparisonOperator,
		subquery: Query
	) {
		super();
		this.a = a;
		this.operator = operator;
		this.subquery = subquery;
	}
}
