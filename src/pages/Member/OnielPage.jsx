import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import onielPhotos from "../../json/photos/oniel.json";

const OnielPage = () => {
  return (
    <>
      <Header text="oniel jkt48" />
      <AllPhotosMember src={onielPhotos} />
    </>
  );
};

export default OnielPage;
