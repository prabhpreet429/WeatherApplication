/*var cup;
var xhttp = new XMLHttpRequest();

xhttp.open('GET','https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6860bbd3c7fad75094b46da53b076de&units=metric', true);

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
            cup = JSON.parse(xhttp.responseText);
            console.log(cup.main.temp);
            document.getElementById('cityname').innerHTML=cup.name;
            document.getElementById('temp').innerHTML=cup.main.temp+'&deg C';
            document.getElementById('feels').innerHTML='Feels Like: '+cup.main.feels_like+'&deg C';
            document.getElementById('icon').src='http://openweathermap.org/img/wn/'+cup.weather[0].icon+'.png';
            document.getElementById('desc').innerHTML=cup.weather[0].description;
            document.getElementById('minmax').innerHTML='Min/Max: '+cup.main.temp_min+'&deg C'+'/'+cup.main.temp_max+'&deg C';
            console.log(cup);
        
    }
  };


  xhttp.send();
*/
window.addEventListener('load', function()
{
    var xhr = null;

    getXmlHttpRequestObject = function()
    {
        if(!xhr)
        {               
            // Create a new XMLHttpRequest object 
            xhr = new XMLHttpRequest();
        }
        return xhr;
    };

    updateLiveData = function()
    {
        var now = new Date();
        // Date string is appended as a query with live data 
        // for not to use the cached version 
        //var url = 'livefeed.txt?' + now.getTime();
        xhr = getXmlHttpRequestObject();
        xhr.onreadystatechange = evenHandler;
        // asynchronous requests
        xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6860bbd3c7fad75094b46da53b076de&units=metric', true);
        // Send the request over the network
        xhr.send(null);
    };

    updateLiveData();

    function evenHandler()
    {
        // Check response is ready or not
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            cup = JSON.parse(xhr.responseText);
            //console.log(cup.main.temp);
            document.getElementById('cityname').innerHTML=cup.name;
            document.getElementById('temp').innerHTML=cup.main.temp+'&deg C';
            document.getElementById('feels').innerHTML='Feels Like: '+cup.main.feels_like+'&deg C';
            document.getElementById('icon').src='http://openweathermap.org/img/wn/'+cup.weather[0].icon+'.png';
            document.getElementById('desc').innerHTML=cup.weather[0].description;
            document.getElementById('minmax').innerHTML='Min/Max: '+cup.main.temp_min+'&deg C'+'/'+cup.main.temp_max+'&deg C';
            //console.log(cup);
            setTimeout(updateLiveData(), 1000);
        }
    }
});