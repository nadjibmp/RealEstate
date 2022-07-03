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

    const handleCookies = (value) => {
        if (cookies.listingViews)
        {
            // let tempArray = JSON.parse(cookies.listingViews);
            console.log(cookies.listingViews);
        }
        else 
        {
            let temp = JSON.stringify([89,88]);
            console.log(temp);
            setCookie('listingViews',temp, { path: '/', expires: new Date(Date.now() + 24 * 30 * 3600 * 1000) });
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
