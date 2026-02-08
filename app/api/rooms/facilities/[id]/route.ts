import { getRoomFacility } from "@/lib/data-access/rooms-facilities";
import { deobfuscateId, obfuscateId } from "@/lib/helper/idObfuscator";
import { InternalServerError, Success } from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const req = deobfuscateId(params.id);
    if (req.error || !req.id) {
      return InternalServerError("Failed to fetch room facility");
    }
    const data = await getRoomFacility(req.id);
    return Success(data);
  } catch (error) {
    return InternalServerError("Failed to fetch Room Facility");
  }
};
