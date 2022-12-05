import Link from "next/link";

export default function Navbar() {
  const username = null;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button type="button" className="btn-logo">
              Home
            </button>
          </Link>
        </li>
        <li className="push-right">
          <Link href="/courses">
            <button type="button" className="btn-blue">
              Courses
            </button>
          </Link>
        </li>
        {username && (
          <li>
            <Link href="/">
              <button type="button" className="btn-blue">
                My Courses
              </button>
            </Link>
          </li>
        )}
        {!username && (
          <li>
            <Link href="/login">
              <button type="button" className="btn-blue">
                LogIn
              </button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
