import url from 'node:url'
import { DataBase } from '../database.js'
import { randomUUID } from 'node:crypto'
import { format } from 'date-fns'

const database = new DataBase()

export class TasksController {
  get = (req, res) => {
    const tasks = database.select('tasks')

    const urlParts = url.parse(req.url || 'tasks', true)
    const query = urlParts.query

    if (query && query.search) {
      const task = tasks.find((item) => item.id === query.search)

      return task
    }

    return tasks
  }

  post = (req, res) => {
    const { title, description } = req.body

    const today = new Date()
    const formattedDate = format(today, "yyyy-MM-dd'T'HH:mm:ss")

    const task = {
      id: randomUUID(),
      title,
      description,
      completed_at: null,
      created_at: formattedDate,
      updated_at: formattedDate
    }

    database.insert('tasks', task)
  }

  put = (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    const tasks = database.select('tasks')

    const taskIndex = tasks.findIndex((item) => item.id === id)

    if (taskIndex === -1) {
      return null
    }

    const today = new Date()
    const formattedDate = format(today, "yyyy-MM-dd'T'HH:mm:ss")

    const task = tasks[taskIndex]
    task.title = title
    task.description = description
    task.updated_at = formattedDate

    tasks[taskIndex] = task

    database.update('tasks', tasks)
  }

  delete = (req, res) => {
    const { id } = req.params
    const tasks = database.select('tasks')

    const taskIndex = tasks.findIndex((item) => item.id === id)

    if (taskIndex === -1) {
      return null
    }

    const tasksWithouttaskDeleted = tasks.filter((item) => item.id !== id)

    if (!tasksWithouttaskDeleted || tasksWithouttaskDeleted.length === 0) {
      return res.writeHead(400).end()
    }

    database.delete('tasks', tasksWithouttaskDeleted)
  }

  patch = (req, res) => {
    const { id } = req.params
    const tasks = database.select('tasks')

    const taskIndex = tasks.findIndex((item) => item.id === id)

    if (taskIndex === -1) {
      return null
    }

    const today = new Date()
    const formattedDate = format(today, "yyyy-MM-dd'T'HH:mm:ss")

    const task = tasks[taskIndex]
    task.completed_at = task.completed_at ? null : formattedDate

    tasks[taskIndex] = task

    database.patch('tasks', tasks)
  }
}
