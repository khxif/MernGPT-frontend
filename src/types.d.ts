interface User {
  _id: string;
  username: string;
  email: string;
}

interface AppStoreProps {
  user: User | null;
  setUser: (user: User | null) => void;
}
