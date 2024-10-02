import mongoose from "mongoose";

async function connectToDB() {
      const conn = await mongoose.connect(process.env.MONGO_URL)
        
      console.log(conn.connection.host);
      // const collectionsCursor = await mongoose.connection.db.listCollections().toArray();
      // const collectionNames = collectionsCursor.map(collection => collection.name);
      // console.log(collectionNames);
}

export default connectToDB;