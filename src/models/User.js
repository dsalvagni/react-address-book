/**
 * Structures the users data model
 * Has handy methods to access properties
 *
 * @class User
 */
class User {
  constructor(data = {}) {
    Object.assign(this, data);
  }

  getFullName() {
    return `${this.name.first} ${this.name.last}`;
  }

  getUsername() {
    const login = this.login;
    return login && login.username;
  }

  getThumbnail(size = "large") {
    const thumbnail = this.picture;
    return thumbnail && thumbnail[size];
  }

  getFullAddress() {
    if (!this.location) return null;
    return `${this.location.street.name} ${this.location.city}, ${
      this.location.state
    } - ${this.location.postcode}`;
  }

  get(field) {
    return (field && this[field]) || null;
  }
}

export default User;
