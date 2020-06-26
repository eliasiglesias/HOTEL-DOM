// Salida del hotel de la familia. Recibe como parámetro la familia

import {
	getRoomById,
	getTotalInvoice,
	getOldClient,
	getVacationDays,
} from "./get-invoice.js";
import { store } from "./store.js";
import { checkOutErrors, checkOutSuccess } from "./const-declarations.js";

// Borra el registro del numero de habitaciones de la familia
const deleteRoomsFamily = (obj) => {
	const result = obj;
	obj.numRooms = [];
	return result;
};

// Añade la familia que hace el check out al array de viejos clientes
const addToOldClients = (obj) => {
	const result = deleteRoomsFamily(obj);
	store.oldClientFamily.push(result);
	return;
};

// Elimina la familia, vacía las habitaciones y devuelve la factura total
const checkOut = (idFamily, date) => {
	const result = {
		user: {},
		errors: [],
	};
	checkOutErrors.innerHTML = "";
	checkOutSuccess.innerHTML = "";

	result.user = store.clientFamily.find((value) => value.idFamily === idFamily);

	// Calcula el índice de la familia
	const indexFamily = store.clientFamily.findIndex(
		(value) => value.idFamily === idFamily
	);

	if (indexFamily === -1) {
		checkOutErrors.innerHTML = "Esta familia no está alojada";
		return;
	}
	const checkDate = Date.parse(date);
	if (!checkDate) {
		checkOutErrors.innerHTML = "La fecha no está bien introducida";
		return;
	}

	const days = getVacationDays(result.user, date);
	if (typeof days !== "number") {
		return days;
	}
	if (days <= 0) {
		checkOutErrors.innerHTML =
			"La fecha introducida para el checkOut está mal introducida";
		return;
	}

	// Crea un array con todas las habitaciones de una familia
	let res = result.user.numRooms.map((value) => getRoomById(value));

	// Vacía cada habitacion que estaba ocupada por la familia
	res.forEach((value) => (value.guest = 0));

	// Calcula la factura total de la familia
	const totalPrice = getTotalInvoice(idFamily, date);

	// Comprueba si es un viejo cliente. Si no lo es, lo añade
	const oldClient = getOldClient(result.user);
	if (!oldClient) {
		// Añade la familia a viejos clientes
		addToOldClients(result.user);
		store.clientFamily.splice(indexFamily, 1);
		checkOutSuccess.innerHTML = `El precio total de la estancia es: ${totalPrice}€. Gracias por su visita!`;
		return;
	}

	store.clientFamily.splice(indexFamily, 1);
	checkOutSuccess.innerHTML = `El precio total de la estancia es: ${totalPrice}€, con un 10% de descuento por ser cliente habitual. Muchas gracias, espero y deseo que vuelvan pronto!`;
	return;
};

export { checkOut as checkOutFunction, getOldClient };
