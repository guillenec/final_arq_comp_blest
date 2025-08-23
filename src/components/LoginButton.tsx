import React from "react";
import { auth, googleProvider } from "../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";

export default function LoginButton() {
  const [user, setUser] = React.useState(() => auth.currentUser);

  React.useEffect(() => {
    return auth.onAuthStateChanged(setUser);
  }, []);

  if (user) {
    return (
      <button className="text-sm underline" onClick={() => signOut(auth)}>
        Salir ({user.displayName?.split(" ")[0]})
      </button>
    );
  }

  return (
    <button className="text-sm underline" onClick={() => signInWithPopup(auth, googleProvider)}>
      Ingresar con Google
    </button>
  );
}
