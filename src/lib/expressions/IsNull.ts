import BooleanPrimary from "../BooleanPrimary";

export default class IsNull extends BooleanPrimary {
	private a: BooleanPrimary;

	/**
	 * @param a
	 */
	constructor(a: BooleanPrimary) {
		super();
		this.a = a;
	}
}
