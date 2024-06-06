// import React from 'react';
// import { DeckGL, ScatterplotLayer, GeoJsonLayer, ArcLayer } from 'deck.gl';

import ReactMapGl, { Layer, Source } from 'react-map-gl';
import { MAPBOX_ACCESS_TOKEN } from './mapbox';

import { movingAssets } from './movingassets';

const skyLayer = {
  id: 'sky',
  type: 'sky' as 'sky',
  paint: {
    'sky-type': 'atmosphere',
    'sky-atmosphere-sun': [0.0, 0.0],
    'sky-atmosphere-sun-intensity': 15
  }
};

export default function Map() {
  return (
    <>
      <ReactMapGl 
      mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="vehicles" type="geojson" data={movingAssets}>
        <Layer type="symbol"
          layout={{
            'icon-image': 'vehicle-icon',
            'icon-size': 1,
            'text-field': ['get', 'name']
          }}
        />
      </Source>
    </ReactMapGl>
  </>
    
  );
}