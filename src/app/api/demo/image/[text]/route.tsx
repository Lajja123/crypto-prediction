import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  req: NextRequest,
  { params }: { params: { text: string } }
) {
  const text = params.text || "Welcome to my Farcaster Frame!";
  const decodedText = decodeURIComponent(text);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          color: "white",
          fontSize: 60,
          fontWeight: 700,
          textAlign: "center",
          padding: "0 50px",
        }}
      >
        {decodedText}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}