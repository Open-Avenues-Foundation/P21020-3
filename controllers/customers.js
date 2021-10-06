const models = require('../models')
const Customer = require('../models/customer')
const customerController = require('./customers')


const handleUploadCustomers = customers => {
  const customerEmailValidate = customers.map(customer => {
    const { email } = customer

    const invalidChars = /[,]+|[.]{2,}|\s/g

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

const getCustomerById = async (req, res) => {
  const { id } = req.params

  const foundCustomer = await models.Customer.findOne({ where: { id }, })

  return foundCustomer
    ? res.send(foundCustomer)
    : res.sendStatus(404)
}

const createNewCustomer = async (req, res) => {
  const {
    firstName, lastName, email, phoneNumber, city, state
  } = req.body

  // eslint-disable-next-line max-len
  if (!firstName || !lastName || email || phoneNumber) return res.status(400).send('The following fields are required: firstname, lastname, email, phonenumber, city, state')

  const newCustomer = await models.Customer.create({
    firstName, lastName, email, phoneNumber, city, state
  })

  return res.status(201).send(newCustomer)
}

const customerRoute = async (req, res) => {
  const { customers } = req.body

  customerController.handleUploadCustomers(customers)

  res.send('Customers uploaded')
}


module.exports = {
  handleUploadCustomers, getAllCustomers, getCustomerById, createNewCustomer, customerRoute
}

