import { prisma } from "@/db/client";
import { getRoomById } from "@/lib/data-access/room";
import { deobfuscateId, obfuscateId } from "@/lib/helper/idObfuscator";
import {
  InternalServerError,
  InvalidId,
  NotFound,
  Success,
} from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const uid = deobfuscateId(params.id).id;

    if (!uid) {
      return InvalidId();
    }

    const room = await getRoomById(uid);

    if (!room) {
      return Success(`Room with ID ${params.id} not found`);
    }

    const { id, name, description, max_capacity, base_price } = room;
    const mappedRooms = {
      id: obfuscateId(id),
      name: name,
      description: description,
      capacity: `${max_capacity} orang`,
      price: base_price,
    };

    return Success(mappedRooms);
  } catch (error: any) {
    return InternalServerError("Failed to fetch room");
  }
};
