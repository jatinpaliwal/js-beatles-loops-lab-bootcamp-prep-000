// add solution here
function theBeatlesPlay(musicians,instruments)
{
  var arr=[]
  var str
  for (var i=0;i<musicians.length;i++)
  {
    str=musicians[i] +'plays'+ instruments[i];
    arr[i]=str
  }
  return arr
}

function johnLennonFacts(facts)
{
  var i=0
  var arr=[]
  while (facts.length>i)
  {
    arr.push(`${factsArray[i]}` + “!!!”);
    i++;
  }
  return arr
}
