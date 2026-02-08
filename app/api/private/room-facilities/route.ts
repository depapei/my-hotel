import {
  createRoomFacility,
  getAllRoomsFacilities,
} from "@/lib/data-access/rooms-facilities";
import { deobfuscateId } from "@/lib/helper/idObfuscator";
import { InternalServerError, Success } from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const data = await getAllRoomsFacilities();
    const roomsFacilities = data;
    return Success(roomsFacilities);
  } catch (error) {
    return InternalServerError("Failed to fetch rooms facilities");
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const form = reqBody.map(
      (body: { roomsUid: string; facilities_uid: string }) => {
        return Object.fromEntries(
          Object.entries(body).map(([key, value]) => {
            return [key, deobfuscateId(value).id];
          }),
        );
      },
    );
    const data = await createRoomFacility(form);

    if (!data) {
      return InternalServerError("Failed to create room facility");
    }

    const result = data;
    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to create room facility");
  }
};
