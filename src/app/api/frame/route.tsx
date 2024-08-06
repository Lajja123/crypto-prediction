import { NextRequest, NextResponse } from "next/server";
import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from "@coinbase/onchainkit/frame";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: process.env.NEYNAR_API_KEY });
  
  if (!isValid) {
    return new NextResponse('Invalid frame request', { status: 400 });
  }

  const imageUrl = `${req.nextUrl.origin}/api/frame/image`;
  return new NextResponse(
    getFrameHtmlResponse({
      image: imageUrl,
      post_url: `${req.nextUrl.origin}/api/frame`,
      buttons: [
        {
          label: 'Cast',
        },
      ],
    })
  );
}

export async function GET(req: NextRequest) {
  const imageUrl = `${req.nextUrl.origin}/api/frame/image`;
  return new NextResponse(
    getFrameHtmlResponse({
      image: imageUrl,
      post_url: `${req.nextUrl.origin}/api/frame`,
      buttons: [
        {
          label: 'View Cast',
        },
      ],
    })
  );
}