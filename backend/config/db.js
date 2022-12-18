import mongoose from "mongoose";

const db = () => {
  try {
    const con = mongoose.connect(process.env.URL, {
      dbName: "pirateit-mern",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected ${con.connection.host}`);
  } catch (err) {
    console.error(`Error : ${err.message}`);
    process.exit(1);
  }
};

export default db;
