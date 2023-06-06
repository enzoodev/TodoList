import { randomUUID } from "node:crypto";
import { DataBase } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new DataBase();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const users = database.select("users");

      if (req.query) {
        const user = users.find(item => item.name === req.query.search)

        return res
          .setHeader("Content-type", "application/json")
          .end(JSON.stringify(user));
      }

      return res
        .setHeader("Content-type", "application/json")
        .end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { name, email } = req.body;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const users = database.select("users");

      const usersWithoutUserDeleted = users.filter((item) => item.id !== id);

      if (!usersWithoutUserDeleted || usersWithoutUserDeleted.length === 0) {
        return res.writeHead(400).end();
      }

      database.delete("users", usersWithoutUserDeleted);

      return res.writeHead(204).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { name, email } = req.body;
      const users = database.select("users");

      const userIndex = users.findIndex((item) => item.id === id);

      if (!userIndex) {
        return res.writeHead(400).end();
      }

      const user = users[userIndex];
      user.name = name;
      user.email = email;

      users[userIndex] = user;

      database.update("users", users);

      return res.writeHead(204).end();
    },
  },
];
