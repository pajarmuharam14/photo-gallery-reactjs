import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import feniPhotos from "../../json/photos/feni.json";

const FeniPage = () => {
  return (
    <>
      <Header text="feni jkt48" />
      <AllPhotosMember src={feniPhotos} />
    </>
  );
};

export default FeniPage;
