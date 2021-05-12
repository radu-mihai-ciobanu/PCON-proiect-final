const maxApi = require("max-api");

maxApi.outlet("start");

const weather = require('openweather-apis');

	weather.setLang('en');
	// English - en, Russian - ru, Italian - it, Spanish - es (or sp),
	// Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
	// Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
	// Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
	// Turkish - tr, Croatian - hr, Catalan - ca


	// set city by name
	// weather.setCity(Bucharest);
 	// or set the coordinates (latitude,longitude)
  var coords = [45.40467656, 25.6648731];
  //weather.setCoordinate(coords[0], coords[1]);
	// // or set city by ID (recommended by OpenWeatherMap)
	// weather.setCityId(4367872);

  //   // or set zip code
	//weather.setZipCode(15201);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

	// check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID("d4d945c03628f71f47661c2bc07a992d");

  // // get all the JSON file returned from server (rich of info)
	// weather.getAllWeather(function(err, JSONObj){
	// 	maxApi.outlet(JSONObj);
	// });

maxApi.addHandler("getWeather", () => {
  weather.setCoordinate(coords[0], coords[1]);
  weather.getAllWeather(function(err, JSONObj){
		maxApi.outlet(JSONObj);
	});
}
)


maxApi.addHandler("setCoords", (lat, lon) => {
coords[0] = lat;
coords[1] = lon;
}
)
