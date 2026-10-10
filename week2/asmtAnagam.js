


function anagramLength() {

    //Hello world

    let str="hello world"
    let strSpiltvalue=str.split(" ")
    console.log(strSpiltvalue + " is the split value ");
    let lastWord=strSpiltvalue[strSpiltvalue.length-1]
    let strlength=lastWord.length
    console.log(strlength);

    //Input: s = " fly me to the moon "

    let str1=" fly me to the moon "
    let strspiltvalue1=str1.trim().split(" ")
    console.log(strspiltvalue1 + " input2 split value");
    let lastWord1= strspiltvalue1[strspiltvalue1.length-1]
    let strlength1=lastWord1.length
    console.log(strlength1);
    
}
anagramLength()

function isAnagram(str3,str4){
    let sortedstr3= str3.trim().split("").join()
    let sortedstr4= str4.trim().split("").join()

    if (sortedstr3===sortedstr4) {
        console.log(str3 ,str4 + " is an Anagram")
        
    } else {
        console.log(str3 ,str4 + " is a not an Anagram")
        
    }
}
isAnagram("Listen","Silent")
isAnagram("Hello","world")