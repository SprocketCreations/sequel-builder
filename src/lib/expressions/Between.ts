import BitExpression from "../BitExpression";
import Predicate from "../Predicate";

export default class Between extends Predicate {
	private a: BitExpression;
	private b: BitExpression;
	private and: Predicate;

	/**
	 * @param a 
	 * @param b 
	 * @param and 
	 */
	constructor(a: BitExpression, b: BitExpression, and: Predicate) {
		super();
		this.a = a;
		this.b = b;
		this.and = and;
	}
}