import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

const PORT = 3333

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (!url) {
    return res.writeHead(404).end()
  }

  const route = routes.find(
    (route) => route.method === method && route.path.test(url)
  )

  if (route) {
    const routeParams = url.match(route.path)

    if (routeParams) {
      const { query, ...params } = routeParams.groups
      req.params = params
      req.query = query ? extractQueryParams(query) : null
    }

    return route.handler(req, res)
  }
})

server.listen(PORT)
