import { createServer } from "http";
import chalk from "chalk";

const PORT = process.env.PORT || 3000;
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Doe" },
];

//Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//Middleware to parse JSON
const jsonParser = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//Route handler for GET /api/users
const getUsersHanlder = (req, res) => {
  res.write(JSON.stringify({ users }));
  res.end();
};

//Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify({ user }));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found!" }));
  }
  res.end();
};

//Route handler for 404
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found!" }));
  res.end();
};

//Route hanlder for POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const { name } = JSON.parse(body);
    const id = users.length + 1;
    users.push({ id, name });
    res.statusCode = 201;
    res.write(JSON.stringify({ message: "User created successfully!" }));
    res.end();
  });
};

const server = createServer(async (req, res) => {
  logger(req, res, () => {
    jsonParser(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHanlder(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(3000, () => {
  console.log(
    `Server is running on ${chalk.blue.underline(`http://localhost:${PORT}`)}`
  );
});
