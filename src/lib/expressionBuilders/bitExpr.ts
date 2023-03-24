import * as Expressions from "./expressions";
import Interval from "./Interval";

export default abstract class bitExpr extends simpleExpr {
	/**
	 * a | b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitOr(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.BitOr(bitExpr1, bitExpr2);
	}

	/**
	 * a & b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitAnd(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.BitAnd(bitExpr1, bitExpr2);
	}

	/**
	 * a ^ b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitXor(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.BitXor(bitExpr1, bitExpr2);
	}

	/**
	 * a << b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitShiftLeft(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.BitShiftLeft(bitExpr1, bitExpr2);
	}

	/**
	 * a >> b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitShiftRight(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.BitShiftRight(bitExpr1, bitExpr2);
	}

	/**
	 * a + b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static sum(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression;

	/**
	 * a + b
	 * @param bitExpr1
	 * @param interval
	 * @returns
	 */
	static sum(bitExpr1: BitExpression, interval: Interval): BitExpression;

	/** Implementation */
	static sum(
		bitExpr: BitExpression,
		bitExprOrInterval: Interval
	): BitExpression {
		if (bitExprOrInterval instanceof BitExpression) {
			return new Expressions.SumExpression(bitExpr, bitExprOrInterval);
		} else {
			return new Expressions.SumInterval(bitExpr, bitExprOrInterval);
		}
	}

	/**
	 * a - b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static difference(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression;

	/**
	 * a - b
	 * @param bitExpr
	 * @param interval
	 * @returns
	 */
	static difference(bitExpr: BitExpression, bitExpr: Interval): BitExpression;

	/** Implementation */
	static difference(
		bitExpr: BitExpression,
		bitExprOrInterval: Interval
	): BitExpression {
		if (bitExprOrInterval instanceof BitExpression) {
			return new Expressions.DifferenceExpression(bitExpr, bitExprOrInterval);
		} else {
			return new Expressions.DifferenceInterval(bitExpr, bitExprOrInterval);
		}
	}

	/**
	 * a * b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static product(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.Product(bitExpr1, bitExpr2);
	}

	/**
	 * a / b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static quotient(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): BitExpression {
		return new Expressions.Quotient(bitExpr1, bitExpr2);
	}

	/**
	 * a % b
	 * @param bitExpr1
	 * @param bitExpr1
	 * @returns
	 */
	static mod(bitExpr1: BitExpression, bitExpr1: BitExpression): BitExpression {
		return new Expressions.Mod(bitExpr1, bitExpr1);
	}
}
