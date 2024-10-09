import { neynarValidate } from "frames.js/middleware/neynar";
import { createFrames, Button } from "frames.js/next";
import { NextRequest } from "next/server";


const frames = createFrames({
  basePath: '/frames',
});

const handleRequest = async (
  req: NextRequest,
  {params: {address, tip}}: {params: {address: string, tip: string}}
) => {
  return await frames(async (ctx) => {
    return {
      title: "Tip User",
      image: (
        <div>This is the frame to tip a user</div>
      ),
      buttons: [
        // create one button
        <Button action="tx" target={`/txdata?address=${address}&tip=${tip}`}>Tip</Button>
      ]
    };
  }
  )(req);
}

export const GET = handleRequest;
export const POST = handleRequest;
