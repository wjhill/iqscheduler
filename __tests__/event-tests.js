jest.unmock('../event');

var eventInfo = { 
    "start": "2016",
    "end": "2016" 
};

describe('Get the event information', () => {
    it('Ensures the event data is passed correctly', () => {
        const event = require('../event');
        expect(event(eventInfo)).toBe(eventInfo);
    }),
    it('Ensures the event start is set correctly', () => {
        const event = require('../event');
        expect(event.start(eventInfo)).toBe('2016');
    }),
    it('Ensures the event end is set correctly', () => {
        const event = require('../event');
        expect(event.end(eventInfo)).toBe('2016');
    })
})