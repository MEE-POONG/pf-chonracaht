import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

interface MapProps {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const Map: React.FC<MapProps> = ({ apiKey, center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [apiKey]);

  const initializeMap = () => {
    const google = window.google;
    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    new google.maps.Marker({
      position: center,
      map,
    });
  };

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
