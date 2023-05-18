import {
    pgTable,
    serial,
    varchar
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const todosTable = pgTable("Todos", {
    id: serial("ID").primaryKey(),
    task: varchar("TASK", {
        length: 255
    }).notNull()
});

export type Todos = InferModel<typeof todosTable>;

export type NewTodos = InferModel<typeof todosTable, "insert">; // Insert Type

export const db = drizzle(sql);