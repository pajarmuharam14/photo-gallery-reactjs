import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import aziziPhotos from "../../json/photos/azizi.json"

const AziziPage = () => {
  return (
    <>
      <Header text="zee jkt48" />
      <AllPhotosMember src={aziziPhotos}/>
    </>
  );
};

export default AziziPage;
