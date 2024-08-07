import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  // Extract the route parameter from the URL
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  // Use the id to generate unique content
  const text = id ? `Crypto prediction #${id}` : 'Welcome to ';

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 40,
          color: "white",
          background: "#000",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{text}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}