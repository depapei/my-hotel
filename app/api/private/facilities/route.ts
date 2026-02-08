import { createFacility, getAllFacilities } from "@/lib/data-access/facilities";
import { obfuscateId } from "@/lib/helper/idObfuscator";
import { InternalServerError, Success } from "@/lib/helper/responses";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const data = await getAllFacilities();
    const facilities: Facilities[] = data.map((facility) => ({
      id: obfuscateId(facility.id),
      name: facility.name,
    }));
    return Success(facilities);
  } catch (error) {
    return InternalServerError("Failed to fetch facilities");
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const data = await createFacility(reqBody);

    if (!data) {
      return InternalServerError("Failed to create facility");
    }

    const { id, name } = data;
    const result = {
      id: obfuscateId(id),
      name: name,
    };
    return Success(result);
  } catch (error) {
    return InternalServerError("Failed to create facility");
  }
};
