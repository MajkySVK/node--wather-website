const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f3d76d5a1fd57ecf94049f693524238e&query=' + latitude + ',' + longtitude;
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find weather for location', undefined);
        } else {
            callback(undefined, 'Weather: ' + body.current.weather_descriptions[0] +
                ' , ' + body.current.temperature + ' degrees out and' +
                ' it feels like ' + body.current.feelslike + ' degrees, with speed of wind '
                +body.current.wind_speed+'km/h'
            )
        }
    })
}

module.exports = forecast;