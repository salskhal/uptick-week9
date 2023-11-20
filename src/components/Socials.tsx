import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li className="">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li className="">
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li className="">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
