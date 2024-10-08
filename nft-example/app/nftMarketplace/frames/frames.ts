import { createFrames } from "frames.js/next";
import { appURL } from "../../utils";
import { neynarValidate } from "frames.js/middleware/neynar";

export const frames = createFrames({
  basePath: "/nftMarketplace/frames",
  baseUrl: appURL(),
  debug: process.env.NODE_ENV === "development",
  middleware: [
    neynarValidate({
      API_KEY: "3A49F52D-5B5C-41A0-8D22-DF2052F6B126",
    })
  ],
});
