import BitExpression from "../BitExpression";
import Predicate from "../Predicate";

export default class NotRegexExpression extends Predicate {
	private a: BitExpression;
	private b: BitExpression;

	/**
	 * @param a
	 * @param b
	 */
	constructor(a: BitExpression, b: BitExpression) {
		super();
		this.a = a;
		this.b = b;
	}
}
