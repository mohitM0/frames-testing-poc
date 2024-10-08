/* eslint-disable react/jsx-key */
import { frames } from "./frames";

const handler = frames(async (ctx) => {

  return {
    image: <div>Welcome to Nft Marketplace</div>,
    buttons: [],
  };
});

export const GET = handler;
export const POST = handler;
