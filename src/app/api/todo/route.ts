import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

export async function GET(request: NextRequest) {

    const client = await db.connect();

    try {

        await client.sql`CREATE TABLE IF NOT EXISTS TODOS(ID serial, TASK varchar(255))`;

        return NextResponse.json({ message: "Call API" });

    } catch (err) {

        console.log(err);

        return NextResponse.json({ message: "Something Went Wrong" });

    }

};