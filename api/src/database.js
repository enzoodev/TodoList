import fs from 'node:fs/promises'
import { URL } from 'node:url'

const databasePath = new URL('db.json', import.meta.url)

export class DataBase {
  #database = {}

  constructor () {
    fs.readFile(databasePath, 'utf8')
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist () {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select (table) {
    const data = this.#database[table] ?? []

    return data
  }

  insert (table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()
  }

  update (table, data) {
    this.#database[table] = data

    this.#persist()
    return data
  }

  patch (table, data) {
    this.#database[table] = data

    this.#persist()
    return data
  }

  delete (table, data) {
    this.#database[table] = data

    this.#persist()
    return data
  }
}
