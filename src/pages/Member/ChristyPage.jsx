import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import christyPhotos from "../../json/photos/christy.json";

const ChristyPage = () => {
  return (
    <>
      <Header text="christy jkt48" />
      <AllPhotosMember src={christyPhotos} />
    </>
  );
};

export default ChristyPage;
