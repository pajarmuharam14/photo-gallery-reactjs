import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import luluPhotos from "../../json/photos/lulu.json";

const LuluPage = () => {
  return (
    <>
      <Header text="lulu jkt48" />
      <AllPhotosMember src={luluPhotos} />
    </>
  );
};

export default LuluPage;
