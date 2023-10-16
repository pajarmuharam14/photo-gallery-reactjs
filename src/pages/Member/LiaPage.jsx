import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import liaPhotos from "../../json/photos/lia.json";

const LiaPage = () => {
  return (
    <>
      <Header text="lia jkt48" />
      <AllPhotosMember src={liaPhotos} />
    </>
  );
};

export default LiaPage;
