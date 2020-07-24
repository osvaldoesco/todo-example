function getItem(id){
  const userPromise = new Promise((resolve, reject) =>{
    if([1,2,3,4,5].includes(id)){
      resolve({id, userName: 'Osvaldo', lastName: 'Escobar'});
    }
    reject({message: 'User not found'});
  });
  return userPromise;
}

const getData = async () => {
  try {
    const user = await getItem(1);
    return user;
  } catch(error) {
    return error;
  }
}

const func1 = () => {
 getData().then((data) => console.log('data1', data));
 console.log('ESTO PASA PRIMERO');
}

func1();


// Old code

// const getData = () => {
//   getItem(6).then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// getData();

