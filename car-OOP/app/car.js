var Car = function(name, model, type) {
	this.type = type;
	this.model = model;

	this.name = name;
	if (name === undefined) {
		this.model = 'GM';
		this.name = 'General';
	}

	this.speed = '0 km/h';

	this.drive = function(s) {
		var dSpeed;
		if (this.name === 'MAN') {
			dSpeed = s * 11;
		}
		else if (this.name === 'Porshe') {
			dSpeed = s * 50;
		}
		this.speed = dSpeed.toString() + " km/h";
		var exampleCar = new Car(this.name, this.model, this.type);
   	exampleCar.speed = this.speed;
    return exampleCar;
	};

	if (this.name === "Porshe" || this.name === "Koenigsegg") {
		this.numOfDoors = 2;
	}
	else {
		this.numOfDoors = 4;
	}

	
	if (this.type === ("trailer")) {
		this.numOfWheels = 8;
		this.isSaloon = false;
	}
	else {
		this.numOfWheels = 4;
		this.isSaloon = true;
	}
};

module.exports = Car;