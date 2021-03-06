const moment = require("moment");
const bookingShared = require("./book-shared");

let testEvent = {
  title: "Single session, 5 spaces, free",
  name: "OA-Test-BookOnly-ScheduledSession-Free-Success",
  price: 0,
  event: {
    "@context": "https://openactive.io/",
    "@type": "ScheduledSession",
    superEvent: {
      "@type": "SessionSeries",
      name: "OA-Test-BookOnly-ScheduledSession-Free-Success",
      offers: [
        {
          "@type": "Offer",
          price: 0
        }
      ]
    },
    startDate: moment()
      .add(6, "d")
      .format(),
    endDate: moment()
      .add(7, "d")
      .format(),
    maximumAttendeeCapacity: 5
  }
};

describe("Book Only", function() {
  describe("Book Only Success Without Payment for ScheduledSession", function() {
    bookingShared.performTests.bind(this)(testEvent);
  });
});
