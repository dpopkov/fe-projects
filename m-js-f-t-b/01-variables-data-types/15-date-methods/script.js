let x;

let d = new Date('2023-07-17T14:15:16');

x = d.toString();  // Mon Jul 17 2023 14:15:16 GMT+0300

x = d.getFullYear();  // 2023 number

x = d.getMonth();  // 6 number  -- month is zero-based

// Day of the month
x = d.getDate();  // 17 number

// Day of the week
x = d.getDay();  // 1 number

x = d.getHours();  // 14 number

x = d.getMinutes();  // 15 number

x = d.getSeconds();  // 16 number

x = d.getMilliseconds();  // 0 number

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2023-7-17 string

x = Intl.DateTimeFormat('en-US').format(d);    // 7/17/2023 string
x = Intl.DateTimeFormat('ru-RU').format(d);    // 17.07.2023 string
x = Intl.DateTimeFormat('fr-FR').format(d);    // 17/07/2023 string
x = Intl.DateTimeFormat('de-DE').format(d);    // 17.7.2023 string
x = Intl.DateTimeFormat('en-GB').format(d);    // 17/07/2023 string
x = Intl.DateTimeFormat('default').format(d);  // 7/17/2023 string

x = Intl.DateTimeFormat('default', { month: 'long'}).format(d);  // July string

x = d.toLocaleString('default', { month: 'short'});  // Jul string
x = d.toLocaleString('ru-RU', { month: 'short'});  // июль string

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
});  // Monday, July 17, 2023 at 4:15:16 AM string

console.log(x, typeof x);
