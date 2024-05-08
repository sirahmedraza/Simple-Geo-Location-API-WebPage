// Define the async function to load the geolocation data
async function getLocation() {
    // Create a new script element
    var script = document.createElement('script');
    
    // Set the source of the script to the geoplugin API with a callback parameter
    script.src = 'http://www.geoplugin.net/json.gp?jsoncallback=getLocationData';
    
    // Append the script to the body of the document, which triggers the request
    document.body.appendChild(script);
}

// Callback function to process the data received from the geoplugin API
function getLocationData(data) {
    // console.log(data); // Log the data to the console for debugging
    
    const infoHtml = document.getElementById('info');
    infoHtml.innerHTML = `${data.geoplugin_countryName}`;

    const ip = document.getElementById('ip');
    ip.innerHTML = `${data.geoplugin_request}`;

    const country = document.getElementById('country');
    country.innerHTML = `${data.geoplugin_countryName}`;

    const region= document.getElementById('region');
    region.innerHTML = `${data.geoplugin_regionName}`;

    const timezone = document.getElementById('timezone');
    timezone.innerHTML = `${data.geoplugin_timezone}`;

    const currency = document.getElementById('currency');
    currency.innerHTML = `${data.geoplugin_currencyCode}`;

    const convertedCurrency = document.getElementById('converted-currency');
    convertedCurrency.innerHTML = `${data.geoplugin_currencySymbol} ${data.geoplugin_currencyConverter}`;
}

// Call the getLocation function to start the process
getLocation();

async function getSuggestions(){
    const response = await fetch('https://www.boredapi.com/api/activity?type=recreational');
    const data = await response.json();
    if(!response){
        const suggestion = document.getElementsByClassName('suggestion-heading');
        suggestion.innerHTML = " ";
    }else{
        boredActivity(data);
    }
    
}
function boredActivity(data){
    console.log(data);
    const suggestion = document.getElementById('suggestion');
    suggestion.innerHTML = `${data.activity}`;
}
getSuggestions();

