import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import anindyaPhotos from "../../json/photos/anindya.json";

const AnindyaPage = () => {
  return (
    <>
      <Header text="anindya jkt48" />
      <AllPhotosMember src={anindyaPhotos} />
    </>
  );
};

export default AnindyaPage;
