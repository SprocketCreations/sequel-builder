export interface SimpleExpressionContainer {}

/**
 * A simple expression can be a diverse number of different things.
 */
export type SimpleExpression =
	| SimpleExpressionContainer
	| string
	| number
	| boolean
	| null
	| Date;
//	| Identifier;
