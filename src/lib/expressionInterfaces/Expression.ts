import { BooleanPrimary } from "./BooleanPrimary";

export interface ExpressionType {}

export type Expression = ExpressionType | BooleanPrimary;
