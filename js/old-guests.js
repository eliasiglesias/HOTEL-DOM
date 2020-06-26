// Muestra una lista con los usuarios antiguos
import { store } from "./store.js";

import { oldGuestsTableBody } from "./const-declarations.js";

import { getFamilyPeople } from "./aux-functions.js";

const oldGuestsList = () => {
	oldGuestsTableBody.innerHTML = "";
	store.oldClientFamily.forEach((value) => {
		const people = getFamilyPeople(value);
		const htmlFamily = `<tr>
                                <th scope="row">${value.idFamily}</th>
                                <td>${value.parent1.name}</td>
                                <td>${people}</td>
                            </tr>`;
		oldGuestsTableBody.insertAdjacentHTML("beforeend", htmlFamily);
	});
};

export { oldGuestsList };
