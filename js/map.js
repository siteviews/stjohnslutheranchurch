function initMap() {

	var broadway = {
		info: '<strong>GETHSEMANE BAPTIST CHURCH</strong><br>\ Mangapuram Colony, Meenakshi Estate,<br>\ Jeedimetla, Hyderabad, Telangana 500010<br>\
					<a target="_blank" href="https://goo.gl/s71NEP">Get Directions</a>',
		lat: 17.5072556,
		long: 78.489468
	};

	 var belmont = {
		info: '<strong>GETHSEMANE BAPTIST CHURCH</strong><br>\
					Jayadarsini Enclave<br> Express Highway # 7, Near Kompally,<br>\Secunderabad, Telangana 500100<br>\
					<a href="https://goo.gl/DpirvA">Get Directions</a>',
		lat: 17.5554286,
		long: 78.4960521
	};

	var sheridan = {
		info: '<strong>GETHSEMANE BAPTIST CHURCH</strong><br>\r\
					Behind Railway Station,<br> Medchal,<br>\ Secunderabad, Telangana 501401<br>\
					<a href="https://goo.gl/F6p33Z">Get Directions</a>',
		lat: 17.6376556,
		long: 78.4854741
	}; 

	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2], 
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(17.5554286, 78.489468),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}















	function SlideMobile() {
		$(window).resize(function(){
			 if ( $(window).width() > 768 ) {
				$('.home-slide').slick({
				arrows:false,
				slidesToShow: 1,
				slidesToScroll: 1
				});
			}
		});
		$(window).resize();
	}
    SlideMobile();