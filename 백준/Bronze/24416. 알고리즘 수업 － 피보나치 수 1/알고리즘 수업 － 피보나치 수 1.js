/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let count1 = 0,
  count2 = 0;

const bottomUp = (n) => {
  let fiboBottom = new Array(n).fill(0);

  fiboBottom[0] = 1;
  fiboBottom[1] = 1;

  for (let i = 2; i < n; i++) {
    count2++;
    fiboBottom[i] = fiboBottom[i - 1] + fiboBottom[i - 2];
  }

  return fiboBottom[n - 1];
};

const topDown = (n) => {
  let fiboTop = new Array(n).fill(0);

  const fibo = (i) => {
    if (i == 0 || i == 1) {
      count1++;
      return 1;
    }
    return (fiboTop[i] = fibo(i - 1) + fibo(i - 2));
  };

  return fibo(n - 1);
};

let input;

rl.on("line", function (line) {
  input = line; // 입력받은 문자열, line
  input = parseInt(line); // 형변환, parseInt
  rl.close(); // 입력 종료
}).on("close", function () {
  bottomUp(input);
  topDown(input);
  console.log(count1, count2);
  process.exit(); // 프로세스 종료
});
