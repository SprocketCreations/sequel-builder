import BitExpression from "../BitExpression";
import Expression from "../Expression";
import Predicate from "../Predicate";

export default class InExpression extends Predicate {
	private a: BitExpression;
	private b: Expression;

	/**
	 * @param a
	 * @param b
	 */
	constructor(a: BitExpression, b: Expression) {
		super();
		this.a = a;
		this.b = b;
	}
}
