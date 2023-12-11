import Link from "next/link";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className={style.nav}>
        Home
      </Link>
      <Link href="/about" className={style.nav}>
        About
      </Link>
    </nav>
  );
}
