import ComparisonOperator from "./ComparisonOperator";
import Query from "./Query";
import ExpressionTypes from "./expressionTypes";
import predicate from "./predicate";

export default abstract class booleanPrimary extends predicate {
	/**
	 * Checks a boolean for null.
	 * @param booleanPrimary
	 * @returns
	 */
	static isNull(booleanPrimary: BooleanPrimary): BooleanPrimary {
		return new ExpressionTypes.IsNull(booleanPrimary);
	}

	/**
	 * Checks a boolean for not null.
	 * @param booleanPrimary
	 * @returns
	 */
	static isNotNull(booleanPrimary: BooleanPrimary): BooleanPrimary {
		return new ExpressionTypes.IsNotNull(booleanPrimary);
	}

	/**
	 * Checks a boolean against a predicate.
	 * @param booleanPrimary
	 * @param predicate
	 * @returns
	 */
	static spaceship(
		booleanPrimary: BooleanPrimary,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Spaceship(booleanPrimary, predicate);
	}

	/**
	 * Compares a boolean to a predicate.
	 * @param booleanPrimary
	 * @param operator
	 * @param predicate
	 * @returns
	 */
	static compare(
		booleanPrimary: BooleanPrimary,
		operator: ComparisonOperator,
		predicate: Predicate
	): BooleanPrimary {
		return new ExpressionTypes.Compare(booleanPrimary, operator, predicate);
	}

	/**
	 * Compares a boolean to a predicate.
	 * @param booleanPrimary
	 * @param operator
	 * @param subquery
	 * @returns
	 */
	static compareAll(
		booleanPrimary: BooleanPrimary,
		operator: ComparisonOperator,
		subquery: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAll(booleanPrimary, operator, subquery);
	}

	/**
	 * Compares a boolean to a predicate.
	 * @param booleanPrimary
	 * @param operator
	 * @param subquery
	 * @returns
	 */
	static compareAny(
		booleanPrimary: BooleanPrimary,
		operator: ComparisonOperator,
		subquery: Query
	): BooleanPrimary {
		return new ExpressionTypes.CompareAny(booleanPrimary, operator, subquery);
	}
}
