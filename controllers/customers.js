const models = require('../models')

const handleUploadCustomers = customers => {
  const customerEmailValidate = customers.map(customer => {
    const { email } = customer
    const invalidChar = /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/

    const validatedEmail = email.replace(invalidChar, '')

    return {
      ...customer,
      email: validatedEmail
    }
  })
}

const getAllCustomers = async (req, res) => {
  const customers = await models.Customer.findAll()

  return res.send(customers)
}

const getCustomerById = async (req, res) => {
  const { Id } = req.params

  const foundCustomer = await models.Customer.findOne({ where: { Id } })

  return res.send(foundCustomer)
}

const createNewCustomer = async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = res.body

  // eslint-disable-next-line max-len
  if (!firstName || !lastName || email || phoneNumber) return res.status(400).send('The following fields are required: firstname, lastname, email, phonenumber')

  const newCustomer = await models.Customer.create({ firstName, lastName, email, phoneNumber })

  return res.status(201).send(newCustomer)
}

module.exports = { handleUploadCustomers, getAllCustomers, getCustomerById, createNewCustomer }

