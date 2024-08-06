import React from "react";
import { getFrameMetadata } from "@coinbase/onchainkit/core";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const name = "Crypto Frame";
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://crypto-prediction-123.vercel.app";

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: `Cast`,
        action: "link",
        target: `https://warpcast.com/~/compose?text=${encodeURIComponent(
          "🎉🔥 Check out this crypto Frame on Farcaster! 🖼️✨"
        )}&embeds[]=${encodeURIComponent(`${baseUrl}/api/frame`)}`,
      },
      {
        label: 'Connect MetaMask',
        action: 'post_redirect',
      },
    ],
    image: `${baseUrl}/api/frame/image`,
    postUrl: `${baseUrl}/api/frame`,
  });

  return {
    title: name,
    description: "Crypto Frame on Farcaster",
    openGraph: {
      title: name,
      description: "Crypto Frame on Farcaster",
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
      <h1 className="text-4xl font-bold mb-4">Crypto prediction on Farcaster</h1>
      <p className="mb-4 text-center max-w-md">
        Paste this link on your Warpcast and Cast it to view the crypto frame!
      </p>
      <p className="text-sm bg-gray-200 p-2 rounded">
        Frame URL: {process.env.NEXT_PUBLIC_URL}/api/frame
      </p>
    </div>
  );
}

export default Page;
