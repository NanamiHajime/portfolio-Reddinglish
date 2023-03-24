import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const [session] = useSession();

  return session ? (
    <>
      <h1>KABETTER</h1>
      <h2>Say Goodbye to DOOMSCROLLING</h2>
      <button onClick={() => signOut()}>SignOut</button>
    </>
  ) : (
    <>
      <h1>KABETTER</h1>
      <h2>Say Goodbye to DOOMSCROLLING</h2>
      <button onClick={() => signIn()}>SignIn</button>
    </>

  );


}
