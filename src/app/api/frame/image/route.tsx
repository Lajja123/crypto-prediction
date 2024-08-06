import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: NextRequest) {
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
        }}
      >
        Crypto Prediction
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}