// import fs from "fs";

//Read file
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) console.error(err);
//   console.log(data);
// });

// const data = fs.readFileSync("./test.tt", "utf8");
// console.log(data);

import fs from "fs/promises";

//Read file with then catch
// fs.readFile("./test.txt", "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//Read file with async await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

//Write file
const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, world!");
    console.log("File written successfully!");
  } catch (err) {
    console.error(err);
  }
};

//Append file
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nHii there!");
    console.log("File written successfully!");
  } catch (err) {
    console.error(err);
  }
};

writeFile();
appendFile();
readFile();
