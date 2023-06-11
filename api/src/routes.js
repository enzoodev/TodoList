import { TasksController } from './controllers/tasks.js'
import { buildRoutePath } from './utils/build-route-path.js'

const tasksController = new TasksController()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const tasks = tasksController.get(req, res)

      return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      if (!req.body || !req.body.title) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.write('Erro: Informe o título da tarefa.')
        return res.end()
      } else if (!req.body.description) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.write('Erro: Informe a descrição da tarefa.')
        return res.end()
      }

      tasksController.post(req, res)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      if (!req.body || !req.body.title) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.write('Erro: Informe o título da tarefa.')
        return res.end()
      } else if (!req.body.description) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.write('Erro: Informe a descrição da tarefa.')
        return res.end()
      }

      const putController = tasksController.put(req, res)

      if (putController === null) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('Erro: Tarefa não encontrada')
        return res.end()
      }

      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const deleteController = tasksController.delete(req, res)

      if (deleteController === null) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('Erro: Tarefa não encontrada')
        return res.end()
      }

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const patchController = tasksController.patch(req, res)

      if (patchController === null) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('Erro: Tarefa não encontrada')
        return res.end()
      }

      return res.writeHead(200).end()
    }
  }
]
