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
