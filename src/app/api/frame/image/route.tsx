import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          3000
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Failed to generate the image: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}