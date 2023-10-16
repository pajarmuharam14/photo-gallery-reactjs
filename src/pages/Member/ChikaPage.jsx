import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import chikaPhotos from "../../json/photos/chika.json";

const ChikaPage = () => {
  return (
    <>
      <Header text="chika jkt48" />
      <AllPhotosMember src={chikaPhotos} />
    </>
  );
};

export default ChikaPage;
