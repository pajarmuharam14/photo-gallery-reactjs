import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import ashelPhotos from "../../json/photos/ashel.json";

const AshelPage = () => {
  return (
    <>
      <Header text="ashel jkt48" />
      <AllPhotosMember src={ashelPhotos} />
    </>
  );
};

export default AshelPage;
