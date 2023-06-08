import { NewOrder, carts, db, } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    try {
        const orders = await db.select().from(carts);
        if (orders) {
            return NextResponse.json({ message: "Success", orders });
        }
    } catch (error) {
        return NextResponse.json({ message: (error as { message: string; }).message });
    }
}


export async function POST(request: NextRequest) {
    const body: NewOrder = await request.json();
    const { name, type, price, imgSrc } = body;
    try {
        if (name && type && price && imgSrc) {
            const order = await db.insert(carts).values({
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
        await db.delete(carts);
        return NextResponse.json({ message: "Success" });

    } catch (error) {
        return NextResponse.json({ message: (error as { message: string; }).message });
    }
}

