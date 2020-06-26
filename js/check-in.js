// Check in de un hotel (recibe un objeto y el número de habitaciones que desean los huéspedes)

import { store } from "./store.js";
import {
	getEmptyRooms,
	getFamilyPeople,
	getRoomCapacity,
	equalRepart,
} from "./aux-functions.js";

// Función que valora la opción de que el num de habitaciones sea mayor que 1 y reparte a la gente equitativamente
const addFamilyToRooms = (obj, numRooms) => {
	const people = getFamilyPeople(obj);
	const peopleInEachRoom = equalRepart(people, numRooms);

	peopleInEachRoom.forEach((value) => {
		const room = getRoomCapacity(value);
		if (!room) {
			return;
		}
		obj.numRooms.push(room.idRoom);
		room.guest = obj.idFamily;
	});
	if (obj.numRooms.length < numRooms) {
		obj.numRooms = [];
		return "No existe una habitación con la capacidad solicitada";
	}
	store.clientFamily.push(obj);
	return true;
};

// Hace el check In de una familia a partir del número de habitaciones que solicitan
const checkIn = (obj, numRooms) => {
	const result = {
		user: {},
		errors: [],
	};
	const emptyRooms = getEmptyRooms(store.rooms);
	const getPeople = getFamilyPeople(obj);
	// Devuelve las habitaciones que tienen capacidad igual o mayor al num de personas de la familia
	const getAvailableRooms = emptyRooms.filter(
		(value) => value.maxCapacity >= getPeople
	);

	if (typeof numRooms !== "number") {
		result.errors.push("El campo de habitaciones debe ser un número");
	}
	if (emptyRooms.length < numRooms) {
		result.errors.push(
			"El hotel no tiene habitaciones disponibles para esta familia"
		);
	}

	if (getAvailableRooms.length === 0 && numRooms === 1) {
		result.errors.push("No tenemos habitaciones de este tamaño");
	}

	if (result.errors.length !== 0) {
		return result.errors;
	}

	const checkInResult = addFamilyToRooms(obj, numRooms);
	// Devuelve true si el checkIn se ha realizado con éxito
	return checkInResult;
};

export { checkIn as checkInFunction };
