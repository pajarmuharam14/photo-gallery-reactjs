import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import calliePhotos from "../../json/photos/callie.json";

const CalliePage = () => {
  return (
    <>
      <Header text="callie jkt48" />
      <AllPhotosMember src={calliePhotos} />
    </>
  );
};

export default CalliePage;
