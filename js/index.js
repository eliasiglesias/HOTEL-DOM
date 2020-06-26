// Import Enlaces Navbar
import {
	dashboard,
	guestsLink,
	roomsLink,
	changeRoomLink,
	getInvoiceLink,
	oldGuestsButton,
} from "./const-declarations.js";

// Import Elementos globales
import {
	checkIn,
	checkOut,
	changeRoom,
	getInvoice,
	guests,
	rooms,
} from "./const-declarations.js";

// Import constantes Check In
import {
	checkInForm,
	checkInIdFamily,
	checkInName,
	checkInSurname,
	checkInBirthDay,
	checkInPhoneNumber,
	checkInNumRooms,
	checkInErrors,
	checkInOk,
	checkInCounter,
} from "./const-declarations.js";

// Import constantes Check In (personas a mayores)
import {
	checkInAnotherForm,
	checkInAnotherId,
	checkInAnotherName,
	checkInAnotherSurname,
	checkInAnotherBirthyear,
	checkInAnotherErrors,
} from "./const-declarations.js";

// Import funciones auxiliares Check In
import {
	checkFamilyParameters,
	checkAnotherPersonParameters,
	checkIdFamily,
	setAnotherPerson,
	setNewFamilyObject,
	getFamilyPeople,
	getFamilyById,
} from "./aux-functions.js";

import { checkInFunction } from "./check-in.js";

// Import constantes Check Out
import {
	checkOutForm,
	checkOutIdFamily,
	checkOutDate,
} from "./const-declarations.js";

// Import check out function
import { checkOutFunction } from "./check-out.js";

// Import constantes Get Invoice
import {
	getInvoiceForm,
	getInvoiceIdFamily,
	getInvoiceDate,
	getInvoiceErrors,
	getInvoiceSuccess,
	getInvoiceTable,
	getInvoiceTableBody,
	getInvoiceRoomsOrTable,
} from "./const-declarations.js";

// Import Get Invoice function
import { getTotalInvoice } from "./get-invoice.js";

import { printInvoiceTable } from "./print-invoice-table.js";

// Import constantes Change Room
import {
	changeRoomForm,
	changeRoomIdRoom,
	changeRoomErrors,
	changeRoomSuccess,
} from "./const-declarations.js";

// Import Change Room function
import { changeIdRoom } from "./change-room.js";

// Import Guests List function
import { guestsList } from "./guests.js";

// Import Old Guests List function
import { oldGuestsList } from "./old-guests.js";
import { oldGuestsTable } from "./const-declarations.js";

// Import Get Rooms function
import { getRooms } from "./get-rooms.js";

// Import Occupped Rooms function
import { getOccuppedRoomsList } from "./occupped-rooms.js";

// Import Empty Rooms function
import { getEmptyRoomsList } from "./empty-rooms.js";

// Import constantes getRooms, empty & occupped
import {
	occuppedRoomsButton,
	emptyRoomsButton,
	occuppedRoomsTable,
	emptyRoomsTable,
} from "./const-declarations.js";

import { weather } from "./const-declarations.js";
import { getWeather } from "./get-weather.js";

// Ocultar lo que no se quiere mostrar al iniciar la página
const startPage = () => {
	checkIn.classList.remove("d-none");
	checkInIdFamily.value = "";
	checkInName.value = "";
	checkInSurname.value = "";
	checkInBirthDay.value = "";
	checkInPhoneNumber.value = "";
	checkInNumRooms.value = "";
	checkInErrors.innerHTML = "";
	checkInCounter.innerHTML = "";
	checkOut.classList.remove("d-none");
	checkOutIdFamily.value = "";
	checkOutDate.value = "";
	changeRoom.classList.add("d-none");
	getInvoice.classList.add("d-none");
	getInvoiceTable.classList.add("d-none");
	guests.classList.add("d-none");
	rooms.classList.add("d-none");
	weather.classList.add("d-none");
};

startPage();

// Inicio de la página
dashboard.addEventListener("click", () => {
	startPage();
});

// CHECK IN

// Crear un objeto "Familia" que usaremos para añadirlo al store
let familyToAdd = setNewFamilyObject();

