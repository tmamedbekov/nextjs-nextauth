import styles from '../styles/Home.module.css'
import { signOut, signIn, useSession } from "next-auth/client"

export default function Home( ) {
  const [session] = useSession();

  return (
    <div className={styles.container}>
      
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}


      {session && (
        <div>
          <p>Signed in as {session.user.email}</p>
          <p>Name {session.user.name}</p>
          <img src={session.user.image} alt={session.user.name} />
        </div>
      )}
    </div>
  );
}