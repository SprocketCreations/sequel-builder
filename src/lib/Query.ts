import Expression from "./Expression";

export default class Query {}

Table.select().all().where(Expression.and(a, b));
