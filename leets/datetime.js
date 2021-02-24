// Given a date, return the corresponding day of the week for that date.

// The input is given as three integers representing the day, month and year respectively.

// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.



// Example 1:

// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"
// Example 2:

// Input: day = 18, month = 7, year = 1999
// Output: "Sunday"
// Example 3:

// Input: day = 15, month = 8, year = 1993
// Output: "Sunday"


// Constraints:

// The given dates are valid dates between the years 1971 and 2100.
var dayOfTheWeek = function (day, month, year) {
    const daysOfWeekObj = {
        Mon: 'Monday',
        Tue: 'Tuesday',
        Wed: 'Wednesday',
        Thu: 'Thursday',
        Fri: 'Friday',
        Sat: 'Saturday',
        Sun: 'Sunday'
    }

    let utcDateString = new Date(year, month - 1, day).toUTCString().substring(0, 3);
    console.log(`Day : ${utcDateString}`);
    switch (utcDateString) {
        case 'Mon':
            console.log(daysOfWeekObj.Mon);
            return daysOfWeekObj.Mon;
        case 'Tue':
            console.log(daysOfWeekObj.Tue);
            return daysOfWeekObj.Tue;
        case 'Wed':
            console.log(daysOfWeekObj.Wed);
            return daysOfWeekObj.Wed;
        case 'Thu':
            console.log(daysOfWeekObj.Thu);
            return daysOfWeekObj.Thu;
        case 'Fri':
            console.log(daysOfWeekObj.Fri);
            return daysOfWeekObj.Fri;
        case 'Sat':
            console.log(daysOfWeekObj.Sat);
            return daysOfWeekObj.Sat;
        case 'Sun':
            console.log(daysOfWeekObj.Sun);
            return daysOfWeekObj.Sun;

    }
};
console.log(dayOfTheWeek(31, 8, 2019));