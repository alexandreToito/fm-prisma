import * as dotenv from "dotenv";

dotenv.config();

import config from "./config";
import app from "./server";

app.listen(config.port, () => {
  console.log(`App running on PORT ${config.port}`);
});
