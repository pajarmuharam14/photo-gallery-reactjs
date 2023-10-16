import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import shaniPhotos from "../../json/photos/shani.json";

const ShaniPage = () => {
  return (
    <>
      <Header text="shani jkt48" />
      <AllPhotosMember src={shaniPhotos} />
    </>
  );
};

export default ShaniPage;
