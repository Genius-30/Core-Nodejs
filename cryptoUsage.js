import crypto from "crypto";

// createHash() method is used to create Hash object
const hash = crypto.createHash("sha256");
hash.update("password123");
console.log(hash.digest("hex"));

// randomBytes() method is used to generate random bytes
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
});

// randomUUID() method is used to generate random UUID
console.log(crypto.randomUUID());

// createCipheriv() method is used to create Cipher object
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello World", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

// createDecipheriv() method is used to create Decipher object
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);

// Note: Try it one by one, as all the methods are using the same variables.
