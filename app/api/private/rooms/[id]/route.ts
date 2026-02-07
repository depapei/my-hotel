import { deleteRoom, updateRoom } from "@/lib/data-access/room";
import { deobfuscateId, obfuscateId } from "@/lib/helper/idObfuscator";
import { InternalServerError, Success } from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const reqBody = await request.json();
    const { ...updateData } = reqBody;
    const id = params.id;
    const decodedId = deobfuscateId(String(id));

    if (decodedId.error || !decodedId.id) {
      return InternalServerError("Failed to update room");
    }

    const data = await updateRoom(decodedId.id, updateData);
    if (!data) {
      return InternalServerError("Failed to update room, data not found");
    }

    const { name, description, max_capacity, base_price, updated_at } = data;
    const result = {
      name: name,
      description: description,
      capacity: `${max_capacity} orang`,
      price: `${base_price} / Malam`,
      updatedAt: updated_at,
    };
    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to update room");
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const reqId = params.id;
    const decodedId = deobfuscateId(String(reqId));

    if (decodedId.error || !decodedId.id) {
      return InternalServerError("Failed to delete room");
    }

    const data = await deleteRoom(decodedId.id);
    if (!data) {
      return InternalServerError("Failed to delete room, data not found");
    }

    const result = {
      id: reqId,
      ...data,
    };

    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to delete room");
  }
};
