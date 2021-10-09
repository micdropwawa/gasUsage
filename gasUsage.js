const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

//Using an appliance run by gas and want to estimate running costs?

var appMJPerHour = prompt("How many MJ per Hour is your appliance rated to? ")

const calcMJ = (mjh) => {
    const at2CentsHour = mjh * 0.02
    const at2Cents6Hours = mjh * 0.02 * 6
    const at2Cents12Hours = mjh * 0.02 * 12
    const at3CentsHour = mjh * 0.03
    const at3Cents6Hours = mjh * 0.03 * 6
    const at3Cents12Hours = mjh * 0.03 * 12
    const at4CentsHour = mjh * 0.04
    const at4Cents6Hours = mjh * 0.04 * 6
    const at4Cents12Hours = mjh * 0.04 * 12
    const at5CentsHour = mjh * 0.05
    const at5Cents6Hours = mjh * 0.05 * 6
    const at5Cents12Hours = mjh * 0.05 * 12
    const at6CentsHour = mjh * 0.06
    const at6Cents6Hours = mjh * 0.06 * 6
    const at6Cents12Hours = mjh * 0.06 * 12

    const total2Cents = "\n\nAt 2 cents for every MJ, it will cost $" + at2CentsHour + " per hour, $" + at2Cents6Hours + " every 6 hours and $" + at2Cents12Hours + " every 12 hours\n\n"
    const total3Cents = "At 3 cents for every MJ, it will cost $" + at3CentsHour + " per hour, $" + at3Cents6Hours + " every 6 hours and $" + at3Cents12Hours + " every 12 hours\n\n"
    const total4Cents = "At 4 cents for every MJ, it will cost $" + at4CentsHour + " per hour, $" + at4Cents6Hours + " every 6 hours and $" + at4Cents12Hours + " every 12 hours\n\n"
    const total5Cents = "At 5 cents for every MJ, it will cost $" + at5CentsHour + " per hour, $" + at5Cents6Hours + " every 6 hours and $" + at5Cents12Hours + " every 12 hours\n\n"
    const total6Cents = "At 6 cents for every MJ, it will cost $" + at6CentsHour + " per hour, $" + at6Cents6Hours + " every 6 hours and $" + at6Cents12Hours + " every 12 hours\n\n"

    return total2Cents + total3Cents + total4Cents + total5Cents + total6Cents
}

console.log(calcMJ(appMJPerHour))