import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import gitaPhotos from "../../json/photos/gita.json";

const GitaPage = () => {
  return (
    <>
      <Header text="gita jkt48" />
      <AllPhotosMember src={gitaPhotos} />
    </>
  );
};

export default GitaPage;
