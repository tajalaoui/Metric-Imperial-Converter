function ConvertHandler() {
  const inputRegx = /[a-z]+|[^a-z]+/gi

  // const units = {
  //   distance: {
  //     supported_units: ["km", "mi"],
  //     imperial: "miles",
  //     metric: "kilometers",
  //     to_metric: (input) => input * 2,
  //     to_imperial: (input) => input * 3,
  //   },
  //   weight: {},
  //   liquid: {},
  // }

  this.validate = (value, unit) => {
    try {
      // TODO: eval the condition
      if (!unit || unit != "gal") {
        throw "invalid unit"
      }
    } catch (e) {
      return e
    }

    // let found = false

    // for (const u in this.units) {
    //   if (found) {
    //     continue;
    //   }
    //   found = u.supported_units.includes(unit)
    // }

    // if (!found) {
    //   throw "invalid unit"
    // }

    return found
  }

  this.getNum = function (input) {
    let result = input.match(inputRegx)[0]

    return result
  }

  this.getUnit = function (input) {
    let result = input.match(inputRegx)[1]

    result = result.toLowerCase()

    if (result === "l") result = "L"

    return result
  }

  this.getReturnUnit = function (initUnit) {
    switch (initUnit) {
      case "km":
        return "mi"
      case "gal":
        return "L"
      case "lbs":
        return "kg"
      case "mi":
        return "km"
      case "L":
        return "gal"
      case "kg":
        return "lbs"
    }

    // km => miles,

    // let obj = null
    // for (const u in this.units) {
    //   if (obj !== null) {
    //     continue
    //   }
    //   if (u.supported_units.includes(initUnit)) {
    //     obj = u
    //   }
    // }
    // let unit_index = obj.supported_units.indexOf(intUnit)
    // output = obj.supported_units.splice(unit_index, 1)
    // return ouput
  }

  this.initSpellOutUnit = function (initUnit) {
    switch (initUnit) {
      case "km":
        return "kilometers"
      case "gal":
        return "gallons"
      case "lbs":
        return "pounds"
      case "mi":
        return "miles"
      case "L":
        return "liters"
      case "kg":
        return "kilograms"
    }
  }

  // Todo return array, first val neutral second val opposite
  // Or object
  this.spellOutUnit = function (initUnit) {
    switch (initUnit) {
      case "km":
        return "miles"
      case "gal":
        return "liters"
      case "lbs":
        return "kilograms"
      case "mi":
        return "kilometers"
      case "L":
        return "gallons"
      case "kg":
        return "pounds"
    }
  }

  this.convert = function (initNum, initUnit) {
    let result

    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    if (initUnit == "gal") result = initNum * galToL
    if (initUnit == "L") result = initNum / galToL
    if (initUnit == "lbs") result = initNum * lbsToKg
    if (initUnit == "kg") result = initNum / lbsToKg
    if (initUnit == "mi") result = initNum * miToKm
    if (initUnit == "km") result = initNum / miToKm

    return parseFloat(result.toFixed(5))
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
  }
}

module.exports = ConvertHandler
