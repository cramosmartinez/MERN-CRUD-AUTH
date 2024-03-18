import app from "./app.js";
import { connect } from "./db.js";


connect();
app.listen(4000);
console.log("Server on port", 4000);
