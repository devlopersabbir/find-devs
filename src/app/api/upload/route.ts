import { writeFileSync } from "fs";
import { mkdir } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) return NextResponse.json({ success: false });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const outPath = path.resolve("public", "profiles", file.name);
  if (!outPath)
    mkdir("public/profile", {
      recursive: true,
    });
  await writeFileSync(outPath, buffer);

  return NextResponse.json({ success: true, url: `/profiles/${file.name}` });
}
