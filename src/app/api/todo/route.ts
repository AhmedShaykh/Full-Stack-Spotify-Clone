import { NextRequest, NextResponse } from "next/server";
import { QueryResult, db } from '@vercel/postgres';

export async function GET(request: NextRequest) {

    const client = await db.connect();

    try {

        await client.sql`CREATE TABLE IF NOT EXISTS TODOS(ID serial, TASK varchar(255))`;

        const res: QueryResult = await client.sql`SELECT * FROM TODOS`;

        console.log(res.rows.find(item => item.id === 4));

        return NextResponse.json({ response: res });

    } catch (err) {

        console.log(err);

        return NextResponse.json({ message: "Something Went Wrong" });

    }

};

export async function POST(request: NextRequest) {

    const client = await db.connect();

    const reqData = await request.json();

    try {

        if (reqData.TASK) {

            const res: QueryResult = await client.sql`INSERT INTO Todos(Task) VALUES(${reqData.TASK})`;

            console.log(res);

            return NextResponse.json({ message: "Data Added SuccessFully" });

        }
        else {

            throw new Error("Task Field is Required!");

        }

    } catch (error) {

        return NextResponse.json(
            { message: (error as { message: string }).message }
        );

    }
};