import { BsTwitter as Twitter } from "react-icons/bs";
import {
  FaLinkedinIn as LinkedIn,
  FaFacebookF as Facebook,
} from "react-icons/fa";
import Container from "./Container";
import Image from "next/image";

const iconStyle = { color: "#000000", fontSize: "1.5rem" };

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="grid grid-cols-1 gap-10  sm:grid-cols-3 md:grid-cols-5 my-8">
          <div className="sm:col-span-3 md:col-span-2 ">
            <div className="w-4/5 space-y-6">
              <Image
                src={"/assets/images/Logo.png"}
                alt="logo"
                width={140}
                height={25}
              />
              <p className="text-[#666666]">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-[#F1F1F1] w-11 h-11 rounded-xl flex items-center justify-center">
                  <Facebook style={iconStyle} />
                </div>
                <div className="bg-[#F1F1F1] w-11 h-11 rounded-xl flex items-center justify-center">
                  <Twitter style={iconStyle} />
                </div>

                <div className="bg-[#F1F1F1] w-11 h-11 rounded-xl flex items-center justify-center">
                  <LinkedIn style={iconStyle} />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-xl font-bold text-[#666666]">Company</h1>
            <ul className="text-base text-normal space-y-6">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h1 className="text-xl font-bold text-[#666666]">Support</h1>
            <ul className="text-base text-normal space-y-6">
              <li>Support Carrer</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h1 className="text-xl font-bold text-[#666666]">Contact</h1>
            <ul className="text-base text-normal space-y-6">
              <li>Whatsapp</li>
              <li>Support24h</li>
            </ul>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <div className="flex items-center flex-wrap justify-between gap-4 my-6">
          <h3 className="text-[#666666] w-full font-normal text-base">
            Copyright © 2022 Dine Market
          </h3>
          <h3 className="text-[#666666] w-full font-normal text-base">
            Design by.{" "}
            <span className="text-black font-semibold">
              Weird Design Studio
            </span>
          </h3>

          <h3 className="text-[#666666]  w-full font-normal text-base">
            Code by.
            <span className="text-black font-semibold">
              <a href="https://github.com/Hamza-Tasadaq">Hamza-Tasadaq</a> on
              github
            </span>
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
