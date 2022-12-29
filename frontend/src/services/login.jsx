const baseUrl = "http://localhost:3000/api/auth/login";

const login = async (credentials) => {
  //   console.log(credentials);
  const data = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return data.json();
};

// async function login(credentials) {
//   return await fetch(baseUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//     status: 200,
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// }

export default { login };
