let map;

function initMap() {
    const loc = {lat: 47.918373, lng:106.917677};
    const map = new google.maps.Map(
        document.querySelector(".map"), {
            center: loc,
            zoom: 14,
    });
    const marker = new google.maps.Marker({
        position: loc, map: map
    });
}

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }