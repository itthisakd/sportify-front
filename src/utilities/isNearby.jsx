export default function isNearby(myLocation, yourLocation, searchRadius) {
    // myLocation: (a, b)
    // yourLocation: (x, y)
    const a = +myLocation.split("-")[0];
    const b = +myLocation.split("-")[1];
    const x = +yourLocation.split("-")[0];
    const y = +yourLocation.split("-")[1];

    const distance = Math.ceil(
      Math.sqrt(((x - a) * 111.139) ** 2 + ((y - b) * 111.139) ** 2)
    );
    const nearby = !!(distance <= searchRadius);

    return { nearby, distance };
  }




  // const [myLocation, setMyLocation] = React.useState("");

//   if ("geolocation" in navigator) {
//     console.log("Available");
//   } else {
//     console.log("Not Available");
//   }
//   React.useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       setMyLocation(
//         [position.coords.latitude, position.coords.longitude].join("-")
//       );
//     });
//   }, [myLocation]);

// const lo = "13.741319-100.531151";
  
//   console.log(isNearby(myLocation, lo, 5));
