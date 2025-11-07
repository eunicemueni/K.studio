import React, { createContext, useEffect, useState } from "react";
import { auth } from "../lib/firebaseClient";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext(null);

export function FirebaseAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}
