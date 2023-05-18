import {
    pgTable,
    serial,
    text,
    varchar,
    boolean
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const todoTable = pgTable("Todos", {
    id: serial("id").primaryKey(),
    title: text("title"),
    description: varchar("description"),
    status: boolean("status").default(true).notNull(),
});

export type Todo = InferModel<typeof todoTable>;

export type NewTodo = InferModel<typeof todoTable, "insert">; // Insert Type

export const db = drizzle(sql);