import { useEffect, useState, useCallback } from "react";
import { createClient } from 'pexels';
import { useParams } from "react-router-dom";

const API_KEY = 'GdIM7iMpv8ykw6bxvdvHtSswGOcwLkKyRgZQi2ECjRq4GtRUUWDsWC6F';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const params = useParams();
  const client = createClient(API_KEY);

  const handleFetch = useCallback(async () => {
    const result = await client.photos.search({ query: params.id, per_page: params.num });
    setPhotos(result.photos);
  }, [client, params.id, params.num]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const name = params.id[0].toUpperCase() + params.id.slice(1);

  return (
    <>
      <h2>{name}</h2>
      <div>
        {photos.length > 0 ? (
          photos.map((item) => (
            <img className="image" style={{ margin: "10px" }} key={item.id} src={item.src.original} alt={item.alt} />
          ))
        ) : (
          <h1>Try other query</h1>
        )}
      </div>
    </>
  );
};

export default Gallery;
