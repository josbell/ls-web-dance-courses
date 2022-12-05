import { signInWithGoogle, signOut } from "../libraries/firebase";

function SignOutButton() {
  return (
    <button type="button" className="btn-blue" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}

function SignInButton() {
  return (
    <button type="button" className="btn-google" onClick={signInWithGoogle}>
      <img src="/google.png" /> Sign in with Google
    </button>
  );
}

export default function Login() {
  const user = null;
  // const username = null;

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return <main>{user ? <SignOutButton /> : <SignInButton />}</main>;
}
