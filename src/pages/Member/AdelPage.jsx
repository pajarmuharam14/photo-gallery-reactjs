import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import adelPhotos from "../../json/photos/adel.json";

const AdelPage = () => {
  return (
    <>
      <Header text="adel jkt48" />
      <AllPhotosMember src={adelPhotos} />
    </>
  );
};

export default AdelPage;
