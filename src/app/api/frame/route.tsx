import { NextRequest, NextResponse } from "next/server";
import { getFrameHtmlResponse } from "@coinbase/onchainkit/frame";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const imageUrl = `${req.nextUrl.origin}/api/frame/image`;
  return new NextResponse(
    getFrameHtmlResponse({
      image: imageUrl,
      post_url: `${req.nextUrl.origin}/api/frame`,
    })
  );
}