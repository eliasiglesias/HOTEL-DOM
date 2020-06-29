import { getKeyByPostalCode, getWeatherByKey } from "./get-weather-data.js";

import {
	weather,
	weatherImg,
	weatherDegrees,
	weatherInfo,
} from "./const-declarations.js";

const cityPostalCode = "15007";

const getWeather = () => {
	const result = getKeyByPostalCode(cityPostalCode);
	weatherImg.innerHTML = "";
	weatherDegrees.innerHTML = "";
	weatherInfo.innerHTML = "";
	result
		.then((weather) => {
			const result = getWeatherByKey(weather[0].Key);
			result
				.then((weatherConditions) => {
					weatherImg.insertAdjacentHTML(
						"beforeend",
						`<img class="img-fluid" width="150px" height="150px" src="../img/${weatherConditions[0].WeatherIcon}.png">`
					);
					weatherInfo.insertAdjacentHTML(
						"beforeend",
						`<div><h4>${weatherConditions[0].WeatherText}</h4></div>`
					);
					weatherDegrees.insertAdjacentHTML(
						"beforeend",
						`<div><h4>${weatherConditions[0].Temperature.Metric.Value}º</h4></div>`
					);
				})
				.catch((error) => console.log(error));
		})
		.catch((error) => {
			console.log(error);
		});
};

export { getWeather };
