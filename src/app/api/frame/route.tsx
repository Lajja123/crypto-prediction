import { NextRequest } from "next/server";
import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit/frame";
import { ImageResponse } from "@vercel/og";
import { generateFrameMetadata } from "@/utils/generateFrameMetadata";
import FrameImage from "@/components/Frame";

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const imageResponse = new ImageResponse(
    <FrameImage text="Crypto here" />,
    {
      width: 1200,
      height: 630,
    }
  );

  const imageData = await imageResponse.arrayBuffer();
  const metadata = generateFrameMetadata(imageData);

  return new Response(metadata, {
    headers: { 'Content-Type': 'text/html' },
  });
}

export async function POST(req: NextRequest) {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body);

  if (!isValid) {
    return new Response('Invalid frame request', { status: 400 });
  }

  // Handle button click logic here if needed
  // For now, we'll just return the same frame
  return GET(req);
}