import DataType from "./DataType";

/**
 * Column is a javascript representation of a column in a table on a MySQL server.
 * @template T The javascript equivalent datatype that should be read from the field.
 */
export default class Column {
	/**
	 * The name of the represented column in the database.
	 */
	readonly name: string;

	/**
	 * The type of the represented column in the database.
	 */
	readonly type: DataType;

	/**
	 * Creates a column abstraction.
	 * @param name The name of the represented column in the database.
	 * @param type The type of the represented column in the database.
	 */
	constructor(name: string, type: DataType) {
		this.name = name;
		this.type = type;
	}
}
