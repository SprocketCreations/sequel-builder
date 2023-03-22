import BooleanPrimary from "../BooleanPrimary";
import Predicate from "../Predicate";

export default class Spaceship extends BooleanPrimary {
	private a: BooleanPrimary;
	private b: Predicate;

	/**
	 * @param a 
	 * @param b 
	 */
	constructor(a: BooleanPrimary, b: Predicate) {
		super();
		this.a = a;
		this.b = b;
	}
}