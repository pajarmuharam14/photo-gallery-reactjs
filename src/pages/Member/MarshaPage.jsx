import Header from "../../components/Header";
import AllPhotosMember from "../../components/Photos";
import marshaPhotos from "../../json/photos/marsha.json";

const MarshaPage = () => {
  return (
    <>
      <Header text="marsha jkt48" />
      <AllPhotosMember src={marshaPhotos} />
    </>
  );
};

export default MarshaPage;
