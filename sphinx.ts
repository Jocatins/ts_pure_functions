//PURE FUNCTIONS

let data = 90;

const func1 = (data: number) => {
  data--;
};

const func2 = (data: number) => {
  console.log(`data (90): ${data}`);
};

func1(data);
setTimeout(() => func2(data), 1000);
