const Customer = require('../models/customer.js');

const handleUploadCustomers = customers => {
  const customersSanitized = customers.map(customer => {
    //customer {}
    const {email} = customer;

    // Improve the regular expression to remove invalid characters
    const invalidCharacters = /,/i;

    const cleanEmail = email.replace(invalidCharacters, '');

    return {
      ...customer,
      email: cleanEmail,
    };
  });

  // SAVE the customers into the database using the correct model
};

const getAllCustomers = () => {
  // Use Sequelizer to fetch all the customers from the DB.
  // Customer.findAll()
  // Return all the customers values
};

module.exports = handleUploadCustomers;
