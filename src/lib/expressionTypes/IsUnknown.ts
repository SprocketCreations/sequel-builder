import Expression from "../Expression";

export default class IsUnknown extends Expression {
	private a: Expression;

	/**
	 * @param a
	 * @param b
	 */
	constructor(a: Expression) {
		super();
		this.a = a;
	}
}
