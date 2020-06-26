// Función que calcula la factura dandole una familia y una fecha de salida

import { store } from "./store.js";
import { getInvoiceErrors, getInvoiceSuccess } from "./const-declarations.js";

// Calcula la cantidad de días que una familia ha estado de vacaciones
const getVacationDays = (obj, date) => {
	let result = 0;
	const dateEntry = Date.parse(obj.checkInDate);
	const dateOut = Date.parse(date);
	if (isNaN(dateOut)) {
		return "El parámetro introducido tiene que ser una fecha";
	}
	const resultMiliseconds = dateOut - dateEntry;
	result = Math.round(resultMiliseconds / (1000 * 60 * 60 * 24));
	return result;
};

// Devuelve la habitación a partir de su ID
const getRoomById = (idRoom) => {
	const result = store.rooms.find((value) => value.idRoom === idRoom);
	return result;
};

// Devuelve el precio de una habitación a partir de su ID
const getPriceRoom = (idRoom) => {
	const result = getRoomById(idRoom);
	return result.price;
};

// Devuelve la rebaja del 10% de un cliente por ser un cliente habitual
const getSaleOldClient = (price) => {
	let result = 0;
	result = price * (90 / 100);
	return result;
};

// Devuelve si una familia ha estado previamente en el hotel
const getOldClient = (obj) => {
	const result = store.oldClientFamily.find(
		(value) => value.idFamily === obj.idFamily
	);
	return result;
};

// Calcula la factura total dada una familia y la fecha de salida
const getTotalInvoice = (idFamily, date) => {
	const user = store.clientFamily.find((value) => value.idFamily === idFamily);

	getInvoiceErrors.innerHTML = "";
	getInvoiceSuccess.innerHTML = "";

	const indexFamily = store.clientFamily.findIndex(
		(value) => value.idFamily === idFamily
	);

	if (indexFamily === -1) {
		getInvoiceErrors.innerHTML = "Esta familia no está alojada";
		return;
	}

	let days = getVacationDays(user, date);
	if (typeof days !== "number") {
		getInvoiceErrors.innerHTML = days;
		return;
	}
	if (days <= 0) {
		getInvoiceErrors.innerHTML =
			"La fecha introducida para la factura está mal introducida";
		return;
	}
	const resultArr = user.numRooms.map((value) => getPriceRoom(value) * days);
	let result = resultArr.reduce((prev, next) => prev + next);
	// Comprueba si es un viejo cliente.
	const oldClient = getOldClient(user);
	if (oldClient) {
		result = getSaleOldClient(result);
		getInvoiceSuccess.innerHTML = `El precio total de la estancia es: ${result}€, con un descuento del 10% por cliente habitual`;
		return result;
	}
	getInvoiceSuccess.innerHTML = `El precio total de la estancia es: ${result}€`;
	return result;
};

export { getTotalInvoice, getRoomById, getOldClient, getVacationDays };
