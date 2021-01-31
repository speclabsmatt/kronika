import mongoose from "mongoose";
const { connect } = mongoose;

let count = 0;

// const options = {
//   autoIndex: false, // Don't build indexes
//   poolSize: 10, // Maintain up to 10 socket connections
//   // If not connected, return errors immediately rather than waiting for reconnect
//   bufferMaxEntries: 0,
//   // all other approaches are now deprecated by MongoDB:
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }; test
const connectWithRetry = () => {
  console.log("MongoDB connection with retry");
  connect(process.env.MANGODB_CONN_STRING)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((err) => {
      console.log(
        "MongoDB connection unsuccessful, retry after 5 seconds. " + err,
        ++count
      );
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

const _mongoose = mongoose;
export { _mongoose as mongoose };
