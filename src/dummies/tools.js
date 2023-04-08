
class Tools {
  MSInADay = 1000 * 60 * 60 * 24;

  processDates = (data, now) => {
    data.forEach((item) => {
      this.processDay(item, now);
    });
  };

  processDay = (item, now) => {
    if (item.hasOwnProperty('startDate') !== true) {
      item.days = null;
      return;
    }

    const start = new Date(item.startDate);
    const difference = Math.floor((now - start) / this.MSInADay);
    item.days = difference;
  };
}

module.exports = {
  Tools
};
