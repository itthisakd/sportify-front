import Geocode from "react-geocode";

export default function getLocationName(loca) {
  Geocode.setApiKey(import.meta.env.VITE_GOOGLE_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const lat = loca.split(",")[0];
  const long = loca.split(",")[1];

  return new Promise((resolve) => {
    Geocode.fromLatLng(lat, long).then(
      (response) => {
        resolve(
          response.plus_code.compound_code
            .split(" ")
            .slice(1)
            .join(" ")
            .split(", ")
            .slice(-2)
            .join(", ")
        );
      },
      (error) => {
        console.error(error);
      }
    );
  });
}
