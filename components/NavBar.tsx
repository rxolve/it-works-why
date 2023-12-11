"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/chat">Chat</Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          background-color: tomato;
          color: #fff;
        }
      `}</style>
    </nav>
  );
}
