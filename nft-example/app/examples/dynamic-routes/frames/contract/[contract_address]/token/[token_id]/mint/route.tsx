/* eslint-disable react/jsx-key */

import { NextRequest } from "next/server";
import { frames } from "../../../../../frames";

const sendTransaction = async (tokenId: string, contractAddress: string) => {
  const response = await fetch(
    "https://api.syndicate.io/transact/sendTransaction",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer TOfeLQjqQ8ReQlfsHJq0",
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          projectId: "69a24f1f-e7d4-4ca2-902a-6e4190dc9e1d",
          contractAddress: contractAddress,
          chainId: 11155111,
          functionSignature: "mint(address owner, uint256 tokenId)",
          args: {
            owner: "0x13fe22068E84534056B1F869c4a26b48dcf9bb4e",
            tokenId: tokenId
          }
        })
      }
    )
    console.log(tokenId)
  return response.json()
}

const handler = async (
  req: NextRequest,
  { params: { token_id, contract_address } }: { params: { token_id: string, contract_address: string } }
) => {
  try {
    const response = await sendTransaction(token_id, contract_address)
    console.log(response)
  } 
  catch (error) {
    console.error(error)
  }
  return await frames(async (ctx) => {
    return {
      image: (
        <div tw="flex">
          <img src="https://placekitten.com/200/200" />
          Your token is minted successfully!!
        </div>
      ),
      buttons: [
      ],
      title: `Frame token`,
    };
  })(req);
};

export const GET = handler;
export const POST = handler;
