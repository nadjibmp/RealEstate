import React, { useContext, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import { DataSend } from '../AnnBody.js';
import { getContext } from '../../Dashboard/addproperty/AddProperty'
import {
    MapContain
} from './Map.styled'
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});
const Map = ({ zoom, setMark, locations, navigateto, clickable }) => {
    const location = useLocation();
    //declaration of constant
    const [map, setMap] = useState(null);
    const data = useContext(DataSend);
    const setLatLong = useContext(getContext)
    const [position, setPosition] = useState(null)
    const [localLocation, setLocalLocation] = useState([
        {
            key: '0',
            popupMessage: 'Chétaibi',
            position: {

                lat: '37.05',
                lng: ' 7.3667'
            }
        },
    ])

    //Helper component so we can mek on click event on the map to get lat and lang
    function LocationMarker() {
        const map = useMapEvents({
            click(e) {
                map.locate()
                setPosition(e.latlng);
                setLatLong(e.latlng)
            }
        })
        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    //navigate between markers ...
    var locationObj = "";
    const navigate = () => {
        if (map && locations || locations) {
            locationObj = locations.find(lo => lo.key === data);
            if (locationObj) {
                map.flyTo(locationObj.position, 25);
            }
        }
    }


    // navigate to that position 
    const navigateTo = () => {
        if (navigateto) {
            if (map) {
                map.flyTo(navigateto, zoom || 12);
            }

        }
    }
    useEffect(() => {
        navigateTo();
    }, [navigateto])

    useEffect(() => {
        navigate();
    }, [data, locationObj])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <MapContain
            center={{ lat: 36.752887, lng: 3.042048 }}
            zoom={zoom || 6}
            whenCreated={setMap}
        >
            {
                location.pathname != '/dashboard/addproperty' ?
                    locations.length > 0 && setMark ?
                        locations.map(position => {
                            return (
                                <Marker
                                    key={position.key}
                                    position={position.position}
                                    interactive={false}
                                />
                            )
                        })
                        : null
                    : null
            }
            {
                clickable ?  <LocationMarker /> : null
            }
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
            />

        </MapContain>
    );
};

export default Map;
