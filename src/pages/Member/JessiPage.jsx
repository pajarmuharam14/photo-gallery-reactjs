import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import jessiPhotos from "../../json/photos/jessi.json";

const JessiPage = () => {
  return (
    <>
      <Header text="jessi jkt48" />
      <AllPhotosMember src={jessiPhotos} />
    </>
  );
};

export default JessiPage;
