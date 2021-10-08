const models = require('../models')


const sanitizeEmail = (email) => {
  const invalidChars = /[,]+|[.]{2,}|\s/g
  const validatedEmail = email.replace(invalidChars, '')

  return validatedEmail
}

const handleUploadCustomers = async (req, res) => {
  const customers = req.body

  const customerEmailValidate = customers.map((customer) => {
    const { email } = customer

    const cleanedEmail = sanitizeEmail(email)

    return {
      ...customer,
      email: cleanedEmail
    }
  })

  await models.Customer.bulkCreate(customerEmailValidate)

  return res.send('Successfully uploaded!')
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

  const cleanedEmail = sanitizeEmail(email)

  const newCustomer = await models.Customer.create({
    firstName,
    lastName,
    email: cleanedEmail,
    phoneNumber,
    city,
    state,
  })

  return res.status(201).send(newCustomer)
}


module.exports = {
  handleUploadCustomers, getAllCustomers, getCustomerById, createNewCustomer
}

