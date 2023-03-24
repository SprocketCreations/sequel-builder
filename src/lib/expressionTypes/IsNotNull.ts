import BooleanPrimary from "../BooleanPrimary";

export default class IsNotNull extends BooleanPrimary {
	private a: BooleanPrimary;

	/**
	 * @param a
	 */
	constructor(a: BooleanPrimary) {
		super();
		this.a = a;
	}
}
