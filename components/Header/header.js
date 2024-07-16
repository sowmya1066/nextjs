import Logo from "@/assets/logo.png";
import cssHeader from "./header.module.css";
import MainHeaderBackground from "./main-header";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";

export default function Header() {
  return (
    <>
      <MainHeaderBackground />
      <header className={cssHeader.header}>
        <Link href="/" className={cssHeader.logo}>
          <img src={Logo.src} />
          NextLevel Food
        </Link>

        <nav className={cssHeader.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Browse Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
