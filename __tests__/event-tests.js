jest.unmock('../event');
jest.unmock('moment');

describe('Set the event information', () => {
    it('Ensures the event starting data is created correctly', () => {
        var moment = require('moment');
        var event = require('../event');
        var textOfStartDate = "2016-08-20 11:00:00";
        var startClass = event.start(textOfStartDate);
        expect(startClass).toEqual(moment(textOfStartDate));
    })
})