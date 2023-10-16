/* eslint-disable react/prop-types */
const AllPhotosMember = ({ src }) => {
  const slicePhotos = (a, b) => {
    const slicePhotosArrays = src.photoCollection.slice(a, b);

    return slicePhotosArrays;
  };
  return (
    <div>
      <div className="flex gap-5 my-14 mx-10">
        <div className="flex flex-col gap-5">
          {slicePhotos(0, 20).map((photo) => (
            <img key={photo.id} className="w-full object-cover rounded-lg" src={photo.source} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {slicePhotos(20, 40).map((photo) => (
            <img key={photo.id} className="w-full object-cover rounded-lg" src={photo.source} />
          ))}
        </div>
        <div className="hidden sm:flex flex-col gap-5">
          {slicePhotos(40, 60).map((photo) => (
            <img key={photo.id} className="w-full object-cover rounded-lg" src={photo.source} />
          ))}
        </div>
        <div className="hidden sm:flex flex-col gap-5">
          {slicePhotos(60, 80).map((photo) => (
            <img key={photo.id} className="w-full object-cover rounded-lg" src={photo.source} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPhotosMember;
