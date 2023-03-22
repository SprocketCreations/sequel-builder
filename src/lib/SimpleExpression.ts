import BitExpression from "./BitExpression";
import Expression from "./Expression";
import * as Expressions from "./expressions";
import Query from "./Query";

export default class SimpleExpression extends BitExpression {
	/**
	 * @param a 
	 */
	static literal(a: string): SimpleExpression;

	/**
	 * @param a 
	 */
	static literal(a: number): SimpleExpression;

	/**
	 * @param a 
	 */
	static literal(a: boolean): SimpleExpression;

	/**
	 * @param a 
	 */
	static literal(a: null): SimpleExpression;

	/** Implementation */
	static literal(a: any): SimpleExpression {
		switch (true) {
			case (typeof a == "string"): return new Expressions.StringLiteral(a);
			case (typeof a == "number"): return new Expressions.NumberLiteral(a);
			case (typeof a == "boolean"): return new Expressions.BooleanLiteral(a);
			case (a == null): return new Expressions.NullLiteral();
			default: throw "this should be unreachable";
		};
	}

	/**
	 * @param a 
	 */
	static date(a: string): SimpleExpression {
		return new Expressions.DateLiteral(a);
	}

	/**
	 * @param a 
	 */
	static time(a: string): SimpleExpression {
		return new Expressions.TimeLiteral(a);
	}

	/**
	 * @param a 
	 */
	static timestamp(a: string): SimpleExpression;

	/**
	 * @param a 
	 */
	static timestamp(a: Date): SimpleExpression;

	/** Implementation */
	static timestamp(a: Date): SimpleExpression {
		if (a instanceof Date) {
			return new Expressions.TimestampLiteral(a);
		} else {
			return new Expressions.TimestampDateLiteral(a);
		}
	}

	/**
	 * @param a 
	 */
	static hexidecimal(a: string): SimpleExpression {
		return new Expressions.HexidecimalLiteral(a);
	}

	/**
	 * @param a 
	 */
	static binary(a: string): SimpleExpression {
		return new Expressions.BinaryLiteral(a);
	}

	//Identifiers
	//https://dev.mysql.com/doc/refman/8.0/en/identifiers.html
	static identifier(a: Expressions.Identifier): SimpleExpression {
		return new Expressions.Identifier(a);
	}

	/**
	 * @param a 
	 */
	static function(identifier: Expressions.Identifier, ...a: Expression[]): SimpleExpression {
		return new Expressions.Function(identifier, ...a);
	}

	/**
	 * @param a 
	 */
	static collate(a: SimpleExpression, collationName: string): SimpleExpression {
		return new Expressions.Collate(a, collationName);
	}

	/**
	 * @param a 
	 */
	static collate(a: SimpleExpression, collationName: string): SimpleExpression {
		return new Expressions.Collate(a, collationName);
	}

	/**
	 * @param a 
	 */
	static parameterMarker(): SimpleExpression {
		return new Expressions.ParameterMarker();
	}

	/**
	 * @param a 
	 */
	static collate(a: SimpleExpression, collationName: string): SimpleExpression {
		return new Expressions.Collate(a, collationName);
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
			case (a instanceof UserVariable): return new Expressions.UserVariable(a);
			case (a instanceof GlobalVariable): return new Expressions.GlobalVariable(a);
			case (a instanceof LocalVariable): return new Expressions.LocalVariable(a);
			case (a instanceof Parameter): return new Expressions.Parameter(a);
			default: throw "this should be unreachable";
		};
	}

	// Or again. Maybe ill just move the one or to here

	/**
	 * + simple_expr
	 * @param a 
	 */
	static positive(a: SimpleExpression): SimpleExpression {
		return new Expressions.Positive(a);
	}

	/**
	 * - simple_expr
	 * @param a 
	 */
	static negative(a: SimpleExpression): SimpleExpression {
		return new Expressions.Negative(a);
	}

	/**
	 * ~ simple_expr
	 * @param a 
	 */
	static bitNot(a: SimpleExpression): SimpleExpression {

	}

	/**
	 * ! simple_expr
	 * @param a 
	 */
	static not(a: SimpleExpression): SimpleExpression {
		return new Expressions.Not(a);
	}

	/**
	 * @param a 
	 */
	static binary(a: SimpleExpression): SimpleExpression {
		return new Expressions.Binary(a);
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
		return new Expressions.Row(...a);
	}

	/**
	 * (subquery)
	 * I need to rethink this whole thing...
	 * @param a 
	 */
	static subQuery(a: Query): SimpleExpression {
		return new Expressions.SubQuery(a);
	}

	/**
	 * EXISTS (subquery)
	 * @param a 
	 */
	static exists(a: Query): SimpleExpression {
		return new Expressions.Exists(a);
	}

	/**
	 * {identifier expr}
	 * @param a 
	 */
	static odbc(a: Expression): SimpleExpression {
		return new Expressions.ODCB(a);
	}

	/**
	 * match_expr
	 * @link
	 * https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html
	 * @param columns The columns to be searched.
	 * @param against The string to search for.
	 */
	static match(columns: Column[], against: Expression, mod?: MatchModifier): SimpleExpression {
		return new Expressions.Match(a, against, mod);
	}

	/**
	 * case_expr
	 * @link
	 * https://dev.mysql.com/doc/refman/8.0/en/flow-control-functions.html#operator_case
	 * @param a 
	 */
	static case(a: Expression): SimpleExpression {
		return new Expressions.Case(a);
	}

	/**
	 * interval_expr
	 * @param a 
	 */
	static interval(a: Interval): SimpleExpression {
		return new Expressions.Interval(a);
	}
};