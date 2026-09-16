/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { HTMLAttributes, useEffect, useRef } from 'react';
import mapboxgl, { Map, MapboxOptions } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useAppContext } from 'providers/AppProvider';
// @ts-ignore
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker?worker';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';
// @ts-ignore
mapboxgl.workerClass = MapboxWorker;

interface MapboxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  options: Omit<MapboxOptions, 'container'>;
  mapRef?: React.Ref<Map | null>;
}

const Mapbox = ({ className, options, mapRef, ...rest }: MapboxProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const {
    config: { isDark }
  } = useAppContext();

  const styles = {
    default: 'mapbox://styles/mapbox/light-v11',
    auto: isDark
      ? 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew'
      : 'mapbox://styles/themewagon/clj57pads001701qo25756jtw',
    light: 'mapbox://styles/themewagon/clj57pads001701qo25756jtw',
    dark: 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew'
  };

  const {
    config: { theme }
  } = useAppContext();

  useEffect(() => {
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: styles[theme],
        scrollZoom: false,
        ...options
      });

      if (options.center) {
        new mapboxgl.Marker({
          color: '#ed2000'
        })
          .setLngLat(options.center)
          .addTo(map.current);
      }
    }
  }, []);

  useEffect(() => {
    map.current?.setStyle(styles[theme]);
  }, [theme]);

  useEffect(() => {
    if (typeof mapRef === 'function') {
      mapRef(map.current);
    } else if (mapRef) {
      mapRef.current = map.current;
    }
  }, [mapRef]);

  return (
    <>
      <div className={classNames(className, 'mapbox-container')} {...rest}>
        {/* the gold puts the height class on the map element itself; here the
            caller sizes the wrapper, so the map has to fill it — without this
            the element is 0 tall and mapbox keeps its default 300px canvas */}
        <div ref={mapContainer} className="map-container size-full" />
        {/* plain buttons, as the gold's FlightMap markup has: plugins/mapbox.css
            styles `.zoomIn`/`.zoomOut` itself with `@apply btn … btn-square
            size-7.5`. Adding the literal `btn` class via <Button> brought in
            HB's `width: var(--btn-width)` (unset), which beat that size and
            left 52x30 pills instead of 30px squares. */}
        <div className="mapbox-control-btn">
          <button
            type="button"
            onClick={() => map.current?.zoomIn()}
            className="zoomIn"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            type="button"
            onClick={() => map.current?.zoomOut()}
            className="zoomOut"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Mapbox;
