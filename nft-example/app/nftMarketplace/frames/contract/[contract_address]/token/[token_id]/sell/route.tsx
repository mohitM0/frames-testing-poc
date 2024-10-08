/* eslint-disable react/jsx-key */

import { NextRequest } from "next/server";
import { frames } from "../../../../../frames";
import { Button } from "frames.js/next";

const handler = async (
  req: NextRequest,
  { params: { token_id, contract_address } }: { params: { token_id: string, contract_address: string } }
) => {
  return await frames(async (ctx) => {
    return {
      image: (
        <div tw="flex">
          <img src="https://placekitten.com/200/200" />
        </div>
      ),
      buttons: [
        <Button action="tx" target={`/sellTx?contract_address=${contract_address}&token_id=${token_id}`}>
		  Sell
        </Button>
      ],
      title: `Frame token`,
    };
  })(req);
};

export const GET = handler;
export const POST = handler;
