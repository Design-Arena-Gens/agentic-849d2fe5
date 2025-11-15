import { NextResponse } from "next/server";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(3),
  date: z.string().min(4),
  time: z.string().min(2),
  notes: z.string().optional()
});

export async function POST(request: Request) {
  const body = await request.json();

  const parseResult = appointmentSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: "Invalid booking details", issues: parseResult.error.flatten() },
      { status: 400 }
    );
  }

  const confirmationCode = `LUX-${Math.random().toString(36).toUpperCase().slice(2, 8)}`;

  return NextResponse.json({ confirmationCode }, { status: 201 });
}
