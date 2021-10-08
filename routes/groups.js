// const { app } = require('express')
const { getAllGroups, getGroupById, createNewGroup } = require('../controllers/groups')


const groupRoutes = (app) => {
  app.get('/groups', getAllGroups)
  app.get('/group/:id', getGroupById)
  app.post('/newGroup', createNewGroup)
}

module.exports = groupRoutes
