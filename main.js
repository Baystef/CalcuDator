let toSeconds = document.querySelector('.toSeconds');
let toMinutes = document.querySelector('.toMinutes');
let toHours = document.querySelector('.toHours');
let toDays = document.querySelector('.toDays');
let toWeeks = document.querySelector('.toWeeks');
let toMonths = document.querySelector('.toMonths');
let toYears = document.querySelector('.toYears');
let toDecades = document.querySelector('.toDecades');
let toCentury = document.querySelector('.toCentury');
let birthDay = document.querySelector('#birthDay').value;
console.log(birthDay);
let result = document.querySelector('.result');

// Get today's date in UTC format.
let day = new Date();

// Convert date to milliseconds since Jan 1, 1970
let today = day.getMilliseconds();
console.log(today);
// Convert birth date to milliseconds
let birthDayMilli = +new Date(birthDay);
console.log(birthDayMilli);

// subtract Current date(milliseconds) from birth date(milliseconds)
let ageMilli = today - birthDayMilli
console.log(ageMilli);

// Convert to seconds
toSeconds.addEventListener('click', function () {
    let seconds = ageMilli * 0.001;

    result.textContent = Math.floor(seconds);
    

});

// Convert to minutes
toMinutes.addEventListener('click', function () {
    let minutes = today / 60000;

    result.innerHTML = Math.floor(minutes);
    

});

// Convert to hours
toHours.addEventListener('click', function () {
    let hours = today / 3.6e+6;

    result.innerHTML = Math.floor(hours);
    

});

// Convert to days
toDays.addEventListener('click', function () {
    let days = today / 8.64e+7;

    result.innerHTML = Math.floor(days);
    

});

// Convert to weeks 
toWeeks.addEventListener('click', function () {
    let weeks = today / 6.048e+8;

    result.innerHTML = Math.floor(weeks);
    

});

// Convert to months 
toMonths.addEventListener('click', function () {
    let months = today / 2.628e+9;

    result.innerHTML = Math.floor(months);
    

});

// Convert to years
toYears.addEventListener('click', function () {
    let years = today * 3.171e-11 ;

    result.innerHTML = Math.floor(years);
    

});

// Convert to decades
toDecades.addEventListener('click', function () {
    let decades = today * 3.171e-12;

    result.innerHTML = Math.floor(decades);
    

});

// Convert to century
toCentury.addEventListener('click', function () {
    let century = today * 3.171e-13;

    result.innerHTML = century;
    

});
