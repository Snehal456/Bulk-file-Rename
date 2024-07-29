const fs = require('node:fs');

const replaceThis = "sakhi";
const replaceWith = "snehal";

try {
  const data = fs.readdir('data', (err,data) => {
      console.log(data);
      for(let index =0; index<data.length; index++){
        const item = data[index];
        let newFile = "data/"+ item.replaceAll(replaceThis,replaceWith);
        fs.rename("data/" +item, newFile,() =>{
            console.log("Rename Success");

        })
      }

  });
} 

catch (err) {
  console.error(err);
}
