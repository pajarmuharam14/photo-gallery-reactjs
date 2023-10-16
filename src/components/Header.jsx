/* eslint-disable react/prop-types */

import svg from "../datas/svg";
const Header = ({ text }) => {
  return (
    <>
      <h1 className="text-center my-8 text-2xl text-red-700 font-semibold capitalize">{text}</h1>
      <img src={svg.src} />
    </>
  );
};

export default Header;
