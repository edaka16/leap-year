var today = new Date();
var currentYear = today.getFullYear();
var leapyear = new Date("2020-02-29 0:00:00");

var year_range = [];
var new_array = [];

console.log(today);

if(today <= leapyear){
  console.log(leap_year_range(currentYear));
    
    
}else{
    var leapyearwithcurrent = currentYear + 1;
   console.log(leap_year_range(leapyearwithcurrent))
    
}

function leap_year_range(start) {
for (var i = start ; i <=start + 39; i++)
{
     year_range.push(i);
}

year_range.forEach(
    
function(year)
    { 
    if (test_LeapYear(year)) 
    new_array.push(year);
    });

return new_array;
    }

function test_LeapYear(year) {
     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                return year;
        } else {
                return false;
        }
}

function showYears(){
    var allYears = new_array.map(function(y){
        return 'The next leap year is in ' + y
    })
    document.getElementById('years').innerHTML=
    '<li>' + allYears.join('</li><li>') + '</li>'
}
showYears()