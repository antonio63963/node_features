const express = require("express");

const appRouter = require("./routes");

const app = express();
const PORT = 5000;

app.use(appRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
