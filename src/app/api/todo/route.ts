import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

export async function GET(request: NextRequest) {

    const client = await db.connect();

    try {

    } catch (error) {

        return NextResponse.json({ error }, {
            status: 500,
        });

    }
    return NextResponse.json({ message: "Call API" });
};