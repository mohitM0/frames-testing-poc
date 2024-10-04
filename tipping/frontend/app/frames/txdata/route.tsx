import { transaction } from "frames.js/core";
import { farcasterHubContext } from "frames.js/middleware";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  basePath: '/frames',
  middleware: [
    farcasterHubContext({
      // remove if you aren't using @frames.js/debugger or you just don't want to use the debugger hub
      ...(process.env.NODE_ENV === "production"
        ? {}
        : {
            hubHttpUrl: "http://localhost:3010/hub",
          }),
    }),
  ],
});

const handleRequest = frames(async (ctx) => {
  return transaction({
    chainId: "eip155:137",
    method: "eth_sendTransaction",
    params: {
        to: "0xE3E0F6deC11d198bCF2D096c94ba69D5f4cB625c",
        value: "0x0",
        data: "0x",
        abi: [],
    }
  })
});

export const GET = handleRequest;
export const POST = handleRequest;