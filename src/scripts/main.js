AOS.init();

const birthday = new Date("Oct 10, 2024 18:00:00");
const birthdayTimeStamp = birthday.getTime();
const counter = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const timeUntilParty = birthdayTimeStamp - nowTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysUntilParty = Math.floor(timeUntilParty / dayInMs);
    const hoursUntilParty = Math.floor((timeUntilParty % dayInMs) / hourInMs);
    const minutesUntilParty = Math.floor((timeUntilParty % hourInMs) / minuteInMs);
    const secondsUntilParty = Math.floor((timeUntilParty % minuteInMs) / 1000);

    document.getElementById('clock').innerHTML = `${daysUntilParty}d ${hoursUntilParty}hrs ${minutesUntilParty}m ${secondsUntilParty}s`

    if(timeUntilParty < 0) {
        clearInterval(counter);
        document.getElementById('clock').innerHTML = 'Volte ano que vem :)'

    }
}, 1000);