
mapboxgl.accessToken =
'pk.eyJ1IjoiYmVuZXRlc2xhIiwiYSI6ImNsZDI5cG5jdjAydWYzcHBnYTMza2oxMXUifQ.wWQIUwQ2kEnGt22_B5OdDw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [-71.157895, 42.707741]
});
function loadMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuZXRlc2xhIiwiYSI6ImNsZDI5cG5jdjAydWYzcHBnYTMza2oxMXUifQ.wWQIUwQ2kEnGt22_B5OdDw';
     const map = new mapboxgl.Map({
        container: 'map',
        center: [0, 0],
        zoom: 2,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12'
    });

    map.on('load', () => {
        const width = 64; // The image will be 64 pixels square
        const bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
        const data = new Uint8Array(width * width * bytesPerPixel);

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < width; y++) {
                const offset = (y * width + x) * bytesPerPixel;
                data[offset + 0] = (y / width) * 255; // red
                data[offset + 1] = (x / width) * 255; // green
                data[offset + 2] = 128; // blue
                data[offset + 3] = 255; // alpha
            }
        }

        map.addImage('gradient', { width: width, height: width, data: data });

        map.addSource('point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [0, 0]
                        }
                    }
                ]
            }
        });
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
                'icon-image': 'gradient'
            }
        });
    });
}