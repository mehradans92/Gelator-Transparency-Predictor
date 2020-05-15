var moment = require("moment");
var myDate = new Date();
var cooldate = moment(myDate).format('L');

console.log(cooldate);