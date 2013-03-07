var osmAttribution = 'Map-Data <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-By-SA</a> by <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors';
var osmUrl = 'http://{s}.tiles.vesseltracker.com/vesseltracker/{z}/{x}/{y}.png';
var osmLayer = new L.tileLayer(osmUrl, {attribution: osmAttribution});

var map = L.map(
  'map',
  {
    worldCopyJump: true,
    maxZoom: 17,
    minZoom: 10
  }
);

map.addLayer(osmLayer);
map.setView([52.410,4.790], 14);