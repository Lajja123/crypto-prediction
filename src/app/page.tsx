import React from "react";
import { getFrameMetadata } from "@coinbase/onchainkit/core";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const name = "Lajja Frame";
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://basedjack-next.vercel.app";

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: `Cast Lajja`,
        action: "link",
        target: `https://warpcast.com/~/compose?text=${encodeURIComponent(
          "🎉🔥 Check out this Lajja Frame on Farcaster! A beautiful display of Bengali literature. #Lajja #TaslimaNasrin #BengaliLiterature #FarcasterFrames 🖼️✨"
        )}&embeds[]=${encodeURIComponent(`${baseUrl}/api/frame`)}`,
      },
    ],
    image: `${baseUrl}/api/frame/image`,
    postUrl: `${baseUrl}/api/frame`,
  });

  return {
    title: name,
    description: "Lajja Frame on Farcaster",
    openGraph: {
      title: name,
      description: "Lajja Frame on Farcaster",
      images: [`${baseUrl}/api/frame/image`],
    },
    other: {
      ...frameMetadata,
      "fc:frame:image:aspect_ratio": "1.91:1",
    },
  };
}

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Lajja on Farcaster</h1>
      <p className="mb-4 text-center max-w-md">
        Paste this link on your Warpcast and Cast it to view the Lajja frame!
      </p>
      <p className="text-sm bg-gray-200 p-2 rounded">
        Frame URL: {process.env.NEXT_PUBLIC_URL}/api/frame
      </p>
    </div>
  );
}

export default Page;
