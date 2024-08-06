import { Metadata } from 'next';
import { generateFrameMetadata } from '@/utils/generateFrameMetadata';

export const metadata: Metadata = {
  title: 'Crypto Frame',
  description: 'A Farcaster frame displaying "Crypto here"',
};

export default function Home() {
  return (
    <main>
      <h1>Welcome to Crypto Frame</h1>
      <p>This is a Farcaster frame project.</p>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = generateFrameMetadata();
  return {
    ...metadata,
    other: {
      ...frameMetadata,
    },
  };
}