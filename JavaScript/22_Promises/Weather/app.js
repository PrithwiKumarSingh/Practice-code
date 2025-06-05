document.querySelector('button').addEventListener("click", ()=>{
    let input = document.querySelector('#location').value;

   function getInfo(data){
        const elem = document.getElementById('weatherInfo')
        elem.innerHTML = `Today's Temprature : ${data.current.temp_c}`;
    }

   const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=e20d9e1db15e4b2e8b3160202250406&q=${input}&aqi=yes`)
    prom
    .then(response=>response.json())
    .then(data=>getInfo(data));
})

