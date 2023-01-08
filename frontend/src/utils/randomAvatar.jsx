export function getRandomString() {
  const avatarUrlsArray = [
    "https://avatars.dicebear.com/api/miniavs/:seed.svg",
    "https://avatars.dicebear.com/api/avataaars/:seed.svg",
    "https://avatars.dicebear.com/api/adventurer/:seed.svg",
    "https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg",
    "https://avatars.dicebear.com/api/big-ears/:seed.svg",
    "https://avatars.dicebear.com/api/big-smile/:seed.svg",
    "https://avatars.dicebear.com/api/bottts/:seed.svg",
    "https://avatars.dicebear.com/api/croodles/:seed.svg",
    "https://avatars.dicebear.com/api/croodles-neutral/:seed.svg",
    "https://avatars.dicebear.com/api/micah/:seed.svg",
    "https://avatars.dicebear.com/api/open-peeps/:seed.svg",
    "https://avatars.dicebear.com/api/personas/:seed.svg",
    "https://avatars.dicebear.com/api/pixel-art/:seed.svg"
  ];

  const randomIndex = Math.floor(Math.random() * avatarUrlsArray.length);
  const randomString = avatarUrlsArray[randomIndex];
  return randomString;
}
