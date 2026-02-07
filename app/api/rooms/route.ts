import { getAllRoom } from "@/lib/data-access";
import { obfuscateId } from "@/lib/helper/idObfuscator";
import { InternalServerError, NotFound, Success } from "@/lib/helper/responses";

export const GET = async (request: Request) => {
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
