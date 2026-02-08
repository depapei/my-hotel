import { prisma } from "@/db/client";

const omit = {
  noTimeStamps: {
    created_at: true,
    deleted_at: true,
  },
  noId: {
    id: true,
  },
};

const { noTimeStamps: timeStamps } = omit;

export const getAllFacilities = async () => {
  try {
    const facilities = await prisma.facilities.findMany({
      orderBy: {
        created_at: "asc",
      },
      where: {
        deleted_at: null,
      },
      omit: timeStamps,
    });
    return facilities;
  } catch (error) {
    return [];
  }
};

export const getFacilitiesById = async (id: string) => {
  try {
    const facilities = await prisma.facilities.findUnique({
      where: {
        id: id,
        deleted_at: null,
      },
      omit: timeStamps,
    });
    return facilities;
  } catch (error) {
    return null;
  }
};

export const createFacility = async (data: any) => {
  try {
    const newFacilities = await prisma.facilities.create({
      data,
      omit: {
        deleted_at: true,
      },
    });
    return newFacilities;
  } catch (error) {
    return null;
  }
};

export const updateFacility = async (id: string, data: any) => {
  try {
    const updatedFacilities = await prisma.facilities.update({
      where: {
        id: id,
      },
      data: data,
      omit: timeStamps,
    });
    return updatedFacilities;
  } catch (error) {
    return null;
  }
};

export const deleteFacility = async (id: string) => {
  try {
    const deletedFacilities = await prisma.facilities.update({
      where: {
        id: id,
      },
      data: {
        deleted_at: new Date(),
      },
      select: {
        deleted_at: true,
      },
    });
    return deletedFacilities;
  } catch (error) {
    return null;
  }
};
