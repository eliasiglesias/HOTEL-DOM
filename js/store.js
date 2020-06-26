const store = {
	clientFamily: [
		{
			idFamily: "1111A",
			parent1: {
				idCard: "1111A",
				name: "Julio",
				surname: "García",
				age: 35,
			},
			parent2: {
				idCard: "1111B",
				name: "Ana",
				surname: "Fernández",
				age: 27,
			},
			children: [
				{
					idCard: "1111SONa",
					name: "Pedro",
					surname: "García",
					age: 12,
				},
				{
					idCard: "1111SONb",
					name: "Jaime",
					surname: "García",
					age: 8,
				},
				{
					idCard: "1111SONc",
					name: "Julia",
					surname: "Fernández",
					age: 3,
				},
			],
			tlf: "635628793",
			numRooms: [101, 102],
			checkInDate: "2020/05/30",
		},
		{
			idFamily: "2222A",
			parent1: {
				idCard: "2222A",
				name: "Pedro",
				surname: "González",
				age: 35,
			},
			parent2: {
				idCard: "2222B",
				name: "Maria",
				surname: "Pérez",
				age: 33,
			},
			children: [
				{
					idCard: "2222SONa",
					name: "Pedro",
					surname: "González",
					age: 12,
				},
				{
					idCard: "2222SONb",
					name: "Jaime",
					surname: "González",
					age: 8,
				},
			],
			tlf: "635667667",
			numRooms: [103, 104],
			checkInDate: "2020/06/05",
		},
	],
	rooms: [
		{
			idRoom: 101,
			maxCapacity: 3,
			price: 100,
			guest: "1111A",
		},
		{
			idRoom: 102,
			maxCapacity: 3,
			price: 100,
			guest: "1111A",
		},
		{
			idRoom: 103,
			maxCapacity: 3,
			price: 100,
			guest: "2222A",
		},
		{
			idRoom: 104,
			maxCapacity: 3,
			price: 120,
			guest: "2222A",
		},
		{
			idRoom: 105,
			maxCapacity: 3,
			price: 120,
			guest: 0,
		},
		{
			idRoom: 201,
			maxCapacity: 3,
			price: 190,
			guest: 0,
		},
		{
			idRoom: 202,
			maxCapacity: 2,
			price: 80,
			guest: 0,
		},
		{
			idRoom: 203,
			maxCapacity: 2,
			price: 125,
			guest: 0,
		},
		{
			idRoom: 204,
			maxCapacity: 2,
			price: 120,
			guest: 0,
		},
		{
			idRoom: 205,
			maxCapacity: 1,
			price: 100,
			guest: 0,
		},
	],
	oldClientFamily: [
		{
			idFamily: "1111A",
			parent1: {
				idCard: "1111A",
				name: "Julio",
				surname: "García",
				age: 35,
			},
			parent2: {
				idCard: "1111B",
				name: "Ana",
				surname: "Fernández",
				age: 27,
			},
			children: [
				{
					idCard: "1111SONa",
					name: "Pedro",
					surname: "García",
					age: 12,
				},
				{
					idCard: "1111SONb",
					name: "Jaime",
					surname: "García",
					age: 8,
				},
				{
					idCard: "1111SONc",
					name: "Julia",
					surname: "Fernández",
					age: 3,
				},
			],
			tlf: "635628793",
			numRooms: [],
			checkInDate: "2020/05/30",
		},
		{
			idFamily: "3333A",
			parent1: {
				idCard: "3333A",
				name: "Pepe",
				surname: "López",
				age: 45,
			},
			parent2: {
				idCard: "3333B",
				name: "Josefa",
				surname: "Rodríguez",
				age: 42,
			},
			children: [
				{
					idCard: "3333SONa",
					name: "Pedro",
					surname: "López",
					age: 12,
				},
				{
					idCard: "3333SONb",
					name: "Jaime",
					surname: "López",
					age: 2,
				},
				{
					idCard: "3333SONc",
					name: "Julia",
					surname: "López",
					age: 2,
				},
			],
			tlf: "633333333",
			numRooms: [],
			checkInDate: "Jun 05,2020",
		},
	],
};

const familyToAdd = {
	idFamily: 3,
	parent1: {
		idCard: "3333A",
		name: "Pepe",
		age: 45,
	},
	parent2: {
		idCard: "3333B",
		name: "Josefa",
		age: 42,
	},
	children: [
		{
			idCard: "3333SONa",
			name: "Pedro",
			age: 12,
		},
		{
			idCard: "3333SONb",
			name: "Jaime",
			age: 2,
		},
		{
			idCard: "3333SONc",
			name: "Julia",
			age: 2,
		},
	],
	tlf: "633333333",
	numRooms: [],
	checkInDate: "Jun 05,2020",
};

const familyNotAdd = {
	idFamily: 7,
	parent1: {
		idCard: "3333A",
		name: "Pepe",
		age: 45,
	},
	parent2: {
		idCard: "3333B",
		name: "Josefa",
		age: 42,
	},
	children: [
		{
			idCard: "3333SONa",
			name: "Pedro",
			age: 12,
		},
		{
			idCard: "3333SONb",
			name: "Jaime",
			age: 8,
		},
		{
			idCard: "3333SONc",
			name: "Julia",
			age: 4,
		},
	],
	tlf: "633333333",
	numRooms: [],
	checkInDate: "Jun 05,2020",
};

export { store };
