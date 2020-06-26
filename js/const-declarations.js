// Enlaces Navbar
const dashboard = document.querySelector("#hotel-dashboard");
const guestsLink = document.querySelector("#guests-button");
const roomsLink = document.querySelector("#rooms-button");
const changeRoomLink = document.querySelector("#change-room-button");
const getInvoiceLink = document.querySelector("#get-invoice-button");

// Elementos globales
const checkIn = document.querySelector("#check-in");
const checkOut = document.querySelector("#check-out");
const changeRoom = document.querySelector("#change-room");
const getInvoice = document.querySelector("#get-invoice");
const guests = document.querySelector("#guests-table");
const rooms = document.querySelector("#rooms-table");

// Constantes Check In
const checkInForm = document.querySelector("#check-in-form");
const checkInIdFamily = document.querySelector("#id-family");
const checkInName = document.querySelector("#first-adult-name");
const checkInSurname = document.querySelector("#first-adult-surname");
const checkInBirthDay = document.querySelector("#first-adult-birthyear");
const checkInPhoneNumber = document.querySelector("#first-adult-phone-number");
const checkInNumRooms = document.querySelector("#family-num-rooms");
const checkInButton = document.querySelector("#check-in-button");
const checkInErrors = document.querySelector("#check-in-errors");
const checkInOk = document.querySelector("#check-in-ok");
const checkInCounter = document.querySelector("#check-in-counter");

// Constantes Check In (personas a mayores)
const checkInAnotherForm = document.querySelector("#form-adult-children");
const checkInAnotherId = document.querySelector("#another-person-id");
const checkInAnotherName = document.querySelector("#another-person-name");
const checkInAnotherSurname = document.querySelector("#another-person-surname");
const checkInAnotherBirthyear = document.querySelector(
	"#another-person-birthyear"
);
const checkInAnotherButton = document.querySelector("#another-adult-save");
const checkInAnotherErrors = document.querySelector("#another-person-errors");

// Constantes Check Out
const checkOutForm = document.querySelector("#check-out-form");
const checkOutIdFamily = document.querySelector("#check-out-idfamily");
const checkOutDate = document.querySelector("#check-out-date");
const checkOutButton = document.querySelector("#check-out-button");
const checkOutErrors = document.querySelector("#check-out-errors");
const checkOutSuccess = document.querySelector("#check-out-success");

// Constantes Get Invoice
const getInvoiceForm = document.querySelector("#get-invoice-form");
const getInvoiceIdFamily = document.querySelector("#get-invoice-idfamily");
const getInvoiceDate = document.querySelector("#get-invoice-date");
const getInvoiceButton = document.querySelector("#get-invoice-button");
const getInvoiceErrors = document.querySelector("#get-invoice-errors");
const getInvoiceSuccess = document.querySelector("#get-invoice-success");
const getInvoiceTable = document.querySelector("#invoice-table");
const getInvoiceTableBody = document.querySelector("#invoice-table-body");
const getInvoiceRoomsOrTable = document.querySelector("#rooms-or-tlf");

// Constantes Change Room
const changeRoomForm = document.querySelector("#change-room-form");
const changeRoomIdRoom = document.querySelector("#change-room-id");
const changeRoomButton = document.querySelector("#change-room-button");
const changeRoomErrors = document.querySelector("#change-room-errors");
const changeRoomSuccess = document.querySelector("#change-room-success");

// Constantes Guests List
const guestsTableBody = document.querySelector("#guests-table-body");
const oldGuestsTable = document.querySelector("#old-guests-table");
const oldGuestsTableBody = document.querySelector("#old-guests-table-body");
const oldGuestsButton = document.querySelector("#old-guests");

// Constantes Get Rooms
const roomsTableBody = document.querySelector("#rooms-table-body");
const occuppedRoomsButton = document.querySelector("#ocupped-rooms");
const emptyRoomsButton = document.querySelector("#empty-rooms");
const occuppedRoomsTable = document.querySelector("#ocupped-rooms-table");
const emptyRoomsTable = document.querySelector("#empty-rooms-table");
const occuppedRoomsTableBody = document.querySelector(
	"#ocupped-rooms-table-body"
);
const emptyRoomsTableBody = document.querySelector("#empty-rooms-table-body");

// Constantes Weather
const weather = document.querySelector("#weather");
const weatherImg = document.querySelector("#weather-figure");
const weatherDegrees = document.querySelector("#degrees");
const weatherInfo = document.querySelector("#weather-conditions");

// Export Enlaces Navbar
export { dashboard, guestsLink, roomsLink, changeRoomLink, getInvoiceLink };

// Export Elementos globales
export { checkIn, checkOut, changeRoom, getInvoice, guests, rooms };

// Export constantes Check In
export {
	checkInForm,
	checkInIdFamily,
	checkInName,
	checkInSurname,
	checkInBirthDay,
	checkInPhoneNumber,
	checkInNumRooms,
	checkInButton,
	checkInErrors,
	checkInOk,
	checkInCounter,
};

// Export constantes Check In (personas a mayores)
export {
	checkInAnotherForm,
	checkInAnotherId,
	checkInAnotherName,
	checkInAnotherSurname,
	checkInAnotherBirthyear,
	checkInAnotherButton,
	checkInAnotherErrors,
};

// Export constantes Check Out
export {
	checkOutForm,
	checkOutIdFamily,
	checkOutDate,
	checkOutButton,
	checkOutErrors,
	checkOutSuccess,
};

// Export constantes Get Invoice
export {
	getInvoiceForm,
	getInvoiceIdFamily,
	getInvoiceDate,
	getInvoiceButton,
	getInvoiceErrors,
	getInvoiceSuccess,
	getInvoiceTable,
	getInvoiceTableBody,
	getInvoiceRoomsOrTable,
};

// Export constantes Change Room
export {
	changeRoomForm,
	changeRoomIdRoom,
	changeRoomButton,
	changeRoomErrors,
	changeRoomSuccess,
};

// Export constantes Guests List
export { guestsTableBody, oldGuestsTable, oldGuestsButton, oldGuestsTableBody };

// Export constantes Rooms
export {
	roomsTableBody,
	occuppedRoomsButton,
	emptyRoomsButton,
	occuppedRoomsTable,
	emptyRoomsTable,
	occuppedRoomsTableBody,
	emptyRoomsTableBody,
};

// Export constantes Weather
export { weather, weatherImg, weatherDegrees, weatherInfo };
