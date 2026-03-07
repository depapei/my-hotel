export const GetAllRoom = async () => {
  const rooms = [
    {
      id: "ENC_NWZkYjAzNTAtM2E1MC00NTNlLThmOWYtMWM4ZGE5MmYyNjUwU0lOQVJQRUxBTkdJU1VDQ0VFRDIwMjY",
      img: "ENC_L3Jvb20taW1hZ2UvNWZkYjAzNTAtM2E1MC00NTNlLThmOWYtMWM4ZGE5MmYyNjUwLnBuZ1NJTkFSUEVMQU5HSVNVQ0NFRUQyMDI2",
      name: "Kamar Deluxe (Single Bed)",
      description: "",
      price: 400000,
      discountPrice: 350000,
      capacity: 2,
      facilities: [
        "AC",
        "Air Minum & Teko Listrik",
        "Perlengkapan Mandi",
        "Shower Air Panas",
        "TV",
        "Wifi",
      ],
    },
    {
      id: "ENC_ZDkwNzA1MjEtOGFjNC00NGVlLWFjOGUtOTAwMzIyMDg4ZTA1U0lOQVJQRUxBTkdJU1VDQ0VFRDIwMjY",
      img: "ENC_L3Jvb20taW1hZ2UvODdhMjRhNTYtNTI3OC00M2IxLWJjMzEtNzdhMTc2ZjlhMGNkLnBuZ1NJTkFSUEVMQU5HSVNVQ0NFRUQyMDI2",
      name: "Kamar Standard (Twin Bed)",
      description: "",
      price: 350000,
      discountPrice: 300000,
      capacity: 2,
      facilities: [
        "AC",
        "Air Minum & Teko Listrik",
        "Perlengkapan Mandi",
        "Shower Air Panas",
        "TV",
        "Wifi",
      ],
    },
  ];

  return rooms;
};
