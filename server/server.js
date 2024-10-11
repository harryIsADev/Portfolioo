import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

// Serve static files from the "public" folder
app.use(express.static("public"));

// Route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
