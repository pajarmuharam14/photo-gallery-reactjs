import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import floraPhotos from "../../json/photos/flora.json";

const FloraPage = () => {
  return (
    <>
      <Header text="flora jkt48" />
      <AllPhotosMember src={floraPhotos} />
    </>
  );
};

export default FloraPage;
