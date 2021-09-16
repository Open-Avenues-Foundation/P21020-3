const models = require('../models')
const Groups = require('../models/groups')

const getAllGroups = async (req, res) => {
    const groups = await models.Groups.findAll()

    return res.send(groups)
}

const getGroupById = async (req, res) => {
    const { id } = req.params

    const foundGroup = await models.Groups.findOne({ where: { id } })

    return res.send(foundGroup)
}

const createNewGroup = async (req, res) => {
    const { name } = res.body

    if (!name)
    return res.status(400).send('The following fields are required: name')

    const newGroup = await models.Group.create({ name })

    return res.status(201).send(newGroup)
}
module.exports = { getAllGroups, getGroupById, createNewGroup }