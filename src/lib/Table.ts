import Column from "./Column";
import DataType from "./DataType";

/**
 * Table is a javascript representation of a table on a MySQL database server.
 *
 * An instance of a Table represents a row from that table.
 */
export default abstract class Table {}

class User extends Table {
	id: number;
	static id = new Column("id", DataType.INTEGER);

	username: string;
	static username = new Column("name", DataType.VARCHAR);
}
