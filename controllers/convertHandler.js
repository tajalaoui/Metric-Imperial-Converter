import { validateNum, validateUnit } from "../helpers/validate"

function ConvertHandler() {
  const inputRegx = /[a-z]+|[^a-z]+/gi

  this.getNum = function (input) {
    let result = input.match(inputRegx)[0]

    // if (result.length === 0) result = 1

    validateNum(result)

    if (result.toString().includes("/")) {
      let values = result.toString().split("/")
      if (values.length != 2) {
        return "invalid number"
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0] / values[1]).toFixed(5))
    }

    return result
  }

  this.getUnit = function (input) {
    let result

    result = input.match(inputRegx)[1]

    validateUnit(result)

    if (!result) result = input.match(inputRegx)[0]

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
