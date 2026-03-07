import { GetAllRoom } from "@/lib/data-access/static/room";
import { InternalServerError, Success } from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const data = await GetAllRoom();
    const roomsFacilities = data;
    return Success(roomsFacilities);
  } catch (error) {
    return InternalServerError("Failed to fetch rooms facilities");
  }
};
