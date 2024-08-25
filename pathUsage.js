import path from "path";
import url from "url";

const filePath = "/path/to/file.txt";

//basename() method returns the last portion of a path
const fileName = path.basename(filePath);

//extname() method returns the extension of a file
const fileExtension = path.extname(filePath);

//dirname() method returns the directory name of a path
const directoryName = path.dirname(filePath);

//parse() method returns an object whose properties represent the path elements
const pathObject = path.parse(filePath);

console.log("File Name:", fileName);
console.log("File Extension:", fileExtension);
console.log("Directory Name:", directoryName);
console.log("Path Object:", pathObject);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("__filename:", __filename, "\n__dirname:", __dirname);

//join() method joins all given path segments together using the platform-specific separator as a delimiter
const joinedPath = path.join(__dirname, "test", "file.txt");
console.log("Joined Path:", joinedPath);

//resolve() method resolves a sequence of paths or path segments into an absolute path
const resolvedPath = path.resolve("test", "file.txt");
console.log("Resolved Path:", resolvedPath);
