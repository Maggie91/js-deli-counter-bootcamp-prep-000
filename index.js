function takeANumber(katzDeli,name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){
  for (let i = 0; i < katzDeliLine.length; i++)
    if (katzDeliLine.length > 0) {
      var serving = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.pop(1);
      return serving;
    }
    else if (katzDeliLine.length === 0) {
      var served = `There is nobody waiting to be served!`;
      return served;
    }
}

