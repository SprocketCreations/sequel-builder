import expr from "./expr";

export default class Query {}

Table.select().all().where(expr.and(a, b));
