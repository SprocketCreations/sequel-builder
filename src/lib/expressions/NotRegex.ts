import BitExpression from "../BitExpression";
import Predicate from "../Predicate";

export default class NotRegex extends Predicate {
	private a: BitExpression;
	private regex: RegExp;

	/**
	 * @param a 
	 * @param regex 
	 */
	constructor(a: BitExpression, regex: RegExp) {
		super();
		this.a = a;
		this.regex = regex;
	}
}