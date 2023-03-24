import Expression from "../Expression";

export default class IsNotUnknown extends Expression {
	private a: Expression;

	/**
	 * @param a
	 */
	constructor(a: Expression) {
		super();
		this.a = a;
	}
}
