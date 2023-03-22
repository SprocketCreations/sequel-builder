import * as Expressions from "./expressions";
import Predicate from "./Predicate";
import Interval from "./Interval";

export default class BitExpression extends Predicate {
	/**
	 * a | b
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static bitOr(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.BitOr(a, b);
	};

	/**
	 * a & b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static bitAnd(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.BitAnd(a, b);
	};

	/**
	 * a ^ b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static bitXor(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.BitXor(a, b);
	};

	/**
	 * a << b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static bitShiftLeft(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.BitShiftLeft(a, b);
	};

	/**
	 * a >> b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static bitShiftRight(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.BitShiftRight(a, b);
	};

	/**
	 * a + b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static sum(a: BitExpression, b: BitExpression): BitExpression;

	/**
	 * a + b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static sum(a: BitExpression, b: Interval): BitExpression;

	/** Implementation */
	static sum(a: BitExpression, b: Interval): BitExpression {
		if (b instanceof BitExpression) {
			return new Expressions.SumExpression(a, b);
		} else {
			return new Expressions.SumInterval(a, b);
		}
	};

	/**
	 * a - b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static difference(a: BitExpression, b: BitExpression): BitExpression;

	/**
	 * a - b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static difference(a: BitExpression, b: Interval): BitExpression;

	/** Implementation */
	static difference(a: BitExpression, b: Interval): BitExpression {
		if (b instanceof BitExpression) {
			return new Expressions.DifferenceExpression(a, b);
		} else {
			return new Expressions.DifferenceInterval(a, b);
		}
	};

	/**
	 * a * b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static product(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.Product(a, b);
	};

	/**
	 * a / b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static quotient(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.Quotient(a, b);
	};

	/**
	 * a % b
	 * @param a
	 * @param b
	 * @returns 
	*/
	static mod(a: BitExpression, b: BitExpression): BitExpression {
		return new Expressions.Mod(a, b);
	};
};