/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { dataMembers } from "../json/data/dataMembers.json";

const PhotoKabesha = () => {
  return (
    <>
      {dataMembers.map((member) => (
        <div key={member.id}>
          <img className="w-[150px] my-5 mx-5 sm:mx-3 border-2 border-black rounded-xl" src={member.kabesha} />
          <Link to={member.page}>
            <p className="text-center border border-red-400 mx-2 mt-[-10px] py-4 rounded-xl bg-[#FFE8F4] text-red-700 hover:text-blue-400 font-semibold cursor-pointer">{member.name}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PhotoKabesha;
