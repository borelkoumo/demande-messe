import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
    
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(req.url)
    next()
})
app.use(express.static(join(__dirname, "public")));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});