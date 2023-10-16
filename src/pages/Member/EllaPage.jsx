import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import ellaPhotos from "../../json/photos/ella.json";

const EllaPage = () => {
  return (
    <>
      <Header text="ella jkt48" />
      <AllPhotosMember src={ellaPhotos} />
    </>
  );
};

export default EllaPage;
