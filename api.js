jQuery.support.cors = true;


var data;
var statusMap;

const requestWeather = () => {
   
   $.getJSON({
       url: "https://api.hgbrasil.com/weather",
       data: {
           key: 'b488def8',
           format: 'json-cors',
           city_name: "Palmeira"
        },
       success: function ( result ) {
        


           data = result.results;
           city_name = data.city_name;

            $ ("#idcidade").html (data.city_name);
            $ ("#temp").html (data.temp + "°C"); 
            $ ("#status").html (data.description);
            $ ("#vent").html (data.wind_speedy);
            $ ("#nascer").html (data.sunrise);
            $ ("#porsol").html (data.sunset);
           }   
        
    })
}
   requestWeather();