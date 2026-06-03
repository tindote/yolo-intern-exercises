const fs = require("fs");
const path = require("path");   

// ================= RUN TESTS =================
/**
 * Function iterate from folder to execute all files which end with '.test.js'
 * 1. get all elements in folder
 * 2. loop through all elements, check if it is folder or file
 * 3. if element is folder, using recursive to this folder
 * 4. if element is file, check if it ends with .test.js 
 * 
 * @param {*} currentPath 
 */

const testStore = require('./testStore');
function runTests(currentPath) {
    //store all elements into an array
    const items = fs.readdirSync(currentPath, { withFileTypes: true });

    //loop through array
    for (const item of items) {
        //join item name with path
        const fullPath = path.join(currentPath, item.name);

        //check if item is folder or file
        if (item.isDirectory()) {
            runTests(fullPath);
        } else if (item.isFile() && item.name.endsWith(".test.js")) {
            console.log(`Running: ${fullPath}`);
            require(fullPath);
        }
    }   
}  

const root = path.join(__dirname, "..");
runTests(root);
testStore.report();
