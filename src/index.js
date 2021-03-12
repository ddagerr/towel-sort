
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result=[]
  let k=0 //счетчик элементов массива result
  if(matrix) //проверяем передан ли массив
  {
    for(let i=0;i<matrix.length;i++){ //перебираем подмассивы внутри исходного
        if (i%2===1){ // если подмассив имеет нечетный номер
          for(let j=k;j<matrix[i].length+k;j++){ 
          result[j]=matrix[i][matrix[i].length-j-1+k]//переписываем в обратном порядке
          } // увеличиваем счетчик result на количество записанных элементов
        }
      
        else {// если подмассив имеет четный номер
          for(let j=k;j<matrix[i].length+k;j++){
          result[j]=matrix[i][j-k]// переписываем в result без изменения порядка 
        }
        }
        k+=(matrix[i].length) // увеличиваем счетчик result на количество записанных элементов
    }
     return result
  }
  else return []
}


