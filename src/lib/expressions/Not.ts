import Expression from "../Expression";

export default class Not extends Expression {
	private a: Expression;
	private b: Expression;

	/**
	 * @param a
	 * @param b
	 */
	constructor(a: Expression, b: Expression) {
		super();
		this.a = a;
		this.b = b;
	}
};