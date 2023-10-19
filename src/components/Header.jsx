/* eslint-disable react/prop-types */
import reactSvg from "../assets/react.svg";

const Header = ({ text }) => {
  return (
    <>
      <h1 className="text-center my-8 text-2xl text-red-700 font-semibold capitalize">{text}</h1>
      <img src={reactSvg} />
    </>
  );
};

export default Header;
