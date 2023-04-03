import ComparisonOperator from "./src/lib/ComparisonOperator";
import expr from "./src/lib/expr";
import SelectStatement from "./src/lib/SelectStatement";

const statement = new SelectStatement()
	.select()
	.all()
	.where(expr.compare(5, ComparisonOperator.Equal, 7));
console.log(statement.evaluate());
