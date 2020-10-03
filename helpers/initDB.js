import mongoose from "mongoose";

//gAPDQSjC0e1leIyi
//mongodb+srv://nextjs:<password>@cluster0.zlczc.mongodb.net/<dbname>?retryWrites=true&w=majority
function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("already connected ");
    return;
  }

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo db");
  });

  mongoose.connection.on("error", err => {
    console.log("errot to connect to mongo db", err);
  });
}

export default initDB;
