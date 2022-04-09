"use strict"

const expect = require("chai").expect
const ConvertHandler = require("../controllers/convertHandler.js")

module.exports = function (app) {
  let convertHandler = new ConvertHandler()

  app.get("/api/convert", async (req, res) => {
    const { input } = req.query

    const value = convertHandler.getNum(input)
    const unit = convertHandler.getUnit(input)

    if (!value && !unit) return res.send("invalid number and unit")
    if (!value) return res.send("invalid number")
    if (!unit) return res.send("invalid unit")

    const returnUnit = convertHandler.getReturnUnit(unit)
    const initSpellOutUnit = convertHandler.initSpellOutUnit(unit)
    const spellOutUnit = convertHandler.spellOutUnit(unit)
    const convert = convertHandler.convert(value, unit)
    const string = convertHandler.getString(value, initSpellOutUnit, convert, spellOutUnit)

    res.json({
      initNum: value,
      initUnit: unit,
      returnNum: convert,
      returnUnit,
      string,
    })
  })
}
