const { readFile, writeFile } = require('fs');
console.log('start'); // to show app is not 'down' like in the syncronous approach

// for async need a callback = only run it when done like in js onEventListner when click a button
//3rd parameter is a callback func (err, result) as need to wait to get all the data before can action it
readFile('../tutorial1_until_54_minutes/first.txt','utf-8', (err, result) => {
  if(err) {
    console.log(err);
    return
  }
  const first = result;
  readFile('../tutorial1_until_54_minutes/second.txt','utf-8', (err, result) => {
    if(err) {
      console.log(err);
      return
    }
    const second = result;
    // write does not need utf as data is already encoded in utf
    writeFile('../tutorial1_until_54_minutes/result-async.txt', `Here is the result ${first}, ${second}`, (err, result) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(result); // rtns undefined = good and creates the file
      console.log('done with this task'); // show diff from sync approach
    });
  });  
});
console.log('starting the next task') // diff with sync approach

// nested callback 'hell' but allows multiple users to use app at same time
// alternative to callbacks are promises and async await
// callbacks get messy quick so need to use diff method
/*
o/p:
start
starting the next task  = when a task is started its offloaded immediately 
                          and next task is started = allows multiple users
undefined
done with this task
 */