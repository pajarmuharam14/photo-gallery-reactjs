import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import lynPhotos from "../../json/photos/lyn.json";

const LynPage = () => {
  return (
    <>
      <Header text="lyn jkt48" />
      <AllPhotosMember src={lynPhotos} />
    </>
  );
};

export default LynPage;
