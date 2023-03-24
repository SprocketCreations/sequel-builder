import * as expressionTypes from "../expressionTypes";
import { BitExpression } from "../expressionInterfaces";
import simpleExpr from "./simpleExpr";
import Interval from "../Interval";

export default abstract class bitExpr extends simpleExpr {
	/**
	 * a | b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitOr(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.BitOr(bitExpr1, bitExpr2);
	}

	/**
	 * a & b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitAnd(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.BitAnd(bitExpr1, bitExpr2);
	}

	/**
	 * a ^ b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitXor(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.BitXor(bitExpr1, bitExpr2);
	}

	/**
	 * a << b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitShiftLeft(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.BitShiftLeft(bitExpr1, bitExpr2);
	}

	/**
	 * a >> b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static bitShiftRight(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.BitShiftRight(bitExpr1, bitExpr2);
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
	static sum(bitExpr: BitExpression, bitExprOrInterval: Interval): BitExpression {
		if (bitExprOrInterval instanceof Interval) {
			return new expressionTypes.SumInterval(bitExpr, bitExprOrInterval);
		} else {
			return new expressionTypes.SumExpression(bitExpr, bitExprOrInterval);
		}
	}

	/**
	 * a - b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static difference(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression;

	/**
	 * a - b
	 * @param bitExpr
	 * @param interval
	 * @returns
	 */
	static difference(bitExpr: BitExpression, interval: Interval): BitExpression;

	/** Implementation */
	static difference(bitExpr: BitExpression, bitExprOrInterval: Interval): BitExpression {
		if (bitExprOrInterval instanceof Interval) {
			return new expressionTypes.DifferenceInterval(bitExpr, bitExprOrInterval);
		} else {
			return new expressionTypes.DifferenceExpression(bitExpr, bitExprOrInterval);
		}
	}

	/**
	 * a * b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static product(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.Product(bitExpr1, bitExpr2);
	}

	/**
	 * a / b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static quotient(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.Quotient(bitExpr1, bitExpr2);
	}

	/**
	 * a % b
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static mod(bitExpr1: BitExpression, bitExpr2: BitExpression): BitExpression {
		return new expressionTypes.Mod(bitExpr1, bitExpr2);
	}
}
