export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://mern-gpt-api.vercel.app";