// Guardar el adulto o los niños a mayores en el objeto familyToAdd
checkInAnotherForm.addEventListener("submit", (event) => {
	event.preventDefault();
	checkInAnotherErrors.classList.add("d-none");
	checkInAnotherErrors.innerHTML = "";
	const id = checkInAnotherId.value;
	const name = checkInAnotherName.value;
	const surname = checkInAnotherSurname.value;
	const birthyear = 2020 - parseInt(checkInAnotherBirthyear.value);
	const newPerson = setAnotherPerson(id, name, surname, birthyear);
	const result = checkAnotherPersonParameters(newPerson);

	if (result !== true) {
		checkInAnotherErrors.classList.remove("d-none");
		result.forEach((value, index) => {
			checkInAnotherErrors.insertAdjacentHTML(
				"beforeend",
				`<div class="text-danger mb-2">${index + 1}.-${value}</div>`
			);
		});
		return;
	}

	if (birthyear < 18) {
		const child = familyToAdd.children.find((value) => value.idCard === id);
		// Comprueba que no se haya añadido un hijo con el midmo ID
		if (child) {
			checkInAnotherErrors.classList.remove("d-none");
			checkInAnotherErrors.insertAdjacentHTML(
				"beforeend",
				`<div class="text-danger mb-2">Ya existe un menor con este ID</div>`
			);
			return;
		}

		checkInAnotherErrors.classList.remove("d-none");
		checkInAnotherErrors.insertAdjacentHTML(
			"beforeend",
			`<div class="text-success mb-2">Menor añadido con éxito!</div>`
		);
		familyToAdd.children.push(newPerson);
		checkInCounter.innerHTML = "";
		checkInCounter.insertAdjacentHTML(
			"beforeend",
			`<h5>People: ${getFamilyPeople(familyToAdd)}</h5>`
		);
		// Vaciar los campos del input
		checkInAnotherId.value = "";
		checkInAnotherName.value = "";
		checkInAnotherSurname.value = "";
		checkInAnotherBirthyear.value = "";
		return;
	}

	// Comprobamos si el segundo adulto ya ha sido añadido al objeto
	if (Object.keys(familyToAdd.parent2).length !== 0) {
		checkInAnotherErrors.classList.remove("d-none");
		checkInAnotherErrors.insertAdjacentHTML(
			"beforeend",
			`<div class="text-danger mb-2">Ya ha definido un segundo adulto</div>`
		);
		return;
	}

	familyToAdd.parent2 = newPerson;
	checkInAnotherErrors.classList.remove("d-none");
	checkInAnotherErrors.insertAdjacentHTML(
		"beforeend",
		`<div class="text-success mb-2">Adulto añadido con éxito!</div>`
	);
	checkInCounter.innerHTML = "";
	checkInCounter.insertAdjacentHTML(
		"beforeend",
		`<h5>People: ${getFamilyPeople(familyToAdd)}</h5>`
	);

	// Vaciamos los campos del formulario
	checkInAnotherId.value = "";
	checkInAnotherName.value = "";
	checkInAnotherSurname.value = "";
	checkInAnotherBirthyear.value = "";
	return;
});

// Adulto titular de la reserva y ejecución del Check In
checkInForm.addEventListener("submit", (event) => {
	event.preventDefault();
	// Vacía los errores o mensajes que tenga previamente
	checkInErrors.innerHTML = "";
	checkInErrors.classList.add("d-none");
	checkInOk.innerHTML = "";
	checkInOk.classList.add("d-none");
	// Datos de la familia
	const idFamily = checkInIdFamily.value;
	const name = checkInName.value;
	const surname = checkInSurname.value;
	const birthyear = 2020 - parseInt(checkInBirthDay.value);
	const phone = checkInPhoneNumber.value;
	const date = new Date();
	const checkInDate = `${date.getFullYear()}/
							${date.getMonth() + 1}/
							${date.getDate()}`;
	const numRooms = parseInt(checkInNumRooms.value);

	// Añadir datos de la familia
	familyToAdd.idFamily = checkInIdFamily.value;
	familyToAdd.tlf = phone;
	familyToAdd.checkInDate = checkInDate;
	familyToAdd.parent1 = setAnotherPerson(idFamily, name, surname, birthyear);

	// Comprobar datos de la familia
	if (checkFamilyParameters(familyToAdd) !== true) {
		const resultErrors = checkFamilyParameters(familyToAdd);
		checkInErrors.classList.remove("d-none");
		resultErrors.forEach((value, index) =>
			checkInErrors.insertAdjacentHTML(
				"beforeend",
				`<div class="text-danger">${index + 1}.- ${value}</div>`
			)
		);
		return;
	}

	// Comprobar que no existe ese ID en el store
	if (!checkIdFamily(idFamily)) {
		checkInErrors.classList.remove("d-none");
		checkInErrors.insertAdjacentHTML(
			"beforeend",
			`<div class="text-danger">El ID ya existe en la base de datos</div>`
		);
		return;
	}

	// Comprobar que introduce un número de habitaciones válido
	if (isNaN(numRooms)) {
		checkInErrors.classList.remove("d-none");
		checkInErrors.insertAdjacentHTML(
			"beforeend",
			`<div class="text-danger">El número de habitaciones no está introducido!</div>`
		);
		return;
	}

	const getPeople = getFamilyPeople(familyToAdd);

	// Comprobar que no pide más habitaciones que personas tiene la familia
	if (getPeople < numRooms) {
		checkInErrors.classList.remove("d-none");
		checkInErrors.insertAdjacentHTML(
			"beforeend",
			`<div class="text-danger">El número de habitaciones no puede ser mayor al número de personas!</div>`
		);
		return;
	}

	// Errores función Check In
	const result = checkInFunction(familyToAdd, numRooms);

	if (typeof result === "string") {
		checkInErrors.classList.remove("d-none");
		checkInErrors.insertAdjacentHTML(
			"beforeend",
			`<div class="text-danger">${result}</div>`
		);
		return;
	}

	checkInOk.classList.remove("d-none");
	// Comprobar si es una habitación o más
	if (familyToAdd.numRooms.length === 1) {
		checkInOk.insertAdjacentHTML(
			"beforeend",
			`<div class="text-success">Check In realizado con éxito! La habitación asignada es: ${familyToAdd.numRooms}</div>`
		);
	}
	if (familyToAdd.numRooms.length > 1) {
		checkInOk.insertAdjacentHTML(
			"beforeend",
			`<div class="text-success">Check In realizado con éxito! Las habitaciones asignadas son: ${familyToAdd.numRooms}</div>`
		);
	}

	// Creamos un nuevo objeto para futuros Check In
	familyToAdd = setNewFamilyObject();
	startPage();

	// Oculta el check out para ofrecer información del tiempo para los próximos 10 días
	checkOut.classList.add("d-none");
	weather.classList.remove("d-none");
	getWeather();
});

