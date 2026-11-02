const express = require("express");
require("dotenv").config();

const ProductsRoutes = require("./Routes/Products");
const UsersRoutes = require("./Routes/Users");
const path = require("path");
const connectDB = require("./Config/db");
const GlobalErrorHandler = require("./MiddleWares/GlobalError");
const NotFound404 = require("./MiddleWares/NotFound404");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Templates", "index.html"));
});

app.use("/api", ProductsRoutes);
app.use("/api", UsersRoutes);

app.use(NotFound404);
app.use(GlobalErrorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();