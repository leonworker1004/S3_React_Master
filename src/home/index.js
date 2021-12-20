import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { MyGoogleMap } from '../component/MyGoogleMap';
import S3Box from '../component/S3Box';

export const geolocationOption = 
{
  enableHighAccuracy: true,
  timeout: 60000,
  // maximumAge: 60000
}

function Index() {
  const [ location, setLocation ] = useState(null);

  useEffect(() => {
    getLocationFromNavigator();
  }, [])
  const getLocationFromNavigator = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation({lng: position.coords.longitude, lat: position.coords.latitude });
    }, (async (err) => {
      console.log('location error=>', err);
      if (err.code === 1) {
        alert('Please allow location known!');
      } else {
        alert(err.message);
      }
    }), geolocationOption);
  }

  return (
    <MainPage>
    {location &&
      <div className='map-view' >
        <MyGoogleMap 
          isMarkerShown={false}
          zoom={10}
          defaultCenter={location}
          getMapInfo={() => {}}
        />
        <S3Box />
      </div>
    }
    </MainPage>
  )
}

const MainPage = styled.div`
  .map-view {
    width: 100%;
    height: 100vh;
  }
  .map-search-box {
    box-sizing: border-box;
    border: 1px solid transparent;
    width: 440px;
    height: 32px;
    margin-top: 67px !important;
    padding: 0 12px;
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    outline: none;
    text-overflow: ellipses;
  }
  .s3-box {
    top: 67px;
    left: 50px;
    position: absolute;
    background-color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 300px;
    height: auto;
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    color: #888888;
    padding: 15px;
    p {
      margin: 8px 0;
    }
  }
  .font-title {
    font-size: 16px;
  }
  .font-icon {
    font-size: 13px
  }
  .font-normal {
    font-size: 14px
  }
  .s3-inter-panel {
    padding: 5px;
  }
  .s3-icon-link {
    display: flex;
    align-items: center;
    margin-right: 10px
  }
  .s3-selectable {
    &:hover {
      background-color: #0001;
    }
  }
  .s3-flex {
    display: flex;
    align-items: center;
  }
  .s3-grey-background {
    background-color: #0001;
    margin: 0 -20px;
  }
  .s3-align-center {
    display: flex;
    justify-content: space-between;
  }
  .s3-flex-between {
    display: flex;
    justify-content: space-between;
  }
  .s3-flex-around {
    display: flex;
    justify-content: space-around;
  }
  .s3-icon {
    width: 21px;
    height: 21px;
    margin: 4px;
    color: black;
    opacity: 0.6;
  }
  .s3-icon-flip {
    fill: #0008;
    color: white;
  }
  .s3-tool-bar {
    position: absolute;
    top: 107px;
    left: 450px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 310px;
    height: auto;
    color: #0000;
    padding: 0;
  }
  .s3-tool-button-group {
    display: flex;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    margin-right: 5px;
  }
  .s3-tool-button {
    background-color: white;
    opacity: 1;    
    border-right: 1px solid #0006;
    border-radius: 2px;
  }
  .s3-icon-tool {
    background: url("//www.gstatic.com/mapspro/images/icons-toolbar-002.svg");
    width: 21px;
    height: 21px;
    margin: 4px;    
    opacity: 0.5;     
  }
  .s3-tool-stream-button {
    background-color: yellow;
    opacity: 1;    
    border-right: 1px solid #0006;
    border-radius: 2px;
  }
  .s3-icon-tool-stream {
    display: inline-flex;
    align-items: center;
    height: 21px;
    margin: 4px;    
    opacity: 1;   
    color: black;  
    font-size: 14px;
  }
  .s3-edit-tool {
    display: flex;
  }
  .s3-tool-left {
    background-position: 0 0;
  }
  .s3-tool-right {
    background-position: -21px 0;
  }
  .s3-tool-hand {
    background-position: -63px 0;
  }
  .s3-tool-pin {
    background-position: -42px 0;
  }
  .s3-tool-line {
    background-position: -21px -21px;
  }
  .s3-tool-direction {
    background: url('//www.gstatic.com/mapspro/images/icons-infowindow-000.svg');
    background-position: -21px 0;
  }
  .s3-tool-ruler {
    background-position: -0px -42px;
  }
  .s3-icon-menu {
    background: url("//www.gstatic.com/mapspro/images/icons-app-004.svg");
    width: 21px;
    height: 21px;
    margin: 4px;
  }
  .s3-icon-menu-more {
    background-position: 0px -84px;
  }
  .s3-icon-menu-layers {
    background-position: -63px -63px;
  }
  .s3-icon-menu-share {
    background-position: -42px -84px;
  }
  .s3-icon-menu-eye {
    background-position: -63px -84px;
  }
  .s3-menu-layer-items {
    padding: 0 10px;
  }
  .s3-divider {
    width: 100%;
    border-top: 2px solid black;
    border-color: #0008;
  }

  
`

export default Index;
