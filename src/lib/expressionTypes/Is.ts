import Expression from "../Expression";

export default class Is extends Expression {
	private a: Expression;
	private b: boolean;

	/**
	 * @param a
	 * @param b
	 */
	constructor(a: Expression, b: boolean) {
		super();
		this.a = a;
		this.b = b;
	}
}
