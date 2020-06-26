// Muestra las habitaciones del hotel que están vacías

import { store } from "./store.js";

import { getEmptyRooms } from "./aux-functions.js";

import { emptyRoomsTableBody } from "./const-declarations.js";

const getEmptyRoomsList = () => {
	emptyRoomsTableBody.innerHTML = "";
	const rooms = getEmptyRooms(store.rooms);
	rooms.forEach((value) => {
		const htmlTable = `<tr>
                                <th scope="row">${value.idRoom}</th>
                                <td>${value.maxCapacity}</td>
                                <td>${value.price}</td>
                            </tr>`;
		emptyRoomsTableBody.insertAdjacentHTML("beforeend", htmlTable);
	});
};

export { getEmptyRoomsList };
