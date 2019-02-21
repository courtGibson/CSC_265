
var nums = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 43, 6, 20, 43, 2, 23, 12, 24, 31, 29];
var total = 0;
var acc = 0;
nums.forEach(function(d){total=total+d; acc++;});

var mean = function(total, acc)
{
  return total/acc;
}


document.write(mean);
