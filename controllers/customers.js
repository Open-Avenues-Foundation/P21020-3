const models = require('../models')
const Customer = require('../models/customer')


const handleUploadCustomers = customers => {
  const customerEmailValidate = customers.map(customer => {
    const { email } = customer
    // removes whitespaces and commas
    const invalidChars = /[,]+|[.]{2,}|\s

    const validatedEmail = email.replace(invalidChars, '')

    return {
      ...customer,
      email: validatedEmail,
    }
  })

  Customer.BulkCreate(customerEmailValidate)
}

const getAllCustomers = async (req, res) => {
  const customers = await models.Customer.findAll()

  return res.send(customers)
}
  return res.status(201).send(newCustomer)
}

module.exports = { handleUploadCustomers, getAllCustomers, getCustomerById, createNewCustomer }

