import {
    integer,
    pgTable,
    serial,
    text,
    varchar,
} from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";

import { migrate } from 'drizzle-orm/node-postgres/migrator';


import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";

export const carts = pgTable("carts", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 }).notNull(),
    price: integer("price").notNull(),
    imgSrc: text("imgSrc").notNull(),
});

export type Order = InferModel<typeof carts>;
export type NewOrder = InferModel<typeof carts, "insert">;

export const db = drizzle(sql);


migrate(db, { migrationsFolder: './drizzle' });
