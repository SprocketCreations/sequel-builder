import * as Expressions from "./expressions";
import BitExpression from "./BitExpression";
import Query from "./Query";
import Expression from "./Expression";
import SimpleExpression from "./SimpleExpression";

export default class Predicate extends BitExpression {
	/**
	 * @param a 
	 * @param subQuery 
	 * @returns 
	 */
	static in(a: BitExpression, subQuery: Query): Predicate;

	/**
	 * @param a 
	 * @param subExpression 
	 * @returns 
	*/
	static in(a: BitExpression, subExpression: Expression): Predicate;

	/** Implementation */
	static in(a: BitExpression, subExpressionOrQuery: Expression): Predicate {
		if (subExpressionOrQuery instanceof Query) {
			return new Expressions.InQuery(a, subExpressionOrQuery);
		} else {
			return new Expressions.InExpression(a, subExpressionOrQuery);
		}
	};

	/**
	 * @param a 
	 * @param subQuery 
	 * @returns 
	 */
	static notIn(a: BitExpression, subQuery: Query): Predicate;

	/**
	 * @param a 
	 * @param subExpression 
	 * @returns 
	*/
	static notIn(a: BitExpression, subExpression: Expression): Predicate;

	/** Implementation */
	static notIn(a: BitExpression, subExpressionOrQuery: Expression): Predicate {
		if (subExpressionOrQuery instanceof Query) {
			return new Expressions.NotInQuery(a, subExpressionOrQuery);
		} else {
			return new Expressions.NotInExpression(a, subExpressionOrQuery);
		}
	};

	/**
	 * @param a 
	 * @param b 
	 * @param and 
	 * @returns 
	 */
	static between(a: BitExpression, b: BitExpression, and: Predicate): Predicate {
		return new Expressions.Between(a, b, and);
	};

	/**
	 * @param a 
	 * @param b 
	 * @param and 
	 * @returns 
	 */
	static notBetween(a: BitExpression, b: BitExpression, and: Predicate): Predicate {
		return new Expressions.NotBetween(a, b, and);
	};

	/**
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static soundsLike(a: BitExpression, b: BitExpression): Predicate {
		return new Expressions.SoundsLike(a, b);
	};

	/**
	 * @param a 
	 * @param b 
	 * @param escape 
	 * @returns 
	 */
	static like(a: BitExpression, b: SimpleExpression, escape?: SimpleExpression): Predicate {
		return new Expressions.Like(a, b, escape);
	};

	/**
	 * @param a 
	 * @param b 
	 * @param escape 
	 * @returns 
	 */
	static notLike(a: BitExpression, b: SimpleExpression, escape?: SimpleExpression): Predicate {
		return new Expressions.NotLike(a, b, escape);
	};

	/**
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static regex(a: BitExpression, b: BitExpression): Predicate;

	/**
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static regex(a: BitExpression, b: RegExp): Predicate;

	/** Implementation */
	static regex(a: BitExpression, b: RegExp): Predicate {
		if (b instanceof BitExpression) {
			return new Expressions.RegexExpression(a, b);
		} else {
			return new Expressions.Regex(a, b);
		}
	};

	/**
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static notRegex(a: BitExpression, b: BitExpression): Predicate;

	/**
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static notRegex(a: BitExpression, b: RegExp): Predicate;

	/** Implementation */
	static notRegex(a: BitExpression, b: RegExp): Predicate {
		if (b instanceof BitExpression) {
			return new Expressions.NotRegexExpression(a, b);
		} else {
			return new Expressions.NotRegex(a, b);
		}
	};
};