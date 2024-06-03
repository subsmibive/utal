interface Coordinates {
  lng: number;
  lat: number;
}

const coordinates: Coordinates = {
  lng: 81.1496,
  lat: 28.3949, // Assuming a latitude to pair with the longitude
};

function getFormattedCoordinates(coords: Coordinates): string {
  return `Latitude: ${coords.lat}, Longitude: ${coords.lng}`;
}

console.log(getFormattedCoordinates(coordinates));
