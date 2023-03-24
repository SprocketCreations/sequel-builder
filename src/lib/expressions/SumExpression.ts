import BitExpression from "../BitExpression";

export default class SumExpression extends BitExpression {
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
