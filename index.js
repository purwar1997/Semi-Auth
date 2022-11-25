const app = require("./app");
// process.env is a JS object which will contain all the environment variables
// const PORT = process.env.PORT;
const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
