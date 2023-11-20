//import Debounce from '../lib';


let isTransactionFinished: any;

test('Transaction Start!', (done)=>{
  startAndWaitTransaction()
  //simulate petions to go to other page until it accept
  goToPage()
  goToPage()

  //test if transaction is finished to go, if not wait to finish!
  setTimeout(()=>{
    //goToPage()
    done()
  }, 2000)
  
  
})

test('Go to page devuelve true!', (done) => {
const startDebounce = () => {
  new Promise((resolve, _rejects)=>{
    //Simulate a user click or interaction with the Prompit
      //message: 'Want to click to start the app (y/N)' !!True!!
    resolve(true)
  })
  .then((message) => {
      if(message === true ){
          //console.log('Waiting transaction...');
          //startAndWaitTransaction()
          goToPage();
      }
      //console.log(message.name);
  })
  .catch((error) => {
      console.log(error);
  });
}

startDebounce()
done()
//goToPage()

})

const goToPage = () => {
  new Promise((resolve, _rejects) => {
    //Simulate a user click or interaction with the Prompit
    //message: 'Want to click to go to other page? (y/N)' !!True!!
    resolve(true)
  })
  .then((message) => {
      if(message === true){
          if(isTransactionFinished === undefined){
          expect(isTransactionFinished).toBe(undefined)
            console.log("you have to wait transation to finish");
          } else {
            expect(isTransactionFinished).toBe(true)
            console.log("Go to Other Page !!!! transation is finished !!!!")
          }
      }
  })
  .catch((error) => {
      console.log(error);
  });
}

const startTransaction = () => {
return new Promise((resolve, _rejects) => {
     setTimeout(() => {
         resolve(true)
     }, 1000);
 });
};

async function startAndWaitTransaction() {
  isTransactionFinished = await startTransaction();
  //console.log("transaction finished. Go to Other page!!! ");
  expect(isTransactionFinished).toBe(true)        
}


















/*describe('Debounce', () => {
  test('should simulate/start a transaction and in 5 seconds return the message (transaction finished!)', async () => {
    const debounce = new Debounce();
    expect(debounce.goToPage()).toEqual("you have to wait transation to finish")//"you have to wait transation to finish");
  });
});*/

/*
const add = (a:number, b:number) => {
  return new Promise((resolve, _rejects)=>{
    setTimeout(()=>{
      resolve(a+b)
    }, 3000)
  })
}

test('Should return a sum of two numbers', async () =>{
    const sum = await add(2,3)
    expect(sum).toBe(5)
})

let isTransactionFinished: any;

const startTransaction = () => {
  return new Promise((resolve, _rejects) => {
       setTimeout(() => {
           resolve(true)
       }, 5000);
   });
};

const goToPage = () => {
  return new Promise(async (resolve, rejects) => {
    isTransactionFinished = await startTransaction();
    if(isTransactionFinished === true){
      resolve(isTransactionFinished)
    }else{
      rejects(false)
    }
  })
}

test('Go to page devuelve true!', (done) => {
  goToPage()
  .then((isTransactionFinished) => {
        //"transaction finished. Go to Other page!!! ");
        expect(isTransactionFinished).toBe(true)
  }).catch((f)=>{
    expect(f).toBe(false)
  })
  done()
 
})*/