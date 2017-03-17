var SalonCustomer = function(category) {
	this.category = category;
	this.numOfHairCuts = 0;

	this.rate;
	if (this.category === 'child') {
		this.rate = 200;
	}
	else {
		this.rate = 300;
	}

	this.getFee = function() {
		var fee = this.rate * this.numOfHairCuts;
		return fee;
	}

	this.fee = this.getFee();

	this.getHairCut = function() {
		this.numOfHairCuts += 1;
		this.fee = this.getFee()
	};

	this.reset = function() {
		this.numOfHairCuts = 0;
		return this.numOfHairCuts;
	}

	this.pay = function(cash) {
		this.cash = cash;
		this.fee = this.getFee();
		if (this.cash < this.fee) {
			return "Your money no complete, bros";
		}
		else if (this.cash === this.fee) {
			this.numOfHairCuts = this.reset();
			return "Thank you";
		}
		else {
			var change = (this.cash - this.fee).toString();
			this.numOfHairCuts = this.reset();
			return "Thank you. take your " + change + " Naira change";
		}
	}
}

module.exports = SalonCustomer;