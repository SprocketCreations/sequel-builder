import ComparisonOperator from "./ComparisonOperator";
import Predicate from "./Predicate";
import Query from "./Query";
import * as Expressions from "./expressions";
import Expression from "./Expression";

export default class BooleanPrimary extends Expression {
	/**
	 * Checks a boolean for null.
	 * @param a 
	 * @returns 
	 */	
	static isNull(a: BooleanPrimary): BooleanPrimary {
		return new Expressions.IsNull(a);
	};

	/**
	 * Checks a boolean for not null.
	 * @param a 
	 * @returns 
	 */	
	static isNotNull(a: BooleanPrimary): BooleanPrimary {
		return new Expressions.IsNotNull(a);
	};

	/**
	 * Checks a boolean against a predicate.
	 * @param a 
	 * @param b 
	 * @returns 
	 */
	static spaceship(a: BooleanPrimary, b: Predicate): BooleanPrimary {
		return new Expressions.Spaceship(a, b);
	};

	/**
	 * Compares a boolean to a predicate.
	 * @param a 
	 * @param operator 
	 * @param b 
	 * @returns 
	 */
	static compare(a: BooleanPrimary, operator: ComparisonOperator, b: Predicate): BooleanPrimary {
		return new Expressions.Compare(a, operator, b);
	};

	/**
	 * Compares a boolean to a predicate.
	 * @param a 
	 * @param operator 
	 * @param subquery 
	 * @returns 
	 */
	static compareAll(a: BooleanPrimary, operator: ComparisonOperator, subquery: Query): BooleanPrimary {
		return new Expressions.CompareAll(a, operator, subquery);
	};

	/**
	 * Compares a boolean to a predicate.
	 * @param a 
	 * @param operator 
	 * @param subquery 
	 * @returns 
	 */
	static compareAny(a: BooleanPrimary, operator: ComparisonOperator, subquery: Query): BooleanPrimary {
		return new Expressions.CompareAny(a, operator, subquery);
	};
}