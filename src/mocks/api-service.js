
class ApiService {
  MSInADay = 1000 * 60 * 60 * 24;

  getUsers = async () => {
    try {
      const result = await fetch('/users.json');
      const data = await result.json();
      const adjusted = this.processDates(data, new Date());
      return adjusted;
    } catch (error) {
      return [];
    }
  };

  filterUsers = (users, searchTerm) => {
    const regex = new RegExp(searchTerm, 'i');
    return users.filter((user) => user.username.match(regex));
  };

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
  ApiService
};
