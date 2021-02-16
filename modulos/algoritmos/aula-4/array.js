const array = ['maxwell', 'maxwell', 'maxwell', 'maxwell', 'maxwell'];

array[1] = 'gabriel';

for(let i = 0; i < array.length; i++){
    array[i] = 'gabriel';
    console.log(array[i]);
}

/*while(array.length === 5){
    array[i] = 'gabriel';
    console.log(array[i]);
}

do{
    array[i] = 'gabriel';
}while(array.length === 5);*/