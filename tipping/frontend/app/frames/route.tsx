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
  return {
    image: (
      <div>This is the frame to tip a user</div>
    ),
    buttons: [
      // create one button to tip the user
      <Button action="tx" target="/txdata">Tip The User</Button>
        
    ]
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
