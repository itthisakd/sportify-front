import Geocode from "react-geocode";

export default function getLocationName(address) {
  Geocode.setApiKey(import.meta.env.VITE_GOOGLE_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  return new Promise((resolve) => {
    Geocode.fromAddress(address).then(
      (response) => {
        resolve(
          [
            response.results[0].geometry.location.lat,
            response.results[0].geometry.location.lng,
          ].join(",")
        );
      },
      (error) => {
        console.error(error);
      }
    );
  });
}
