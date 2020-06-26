// Muestra las habitaciones de todo el hotel, mostrando si están disponibles o no

import { store } from "./store.js";

import { roomsTableBody } from "./const-declarations.js";

// Si la habitación está ocupada, devuelve un html el cual es un círculo rojo, si no, lo pone en verde(disponible)
const availableIcon = (guests) => {
	if (guests !== 0) {
		return `<svg
				class="bi bi-circle-fill text-danger"
				width="1em"
				height="1em"
				viewBox="0 0 16 16"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="8" cy="8" r="8" />
			</svg>`;
	}
	return `<svg
				class="bi bi-circle-fill text-success"
				width="1em"
				height="1em"
				viewBox="0 0 16 16"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="8" cy="8" r="8" />
			</svg>`;
};

const getRooms = () => {
	roomsTableBody.innerHTML = "";
	store.rooms.forEach((value) => {
		const available = availableIcon(value.guest);
		const htmlTable = `<tr>
                            <th scope="row">${value.idRoom}</th>
                            <td>${value.maxCapacity}</td>
                            <td>${value.price}</td>
                            <td>${available}</td>
                      </tr>`;
		roomsTableBody.insertAdjacentHTML("beforeend", htmlTable);
	});
};

export { getRooms };
