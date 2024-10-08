import { createFrames } from "frames.js/next";
import { neynarValidate } from "frames.js/middleware/neynar";
type State = {
  counter: number;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { counter: 0 },
  middleware: [
    neynarValidate({
      API_KEY: "3A49F52D-5B5C-41A0-8D22-DF2052F6B126",
    })
  ],
});
