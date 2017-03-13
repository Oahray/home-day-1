(function(){
  'use strict';

  var SalonCustomer = require('../app/SalonCustomer.js');

  describe("SalonCustomer Class: Get a customer, give him a haircut", function() {

    it("The customer should be a type of `object`, and an instance of the `SalonCustomer` class", function() {
      var phil = new SalonCustomer('adult');
      expect(typeof phil).toEqual(typeof {});
      expect(phil instanceof SalonCustomer).toBeTruthy();
    });

    
    it("The customer age and number of haircuts \
      should be a property of the customer", function() {
      var temilaj  = new SalonCustomer('adult');
      expect(temilaj.age).toBe('adult');
      expect(temilaj.numOfHairCuts).toBe(0);
    });

    it("The customer should pay 300 naira unless he is a child", function() {
      var cyril  = new SalonCustomer('adult');
      expect(cyril.rate).toBe(300);

      var samuel = new SalonCustomer('child');
      expect(samuel.rate).toBe(200);
    });

    it("The number haircuts should be 0 until you get a haircut", function() {
      var emjay  = new SalonCustomer('adult');
      expect(emjay.numOfHairCuts).toBe(0);
      emjay.getHairCut();
      expect(emjay.numOfHairCuts).toBe(1);
    });

    it("The fee should increase with each haircut until payment", function() {
      var nadayar  = new SalonCustomer('adult');
      expect(nadayar.numOfHairCuts).toBe(0);
      expect(nadayar.fee).toBe(0);
      nadayar.getHairCut();
      expect(nadayar.numOfHairCuts).toBe(1);
      expect(nadayar.fee).toBe(300);
      nadayar.getHairCut();
      expect(nadayar.numOfHairCuts).toBe(2)
      expect(nadayar.fee).toBe(600);
    });

    it("The SalonCustomer pay function should reset the number of haircuts \
      to 0 if cash is complete", function() {
      var ola = new SalonCustomer('adult');
      ola.getHairCut();
      expect(ola.fee).toBe(300);
      ola.pay(250);
      expect(ola.numOfHairCuts).toBe(1);
      ola.pay(300);
      ola.newNum = ola.numOfHairCuts;
      expect(ola.newNum).toBe(0);
    });

    it("The customer should be thanked unless his cash is incomplete", function() {
      var osinbajo  = new SalonCustomer('adult');
      osinbajo.getHairCut();
      expect(osinbajo.fee).toBe(300)
      expect(osinbajo.pay(400)).toBe("Thank you. take your 100 Naira change");

      var buhari = new SalonCustomer('adult');
      buhari.getHairCut();
      expect(buhari.fee).toBe(300)
      expect(buhari.pay(200)).toBe("Your money no complete, bros");
    });

  });
})();