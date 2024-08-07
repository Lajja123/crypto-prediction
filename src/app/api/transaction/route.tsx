import { NextRequest, NextResponse } from "next/server";
import { getFrameMessage } from "@coinbase/onchainkit/frame";
import { ethers } from "ethers";
import token_abi from "../../../abi/GovernanceToken.json";

export async function POST(req: NextRequest) {
  console.log("Request received:", req.method);

  try {
    const body = await req.json();
    const { isValid, message } = await getFrameMessage(body);

    if (!isValid) {
      console.log("Frame Invalid");
      return NextResponse.json({ message: "Frame Invalid" }, { status: 400 });
    }

    // Check if this is the initial frame load or a button click
    if (message.button === 1) {
      // "View Prediction" button clicked
      // Here you would typically fetch or generate the prediction data
      // For this example, we'll just return a placeholder prediction
      const prediction = "BTC will reach $100,000 by the end of the year";
      // Return the prediction in the frame response
      return NextResponse.json({
        image: `${
          process.env.NEXT_PUBLIC_URL
        }/api/frame/image?text=${encodeURIComponent(prediction)}`,
        post_url: `${process.env.NEXT_PUBLIC_URL}/api/transaction`,
        buttons: [
          {
            label: "Make Transaction",
            action: "post",
          },
        ],
      });
    } else if (message.button === 2) {
      // "Make Transaction" button clicked
      // Prepare the transaction data for MetaMask
      const contractAddress = "0x912ce59144191c1204e64559fe8253a0e49e6548"; // Replace with your actual contract address
      const contractInterface = new ethers.Interface(token_abi.abi);
      const encodedData = contractInterface.encodeFunctionData(
        "someFunction",
        []
      ); // Replace 'someFunction' with the actual function you want to call
      // Return the transaction frame
      return NextResponse.json({
        chainId: "eip155:42161", // Arbitrum One
        method: "eth_sendTransaction",
        params: {
          abi: token_abi,
          to: contractAddress,
          data: encodedData,
          value: "0",
        },
      });
    } else {
      // Initial frame load
      return NextResponse.json({
        image: `${process.env.NEXT_PUBLIC_URL}/api/frame/image`,
        post_url: `${process.env.NEXT_PUBLIC_URL}/api/transaction`,
        buttons: [
          {
            label: "View Prediction",
            action: "post",
          },
        ],
      });
    }
  } catch (error: any) {
    console.error("Error in handler:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
