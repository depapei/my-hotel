import { prisma } from "@/db/client";
import { deobfuscateId, obfuscateId } from "../helper/idObfuscator";

const omit = {
  noTimeStamps: {
    created_at: true,
  },
  noId: {
    id: true,
  },
};

const { noTimeStamps: timeStamps } = omit;

export const getAllRoomsFacilities = async () => {
  try {
    const rawData = await prisma.room_types.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        base_price: true,
        max_capacity: true,
        imagePath: true,
        rooms_facilities: {
          select: {
            facilities: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        deleted_at: null,
      },
      orderBy: {
        created_at: "asc",
      },
    });
    const data = rawData.map((roomType) => {
      const {
        id,
        name,
        description,
        base_price,
        max_capacity,
        rooms_facilities,
        imagePath,
      } = roomType;
      const discountPrice =
        Number(base_price) -
        (Number(base_price) * 11.111111111111111111111111111111111) / 100;
      return {
        id: obfuscateId(id),
        img: imagePath ? obfuscateId(imagePath) : "",
        name: name,
        description: description,
        price: base_price,
        discountPrice: discountPrice,
        capacity: max_capacity,
        facilities: rooms_facilities.map((rf) => rf.facilities.name),
      };
    });
    return data;
  } catch (error) {
    return [];
  }
};

// ngambil id rooms_types
export const getRoomFacility = async (id: string) => {
  const reqId = id;
  try {
    const rawData: any = await prisma.room_types.findUnique({
      where: {
        id: reqId,
      },
      select: {
        id: true,
        rooms_facilities: {
          select: {
            facilities: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const { id, rooms_facilities } = rawData;
    const data = {
      room: {
        id: obfuscateId(id),
      },
      facilities: rooms_facilities.map(
        (rf: { facilities: { name: string; id: number } }) => ({
          name: rf.facilities.name,
          id: obfuscateId(rf.facilities.id),
        }),
      ),
    };

    return data;
  } catch (error) {
    return null;
  }
};

export const createRoomFacility = async (data: any) => {
  try {
    const newFacilities = await prisma.rooms_facilities.createMany({
      data: data,
      skipDuplicates: true,
    });
    return newFacilities;
  } catch (error) {
    return null;
  }
};

export const deleteRoomsFacility = async (id: number) => {
  try {
    const deletedFacilities = await prisma.rooms_facilities.delete({
      where: {
        id: id,
      },
    });
    return deletedFacilities;
  } catch (error) {
    return null;
  }
};
