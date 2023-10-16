import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import chelseaPhotos from "../../json/photos/chelsea.json";

const ChelseaPage = () => {
  return (
    <>
      <Header text="chelsea jkt48" />
      <AllPhotosMember src={chelseaPhotos} />
    </>
  );
};

export default ChelseaPage;
