export default function getCurrentLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos.coords.latitude + "," + pos.coords.longitude);
    });
  });
}

// import getCurrentLocation from "../../utilities/getCurrentLocation";

// const [currentLocation, setCurrentLocation] = useState("");

// useEffect(() => {
//   async function getLocation() {
//     const currentLo = await getCurrentLocation();
//     setCurrentLocation(currentLo);
//   }
//   getLocation();
// }, []);

// console.log("currentLocation :>> ", currentLocation);

