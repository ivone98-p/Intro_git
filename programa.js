var map = L.map('map').setView([4.675233, -74.095495], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([4.673788902309948, -74.09553011283904]).addTo(map); marker.bindPopup("<b>Marcador 1</b><br>Este es el primer marcador.").openPopup();
var marker = L.marker([4.675637480385955, -74.09478138743721]).addTo(map);
var marker = L.marker([4.6772357955618595, -74.09380645607523]).addTo(map);
var marker = L.marker([4.679461410074737, -74.09264589358779]).addTo(map);
var marker = L.marker([4.678049411509042, -74.09134145320431]).addTo(map);
