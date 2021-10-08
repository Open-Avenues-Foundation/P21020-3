const models = require('../models')


const getAllGroups = async (req, res) => {
  const groups = await models.Group.findAll()

  return res.send(groups)
}

const getGroupById = async (req, res) => {
  const { id } = req.params

  const foundGroup = await models.Group.findOne({
    where: { id },
  })

  return foundGroup
    ? res.send(foundGroup)
    : res.sendStatus(404)
}

const createNewGroup = async (req, res) => {
  const {
    createDate, groupName, isActive, lastOrderDate, lastOrderPrice
  } = req.body

  // eslint-disable-next-line max-len
  if (!createDate || !groupName || !isActive || !lastOrderDate || !lastOrderPrice) return res.status(400).send('The following fields are required: createDate, groupName, isActive, lastOrderDate, lastOrderPrice')

  const newGroup = await models.Group.create({
    createDate, groupName, isActive, lastOrderDate, lastOrderPrice
  })

  return res.status(201).send(newGroup)
}

module.exports = { getAllGroups, getGroupById, createNewGroup }
