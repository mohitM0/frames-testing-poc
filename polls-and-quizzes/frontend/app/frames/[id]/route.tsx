import { getPoll } from "@/app/api";
import { farcasterHubContext } from "frames.js/middleware";
import { createFrames, Button } from "frames.js/next";
import { NextRequest } from "next/server";

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

const handler = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  const poll = await getPoll(id);
  return await frames(async (ctx) => {
    return {
      image: (
        <div tw="flex">
          {poll.question}
        </div>
      ),
      buttons: [
        <Button action="post" target={{pathname: "/vote", query: {
          id,
          vote: 0,
        }}}>
          {poll.options[0]}
        </Button>,
        <Button action="post" target={{pathname: "/vote", query: {
          id,
          vote: 1,
        }}}>
          {poll.options[1]}
        </Button>,
      ],
      title: `Frame ${id}`,
    };
  })(req);
};

export const GET = handler;
export const POST = handler;
