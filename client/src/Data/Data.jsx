// // Will get the season years from 1950 to current year
// export const dataYears = {
//   name: Array.from(
//   { length: new Date().getFullYear() - 1950 + 1 },
//   (_, i) => 1950 + i
// ).sort((a, b) => b - a),
// };

//Will get the season years from 1950 to current year
export const dataYears = {
  name: Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (_, i) => {
    const year = (1950 + i).toString();
    return { name: year, id: year };
  }).sort((a, b) => parseInt(b.name) - parseInt(a.name)),
};

export const sections = [
  { name: "Races", id: "Races/1" },
  { name: "Drivers", id: "Drivers" },
  { name: "Teams", id: "Teams" },
];

export const raceResultSections = [
  { name: "Race Result", id: "result" },
  { name: "Fastest Laps", id: "fastestlap" },
  { name: "Pit Stop", id: "pitstop" },
  { name: "STARTING GRID", id: "startinggrid" },
  { name: "QUALIFYING", id: "qualifying" },
  { name: "FREE PRACTICE 2", id: "practice3" },
  { name: "FREE PRACTICE 2", id: "practice2" },
  { name: "FREE PRACTICE 1", id: "practice1" },
];
