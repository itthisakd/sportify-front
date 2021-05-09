const account = {
    id: 1,
    firstName: "Amy",
    gender: "female",
    phoneNumber: "0925419369",
    email: "amy@gmail.com",
    dob: "2001-09-09",
    aboutMe:
      "I am nice because I am veyr very nice and also extremely kind and nice.",
    instagram: "amylee",
    sporify: "samy",
    job: "",
    company: "",
    school: "Clerk County College",
    searchLocation: "",
    searchDistance: 45,
    searchAge: "18-40",
    searchGender: "a",
    currentLocation: "",
    lastActive: "2020-09-0900:00:09",
    showActive: 1,
    showInStack: 1,

    //––––––––––––––––––––––––––FROM SEPERATE TABLE––––––––––––––––––––––––
    planName: "lite",
    planId: "1",
    sports: [
      { id: 1, sportName: "Basketball" },
      { id: 3, sportName: "Badminton" },
      { id: 6, sportName: "Tennis" },
      { id: 7, sportName: "Golf" },
      { id: 96, sportName: "Fencing" },
    ],
    images: [
      {
        image:
          "https://i.picsum.photos/id/1002/600/900.jpg?hmac=4BSgpJzasHKS9vEgQ_Kn3WUjgvc1sUZv-E10bf1bCyA",
      },
      {
        image:
          "https://i.picsum.photos/id/277/600/900.jpg?hmac=0SZDnUgJesoCsIFVR9u9uG9hUC3dQOxx0_pgop-aIoY",
      },
      {
        image:
          "https://i.picsum.photos/id/705/600/900.jpg?hmac=19EE_8IKXcp7maJfLind1IgeEHKHlpbeSbN6o5uydJY",
      },
      //GIVE IMAGES IN UPLOADED ORDER
    ],

    //––––––––––––––––––––––––––GENERATED–––––––––––––––––––––––––
    recentlyActive: 1,
    // distance: "6km",
    age: 18,
    locationName: "Bangkok, Thailand",
    // age: DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
  }