import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import danellaPhotos from "../../json/photos/danella.json";

const DenaPage = () => {
  return (
    <>
      <Header text="danella jkt48" />
      <AllPhotosMember src={danellaPhotos} />
    </>
  );
};

export default DenaPage;
