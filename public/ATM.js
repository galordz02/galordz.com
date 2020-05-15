class Bill {
  constructor(v, c)
  {
  this.image = new Image();
  this.value = v;
  this.amount = c;
  this.image.src = images[this.value];
  }
}

function givemoney()
{
  anotherwithdrawal();

  var t = document.getElementById("money");
  money = parseInt(t.value);
  console.log(money);

  for(var bi of cr)
  {
    if(money > 0)
    {
      div = Math.floor(money / bi.value);

      if(div > bi.amount)
      {
        papers = bi.amount;
      }
      else
      {
      papers = div;
      }
      given.push(new Bill(bi.value, papers));
      money = money - (bi.value * papers);
      total = total - (bi.value * papers);

    }
  }
  if (total <= -1)
  {
    result.innerHTML="Sorry, there's no more money";
  }
  else
  {
  result.innerHTML += "There are: $" + total + "in the ATM";
  }
  if(money > 0)
  {
    result.innerHTML = "There's no such money, man";
  }
  else
  {
  for(var e of given)
  {
    if(e.amount > 0)
    {
      result.innerHTML += "<hr><br>" +e.amount + "bills of $" + e.value;
      var image = "<img src = " + e.image.src + ">";

      for (var i = 0; i < e.amount; i++)
      {
        result.innerHTML += image;
      }
    }
  }
  }
}

function anotherwithdrawal()
{
  result.innerHTML = " ";
}

var images = [];
images["1"] = "images/1dolar.jpg";
images["5"] = "images/5dollar.jpg";
images["10"] = "images/10dollar.jpg";
images["20"] = "images/20dollar.jpg";
images["50"] = "images/50dollar.jpg";
images["100"] = "images/100dollar.jpg";

var cr = [];
var given = [];
cr.push(new Bill(100, 5))
cr.push(new Bill(50, 10))
cr.push(new Bill(20, 5))
cr.push(new Bill(10, 10))
cr.push(new Bill(5, 5))
cr.push(new Bill(1, 10))

var money = 0;
var div = 0;
var total = 0;

for (var i=0; i<=5; i++)
{
  x = cr[i].amount * cr[i].value;
  total += x;
}

var result = document.getElementById("result");
var b = document.getElementById("remove");
b.addEventListener("click", givemoney);
result.innerHTML = "There's $" + total + "in the ATM";
