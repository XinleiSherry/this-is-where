import mockaroo from "mockaroo";
import postsDB from "../db/postsDB.js";

function DataGenerator() {
  const dataGenerator = {};
  dataGenerator.generateRecords = async function (numberOfRecords) {
    const client = new mockaroo.Client({
      apiKey: process.env.MOCKAROO_API_KEY,
    });
    const records = await client.generate({
      count: numberOfRecords,
      fields: [
        {
          name: "city",
          type: "Custom List",
          values: [
            "Alameda",
            "Berkeley",
            "Burlingame",
            "Cupertino",
            "Daly City",
            "Danville",
            "Foster City",
            "Fremont",
            "Gilroy",
            "Hayward",
            "Livermore",
            "Menlo Park",
            "Milpitas",
            "Mountain View",
            "Oakland",
            "Palo Alto",
            "San Carlos",
            "San Francisco",
            "San Jose",
            "San Leandro",
            "San Mateo",
            "San Rafael",
            "Santa Clara",
            "Saratoga",
            "Sunnyvale",
            "Union City",
            "Vallejo",
          ],
        },
        {
          name: "location",
          type: "Sentences",
        },
        {
          name: "body",
          type: "Paragraphs",
        },
        {
          name: "date",
          type: "Datetime",
        },
        {
          name: "type",
          type: "Custom List",
          values: [
            "Missed Connection",
            "Compliment",
            "Freestyle",
            "Memory",
            "Postcard",
          ],
        },
        {
          name: "username",
          type: "Username",
        },
        {
          name: "isHidden",
          type: "Custom List",
          values: ["false"],
        },
        {
          name: "flaggedBy[0]",
          type: "Number",
        },
        {
          name: "reports[0]",
          type: "Number",
        },
        {
          name: "likeCount",
          type: "Custom List",
          values: ["0"],
        },
      ],
    });
    console.log("from FDG - records is: ", records);
    console.log("from FDG - type of records is: ", typeof records);
    return records;
  };

  dataGenerator.sendRecords = async function (recordsArray) {
    for (let record of recordsArray) {
      await postsDB.createFakePost(record);
    }
  };

  return dataGenerator;
}

export default DataGenerator();
