// TODO: This is not all the types.
// TODO: Some of these types take arguments and need to be made functions. (eg: VARCHAR)
enum DataType {
	// EXACT NUMERIC TYPES
	INTEGER,
	SMALLINT,
	DECIMAL,
	NUMERIC,
	// APPROXIMATE NUMERIC TYPES
	FLOAT,
	DOUBLE,
	BIT,
	// TEMPORAL TYPES
	DATE,
	TIME,
	DATETIME,
	TIMESTAMP,
	YEAR,
	// STRING TYPES
	CHAR,
	VARCHAR,
	BINARY,
	VARBINARY,
	BLOB,
	TEXT,
	ENUM,
	SET,
}

export default DataType;
