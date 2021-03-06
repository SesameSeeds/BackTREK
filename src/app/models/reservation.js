import Backbone from 'backbone';

const Reservation = Backbone.Model.extend({

  validate: function(attributes) {
    const error = {};

    if (!attributes.name) {
      error['name'] = 'Full Name cannot be blank!';
    }

    if (!attributes.email) {
      error['email'] = 'E-Mail cannot be blank!';
    }

    if (!attributes.age) {
      error['age'] = 'Age cannot be blank!';
    } else if (isNaN(attributes.age)) {
      error['age'] = 'Age must be a number!';
    }

    console.log('Error!');
    console.log(error);
    if (Object.keys(error).length > 0) {
      return error;
    } else {
      return false;
    }
  }
});

export default Reservation;
