// Initialize and add the map
function initMap() {
    // The location of Uluru
    const mekarwangi = { lat: -6.541218332068364, lng: 106.78224063110645 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: mekarwangi,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: mekarwangi,
      map: map,
    });
  }