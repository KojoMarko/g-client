import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <div className="logo">
        <Link href="/client/home">
          <a>
            <img src="public\gclient-logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
      <div className="login-btn">
        <Link href="/login">
          <a>Login +</a>
        </Link>
      </div>
    </nav>
  );
}
