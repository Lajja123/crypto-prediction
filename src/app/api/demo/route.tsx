import { NextRequest, NextResponse } from "next/server";



// Make sure to replace this with your actual base URL
const BASE_URL = "https://prediction123.vercel.app";

export async function POST(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({
    frameMetadata: {
      image: {
        src: `${BASE_URL}/api/demo/image`,
        aspectRatio: "1.91:1",
      },
    },
  });
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({
    frameMetadata: {
      image: {
        src: `${BASE_URL}/api/demo/image`,
        aspectRatio: "1.91:1",
      },
    },
  });
}