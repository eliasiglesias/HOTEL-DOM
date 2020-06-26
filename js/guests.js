// Función que muestra un listado con todos los usuarios alojados en el hotel actualmente
import { store } from "./store.js";

import { guestsTableBody } from "./const-declarations.js";
import { getFamilyPeople } from "./aux-functions.js";

const guestsList = () => {
	guestsTableBody.innerHTML = "";
	store.clientFamily.forEach((value) => {
		let people = getFamilyPeople(value);
		const htmlFamily = `<tr>
                                <th scope="row">${value.idFamily}</th>
                                <td>${value.numRooms}</td>
                                <td>${value.parent1.name}</td>
                                <td>${people}</td>
                            </tr>`;
		guestsTableBody.insertAdjacentHTML("beforeend", htmlFamily);
	});
};

export { guestsList };
