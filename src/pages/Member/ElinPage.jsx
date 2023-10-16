import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import elinPhotos from "../../json/photos/elin.json";

const ElinPage = () => {
  return (
    <>
      <Header text="elin jkt48" />
      <AllPhotosMember src={elinPhotos} />
    </>
  );
};

export default ElinPage;
