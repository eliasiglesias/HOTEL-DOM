// Cambiar una habitación de unos huéspedes
import { store } from "./store.js";
import {
	getEmptyRooms,
	getFamilyPeople,
	getOccupedRoom,
	getFamilyByIdRoom,
	setFreeRoom,
} from "./aux-functions.js";
import { changeRoomErrors, changeRoomSuccess } from "./const-declarations.js";

// Cambia una habitación por otra cuando el cliente lo solicita
const changeRoom = (idRoom) => {
	const result = {
		user: {},
		errors: [],
	};
	changeRoomErrors.innerHTML = "";
	changeRoomSuccess.innerHTML = "";

	const getIdRoom = store.rooms.find((value) => value.idRoom === idRoom);
	if (!getIdRoom) {
		changeRoomErrors.innerHTML =
			"La habitación introducida no existe en nuestro hotel";
		return;
	}
	const occupedRoom = getOccupedRoom(idRoom);
	const emptyRooms = getEmptyRooms(store.rooms);
	const family = getFamilyByIdRoom(idRoom);

	if (!occupedRoom) {
		changeRoomErrors.innerHTML =
			"La habitación que intenta cambiar no está ocupada";
		return;
	}

	//Calcula cuanta gente hay que cambiar de habitacion y devuelve si hay alguna disponible
	const getPeople = getFamilyPeople(family) / family.numRooms.length;
	const getAvailableRooms = emptyRooms.filter(
		(value) => value.maxCapacity >= getPeople
	);

	if (getAvailableRooms.length === 0) {
		changeRoomErrors.innerHTML = "No tenemos otra habitación disponible";
		return;
	}
	// Asigna a la familia la última habitacion válida que encuentra, ya que es la de menor capacidad
	getAvailableRooms[getAvailableRooms.length - 1].guest = family.idFamily;
	result.user = family;
	// Añade al array de habitaciones la nueva habitacion
	result.user.numRooms.push(
		getAvailableRooms[getAvailableRooms.length - 1].idRoom
	);
	// Vacía la habitación que se ha cambiado
	setFreeRoom(idRoom);
	// Busca la habitación por su ID y lo borra del array de la familia
	const index = result.user.numRooms.indexOf(idRoom);
	result.user.numRooms.splice(index, 1);
	changeRoomSuccess.innerHTML = `Habitación cambiada con éxito, la nueva habitación es la número: ${
		getAvailableRooms[getAvailableRooms.length - 1].idRoom
	}`;
	return;
};

export { changeRoom as changeIdRoom };