// CHECK OUT
checkOutForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const id = checkOutIdFamily.value;
	const date = checkOutDate.value;
	const totalInvoice = getTotalInvoice(id, date);
	const family = getFamilyById(id);
	checkOutFunction(id, date);
	checkIn.classList.add("d-none");
	// Imprime la factura si no hay errores
	if (typeof totalInvoice === "number") {
		getInvoiceTable.classList.remove("d-none");
		getInvoiceTableBody.innerHTML = "";
		getInvoiceRoomsOrTable.textContent = "Telephone";
		printInvoiceTable(
			family.idFamily,
			family.parent1.name,
			family.tlf,
			totalInvoice
		);
	}
	checkOutIdFamily.value = "";
	checkOutDate.value = "";
});

// GET INVOICE
getInvoiceLink.addEventListener("click", () => {
	startPage();
	getInvoice.classList.remove("d-none");
	checkIn.classList.add("d-none");
	checkOut.classList.add("d-none");
	getInvoiceIdFamily.value = "";
	getInvoiceDate.value = "";
	getInvoiceErrors.innerHTML = "";
	getInvoiceSuccess.innerHTML = "";
});

getInvoiceForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const id = getInvoiceIdFamily.value;
	const date = getInvoiceDate.value;
	const totalInvoice = getTotalInvoice(id, date);
	const family = getFamilyById(id);
	// Imprime la factura si no hay errores
	if (typeof totalInvoice === "number") {
		getInvoiceTable.classList.remove("d-none");
		getInvoiceTableBody.innerHTML = "";
		getInvoiceRoomsOrTable.textContent = "Rooms";
		printInvoiceTable(
			family.idFamily,
			family.parent1.name,
			family.numRooms,
			totalInvoice
		);
	}
});

// CHANGE ROOM
changeRoomLink.addEventListener("click", () => {
	startPage();
	changeRoom.classList.remove("d-none");
	getInvoice.classList.add("d-none");
	checkIn.classList.add("d-none");
	checkOut.classList.add("d-none");
	changeRoomIdRoom.value = "";
	changeRoomErrors.innerHTML = "";
	changeRoomSuccess.innerHTML = "";
});

changeRoomForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const idRoom = parseInt(changeRoomIdRoom.value);
	changeIdRoom(idRoom);
});

// GUESTS LIST
guestsLink.addEventListener("click", () => {
	startPage();
	checkIn.classList.add("d-none");
	checkOut.classList.add("d-none");
	guests.classList.remove("d-none");
	oldGuestsTable.classList.add("d-none");
	guestsList();
});

// OLD GUESTS LIST
oldGuestsButton.addEventListener("click", () => {
	oldGuestsTable.classList.toggle("d-none");
	oldGuestsList();
});

// ROOMS
roomsLink.addEventListener("click", () => {
	startPage();
	checkIn.classList.add("d-none");
	checkOut.classList.add("d-none");
	rooms.classList.remove("d-none");
	occuppedRoomsTable.classList.add("d-none");
	emptyRoomsTable.classList.add("d-none");
	getRooms();
});

// OCCUPED ROOMS
occuppedRoomsButton.addEventListener("click", () => {
	occuppedRoomsTable.classList.toggle("d-none");
	emptyRoomsTable.classList.add("d-none");
	getOccuppedRoomsList();
});

// EMPTY ROOMS
emptyRoomsButton.addEventListener("click", () => {
	emptyRoomsTable.classList.toggle("d-none");
	occuppedRoomsTable.classList.add("d-none");
	getEmptyRoomsList();
});
