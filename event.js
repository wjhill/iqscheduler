var moment = require('moment');

function event(eventInfo) {
    return eventInfo;
}

event.start = function startDate(dateText) {
    var startDate = moment(dateText);
    return startDate;
}

event.duration = function duration(startDate, lengthInHours) {
    var endDate = startDate.clone().add(lengthInHours, 'hour');
    return endDate;
}

module.exports = event;