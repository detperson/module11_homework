let arr = [0, 2, 3, 5];

let even = 0;

let odd = 0;

let zero = 0;


function getPropertyNumber() {
  for (let i=0; i < arr.length; i++) {
    
    if (typeof arr[i] == 'number' && !isNaN(arr[i])) {
        
        if (arr[i] == 0) {
          zero += 1;
        } else if(arr[i] % 2 == 0) {
          even += 1;
        } else {
          odd += 1;
        }
    }
  }

  console.log("Четных " + even);
  console.log("Нечетных " + odd);
  console.log("Нулей " + zero);
};

getPropertyNumber()