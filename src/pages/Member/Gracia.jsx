import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import graciaPhotos from "../../json/photos/gracia.json";

const GraciaPage = () => {
  return (
    <>
      <Header text="gracia jkt48" />
      <AllPhotosMember src={graciaPhotos} />
    </>
  );
};

export default GraciaPage;
