function delay(word){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(word)
    },2000)
  })
}
async function start(){
  const word1 = await delay('DT');
  console.log(word1);
  const word2 = await delay('GHM');
  console.log(word2);
}
start()
//  delay('DT').then((word)=>{
//    console.log(word);
//    return delay('GHM');
//   }
//  ).then((word)=>{
//    console.log(word);
//  })
