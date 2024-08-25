import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObj = new URL(urlString);
console.log("URL Object:", urlObj);

// fortmat() method returns the serialized URL
console.log("URL String:", url.format(urlObj));

// import.meta.url - file URL of the current module
console.log("File URL:", import.meta.url);

// fileURLToPath() method returns the file path from a file URL
console.log("File Path:", url.fileURLToPath(import.meta.url));

// URLSearchParams
const searchParams = new URLSearchParams(urlObj.search);
console.log("Search Params:", searchParams);
console.log("Query String:", searchParams.toString());
console.log("Query Param:", searchParams.get("q"));
console.log("Query Params:", searchParams.getAll("q"));
searchParams.append("page", "1");
searchParams.set("q", "hello");
searchParams.delete("page");
console.log("Updated Search Params:", searchParams);
