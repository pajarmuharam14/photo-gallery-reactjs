import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import jeanePhotos from "../../json/photos/jeane.json";

const JeanePage = () => {
  return (
    <>
      <Header text="jeane jkt48" />
      <AllPhotosMember src={jeanePhotos} />
    </>
  );
};

export default JeanePage;
