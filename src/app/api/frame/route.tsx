import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit/frame";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest): Promise<NextResponse> {
  const frameRequest: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(frameRequest);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid frame request" },
      { status: 400 }
    );
  }
  const baseUrl =
    process.env.NEXT_PUBLIC_URL || "https://prediction123.vercel.app/";
  // Handle the button click
  if (message.button === 1) {
    // This is where you'd put your logic for generating a crypto prediction
    // For now, we'll just return a static message
    const prediction = "Bitcoin will reach $100,000 by the end of the year!";
    return NextResponse.json({
      frameMetadata: {
        buttons: [{ label: "Get Another Prediction" }],
        image: {
          src: `${baseUrl}/api/frame/image?prediction=${encodeURIComponent(
            prediction
          )}`,
          aspectRatio: "1.91:1",
        },
        postUrl: `${baseUrl}/api/frame`,
      },
    });
  }
  // Default response if no button was clicked or it wasn't the expected button
  return NextResponse.json({
    frameMetadata: {
      buttons: [{ label: "View Prediction" }],
      image: {
        src: `${baseUrl}/api/frame/image`,
        aspectRatio: "1.91:1",
      },
      postUrl: `${baseUrl}/api/frame`,
    },
  });
}
export async function GET(req: NextRequest): Promise<NextResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_URL || "https://1982-115-117-174-60.ngrok-free.app";
  return NextResponse.json({
    frameMetadata: {
      buttons: [{ label: "View Prediction" }],
      image: {
        src: `${baseUrl}/api/frame/image`,
        aspectRatio: "1.91:1",
      },
      postUrl: `${baseUrl}/api/frame`,
    },
  });
}