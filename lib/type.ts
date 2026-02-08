interface RoomType {
  id: string;
  name: string;
  description: string | null;
  price: string;
  capacity: string;
}

interface Facilities {
  id: string;
  name: string;
}

interface RoomFacility {
  id: string;
  facilities: {
    name: string;
  };
  room_types: {
    name: string;
    base_price: any;
    max_capacity: number;
    description: string | null;
  };
}
