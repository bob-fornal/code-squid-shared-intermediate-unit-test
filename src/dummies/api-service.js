
const { Tools } = require('./tools');

class ApiService {
  tools;

  constructor() {
    this.tools = new Tools();
  }

  getUsers = async () => {
    try {
      const result = await fetch('/users.json');
      const data = await result.json();
      const adjusted = this.tools.processDates(data, new Date());
      return adjusted;
    } catch (error) {
      return [];
    }
  };
}

module.exports = {
  ApiService
};
