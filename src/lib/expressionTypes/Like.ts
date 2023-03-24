import BitExpression from "../BitExpression";
import Predicate from "../Predicate";
import SimpleExpression from "../SimpleExpression";

export default class Like extends Predicate {
	private a: BitExpression;
	private b: SimpleExpression;
	private escape?: SimpleExpression;

	/**
	 * @param a
	 * @param b
	 * @param escape
	 */
	constructor(
		a: BitExpression,
		b: SimpleExpression,
		escape?: SimpleExpression
	) {
		super();
		this.a = a;
		this.b = b;
		this.escape = escape;
	}
}
