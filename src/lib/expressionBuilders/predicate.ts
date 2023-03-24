import * as expressionTypes from "../expressionTypes";
import Query from "../Query";
import {
	Expression,
	Predicate,
	BitExpression,
	SimpleExpression,
} from "../expressionInterfaces";
import bitExpr from "./bitExpr";
import Not from "../Not";

export default abstract class predicate extends bitExpr {
	/**
	 * @param bitExpr
	 * @param subQuery
	 * @returns
	 */
	static in(bitExpr: BitExpression, subQuery: Query): Predicate;

	/**
	 * @param bitExpr
	 * @param subExpression
	 * @returns
	 */
	static in(bitExpr: BitExpression, subExpression: Expression): Predicate;

	/** Implementation */
	static in(
		bitExpr: BitExpression,
		subExpressionOrQuery: Expression
	): Predicate {
		if (subExpressionOrQuery instanceof Query) {
			return new expressionTypes.InQuery(bitExpr, subExpressionOrQuery);
		} else {
			return new expressionTypes.InExpression(bitExpr, subExpressionOrQuery);
		}
	}

	/**
	 * @param bitExpr
	 * @param subQuery
	 * @returns
	 */
	static notIn(bitExpr: BitExpression, subQuery: Query): Predicate;

	/**
	 * @param bitExpr
	 * @param subExpression
	 * @returns
	 */
	static notIn(bitExpr: BitExpression, subExpression: Expression): Predicate;

	/** Implementation */
	static notIn(
		bitExpr: BitExpression,
		subExpressionOrQuery: Expression
	): Predicate {
		if (subExpressionOrQuery instanceof Query) {
			return new Not(
				new expressionTypes.InQuery(bitExpr, subExpressionOrQuery)
			);
		} else {
			return new Not(
				new expressionTypes.InExpression(bitExpr, subExpressionOrQuery)
			);
		}
	}

	/**
	 * @param bitExpr1
	 * @param bitExpr2
	 * @param and
	 * @returns
	 */
	static between(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression,
		and: Predicate
	): Predicate {
		return new expressionTypes.Between(bitExpr1, bitExpr2, and);
	}

	/**
	 * @param bitExpr1
	 * @param bitExpr
	 * @param and
	 * @returns
	 */
	static notBetween(
		bitExpr1: BitExpression,
		bitExpr: BitExpression,
		and: Predicate
	): Predicate {
		return new Not(new expressionTypes.Between(bitExpr1, bitExpr, and));
	}

	/**
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static soundsLike(
		bitExpr1: BitExpression,
		bitExpr2: BitExpression
	): Predicate {
		return new expressionTypes.SoundsLike(bitExpr1, bitExpr2);
	}

	/**
	 * @param bitExpr
	 * @param simpleExpr
	 * @param escapeSimpleExpr
	 * @returns
	 */
	static like(
		bitExpr: BitExpression,
		simpleExpr: SimpleExpression,
		escapeSimpleExpr?: SimpleExpression
	): Predicate {
		return new expressionTypes.Like(bitExpr, simpleExpr, escapeSimpleExpr);
	}

	/**
	 * @param bitExpr
	 * @param simpleExpr
	 * @param escapeSimpleExpr
	 * @returns
	 */
	static notLike(
		bitExpr: BitExpression,
		simpleExpr: SimpleExpression,
		escapeSimpleExpr?: SimpleExpression
	): Predicate {
		return new Not(
			new expressionTypes.Like(bitExpr, simpleExpr, escapeSimpleExpr)
		);
	}

	/**
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static regex(bitExpr1: BitExpression, bitExpr2: BitExpression): Predicate;

	/**
	 * @param bitExpr
	 * @param regExp
	 * @returns
	 */
	static regex(bitExpr: BitExpression, regExp: RegExp): Predicate;

	/** Implementation */
	static regex(bitExpr: BitExpression, bitExprOrRegExp: RegExp): Predicate {
		if (bitExprOrRegExp instanceof RegExp) {
			return new expressionTypes.Regex(bitExpr, bitExprOrRegExp);
		} else {
			return new expressionTypes.RegexExpression(bitExpr, bitExprOrRegExp);
		}
	}

	/**
	 * @param bitExpr1
	 * @param bitExpr2
	 * @returns
	 */
	static notRegex(bitExpr1: BitExpression, bitExpr2: BitExpression): Predicate;

	/**
	 * @param bitExpr
	 * @param regExp
	 * @returns
	 */
	static notRegex(bitExpr: BitExpression, regExp: RegExp): Predicate;

	/** Implementation */
	static notRegex(bitExpr: BitExpression, bitExprOrRegExp: RegExp): Predicate {
		if (bitExprOrRegExp instanceof RegExp) {
			return new Not(new expressionTypes.Regex(bitExpr, bitExprOrRegExp));
		} else {
			return new Not(
				new expressionTypes.RegexExpression(bitExpr, bitExprOrRegExp)
			);
		}
	}
}
