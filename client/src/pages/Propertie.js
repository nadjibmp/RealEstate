import React from 'react'
import Property from '../component/propertyWrapper/Property';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
const Propertie = () => {
    const params = useParams();
    const [listing, setListing] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [viewedAlready, setViewedAlready] = useState([]);
    const GetListingByIdListing = () => {
        axios
            .get(`http://localhost:3006/api/GetListingByIdListing/${params.id}`)
            .then(result => {
                setListing(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const InsertVues = () => {
        axios
            .post('http://localhost:3006/api/AddVue', {
                params: {
                    id_property: params.id,
                }
            })
            .then(response => {
                console.log('vue added');
            })
            .catch(error => {
                console.log('vue added');
            })
    }

    const handleCookies = (value) => {
        if (cookies.listingViews) {
            let temp = cookies.listingViews;
            if (!temp.includes(params.id)) {
                temp.push(params.id);
                setCookie('listingViews', temp, { path: '/', expires: new Date(Date.now() + 24 * 30 * 3600 * 1000) });
                InsertVues();
            }
        }
        else {
            let temp = [params.id];
            console.log('helooooooooooooooooooooooooooooooo');
            setCookie('listingViews', temp, { path: '/', expires: new Date(Date.now() + 24 * 30 * 3600 * 1000) });
            console.log('helooooooooooooooooooooooooooooooo');
            InsertVues();
        }

    }
    useEffect(() => {
        GetListingByIdListing();
        handleCookies(params.id);
    }, [params.id])

    return (
        <>
            {
                listing.data != undefined ? <Property information={listing} /> : null
            }
        </>
    )
}

export default Propertie
