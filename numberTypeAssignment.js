function numberType(number)
{
    if(number>0)
    {       
        return number+" is a positive";
    } 
   else if(number<0)  
    {
        return number+" is a negative";
    }   
 else
    {
        return "Number is zero";
    }
  

}
console.log(numberType(4));
console.log(numberType(-450));
console.log(numberType(0));