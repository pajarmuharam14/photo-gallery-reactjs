import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import graciePhotos from "../../json/photos/gracie.json";

const GracePage = () => {
  return (
    <>
      <Header text="gracie jkt48" />
      <AllPhotosMember src={graciePhotos} />
    </>
  );
};

export default GracePage;
