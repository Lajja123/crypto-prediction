import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Welcome to my Farcaster Frame!";

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
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}