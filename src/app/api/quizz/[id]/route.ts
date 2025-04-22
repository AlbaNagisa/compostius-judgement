// 👇 Ajoute ça obligatoirement pour éviter la static optimization
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const filePath = path.join(process.cwd(), 'src', 'data', 'quizz.json');

    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        const item = data.find((entry: { id: number }) => entry.id === Number(params.id));
        console.log(item);
        if (!item) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json(item);
    } catch (err) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
