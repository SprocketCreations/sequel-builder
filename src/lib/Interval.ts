export default class Interval {
	private expression: Expression;
	private unit: IntervalUnit;

	constructor(expression: Expression, unit: IntervalUnit) {
		this.expression = expression;
		this.unit = unit;
	}
}
