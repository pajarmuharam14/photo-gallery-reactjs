import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import indahPhotos from "../../json/photos/indah.json";

const IndahPage = () => {
  return (
    <>
      <Header text="indah jkt48" />
      <AllPhotosMember src={indahPhotos} />
    </>
  );
};

export default IndahPage;
