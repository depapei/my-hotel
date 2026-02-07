import { createRoom, getAllRoom } from "@/lib/data-access/room";
import { obfuscateId } from "@/lib/helper/idObfuscator";
import { InternalServerError, Success } from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const data = await getAllRoom();
    const rooms: RoomType[] = data.map((room) => ({
      id: obfuscateId(room.id),
      name: room.name,
      description: room.description,
      capacity: `${room.max_capacity} orang`,
      price: `${room.base_price} / Malam`,
    }));
    return Success(rooms);
  } catch (error) {
    return InternalServerError("Failed to fetch rooms");
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const data = await createRoom(reqBody);

    if (!data) {
      return InternalServerError("Failed to create room");
    }

    const { id, name, description, max_capacity, base_price, created_at } =
      data;
    const result = {
      id: obfuscateId(id),
      name: name,
      description: description,
      capacity: `${max_capacity} orang`,
      price: `${base_price} / Malam`,
      createdAt: created_at,
    };
    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to create room");
  }
};
