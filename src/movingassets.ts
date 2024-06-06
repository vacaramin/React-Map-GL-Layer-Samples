// Purpose: Create a moving asset and add it to the map

export const movingAssets: GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          id: '1',
          name: 'vehicle 1'
        },
        geometry: {
          type: 'Point',
          coordinates: [-100, 40]
        }
      },
      {
        type: 'Feature',
        properties: {
          id: '2',
          name: 'vehicle 2'
        },
        geometry: {
          type: 'Point',
          coordinates: [-101, 41]
        }
      }
    ]
};