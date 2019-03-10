
  function fibonacci(num, cache){
        cache = cache || [];
        if(cache[num]) return cache[num];
        else{
            if(num < 3) return 1;
            else{
                cache[num] = fibonacci(num-1, cache) + fibonacci(num-2, cache)
            }
        }
        return cache[num]
  }
  console.log(fibonacci(50));
  
