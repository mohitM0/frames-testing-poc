/* eslint-disable react/jsx-key */

import { NextRequest } from "next/server";
import { frames } from "../../../../frames";
import { Button } from "frames.js/next";

const handler = async (
  req: NextRequest,
  { params: { token_id, contract_address } }: { params: { token_id: string, contract_address: string } }
) => {
  return await frames(async (ctx) => {
    return {
      image: (
        <div tw="flex">
          You are on frame &quot;{token_id}&quot;. Try loading this URL with a GET
          request.
        </div>
      ),
      buttons: [
        // target should be url/endpoint to mint token
        <Button action="post" target={`/contract/${contract_address}/token/${token_id}/mint`}>
          Mint
        </Button>,
      ],
      title: `Frame ${token_id}`,
    };
  })(req);
};

export const GET = handler;
export const POST = handler;
