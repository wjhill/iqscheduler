jest.unmock('../event');
jest.unmock('moment');

describe('Set the event information', () => {
    it('Ensures the event starting data is created correctly', () => {
        var moment = require('moment');
        var event = require('../event');
        var textOfStartDate = "2016-08-20 11:00:00";
        var startClass = event.start(textOfStartDate);
        expect(startClass).toEqual(moment(textOfStartDate));
    }),
        it('Ensures the event starting and ending data are created correctly', () => {
        var moment = require('moment');
        var event = require('../event');
        var textOfStartDate = "2016-08-20 11:00:00";
        var textOfEndDate = "2016-08-20 12:00:00";
        var startClass = event.start(textOfStartDate);
        var endClass = event.duration(startClass, "1");
        expect(endClass.toDate()).toEqual(moment(textOfEndDate).toDate());
    })
})