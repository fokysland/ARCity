export const getReadablePosition = async ({latitude, longitude}) => {
  const res = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=6913878e-21a3-48de-963e-c45b75215bfe&format=json&geocode=${longitude},${latitude}`,
  );
  const parsed = await res.json();
  return parsed.response.GeoObjectCollection.featureMember[0].GeoObject
    .metaDataProperty.GeocoderMetaData.text;
};
