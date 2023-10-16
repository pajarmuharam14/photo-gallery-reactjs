import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import raishaPhotos from "../../json/photos/raisha.json";

const RaishaPage = () => {
  return (
    <>
      <Header text="raisha jkt48" />
      <AllPhotosMember src={raishaPhotos} />
    </>
  );
};

export default RaishaPage;
