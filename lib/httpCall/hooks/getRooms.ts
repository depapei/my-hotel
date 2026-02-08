import API from "@/lib/httpCall/api/instance";
import url from "@/lib/httpCall/public-url";
import { useQuery } from "@tanstack/react-query";

export interface IResponse {
  message?: string;
  status?: string;
  error?: string;
}

export type ApiResponse<T> = IResponse & {
  data?: T;
};

export type RoomListResponse = ApiResponse<RoomListResponse[]>;
export const fetchRoomList = async () => {
  const { data } = await API.get(url.ROOMS_WITH_FACILITIES);
  return data.data;
};

export const useRooms = () => {
  return useQuery({
    queryFn: async () => fetchRoomList(),
    queryKey: ["RoomList"],
    retry: 1,
  });
};
