import { deleteFacility, updateFacility } from "@/lib/data-access/facilities";
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
      return InternalServerError("Failed to update facility");
    }

    const data = await updateFacility(decodedId.id, updateData);
    if (!data) {
      return InternalServerError("Failed to update facility, data not found");
    }

    const { name, id: newId } = data;
    const result = {
      id: obfuscateId(newId),
      name: name,
    };
    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to update facility");
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
      return InternalServerError("Failed to delete facility");
    }

    const data = await deleteFacility(decodedId.id);
    if (!data) {
      return InternalServerError("Failed to delete facility, data not found");
    }

    const result = {
      id: reqId,
      ...data,
    };

    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to delete facility");
  }
};
