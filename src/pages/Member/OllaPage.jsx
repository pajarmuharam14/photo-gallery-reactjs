import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import ollaPhotos from "../../json/photos/olla.json";

const FebriolaPage = () => {
  return (
    <>
      <Header text="olla jkt48" />
      <AllPhotosMember src={ollaPhotos} />
    </>
  );
};

export default FebriolaPage;
