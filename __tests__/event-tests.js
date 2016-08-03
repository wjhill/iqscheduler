jest.unmock('../event');

var moment = require('moment');

var eventInfo = { 
    "start": moment("2016"),
    "end": moment("2016") 
};

describe('Get the event information', () => {
    it('Ensures the event data is passed correctly', () => {
        const event = require('../event');
        expect(event(eventInfo)).toBe(eventInfo);
    }),
    it('Ensures the event start is set correctly', () => {
        const event = require('../event');
        expect(event.start(eventInfo)).toBe(moment("2016"));
    }),
    it('Ensures the event start is passing a real value', () => {
        const event = require('../event');
        expect(event.start(eventInfo)).not.toBe(moment("2015"));
    }),
    it('Ensures the event end is set correctly', () => {
        const event = require('../event');
        expect(event.end(eventInfo)).toBe(moment("2016"));
    })
})