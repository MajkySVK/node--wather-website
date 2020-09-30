const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFqa3lzdmsiLCJhIjoiY2tmaDVmMGxlMDI4aDJxbGNrenBsZjM0bCJ9.8YWSaz3htWwcsQEhi9WQ4w&limit=1';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geo service!!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location!!', undefined);
        } else {
            callback(undefined, {
                longtitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;