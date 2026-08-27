import { use, useEffect, useRef } from 'react';
import L, { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet.tilelayer.colorfilter';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/styles';
import { MapMarkerPoints } from 'data/mapMarkerPoints';
import { AppContext } from 'providers/AppProvider';

const TILE_URL =
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

/** Same colour filters as phoenix-tailwind src/js/theme/leaflet.js */
const getFilter = (theme: string) =>
  theme === 'dark'
    ? [
        'invert:98%',
        'grayscale:69%',
        'bright:89%',
        'contrast:111%',
        'hue:205deg',
        'saturate:1000%'
      ]
    : ['bright:101%', 'contrast:101%', 'hue:23deg', 'saturate:225%'];

/** leaflet.tilelayer.colorfilter v2 augments TileLayer with these members */
interface ColorFilterTileLayer extends L.TileLayer {
  updateColorFilter: (filter: string[]) => void;
}

const LayerComponent = ({ data }: { data: MapMarkerPoints[] }) => {
  const mapMarker = L.icon({
    iconUrl: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII=`
  });
  const map = useMap();
  const { config } = use(AppContext);
  const { theme } = config;
  const tileLayerRef = useRef<ColorFilterTileLayer | null>(null);

  useEffect(() => {
    map.invalidateSize();
  }, [config]);

  useEffect(() => {
    const filter = getFilter(theme);
    if (!tileLayerRef.current) {
      tileLayerRef.current = L.tileLayer(TILE_URL, {
        attribution: undefined,
        // `colorFilter` is added by leaflet.tilelayer.colorfilter
        ...({ transparent: true, colorFilter: filter } as L.TileLayerOptions)
      }).addTo(map) as ColorFilterTileLayer;
    } else {
      tileLayerRef.current.updateColorFilter(filter);
    }
  }, [theme]);

  return (
    <MarkerClusterGroup chunkedLoading={false} spiderfyOnMaxZoom={false}>
      {data.map(marker => (
        <Marker
          key={marker.id}
          position={[marker.lat, marker.lng]}
          icon={mapMarker}
        >
          <Popup minWidth={180}>
            <h6 className="mb-1">{marker.name}</h6>
            <p className="m-0 text-soft">
              {marker.street}, {marker.location}
            </p>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

/** `#map` in phoenix-tailwind e-commerce/TopRegions.pug */
const EcomTopRegionsMap = ({ data, ...rest }: { data: MapMarkerPoints[] }) => {
  const position: LatLngExpression = [10.737, 0];
  const {
    config: { isRTL }
  } = use(AppContext);

  return (
    <MapContainer
      zoom={isRTL ? 1.8 : 1.5}
      minZoom={isRTL ? 1.8 : 1.3}
      maxZoom={18}
      zoomSnap={0.5}
      center={position}
      {...rest}
      className="h-full bg-soft min-h-75"
    >
      <LayerComponent data={data} />
    </MapContainer>
  );
};

export default EcomTopRegionsMap;
