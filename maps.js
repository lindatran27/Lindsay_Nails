function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(35.22, -80.84),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    
    var marker1 = new google.maps.Marker({
       position: new google.maps.LatLng(35.30, -80.67),
       map: map,
       animation: google.maps.Animation.Drop
    });
    

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(35.263750, -80.841190),
        map: map,
        animation: google.maps.Animation.Drop
     });

    var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(35.387540, -80.750820),
        map: map,
        animation: google.maps.Animation.Drop
     });

    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(35.145700, -80.786520),
        map: map,
        animation: google.maps.Animation.Drop
     });

    var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(35.2421042, -80.9397882),
        map: map,
        animation: google.maps.Animation.Drop
     });
}
    

    
    

    //need possible locations in charrlote 
    // you need an actual address? 

    // also I will rename this javascript file to maps.js instead of calendar.js