const { User, Location } = require('../models/models');

class Backend {
  constructor() {
    this.users = [];
    this.locations = [];
  }
  createUser(name, email) {
    const id = this.generateUniqueId();
    const user = new User(id, name, email);
    this.users.push(user);
    return user;
  }
  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }
  getAllUsers() {
    return this.users;
  }
  updateUser(userId, newName, newEmail) {
    const user = this.getUserById(userId);
    if (user) {
      user.name = newName;
      user.email = newEmail;
      return user;
    }
    return null;
  }
  deleteUser(userId) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
  createLocation(latitude, longitude, description) {
    const id = this.generateUniqueId();
    const location = new Location(id, latitude, longitude, description);
    this.locations.push(location);
    return location;
  }
  getLocationById(locationId) {
    return this.locations.find(location => location.id === locationId);
  }
  getAllLocations() {
    return this.locations;
  }
  updateLocation(locationId, newLatitude, newLongitude, newDescription) {
    const location = this.getLocationById(locationId);
    if (location) {
      location.latitude = newLatitude;
      location.longitude = newLongitude;
      location.description = newDescription;
      return location;
    }
    return null;
  }
  deleteLocation(locationId) {
    const index = this.locations.findIndex(location => location.id === locationId);
    if (index !== -1) {
      this.locations.splice(index, 1);
      return true;
    }
    return false;
  }
  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

module.exports = Backend;
  