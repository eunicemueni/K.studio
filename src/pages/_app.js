import "../styles/globals.css";
import { FirebaseAuthProvider } from "../components/FirebaseAuthProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAuthProvider>
      <Component {...pageProps} />
    </FirebaseAuthProvider>
  );
}
