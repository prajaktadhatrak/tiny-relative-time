const { relTime } = require("./dist/index");

const twoHoursAgo = new Date(Date.now() - 2 * 3600 * 1000);
const oneMinuteAgo = Date.now() -  10 * 1000;
const fiveMinutesAgoIso = new Date(Date.now() - 5 * 60 * 1000).toISOString();
console.log(twoHoursAgo, oneMinuteAgo, fiveMinutesAgoIso);

console.log("natural (Date):", relTime(twoHoursAgo, "natural"));         
console.log("natural (timestamp):", relTime(oneMinuteAgo, "natural"));  
console.log("natural (ISO):", relTime(fiveMinutesAgoIso, "natural"));   

console.log("minuteRounded (Date):", relTime(twoHoursAgo, "minuteRounded"));
console.log("minuteRounded (timestamp):", relTime(oneMinuteAgo, "minuteRounded"));
console.log("minuteRounded (ISO):", relTime(fiveMinutesAgoIso, "minuteRounded"));

console.log("compact (Date):", relTime(twoHoursAgo, "compact"));       
console.log("compact (timestamp):", relTime(oneMinuteAgo, "compact")); 
console.log("compact (ISO):", relTime(fiveMinutesAgoIso, "compact"));

console.log("compactMinute (Date):", relTime(twoHoursAgo, "compactMinute"));
console.log("compactMinute (timestamp):", relTime(oneMinuteAgo, "compactMinute"));
console.log("compactMinute (ISO):", relTime(fiveMinutesAgoIso, "compactMinute"));