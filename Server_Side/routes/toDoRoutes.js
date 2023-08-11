const {Router}=require('express')
const { getodo, saveToDo, updateToDo, deleteToDo } = require('../controllers/toDoControlls')
const routes=Router()

routes.get('/', getodo)
routes.post('/save', saveToDo)
routes.post('/update', updateToDo)
routes.post('/delete', deleteToDo)
module.exports=routes
