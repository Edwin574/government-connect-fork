const SpacesData = [
  {
    id: 1,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
  {
    id: 2,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
  {
    id: 3,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
  {
    id: 4,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
  {
    id: 5,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
  {
    id: 6,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
  {
    id: 7,
    AmenityBooked: "SocialHouse",
    AmenityName: "Field",
  },
];
const header = "column-label";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "AmenityBooked",
    headerName: "Amenity Booked",
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  },
  {
    field: "AmenityName",
    headerName: "Amenity Name",
    width: 100,
    flex: 1,
    align: "center",
    headerAlign: "center",
    headerClassName: header,
  }
];

export { SpacesData, columns };
