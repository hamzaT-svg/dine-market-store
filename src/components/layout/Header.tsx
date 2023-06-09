import Image from "next/image";
import { CiSearch as Search } from "react-icons/ci";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import Container from "./Container";
import Navbar from "../Navbar";
import CartIcon from "../CartIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="my-8">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={"/assets/images/Logo.png"}
              alt="logo"
              width={140}
              height={25}
            />
          </Link>
          <div className="hidden lg:block">
            <Navbar />
          </div>{" "}
          <div className="hidden lg:flex items-center px-2 py-1 w-4/12 border border-[#e4e5eb] rounded-md space-x-2">
            <Search style={{ fontSize: "1.3rem" }} className="cursor-pointer" />
            <input
              className="outline-none text-xs w-full"
              placeholder="what you are looking for?"
            />
          </div>
          <div className="hidden lg:block">
            {/* <Suspense
              fallback={
                <div className="bg-[#F1F1F1] relative w-11 h-11 rounded-full flex items-center justify-center animate-pulse" />
              }
            > */}
            <CartIcon />
            {/* </Suspense> */}
          </div>
          <div className="lg:hidden">
            <Hamburger
              className="cursor-pointer"
              style={{ fontSize: "1.5rem" }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
