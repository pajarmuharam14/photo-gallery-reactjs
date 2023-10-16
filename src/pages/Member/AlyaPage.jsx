import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import alyaPhotos from "../../json/photos/alya.json";

const AlyaPage = () => {
  return (
    <>
      <Header text="alya jkt48" />
      <AllPhotosMember src={alyaPhotos} />
    </>
  );
};

export default AlyaPage;
