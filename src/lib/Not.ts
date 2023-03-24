/**
 * Many of the expressions in mySQL can be inverted.
 * This wrapper is for that purpose.
 *
 * @example
 * const notRegex = new Not<RegExp>(/FailCondition/);
 */
export default class Not<T> {
	private val: T;

	/**
	 * @param val An expression that should be considered inverted by mySQL.
	 */
	constructor(val: T) {
		this.val = val;
	}

	/**
	 * @returns the value that should be inverted.
	 */
	public getNot(): T {
		return this.val;
	}
}
