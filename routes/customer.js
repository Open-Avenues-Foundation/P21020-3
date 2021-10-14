const multer = require('multer')
const upload = multer({dest: 'uploads/csv'})
// eslint-disable-next-line max-len
const { getAllCustomers, handleUploadCustomers, createNewCustomer, getCustomerById } = require('../controllers/customers')


const customerRoutes = (app) => {
  app.post('/customerUploads', upload.single('file'), handleUploadCustomers)
  app.post('/newCustomer', createNewCustomer)

  app.get('/customers', getAllCustomers)
  app.get('/customers/:id', getCustomerById)
}

module.exports = customerRoutes
