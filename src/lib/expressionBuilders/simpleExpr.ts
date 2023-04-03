import expressionTypes from "../expressionTypes";
import { SimpleExpression } from "../expressionInterfaces";
import Query from "./Query";

export default abstract class simpleExpr {
	/**
	 * @param a
	 */
	static date(a: string): SimpleExpression {
		return new expressionTypes.DateLiteral(a);
	}

	/**
	 * @param time
	 */
	static time(time: string): SimpleExpression {
		return new expressionTypes.TimeLiteral(time);
	}

	/**
	 * @param timestamp
	 */
	static timestamp(timestamp: string): SimpleExpression {
		return new expressionTypes.TimestampDateLiteral(timestamp);
	}

	/**
	 * @param a
	 */
	static hexidecimal(a: string): SimpleExpression {
		return new expressionTypes.HexidecimalLiteral(a);
	}

	/**
	 * @param a
	 */
	static binary(a: string): SimpleExpression {
		return new expressionTypes.BinaryLiteral(a);
	}

	//Identifiers
	//https://dev.mysql.com/doc/refman/8.0/en/identifiers.html
	static identifier(a: expressionTypes.Identifier): SimpleExpression {
		return new expressionTypes.Identifier(a);
	}

	/**
	 * @param a
	 */
	static function(
		identifier: expressionTypes.Identifier,
		...a: Expression[]
	): SimpleExpression {
		return new expressionTypes.Function(identifier, ...a);
	}

	/**
	 * @param a
	 */
	static collate(a: SimpleExpression, collationName: string): SimpleExpression {
		return new expressionTypes.Collate(a, collationName);
	}

	/**
	 * @param a
	 */
	static collate(a: SimpleExpression, collationName: string): SimpleExpression {
		return new expressionTypes.Collate(a, collationName);
	}

	/**
	 * @param a
	 */
	static parameterMarker(): SimpleExpression {
		return new expressionTypes.ParameterMarker();
	}

	/**
	 * @param a
	 */
	static collate(a: SimpleExpression, collationName: string): SimpleExpression {
		return new expressionTypes.Collate(a, collationName);
	}

	/**
	 * @param a
	 */
	static variable(a: UserVariable): SimpleExpression;

	/**
	 * @param a
	 */
	static variable(a: GlobalVariable): SimpleExpression;

	/**
	 * @param a
	 */
	static variable(a: LocalVariable): SimpleExpression;

	/**
	 * @param a
	 */
	static variable(a: Parameter): SimpleExpression;

	static variable(a: any): SimpleExpression {
		switch (true) {
			case a instanceof UserVariable:
				return new expressionTypes.UserVariable(a);
			case a instanceof GlobalVariable:
				return new expressionTypes.GlobalVariable(a);
			case a instanceof LocalVariable:
				return new expressionTypes.LocalVariable(a);
			case a instanceof Parameter:
				return new expressionTypes.Parameter(a);
			default:
				throw "this should be unreachable";
		}
	}

	// Or again. Maybe ill just move the one or to here

	/**
	 * + simple_expr
	 * @param a
	 */
	static positive(a: SimpleExpression): SimpleExpression {
		return new expressionTypes.Positive(a);
	}

	/**
	 * - simple_expr
	 * @param a
	 */
	static negative(a: SimpleExpression): SimpleExpression {
		return new expressionTypes.Negative(a);
	}

	/**
	 * ~ simple_expr
	 * @param a
	 */
	static bitNot(a: SimpleExpression): SimpleExpression {
		return new Expression.BitNot(a);
	}

	/**
	 * ! simple_expr
	 * @param a
	 */
	static not(a: SimpleExpression): SimpleExpression {
		return new expressionTypes.Not(a);
	}

	/**
	 * @param a
	 */
	static binary(a: SimpleExpression): SimpleExpression {
		return new expressionTypes.Binary(a);
	}

	/**
	 * (expr [, expr] ...)
	 * what?
	 * @param a
	 */
	// static uhhh(...a: Expression[]): SimpleExpression {
	// 	return new Expressions.Uhhh(a);
	// }

	/**
	 * ROW (expr [, expr] ...)
	 * @param a
	 */
	static row(...a: Expression[]): SimpleExpression {
		return new expressionTypes.Row(...a);
	}

	/**
	 * (subquery)
	 * I need to rethink this whole thing...
	 * @param a
	 */
	static subQuery(a: Query): SimpleExpression {
		return new expressionTypes.SubQuery(a);
	}

	/**
	 * EXISTS (subquery)
	 * @param a
	 */
	static exists(a: Query): SimpleExpression {
		return new expressionTypes.Exists(a);
	}

	/**
	 * {identifier expr}
	 * @param a
	 */
	static odbc(a: Expression): SimpleExpression {
		return new expressionTypes.ODCB(a);
	}

	/**
	 * match_expr
	 * @link
	 * https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html
	 * @param columns The columns to be searched.
	 * @param against The string to search for.
	 */
	static match(
		columns: Column[],
		against: Expression,
		mod?: MatchModifier
	): SimpleExpression {
		return new expressionTypes.Match(a, against, mod);
	}

	/**
	 * case_expr
	 * @link
	 * https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#operator_case
	 * @param a
	 */
	static case(a: Expression): SimpleExpression {
		return new expressionTypes.Case(a);
	}

	/**
	 * interval_expr
	 * @param a
	 */
	static interval(a: Interval): SimpleExpression {
		return new expressionTypes.Interval(a);
	}
}
