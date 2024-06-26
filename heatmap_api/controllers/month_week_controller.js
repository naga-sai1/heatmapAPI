const fs = require("fs");
const csv = require("fast-csv");
const connectToDatabase = require("../sql/db");
const formattedDateFunction = require("../constants");

//broad function
async function uploadMonthAndWeek(path, fileName, callback) {
  const { pool } = await connectToDatabase();
  let stream = fs.createReadStream(path);
  let csvData = [];
  let headers = [];
  let fileStream = csv
    .parse()
    .on("data", function (data) {
      csvData.push(data);
    })
    .on("end", function () {
      const headerRow = csvData.shift();
      headers = headerRow.slice(1).map((header) => header.trim());

      pool.getConnection((error, connection) => {
        if (error) {
          console.log(error);
        } else {
          // Fetch column names from the database table
          connection.query(
            "SHOW COLUMNS FROM month_and_week",
            (columnError, columnResult) => {
              if (columnError) {
                console.error("Error fetching column names", columnError);
                connection.release();
                return callback(columnError);
              }

              const dbColumnNames = columnResult.map((column) => column.Field);

              // Iterate through each header in the CSV file
              headers.forEach((header) => {
                if (dbColumnNames.includes(header)) {
                  const index = headers.indexOf(header);
                  csvData.forEach((row) => {
                    let valueToUpdate = row[index + 1];
                    const commonColumnName = row[0];
                    let date = new Date().toISOString(); // Generates date and time in ISO format
                    let formattedDate =
                      formattedDateFunction.formatTimestamp(date);
                    console.log("date", formattedDate);
                    let name = "Broad";
                    let fileData = [name, formattedDate, fileName];

                    let fileQuery =
                      "INSERT INTO file_data (category, dates, file_name) VALUES (?)";
                    let checkFileQuery =
                      "SELECT * FROM file_data WHERE category = ? AND dates = ? AND file_name = ?";

                    console.log("fileQuery", fileQuery);

                    // Fetch the current value of the column from the database
                    connection.query(
                      `SELECT ?? FROM month_and_week WHERE ${dbColumnNames[0]} = ?`,
                      [header, commonColumnName],
                      (selectError, selectResult) => {
                        if (selectError) {
                          console.error(
                            "Error fetching previous value",
                            selectError
                          );
                        } else {
                          let previousValue;
                          if (selectResult[0]) {
                            previousValue = selectResult[0][header] || "";
                          }
                          console.log("Previous value", previousValue);
                          console.log("current value", valueToUpdate);

                          // Update the column with the new value
                          const query = `UPDATE month_and_week SET ?? = ? WHERE ${dbColumnNames[0]} = ?`;
                          connection.query(
                            query,
                            [header, valueToUpdate, commonColumnName],
                            (updateError, updateResult) => {
                              if (updateError) {
                                console.error(
                                  "Error updating row",
                                  updateError
                                );
                              } else {
                                console.log(" updated successfully");

                                // Check if the file data already exists
                                connection.query(
                                  checkFileQuery,
                                  [name, formattedDate, fileName],
                                  (checkError, checkResult) => {
                                    if (checkError) {
                                      console.error(
                                        "Error checking file data",
                                        checkError
                                      );
                                      connection.release();
                                      return callback(checkError);
                                    } else if (checkResult.length > 0) {
                                      console.log("File already uploaded");
                                      connection.release();
                                      return callback(null);
                                    } else {
                                      connection.query(
                                        fileQuery,
                                        [fileData],
                                        (fileInsertError, fileInsertResult) => {
                                          if (fileInsertError) {
                                            console.error(
                                              "Error uploading file data",
                                              fileInsertError
                                            );
                                            connection.release();
                                            return callback(fileInsertError);
                                          } else {
                                            console.log(
                                              "File data uploaded successfully"
                                            );
                                            connection.release();
                                            return callback(null);
                                          }
                                        }
                                      );
                                    }
                                  }
                                );
                              }
                            }
                          );
                        }
                      }
                    );
                  });
                }
              });
              connection.release();
              return callback(null);
            }
          );
        }
      });
    });
  stream.pipe(fileStream);
}

//get all data from month_and_week table
async function getMonthAndWeekData(req, res) {
  try {
    const { MonthAndWeekData } = await connectToDatabase();
    const query = "SELECT * FROM month_and_week";
    const data = await MonthAndWeekData.sequelize.query(query, {
      type: MonthAndWeekData.sequelize.QueryTypes.SELECT,
    });
    console.log("data", data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  uploadMonthAndWeek,
  getMonthAndWeekData,
};
