import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import muthePhotos from "../../json/photos/muthe.json";

const MuthePage = () => {
  return (
    <>
      <Header text="muthe jkt48" />
      <AllPhotosMember src={muthePhotos} />
    </>
  );
};

export default MuthePage;
