let someRestFor5and3 = async (number) => {
    let array = [];
    for(i=1; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            array.push(i);
        }
    }
    let sum =  await array.reduce((a,b) => { return a + b }, 0);
    console.log(sum);
}
someRestFor5and3(11);