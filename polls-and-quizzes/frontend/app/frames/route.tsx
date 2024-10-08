import { farcasterHubContext } from "frames.js/middleware";
import { neynarValidate } from "frames.js/middleware/neynar";
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  basePath: '/frames',
  middleware: [
    neynarValidate({
      API_KEY: "3A49F52D-5B5C-41A0-8D22-DF2052F6B126",
    })
  ],
});

const handleRequest = frames(async (ctx) => {
  return {
    image: ctx.message ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        GM, {ctx.message.requesterUserData?.displayName}! Your FID is{" "}
        {ctx.message.requesterFid}
        {", "}
        {ctx.message.requesterFid < 20_000
          ? "you're OG!"
          : "welcome to the Farcaster!"}
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        Say GM
      </div>
    ),
    buttons: !ctx.url.searchParams.has("saidGm")
      ? [
          <Button action="post" target={{ query: { saidGm: true } }}>
            Say GM
          </Button>,
        ]
      : [],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
