import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import fionyPhotos from "../../json/photos/fiony.json";

const FionyPage = () => {
  return (
    <>
      <Header text="fiony jkt48" />
      <AllPhotosMember src={fionyPhotos} />
    </>
  );
};

export default FionyPage;
