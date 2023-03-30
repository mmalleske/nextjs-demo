export const users = [
  {
    id: "ryu",
    name: "Ryu",
    country: "Japan",
    profilePic: "/images/Ryu.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: 36.2048,
    longitude: 138.2529,
    flagPic: "/images/japan-flag.png"
  },
  {
    id: "ken",
    name: "Ken",
    country: "United States",
    profilePic: "/images/Ken.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: 37.0902,
    longitude: -95.7129,
    flagPic: "/images/us-flag.webp"
  },
  {
    id: "blanka",
    name: "Blanka",
    country: "Brazil",
    profilePic: "/images/Blanka.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: -14.235,
    longitude: -51.9253,
    flagPic: "/images/brazil-flag.png"
  },
  {
    id: "chun-li",
    name: "Chun Li",
    country: "China",
    profilePic: "/images/Chun-Li.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: 35.8617,
    longitude: 104.1954,
    flagPic: "/images/china-flag.webp"
  },
  {
    id: "zangief",
    name: "Zangief",
    country: "Russia",
    profilePic: "/images/Zangief.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: 61.5240,
    longitude: 105.3188,
    flagPic: "/images/soviet-union-flag.webp"
  },
  {
    id: "dhalsim",
    name: "Dhalsim",
    country: "India",
    profilePic: "/images/dhalsim.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    latitude: 20.5937,
    longitude: 78.9629,
    flagPic: "/images/india-flag.png"
  },
];

export function getAllUserIds() {
  return users.map((user) => {
    return {
      params: {
        id: user.id,
      },
    };
  });
}

export async function getUserData(id) {
    return users.find((user) => user.id === id);
}