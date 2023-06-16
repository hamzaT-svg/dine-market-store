import {
    integer,
    pgTable,
    text,
    varchar,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

import { sql } from "@vercel/postgres";
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle } from "drizzle-orm/vercel-postgres";

export const orders = pgTable("orders", {
    id: text("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).notNull(),
    price: integer("price").notNull(),
    imgSrc: text("imgSrc").notNull(),
});

export type Order = InferModel<typeof orders>;
export type NewOrder = InferModel<typeof orders, "insert">;

export const db = drizzle(sql);


migrate(db, { migrationsFolder: './drizzle' });
