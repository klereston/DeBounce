import inquirer from 'inquirer';

let isTransactionFinished: any;

const startDebounce = () => {
    inquirer.prompt([
        {
        type: 'confirm',
        name: 'name',
        message: 'click (y/N) to start transaction'
        }
    ])
    .then((message) => {
        if(message.name === true ){
            console.log('Waiting transaction...');
            goToPage();
            startAndWaitTransaction();
        }
        //console.log(message.name);
    })
    .catch((error) => {
        console.log(error);
    });
}


const goToPage = () => {
    const answer = inquirer
    .prompt([
        {
        type: 'confirm',
        name: 'name',
        message: 'Want to click to go to other page? (y/N)'
        }
    ])
    .then((message) => {
        if(message.name === true){
            if(isTransactionFinished === true){
                console.log("Other page!!! " + message.name);
            } else {
                console.log("you have to wait transation to finish");
                goToPage();
            }
        }
    })
    .catch((error) => {
        console.log(error);
    });
}
//cuando el usuario click un botton tendra que esperar 2 segundos para poder volver hacer click
//Ejercicio debounce

const startTransaction = () => {
    return new Promise((resolve, _rejects) => {
         setTimeout(() => {
             resolve(true)
         }, 5000);
     });
 };

async function startAndWaitTransaction() {
    isTransactionFinished = await startTransaction();
}

startDebounce();
//startTimeOut()
