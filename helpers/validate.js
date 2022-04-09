const allowedUnits = ["gal", "L", "mi", "km", "lbs", "kg"]

this.validateNum = (value = 1) => {
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
  // return found

  if (isNaN(value)) return false
}

this.validateUnit = (unit) => {
  if (!unit || typeof unit !== "string" || !allowedUnits.includes(unit)) return false
}

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
export { validateNum, validateUnit }
