$(document).ready(function() {
    $("button").click(function() {
        var data = $("input").val();
        console.log(data);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + data + "&units=imperial&appid=8307a32cb1db0b0c935ac8592e93cb0a"
        console.log(url);
        $.get(url, function(data) {
            console.log(data);
            var result = data.name + 
            "Temperature: " + data.main.temp + 
            "Humidity: " + data.main.humidity
            $("#weather-results").append(result);
            
        })


    });
});
