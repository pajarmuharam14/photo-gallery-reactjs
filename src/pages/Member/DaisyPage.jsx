import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import daisyPhotos from "../../json/photos/daisy.json";

const DaisyPage = () => {
  return (
    <>
      <Header text="daisy jkt48" />
      <AllPhotosMember src={daisyPhotos} />
    </>
  );
};

export default DaisyPage;
