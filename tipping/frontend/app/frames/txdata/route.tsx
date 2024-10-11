import { transaction } from "frames.js/core";
import { neynarValidate } from "frames.js/middleware/neynar";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  basePath: '/frames',
});

const handleRequest = frames(async (ctx) => {
  const {address, tip} = ctx.searchParams;
  // convert tip amount to hex string
  const tipAmount = BigInt(tip).toString(16);
  return transaction({
    chainId: "eip155:11155111",
    method: "eth_sendTransaction",
    params: {
        to: address as `0x${string}`,
        value: tipAmount,
        data: "0x",
        abi: [],
    }
  })
});

export const GET = handleRequest;
export const POST = handleRequest;