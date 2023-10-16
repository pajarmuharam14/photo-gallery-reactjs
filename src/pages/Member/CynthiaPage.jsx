import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import cynthiaPhotos from "../../json/photos/cynthia.json";

const CynthiaPage = () => {
  return (
    <>
      <Header text="cynthia jkt48" />
      <AllPhotosMember src={cynthiaPhotos} />
    </>
  );
};

export default CynthiaPage;
