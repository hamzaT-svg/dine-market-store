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
    try {
        const { items }: { items: NewOrder[]; } = await request.json();
        // console.log(items);
        await db.insert(orders).values(items);
        return NextResponse.json({ message: "Data added successfully" });
    } catch (error) {
        console.log(error);
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

