import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import gendisPhotos from "../../json/photos/gendis.json";

const GendisPage = () => {
  return (
    <>
      <Header text="gendis jkt48" />
      <AllPhotosMember src={gendisPhotos} />
    </>
  );
};

export default GendisPage;
