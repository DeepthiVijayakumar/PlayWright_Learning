function stringLength(str)  
{
    let word = str.split(" ");
    let wordLength = word[word.length - 1].length;
    console.log("The length of the last word is: " + wordLength);
}
stringLength("fly me to the moon");
stringLength("hello world");
stringLength("today is a nice day"); 

function stringAnagram(str1, str2)
{
    if(str1.length !== str2.length)
    {
        console.log("The strings are not anagrams as the length doesnt match.");
        return;
    }
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    if(sortedStr1 === sortedStr2)
    {
        console.log("The strings are anagrams.");  

    }
    else
    {
        console.log("The strings are not anagrams.");
    }
 
}
stringAnagram("listen", "silent");
stringAnagram("hello", "world"); 
stringAnagram("triangle", "rectangle");