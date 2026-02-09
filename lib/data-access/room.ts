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

const { noTimeStamps: timeStamps } = omit;

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

export const createRoom = async (data: any) => {
  try {
    const newRoom = await prisma.room_types.create({
      data,
      omit: {
        deleted_at: true,
      },
    });
    return newRoom;
  } catch (error) {
    return null;
  }
};

export const updateRoom = async (id: string, data: any) => {
  try {
    const updatedRoom = await prisma.room_types.update({
      where: {
        id: id,
      },
      data: data,
      omit: {
        deleted_at: true,
        created_at: true,
      },
    });
    return updatedRoom;
  } catch (error) {
    return null;
  }
};

export const deleteRoom = async (id: string) => {
  try {
    const deletedRoom = await prisma.room_types.update({
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
    return deletedRoom;
  } catch (error) {
    return null;
  }
};
