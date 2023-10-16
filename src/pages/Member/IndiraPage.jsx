import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import indiraPhotos from "../../json/photos/indira.json";

const IndiraPage = () => {
  return (
    <>
      <Header text="indira jkt48" />
      <AllPhotosMember src={indiraPhotos} />
    </>
  );
};

export default IndiraPage;
