import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_URL || "https://1982-115-117-174-60.ngrok-free.app";

// Generate frame metadata
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "View Prediction",
    },
  ],
  image: `${baseUrl}/api/frame/image`,
  postUrl: `${baseUrl}/api/frame`,
});

// Define page metadata
export const metadata: Metadata = {
  title: "Crypto Prediction Frame",
  description: "A Farcaster Frame for Crypto Predictions",
  openGraph: {
    title: "Crypto Prediction Frame",
    description: "A Farcaster Frame for Crypto Predictions",
    images: [`${baseUrl}/api/frame/image`],
  },
  other: {
    ...frameMetadata,
  },
};

// Page component
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">
        Crypto prediction on Farcaster
      </h1>
      <p className="mb-4 text-center max-w-md">
        Paste this link on your Warpcast and Cast it to view the crypto frame!
      </p>
      <p className="text-sm bg-gray-200 p-2 rounded">
        Frame URL: {baseUrl}/api/frame
      </p>
    </div>
  );
}
