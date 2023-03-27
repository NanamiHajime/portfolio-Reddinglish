import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();

  return(
    <div>
      MyPage 
      <p>{session?.user.name}</p>
      <img src={session?.user.image} />
    </div>
  );


}
