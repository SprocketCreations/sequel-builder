import * as Expressions from "./expressions";

export default class Expression {
	/**
	 * Returns true if either a or b are true.
	 * @param a
	 * @param b
	 * @returns
	 */
	static or(a: Expression, b: Expression): Expression {
		return new Expressions.Or(a, b);
	}

	/**
	 * Returns true if only a or only b is true.
	 * @param a
	 * @param b
	 * @returns
	 */
	static xor(a: Expression, b: Expression): Expression {
		return new Expressions.Xor(a, b);
	}

	/**
	 * Returns true if a and b is true.
	 * @param a
	 * @param b
	 * @returns
	 */
	static and(a: Expression, b: Expression): Expression {
		return new Expressions.And(a, b);
	}

	/**
	 * Returns true if a is false.
	 * @param a
	 * @param b
	 * @returns
	 */
	static not(a: Expression, b: Expression): Expression {
		return new Expressions.Not(a, b);
	}

	/**
	 * Returns true if a matches b.
	 * @param a
	 * @param b
	 * @returns
	 */
	static is(a: Expression, b: boolean): Expression {
		return new Expressions.Is(a, b);
	}

	/**
	 * Returns true if a does not match b.
	 * @param a
	 * @param b
	 * @returns
	 */
	static isNot(a: Expression, b: boolean): Expression {
		return new Expressions.IsNot(a, b);
	}

	/**
	 * Returns true if a is unknown. Unknown can result from tryin to perform operations on null.
	 * @param a
	 * @returns
	 */
	static isUnknown(a: Expression): Expression {
		return new Expressions.IsUnknown(a);
	}

	/**
	 * Returns true if a is not unknown. Unknown can result from tryin to perform operations on null.
	 * @param a
	 * @returns
	 */
	static isNotUnknown(a: Expression): Expression {
		return new Expressions.IsNotUnknown(a);
	}
}
