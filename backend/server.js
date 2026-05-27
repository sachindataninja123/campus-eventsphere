const app = require("./src/app");
const config = require("./src/config/config");
const connectToDB = require("./src/db/db");

connectToDB();
const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
