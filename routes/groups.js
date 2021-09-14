const { app } = require('express')
const { getAllGroups, getGroupById, createNewGroup } = require('../controllers/groups')

app.get('/groups', getAllGroups)
app.get('/group/:id', getGroupById)

app.post('/newgroup', createNewGroup)