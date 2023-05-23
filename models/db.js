//conexão de db com a biblioteca
const Sequelize = require("sequelize");

const sequelize = new Sequelize("localhost", );

class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.locations = [];
    }
  }
  
  class Location {
    constructor(id, latitude, longitude, description) {
      this.id = id;
      this.latitude = latitude;
      this.longitude = longitude;
      this.description = description;
    }
  }
  
  module.exports = { User, Location };
