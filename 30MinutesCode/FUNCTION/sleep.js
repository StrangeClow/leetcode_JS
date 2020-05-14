/**
 *  稍后执行  
 *
 * @param {*} ms
 */
const sleep = ms => 

      new Promise(resolve => 
        
          setTimeout(resolve,ms)
      , reject => {
          console.log('reject====>',reject)
      });



  const a =  async function sleepyWork() {
        console.log("I'm going to sleep for 1 second.");
        await sleep(4000);
        console.log('I woke up after 1 second.');
      }     


 console.log(a());     