import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import eliPhotos from "../../json/photos/eli.json";
const HelismaPage = () => {
  return (
    <>
      <Header text="eli jkt48" />
      <AllPhotosMember src={eliPhotos} />
    </>
  );
};

export default HelismaPage;
