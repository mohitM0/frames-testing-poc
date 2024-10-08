import { createExampleURL } from "../utils";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { Frame } from "../components/Frame";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nft Marketplace",
    description: "Buy, Sell of Trade your NFTs",
  };
}

export default async function Home() {
  const metadata = await generateMetadata();

  return (
    <Frame
      metadata={metadata}
      url={createExampleURL("/nftMarketplace/frames")}
    />
  );
}
