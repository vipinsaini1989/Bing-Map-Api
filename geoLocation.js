'use strict';

// require('dotenv').config();
var request = require('request');
var querystring = require('querystring');
var BING_MAPS_API_KEY="Am***YHCRIX8H***2FBx_Hm6Kpy***dagKqOf2-6b***mebz4FHD7***4OD***c4";
var endpoint = "https://dev.virtualearth.net/REST/v1/Locations/";

module.exports.bingMapsLookup = function(query,isPoint,callback) {
    if (isPoint) {
        var queryParams = {
            "key": BING_MAPS_API_KEY ? BING_MAPS_API_KEY : process.env.BING_MAPS_API_KEY
        }
        var locationRequest = endpoint + query + "?" + querystring.stringify(queryParams);
    }
    else {
        queryParams = {
        "q": query,
        "key": BING_MAPS_API_KEY ? BING_MAPS_API_KEY : process.env.BING_MAPS_API_KEY
        }
    
        locationRequest = endpoint + "?" + querystring.stringify(queryParams);
    }
    
    var marker;

    request(locationRequest,
        function (err,
            response, body) {
                var data = JSON.parse(body);
            if (err){
                console.log("Error retrieving Bing Maps result: ", err);
                return callback(null, err);
            }
            else {
                    marker = {
                        ambiguity: data.resourceSets[0].estimatedTotal,
                        coords: data.resourceSets[0].resources[0].point.coordinates,
                        region: data.resourceSets[0].resources[0].address.adminDistrict,
                        country: data.resourceSets[0].resources[0].address.countryRegion
                    }
                    return callback(marker, false)
            }
        });
}

