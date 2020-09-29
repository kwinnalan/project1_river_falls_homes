
    /**
    *   @author Danforth, Kwinn (kdanforth@student.ncmich.edu)
    *   @version 0.0.1
    *   @summary Program that calculates the price of houses to be built in the River Falls subdivision || created: 09.27.2020
    *   @todo Nothing
    */

    "use strict";
    const PROMPT = require('readline-sync');

    // ----Above this line is section 1, comment header block & pragmas/library calls----

    let numLot, numBed, numBath, numCar, totPrice;
    const  BASE_PRICE = 50000;
    const  BED_PRICE = 17000;
    const  BATH_PRICE = 12000;
    const  CAR_PRICE = 6000;

    // ----Above this line is section 2, global variable declarations & global constant declarations/assignments----
    /**
     * @method
     * @desc The dispatch method for our program
     * @returns {null}
     */
    function main() {
    getLotNum();
    getNumBed();
    getNumBath();
    getNumCar();
    calTotalPrice();
    printData();
}

    main();

    // ----Above this line is section 3, dispatch method & call to dispatch method----
    /**
     * @method
     * @desc This method gets the lot number from the user
     * @returns {null}
     */
    function getLotNum() {
    do{
        numLot = PROMPT.question(`\nPlease enter the lot number for the new home: `);
        if (numBed < 1 || numBed > 50){
            console.log("You entered an incorrect lot number!");
        }
    }
    while (numLot < 1 || numLot > 50);
}
    /**
     * @method
     * @desc This method gets the number of bedrooms from the user
     * @returns {null}
     */
    function getNumBed() {
    do{
        numBed = PROMPT.question(`\nPlease enter the number of bedrooms (1-5) for the new home: `);
        if (numBed < 1 || numBed > 5){
            console.log("You entered an incorrect number of bedrooms!");
        }
    }
    while (numBed < 1 || numBed > 5);
}
    /**
     * @method
     * @desc This method gets the number of bathrooms from the user
     * @returns {null}
     */
    function getNumBath(){
    do{
        numBath = PROMPT.question(`\nPlease enter the number of bathrooms (1-3) for the new home: `);
        if (numBath < 1 || numBath > 3){
            console.log("You entered an incorrect number of bedrooms!");
        }
    }
    while (numBath < 1 || numBath > 3);
}
    /**
     * @method
     * @desc This method gets the size of the garage from the user
     * @returns {null}
     */
    function getNumCar(){
    do{
        numCar = PROMPT.question(`\nPlease enter the size of the garage in number of cars (1-3) for the new home: `);
        if (numCar < 1 || numCar > 3){
            console.log("You entered an incorrect number of bedrooms!");
        }
    }
    while (numCar < 1 || numCar > 3);
}
    /**
     * @method
     * @desc This method calculates the price of the home using the users inputs
     * @returns {null}
     */
    function calTotalPrice(){
    totPrice = BASE_PRICE + (numBed * BED_PRICE) + (numBath * BATH_PRICE) + (numCar * CAR_PRICE);
}
    /**
     * @method
     * @desc This method prints the data into the console log
     * @returns {null}
     */
    function printData(){
    console.log(`Number of bedrooms: ${numBed} 
    Number of Bathrooms: ${numBath}  
    Size of garage: ${numCar}car  
    Total Price: ${totPrice}`);
}

    // ----Above this line is section 4, mutator & worker/utility methods----

