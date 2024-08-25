import { createServer } from "http";
import chalk from "chalk";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 3000;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        filePath = path.join(__dirname, "public", "404.html");
      }

      const data = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    } else {
      res.writeHead(405, { "Content-Type": "text/html" });
      res.end("<h1>Method not allowed</h1>");
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Internal server error</h1>");
  }
});

server.listen(3000, () => {
  console.log(
    `Server is running on ${chalk.blue.underline(`http://localhost:${PORT}`)}`
  );
});
