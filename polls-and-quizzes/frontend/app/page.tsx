import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frames Next.js Example",
    other: {
      ...(await fetchMetadata(
        new URL("/frames", process.env.NEXT_PUBLIC_VERCEL_URL )
      )),
    },
  };
}

export default async function Home() {
  return <div>GM user data example.</div>;
}
