// Funciones auxiliares

import { store } from "./store.js";

// Chequea si el objeto Familia está bien definido
const checkFamilyParameters = (obj) => {
	const errors = [];
	if (typeof obj.idFamily !== "string") {
		errors.push("El ID no es un string");
	}
	if (Object.keys(obj.parent1).length === 0) {
		errors.push("El primer progenitor es obligatorio que esté definido");
	}
	if (obj.parent1.idCard === "") {
		errors.push("El idCard tiene que estar definido");
	}
	if (obj.parent1.name === "") {
		errors.push("El nombre tiene que estar definido");
	}
	if (obj.parent1.surname === "") {
		errors.push("El apellido tiene que estar definido");
	}
	if (isNaN(obj.parent1.age)) {
		errors.push("La edad del titular tiene que estar definida");
	}
	if (obj.tlf === "") {
		errors.push("El teléfono tiene que estar definido");
	}
	if (obj.numRooms.length !== 0) {
		errors.push("El parámetro de habitaciones tiene que estar vacío");
	}
	if (typeof obj.checkInDate !== "string") {
		errors.push("checkInDate tiene que ser un string");
	}
	if (isNaN(Date.parse(obj.checkInDate))) {
		errors.push("El parámetro de checkInDate tiene que ser una fecha");
	}
	if (errors.length !== 0) {
		return errors;
	}
	return true;
};

// Chequea si la persona a añadir tiene los parámetros correctos
const checkAnotherPersonParameters = (obj) => {
	const errors = [];
	if (typeof obj.idCard !== "string") {
		errors.push("El ID no es un string");
	}
	if (obj.idCard === "") {
		errors.push("Tiene que definir el ID");
	}
	if (obj.name === "") {
		errors.push("El nombre tiene que estar definido");
	}
	if (obj.surname === "") {
		errors.push("El apellido tiene que estar definido");
	}
	if (isNaN(obj.age)) {
		errors.push("La edad tiene que estar definida");
	}
	if (errors.length !== 0) {
		return errors;
	}
	return true;
};

// Chequea que el id de la familia no esté repetido
const checkIdFamily = (id) => {
	const result = store.clientFamily.find((value) => value.idFamily === id);
	if (result !== undefined) {
		return false;
	}
	return true;
};

// Crea un objeto nuevo para cada persona
const setAnotherPerson = (id, name, surname, age) => {
	let secondAdult = new Object();
	secondAdult = {
		idCard: id,
		name,
		surname,
		age,
	};

	return secondAdult;
};

// Crea un objeto nuevo del tipo familia
const setNewFamilyObject = () => {
	let result = new Object();
	result = {
		idFamily: "",
		parent1: {},
		parent2: {},
		children: [],
		tlf: "",
		numRooms: [],
		checkInDate: "",
	};
	return result;
};

// Devuelve las habitaciones vacías de un hotel
const getEmptyRooms = (rooms) => {
	const result = rooms.filter((value) => value.guest === 0);
	return result;
};

// Devuelve la capacidad más cercana dependiendo del número de huespedes por habitación
const getRoomCapacity = (capacity) => {
	const emptyRooms = getEmptyRooms(store.rooms);
	let result = emptyRooms.find((value) => value.maxCapacity === capacity);
	if (result === undefined) {
		result = emptyRooms.find((value) => value.maxCapacity === capacity + 1);
	}
	if (result === undefined) {
		result = emptyRooms.find((value) => value.maxCapacity === capacity + 2);
	}
	if (result === undefined) {
		result = emptyRooms.find((value) => value.maxCapacity === capacity + 3);
	}
	return result;
};

// Devuelve la cantidad de personas mayores de 4 años de la familia que paga
const getFamilyPeople = (obj) => {
	let result = 0;
	const parent1 = 1; //Siempre tiene que existir al menos un progenitor
	let parent2 = 0;
	let childs = 0;
	const childsUpFourYears = obj.children.filter((value) => value.age >= 4);
	if (Object.keys(obj.parent2).length !== 0) {
		parent2 = 1;
	}
	childs = Object.keys(childsUpFourYears).length;
	result = parent1 + parent2 + childs;
	return result;
};

// Ordena las habitaciones de mayor capacidad a menor
const getMaxCapacityRooms = (rooms, numRooms) => {
	const result1 = getEmptyRooms(rooms);
	const resultOrder = result1.sort(function (a, b) {
		if (a.maxCapacity > b.maxCapacity) {
			return -1;
		}
		if (a.maxCapacity < b.maxCapacity) {
			return 1;
		}
		return 0;
	});
	const result2 = resultOrder.filter((value, index) => index <= numRooms - 1);

	return result2;
};

// Devuelve si el ID de la familia existe
const getFamily = (obj) => {
	store.clientFamily;
	const id = obj.idFamily;
	const result = store.clientFamily.find((value) => value.idFamily === id);
	if (result !== undefined) {
		return true;
	}
	return false;
};

// Devuelve si una habitación está ocupada o no
const getOccupedRoom = (idRoom) => {
	const getRoom = store.rooms.find((value) => value.idRoom === idRoom);
	if (getRoom.guest != 0) {
		return true;
	}
	return false;
};

// Devuelve la familia a partir de su ID
const getFamilyById = (id) => {
	const result = store.clientFamily.find((value) => value.idFamily === id);
	return result;
};

// Devuelve la familia que tiene asignada una habitación concreta
const getFamilyByIdRoom = (idRoom) => {
	const family = store.clientFamily.find(
		(value) => value.numRooms.find((value) => value === idRoom) === idRoom
	);
	return family;
};

// Vacía una habitación solicitada
const setFreeRoom = (idRoom) => {
	const room = store.rooms.find((value) => value.idRoom === idRoom);
	room.guest = 0;
	return;
};

// Función que me reparta las personas en x habitaciones equitativamente
const equalRepart = (persons, numRooms) => {
	const result = [];
	const division = persons / numRooms;
	const rest = persons % numRooms;
	for (let i = 0; i < numRooms; i++) {
		result.push(Math.trunc(division));
	}
	result.forEach((value, index) => {
		if (index < rest) {
			result[index] = value + 1;
		}
	});
	return result;
};

export {
	checkFamilyParameters,
	checkAnotherPersonParameters,
	checkIdFamily,
	setAnotherPerson,
	setNewFamilyObject,
	getEmptyRooms,
	getFamilyPeople,
	getMaxCapacityRooms,
	getFamily,
	getOccupedRoom,
	getFamilyById,
	getFamilyByIdRoom,
	setFreeRoom,
	getRoomCapacity,
	equalRepart,
};
