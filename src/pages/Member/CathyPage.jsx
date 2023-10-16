import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import cathyPhotos from "../../json/photos/cathy.json";

const CathyPage = () => {
  return (
    <>
      <Header text="cathy jkt48" />
      <AllPhotosMember src={cathyPhotos} />
    </>
  );
};

export default CathyPage;
