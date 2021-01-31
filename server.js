import app from "./api/app.js";

const port = process.env.PORT || 3030;
const server = app.listen(port);

export default server;
