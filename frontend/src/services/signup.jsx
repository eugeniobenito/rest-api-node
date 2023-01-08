const baseUrl = "http://localhost:3000/api/auth/register";

const signup = async (credentials) => {
  try {
    const data = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    return data.json();
  } catch (error) {
    throw error;
  }
};

export default { signup };
