require("dotenv").config();
const mongoose = require("mongoose");
const Pig = require("../models/pig");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    process.exit(1);
  }
};

const pigs = [
  {
    title: "Kunekune",
    image: "images/kunekune.jpg",
    link: "About Kunekune",
    description:
      "The Kunekune is a small breed of domestic pig from New Zealand. Kunekune are hairy with a rotund build, and may bear wattles hanging from their lower jaws. Their colour ranges from black and white, to ginger, cream, gold-tip, black, brown, and tricoloured. They have a docile, friendly nature. Source: Wikipedia",
  },
  {
    title: "Mangalica",
    image: "images/mang.jpg",
    link: "About Mangalica",
    description:
      "The Mangalica is a Hungarian breed of domestic pig. It was developed in the mid-19th century by crossbreeding breeds from the nearby Romanian Salonta and Hungarian Bakony with the European wild boar and the Serbian Šumadija breed. The Mangalica pig grows a thick, curly coat of hair. Source: Wikipedia",
  },
  {
    title: "Kunekune",
    image: "images/kunekune.jpg",
    link: "About Kunekune",
    description:
      "The Kunekune is a small breed of domestic pig from New Zealand. Kunekune are hairy with a rotund build, and may bear wattles hanging from their lower jaws. Their colour ranges from black and white, to ginger, cream, gold-tip, black, brown, and tricoloured. They have a docile, friendly nature. Source: Wikipedia",
  },
  {
    title: "Göttingen Minipig",
    image: "images/Göttingen-minipig.jpg",
    link: "About Göttingen-minipig",
    description:
      "The Göttingen minipig is a breed of miniature pig. The Göttingen minipig is the smallest domestic pig breed known in the world; as an adult, they weigh around 35 kg.",
  },
  {
    title: "Vietnamese Pot-bellied",
    image: "images/vietnam.jpg",
    link: "About Vietnamese Pot-bellied",
    description:
      "Vietnamese Pot-bellied is the exonym for the Lon I or I pig, an endangered traditional Vietnamese breed of small domestic pig. The I is uniformly black and has short legs and a low-hanging belly, from which the name derives. They are utilized for meat and are slow-growing.",
  },
  {
    title: "Berkshire",
    image: "images/Berkshire.jpg",
    link: "About Mangalica",
    description:
      " The Berkshire is a British breed of pig. It originated in the English county of Berkshire, for which it is named. It is normally black, with some white on the snout, on the lower legs, and on the tip of the tail. It is a rare breed in the United Kingdom",
  },
  {
    title: "Limousin Cul Noir",
    image: "images/culnoir.jpg",
    link: "About Cul Noir",
    description:
      " Limousin pig breed (known as Saint-Yrieix) which has occupied the West of the Massif-Central for several centuries. Rustic and undemanding, the Cul Noir pork is vigorous, the breeding method is traditional and natural, offering healthy meat of very high taste quality.",
  },
  {
    title: "Large White ",
    image: "images/white.jpg",
    link: "About Large White",
    description:
      "The Mangalica is a Hungarian breed of domestic pig. It was developed in the mid-19th century by crossbreeding breeds from the nearby Romanian Salonta and Hungarian Bakony with the European wild boar and the Serbian Šumadija breed. The Mangalica pig grows a thick, curly coat of hair. Source: Wikipedia",
  },
];
async function populateDatabase() {
  try {
    await connectDB();
    await Pig.deleteMany({}); // Clear existing data
    const result = await Pig.insertMany(pigs);
    console.log(`${result.length} pigs inserted successfully`);
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    await mongoose.connection.close();
  }
}

populateDatabase();
