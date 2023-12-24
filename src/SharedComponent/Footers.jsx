import { Footer } from "flowbite-react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footers = () => {
  return (
    <div className="mt-10">
      <Footer container>
        <Footer.Copyright by="SwiftTaskHub™" year={2022} />
        <Footer.LinkGroup className="justify-center">
          <ul className="text-3xl flex flex-wrap gap-4 lg:gap-6 xl:gap-10">
            <li>
              <a
                href="https://www.instagram.com/____repulsion____/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Footers;
