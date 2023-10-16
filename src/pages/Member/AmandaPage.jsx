import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import amandaPhotos from "../../json/photos/amanda.json";

const AmandaPage = () => {
  return (
    <>
      <Header text="amanda jkt48" />
      <AllPhotosMember src={amandaPhotos} />
    </>
  );
};

export default AmandaPage;
