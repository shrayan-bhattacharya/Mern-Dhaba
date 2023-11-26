const mongoose = require("mongoose");
// const mongoDbClient = require("mongodb").MongoClient
const mongoURI =
  "mongodb://shrayan08:shrayan2002@ac-ljeh7ww-shard-00-00.pww2an2.mongodb.net:27017,ac-ljeh7ww-shard-00-01.pww2an2.mongodb.net:27017,ac-ljeh7ww-shard-00-02.pww2an2.mongodb.net:27017/mern-dhaba?ssl=true&replicaSet=atlas-4yjrnw-shard-0&authSource=admin&retryWrites=true&w=majority"; // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log("---" + err);
    else {
      // var database =
      console.log("Connected to MongoDB");
      const foodCollection = await mongoose.connection.db.collection(
        "food_items"
      );
      foodCollection.find({}).toArray(async function (err, data) {
        const categoryCollection = await mongoose.connection.db.collection(
          "Categories"
        );
        categoryCollection.find({}).toArray(async function (err, Catdata) {
          callback(err, data, Catdata);
        });
      });
      // listCollections({name: 'food_items'}).toArray(function (err, database) {
      // });
      //     module.exports.Collection = database;
      // });
    }
  });
};
