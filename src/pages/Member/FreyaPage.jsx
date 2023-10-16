import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import freyaPhotos from "../../json/photos/freya.json";

const FreyaPage = () => {
  return (
    <>
      <Header text="freya jkt48" />
      <AllPhotosMember src={freyaPhotos} />
    </>
  );
};

export default FreyaPage;
