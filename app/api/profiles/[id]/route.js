import { profiles } from '@/data/profiles';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  // 1. Await params (Required in Next.js 15)
  const resolvedParams = await params; 
  const id = resolvedParams.id;

  // 2. Find the profile (Ensuring ID types match)
  const profile = profiles.find((p) => p.id === String(id));

  if (!profile) {
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  }

  return NextResponse.json(profile);
}