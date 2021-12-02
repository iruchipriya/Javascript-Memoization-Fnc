//MEMOIZED FUNCTION AS A WRAPPER

//MEMOIZED FUNCTION
const memoized = (fn) => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    } else {
      console.log('Calculating result');
      const res = fn(n);
      cache[n] = res;
      return res;
    }
  };
};

//MEMOIZATION FOR FUNCTIONS WITH MORE THAN ONE PARAMETER
const memoized2 = function (fn) {
  const cache = {};
  return (a, b, c) => {
    const key = `${a}-${b}-${c}`; // create a key
    if (key in cache) {
      // search if it's already saved in the cache
      console.log('in memory');
      return cache[key];
    }
    console.log('calculating...');
    const res = fn(a, b, c);
    // since it's not in the cash - calculate the result
    cache[key] = res;
    return res;
  };
};

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function add(a, b, c) {
  return a + b + c;
}

const fib = memoized(fibonacci)(17);
console.log(fib); //1597

//ANOTHER WAY TO CALL
const fib2 = memoized(fibonacci);
console.log(fib2(17)); //1597
console.log(fib2(17)); //1597

const addition = memoized2(add);
console.log(addition(1, 2, 3));
console.log(addition(1, 2, 3));
