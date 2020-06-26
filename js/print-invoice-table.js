import { getInvoiceTable, getInvoiceTableBody } from "./const-declarations.js";

const printInvoiceTable = (idFamily, name, rooms, totalInvoice) => {
	getInvoiceTableBody.insertAdjacentHTML(
		"afterbegin",
		`<tr>
            <th scope="row" class="py-4">${idFamily}</th>
            <td class="py-4">${name}</td>
            <td class="py-4">${rooms}</td>
            <td class="py-4">${totalInvoice}€</td>
        </tr>`
	);
};

export { printInvoiceTable };
