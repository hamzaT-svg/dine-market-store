import { NewOrder, orders, db, } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const orderss = await db.select().from(orders);
        if (orderss) {
            return NextResponse.json({ message: "Success", orderss });
        }
    } catch (error) {
        return NextResponse.json({ message: error });
    }
}


export async function POST(request: NextRequest) {
    const body: NewOrder = await request.json();
    const { id, name, type, price, imgSrc } = body;
    try {
        if (name && type && price && imgSrc) {
            const order = await db.insert(orders).values({
                id,
                name,
                type,
                price,
                imgSrc
            }).returning();
            return NextResponse.json({ message: "Data added successfully", order });
        } else {
            throw new Error("All fields are required");

        }
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string; }).message });
    }
}



export async function DELETE() {
    try {
        await db.delete(orders);
        return NextResponse.json({ message: "Success" });

    } catch (error) {
        return NextResponse.json({ message: (error as { message: string; }).message });
    }
}

