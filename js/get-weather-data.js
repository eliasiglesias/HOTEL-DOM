// Obtiene el tiempo de una ciudad de los próximos 10 días

const URL1 =
	"http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=%09";
const URL2 = "&q=";
const URL3 = "&language=es&details=true HTTP/1.1";
const apiKey = "LZs8idxgk1MUHpWar4Q4EokzrDRr5zp2";

const URLWeather1 = "http://dataservice.accuweather.com/currentconditions/v1/";

const URLWeather2 = `?apikey=${apiKey}&language=es`;

const getKeyByPostalCode = async (cityPostalCode) => {
	const URL = URL1 + apiKey + URL2 + cityPostalCode + URL3;
	const response = await fetch(URL);
	if (response.status === 200) {
		const data = await response.json();
		return data;
	}
};

const getWeatherByKey = async (cityKey) => {
	const URL = URLWeather1 + cityKey + URLWeather2;
	const response = await fetch(URL);
	if (response.status === 200) {
		const data = await response.json();
		return data;
	}
};

export { getKeyByPostalCode, getWeatherByKey };
