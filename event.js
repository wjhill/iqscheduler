function event(eventInfo) {
    return eventInfo;
}

event.start = function startDate(eventInfo) {
    return eventInfo.start
}

event.end = function endDate(eventInfo) {
    return eventInfo.end
}

module.exports = event;