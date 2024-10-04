import { updatePoll } from "@/app/api";
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

  // cast the vote to the backend
  const id = ctx.url.searchParams.get("id");
  const vote_index = ctx.url.searchParams.get("vote");

  const updatedPoll = await updatePoll(id, vote_index);

  // parse the response and return the updated poll
  return {
    image: (
<div tw="flex flex-col space-y-2">
    <h3 tw="text-lg font-semibold">Current Votes:</h3>
    <div tw="flex flex-col space-y-1">
        <div tw="flex justify-between items-center p-2 bg-blue-100 rounded-lg">
            <span>{updatedPoll.options[0]}</span>
            <span>{updatedPoll.votes[0]}</span>
        </div>
        <div tw="flex justify-between items-center p-2 bg-blue-100 rounded-lg">
            <span>{updatedPoll.options[1]}</span>
            <span>{updatedPoll.votes[1] || 0}</span>
        </div>
    </div>
</div>
        ),
    buttons: [],

  };
});

export const GET = handleRequest;
export const POST = handleRequest;
