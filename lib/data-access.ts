import { prisma } from "@/db/client";

const omit = {
  noTimeStamps: {
    created_at: true,
    updated_at: true,
    deleted_at: true,
  },
  noId: {
    id: true,
  },
};

const { noTimeStamps: timeStamps, noId: ids } = omit;

export const getAllRoom = async () => {
  try {
    const rooms = await prisma.room_types.findMany({
      orderBy: {
        created_at: "asc",
      },
      where: {
        deleted_at: null,
      },
      omit: timeStamps,
    });
    return rooms;
  } catch (error) {
    return [];
  }
};

export const getRoomById = async (id: string) => {
  try {
    const room = await prisma.room_types.findUnique({
      where: {
        id: id,
        deleted_at: null,
      },
      omit: timeStamps,
    });
    return room;
  } catch (error) {
    return null;
  }
};
