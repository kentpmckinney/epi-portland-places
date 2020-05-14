import $ from 'jquery';
import './style.css';

var map = null;

$(document).ready(function () {
  $('#map').show();
  let script = document.createElement('script');
  script.innerHTML =
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'),
        { center: { lat: 45.519521, lng: -122.677410 }, zoom: 13 });
      let locations = [
        { title: 'Ballroom Dance Company', location: { lat: 45.430483, lng: -122.769038 } },
        { title: 'Back to Eden Bakery', location: { lat: 45.559352, lng: -122.641800 } },
        { title: 'Pad Thai Kitchen', location: { lat: 45.516817, lng: -122.641514 } },
        { title: 'Robert Hauk Tango', location: { lat: 45.516167, lng: -122.657300 } },
        { title: `Hawthorne Powells`, location: { lat: 45.512513, lng: -122.625344 } },
        { title: `Norse Hall`, location: { lat: 45.523938, lng: -122.654870 } },
        { title: `The Sudra`, location: { lat: 45.523560, lng: -122.637039 } },
        { title: `Lone Fir Cemetary`, location: { lat: 45.518258, lng: -122.639473 } },
        { title: `Azoth Temple`, location: { lat: 45.515572, lng: -122.636708 } },
        { title: `Bhuna Indian Food`, location: { lat: 45.527970, lng: -122.694254 } },
        { title: `New Renaissance Books`, location: { lat: 45.532549, lng: -122.698486 } },
        { title: `Epicodus`, location: { lat: 45.520712, lng: -122.677377 } },
        { title: `Rite Aid`, location: { lat: 45.519637, lng: -122.678793 } },
        { title: `Morrison Bridge`, location: { lat: 45.517855, lng: -122.669652 } },
        { title: `The Best Starbucks Ever`, location: { lat: 45.520690, lng: -122.678031 } },
        { title: `Petunia's Pastries`, location: { lat: 45.521060, lng: -122.683720 } },
        { title: `Powell's City of Books`, location: { lat: 45.523175, lng: -122.681226 } }
      ];
      locations.push({ title: 'Epicodus', location: { lat: 45.520712, lng: -122.677377 } });
      for (let i = 0; i < locations.length; i++) {
        let position = locations[i].location;
        let title = locations[i].title;
        let marker = new google.maps.Marker({
          map: map,
          position: position,
          title: title,
          animation: google.maps.Animation.DROP,
          id: i
        });
      }

    };
  script.type = 'text/javascript';
  $('body').append(script);
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3&callback=initMap');
  $('body').append(script);
});

/*

	$('#maps-button').click(function() {
		$('#map').show();
		if (!mapCreated) {
			let script = document.createElement('script');
			script.innerHTML = `
				function initMap() {
					map = new google.maps.Map(document.getElementById('map'),
					{ center: {lat: 45.519521, lng: -122.677410}, zoom: 13 });
					let locations = [];
					locations.push({title: 'Epicodus', location: {lat: 45.520712, lng: -122.677377}});
					for (let i = 0; i < locations.length; i++) {
						let position = locations[i].location;
						let title = locations[i].title;
						let marker = new google.maps.Marker({
							map: map,
							position: position,
							title: title,
							animation: google.maps.Animation.DROP,
							id: i
						});
					}
				}`;
			script.type = 'text/javascript';
			$('body').append(script);
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${mapsKey}&callback=initMap`);
			$('body').append(script);
			mapCreated = true;
		}
		else {
			let locations = [];
			locations.push({title: 'Epicodus', location: {lat: 45.520712, lng: -122.677377}});
			locations.push({title: `The Best Starbucks Ever`, location: {lat: 45.520690, lng: -122.678031}});
			for (let i = 0; i < locations.length; i++) {
					let position = locations[i].location;
					let title = locations[i].title;
					let marker = new google.maps.Marker({
							map: map,
							position: position,
							title: title,
							animation: google.maps.Animation.DROP,
							id: i
					});
			}
		}
	});

*/
