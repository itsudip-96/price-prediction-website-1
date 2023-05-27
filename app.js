function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBedValue() {
    var uiBed = document.getElementsByName("uiBedrooms");
    for(var i in uiBed) {
      if(uiBed[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var bed = getBedValue();
    var bathrooms = getBathValue();
    var flr = document.getElementById("uiFloors");
    var cnd = document.getElementById("uiConditions");
    var estPrice = document.getElementById("uiEstimatedPrice");
  
    var url = "http://127.0.0.1:5000/p";    
  
    $.post(url, {
        // total_sqft: parseFloat(sqft.value),
        bed: bed,
        bath: bathrooms,
        flr: flr.value,
        cnd: cnd.value
    },function(data, status) {
        console.log(data.ep);
        estPrice.innerHTML = "<h2>₹ " + data.ep.toString() + "</h2>";
        console.log(status);
    });

  //   $.get(url,function(data, status) {
  //     document.getElementById("demo").innerHTML = 200;
  //     console.log(data.ep);
  //     estPrice.innerHTML = "<h2>" + data.ep.toString() + " Lakh</h2>";
  //     console.log(status);
  // });
  }
  
//   function onPageLoad() {
//     console.log( "document loaded" );
//     var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
//     // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//     $.get(url,function(data, status) {
//         console.log("got response for get_location_names request");
//         if(data) {
//             var locations = data.locations;
//             var uiLocations = document.getElementById("uiLocations");
//             $('#uiLocations').empty();
//             for(var i in locations) {
//                 var opt = new Option(locations[i]);
//                 $('#uiLocations').append(opt);
//             }
//         }
//     });
//   }
  
//   window.onload = onPageLoad;
  