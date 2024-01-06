const fetchUser = async () => {
  const res = await fetch("https://mern-gpt-api.vercel.app/api/user/auth-status", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
};

export { fetchUser };
