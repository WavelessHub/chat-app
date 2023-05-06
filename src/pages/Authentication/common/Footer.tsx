import { Link } from "react-router-dom";

interface Props {
  type: string;
  url: string;
}

const Footer = ({ type, url }: Props) => {
  return (
    <div className="bg-white text-center ml-1 mt-4 text-gray-500 -mb-[6px] text-sm font-medium">
      {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
      <span className="text-indigo-500 cursor-pointer hover:underline decoration-[1.5px]">
        <Link to={url}>
          {type === "login" ? "Register Here" : "Login Here"}
        </Link>
      </span>
    </div>
  );
};

export default Footer;
