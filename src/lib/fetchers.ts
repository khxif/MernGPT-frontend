import { BASE_URL } from "./constants";

const fetchUser = async () => {
  const res = await fetch(`${BASE_URL}/api/user/auth-status`, {
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
