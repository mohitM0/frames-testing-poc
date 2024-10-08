/* eslint-disable react/jsx-key */

import { NextRequest } from "next/server";
import { frames } from "../../frames";
import { Button } from "frames.js/next";

const handler = async (
  req: NextRequest,
  { params: { contract_address } }: { params: { contract_address: string } }
) => {
  return await frames(async (ctx) => {
    return {
      image: (
        <div tw="flex">
          You are on frame &quot;{contract_address}&quot;. Try loading this URL with a GET
          request.
        </div>
      ),
      buttons: [
        <Button action="post" target={"/"}>
          ← Back
        </Button>,
      ],
      title: `Frame ${contract_address}`,
    };
  })(req);
};

export const GET = handler;
export const POST = handler;
