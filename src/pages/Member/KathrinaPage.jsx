import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import kathrinaPhotos from "../../json/photos/kathrina.json";

const KathrinaPage = () => {
  return (
    <>
      <Header text="kathrina jkt48" />
      <AllPhotosMember src={kathrinaPhotos} />
    </>
  );
};

export default KathrinaPage;
