import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import greeselPhotos from "../../json/photos/greesel.json";

const GreeselPage = () => {
  return (
    <>
      <Header text="greesel jkt48" />
      <AllPhotosMember src={greeselPhotos} />
    </>
  );
};

export default GreeselPage;
