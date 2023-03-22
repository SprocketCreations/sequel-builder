import BitExpression from "../BitExpression";
import Predicate from "../Predicate";
import Query from "../Query";

export default class InQuery extends Predicate {
	private a: BitExpression;
	private b: Query;

	/**
	 * @param a 
	 * @param b 
	 */
	constructor(a: BitExpression, b: Query) {
		super();
		this.a = a;
		this.b = b;
	}
}