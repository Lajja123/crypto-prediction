import { getFrameMetadata } from "@coinbase/onchainkit/frame";

export function generateFrameMetadata(imageData?: ArrayBuffer) {
  const imageUrl = imageData 
    ? `data:image/png;base64,${Buffer.from(imageData).toString('base64')}`
    : 'https://your-default-image-url.com/image.png';

  return getFrameMetadata({
    buttons: [
      {
        label: 'Click me!',
      },
    ],
    image: imageUrl,
    post_url: 'https://your-api-url.com/api/frame',
  });
}