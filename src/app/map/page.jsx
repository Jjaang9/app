"use client";

import { useEffect, useState } from "react";
import { styled } from "styled-components";

function Map() {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=db30475675f4829df0478c9b3228f856&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <MapCenterWrapper>
      <div id="map" style={{ width: "300px", height: "300px" }}></div>
    </MapCenterWrapper>
  );
}

const MapCenterWrapper = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Map;
