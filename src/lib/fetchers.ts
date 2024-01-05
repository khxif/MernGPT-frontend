const fetchUser = async () => {
  const res = await fetch("/api/user/auth-status", {
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
