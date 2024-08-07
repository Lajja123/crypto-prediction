import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const prediction = searchParams.get("prediction");

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
        <div>Crypto prediction </div>
        {prediction && (
          <div style={{ fontSize: 24, marginTop: "20px" }}>{prediction}</div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
