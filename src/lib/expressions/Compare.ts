import BooleanPrimary from "../BooleanPrimary";
import ComparisonOperator from "../ComparisonOperator";
import Predicate from "../Predicate";

export default class Compare extends BooleanPrimary {
	private a: BooleanPrimary;
	private operator: ComparisonOperator;
	private b: Predicate;

	/**
	 * @param a
	 * @param operator
	 * @param b
	 */
	constructor(a: BooleanPrimary, operator: ComparisonOperator, b: Predicate) {
		super();
		this.a = a;
		this.operator = operator;
		this.b = b;
	}
}
