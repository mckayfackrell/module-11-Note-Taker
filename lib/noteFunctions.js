// fs allows for the file system module; this module can read files, create files, update files, delete files, and rename files
const fs = require("fs");
// path module provides a way of working with directories and file paths
const path = require("path");

// this function is to create a new note
function noteCreateNewNote(body, noteTakerArray) {
  const note = body;
  noteTakerArray.push(note);
  fs.writeFileSync(
    // this write the information to the ds.json file in a JSON string
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: noteTakerArray,
      },
      null,
      2
    )
  );
  return note;
}

// this function is to delete an existing note
function noteDeleteNote(noteTakerArray, id) {
  let deleteID = parseInt(id);
  noteTakerArray.splice(deleteID, 1);
  // it is spliced off and re-written to the db.json file

  for (let i = deleteID; i < noteTakerArray.length; i++) {
    noteTakerArray[i].id = i.toString();
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteTakerArray }, null, 2)
  );
}

module.exports = {
  noteCreateNewNote,
  noteDeleteNote,
};
