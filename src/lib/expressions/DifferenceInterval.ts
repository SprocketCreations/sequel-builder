import BitExpression from "../BitExpression";
import Interval from "../Interval";

export default class DifferenceInterval extends BitExpression {
	private a: BitExpression;
	private b: Interval;

	/**
	 * @param a
	 * @param b
	 */
	constructor(a: BitExpression, b: Interval) {
		super();
		this.a = a;
		this.b = b;
	}
};