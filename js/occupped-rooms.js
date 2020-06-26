// Muestra una lista de las habitaciones disponibles

import { store } from "./store.js";

import { occuppedRoomsTableBody } from "./const-declarations.js";

const getOccuppedRooms = () => {
	const result = store.rooms.filter((value) => value.guest !== 0);
	return result;
};

const getOccuppedRoomsList = () => {
	occuppedRoomsTableBody.innerHTML = "";
	const rooms = getOccuppedRooms();
	rooms.forEach((value) => {
		const htmlTable = `<tr>
                                <th scope="row">${value.idRoom}</th>
                                <td>${value.maxCapacity}</td>
                                <td>${value.price}</td>
                                <td>${value.guest}</td>
                            </tr>`;
		occuppedRoomsTableBody.insertAdjacentHTML("beforeend", htmlTable);
	});
};

export { getOccuppedRoomsList };
