import { profiles } from '@/data/profiles';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(profiles);
}