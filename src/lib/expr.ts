import * as Expressions from "../expressionTypes";
import booleanPrimary from "./booleanPrimary";

export default abstract class expr extends booleanPrimary {
	/**
	 * Returns true if either a or b are true.
	 * @param expr1
	 * @param expr2
	 * @returns
	 */
	static or(expr1: Expression, expr2: Expression): Expression {
		return new Expressions.Or(expr1, expr2);
	}

	/**
	 * Returns true if only a or only b is true.
	 * @param expr1
	 * @param expr2
	 * @returns
	 */
	static xor(expr1: Expression, expr2: Expression): Expression {
		return new Expressions.Xor(expr1, expr2);
	}

	/**
	 * Returns true if a and b is true.
	 * @param expr1
	 * @param expr2
	 * @returns
	 */
	static and(expr1: Expression, expr2: Expression): Expression {
		return new Expressions.And(expr1, expr2);
	}

	/**
	 * Returns true if a is false.
	 * @param expr1
	 * @param expr2
	 * @returns
	 */
	static not(expr1: Expression, expr2: Expression): Expression {
		return new Expressions.Not(expr1, expr2);
	}

	/**
	 * Returns true if a matches b.
	 * @param expr1
	 * @param expr2
	 * @returns
	 */
	static is(expr1: Expression, expr2: boolean): Expression {
		return new Expressions.Is(expr1, expr2);
	}

	/**
	 * Returns true if a does not match b.
	 * @param expr
	 * @param bool
	 * @returns
	 */
	static isNot(expr: Expression, bool: boolean): Expression {
		return new Expressions.IsNot(expr, bool);
	}

	/**
	 * Returns true if a is unknown. Unknown can result from tryin to perform operations on null.
	 * @param expr
	 * @returns
	 */
	static isUnknown(expr: Expression): Expression {
		return new Expressions.IsUnknown(expr);
	}

	/**
	 * Returns true if a is not unknown. Unknown can result from tryin to perform operations on null.
	 * @param expr
	 * @returns
	 */
	static isNotUnknown(expr: Expression): Expression {
		return new Expressions.IsNotUnknown(expr);
	}
}
