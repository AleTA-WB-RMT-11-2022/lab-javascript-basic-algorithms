console.log("ready!") 

// Iteration 1: Names and Inputcd
const hacker1 = 'Alice'
console.log(`The driver's name is ${hacker1}`)
const hacker2 = 'Bob'
console.log(`The navigator's name is ${hacker2}`)
//
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} 
//
// Iteration 3: Loops
// 3.1:
let driver = ""
for(let i = 0; i < hacker1.length; i++){
    driver += hacker1[i] + " "
}
console.log(driver.toUpperCase())

// 3.2:
let reverseNavigator = ""
for(let i = hacker2.length - 1; i >= 0; i--){
    reverseNavigator += hacker2[i]
}
console.log(reverseNavigator)

// 3.3: 
//Solved with switch-case
switch(hacker2.toLowerCase().localeCompare(hacker1.toLowerCase())){
    case 1 :
        console.log(`The driver's name goes first.`)
        break;
    case -1 :
        console.log(`Yo, the navigator goes first definitely.`) 
        break;
    case 0 :
        console.log(`What?! You both have the same name?`)
        break;       
    }
// Solved if-else
if(hacker2.toLowerCase().localeCompare(hacker1.toLowerCase()) === 1){
    console.log(`The driver's name goes first.`)
} else if (hacker2.toLowerCase().localeCompare(hacker1.toLowerCase()) === -1){
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1 :
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis vel lorem sit amet dapibus. Nam dui nisi, fringilla vel luctus et, fermentum nec odio. Sed eleifend rutrum urna in mattis. Mauris diam purus, maximus non elit in, consequat eleifend augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque egestas tortor elementum velit vestibulum scelerisque. Donec fermentum faucibus est sit amet rutrum. Praesent vitae lorem mauris. Nulla non lectus eu dui pulvinar semper et a justo. Aenean aliquet, dui sed sagittis ullamcorper, nibh ligula rhoncus justo, vel tincidunt nisi enim in elit. Ut sit amet tellus vitae mauris gravida aliquet. Pellentesque imperdiet arcu ac nunc condimentum iaculis. Mauris finibus vestibulum est et fermentum.
Sed viverra augue nibh, et mattis nisl egestas quis. Integer sit amet eleifend sem, vitae semper lorem. Fusce finibus pharetra nunc, sit amet imperdiet mauris fermentum vitae. Nullam neque elit, tincidunt vel tincidunt ac, volutpat in tortor. Sed accumsan pellentesque ante, ut lobortis sem scelerisque sit amet. Suspendisse laoreet condimentum lacus in rutrum. Pellentesque et tempus elit. Integer aliquet, est nec vulputate maximus, urna massa tristique massa, sed pulvinar velit mauris et velit. Quisque ut efficitur mauris, vel luctus neque. Donec posuere luctus lacinia. Pellentesque odio erat, porttitor et mi in, scelerisque mollis neque. Phasellus in justo non quam iaculis suscipit. Morbi sit amet dignissim massa, hendrerit consectetur est. Fusce accumsan facilisis nisi eget tempus.
Quisque et nisi sit amet erat aliquet malesuada ac eget massa. Praesent vitae nulla ut velit porta tincidunt vel eu velit. Donec laoreet laoreet consequat. Sed interdum nisl mattis quam tempus pharetra. Phasellus nibh eros, scelerisque a turpis in, placerat rutrum nisi. Fusce placerat metus ac dignissim posuere. Morbi imperdiet et felis vitae ornare. Nam in ante eu lacus ullamcorper vehicula. Morbi ut dapibus arcu, a cursus nisl. Duis sapien diam, pellentesque a imperdiet eu, aliquet interdum tellus.`

let wordCount = 0 
let etCount = 0
for(let i = 0; i < paragraph.length; i++){
    if(paragraph[i] === " "){
        wordCount++
    }
    if(paragraph[i] === 'e' && paragraph[i+1] === 't'){
        etCount++
    }
}
console.log(wordCount)
console.log(etCount)

// Bonus 2 :
const phraseToCheck = "step on no pets"
let cleanPhrase = ""
let result 

// cleaning the phraseToCheck from spaces/ any other no alphabetic character --> creating new variable cleanPhrase
for(let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i] === ',' || phraseToCheck[i] === '.' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === ' '){
        continue;
    }
    cleanPhrase += phraseToCheck[i].toLowerCase()
}
// loop to compare every character in cleanPhrase, from the beginning and from the end and see if they match
// other solution using loop to reverse the phrase and compere with condition.  
// uncomment to see the process
for(let i = 0; i < cleanPhrase.length; i++){
   console.log(`from the beginning ${cleanPhrase[i]} , index ${i}`, `from the end ${cleanPhrase[cleanPhrase.length -1 - i]} , index ${cleanPhrase.length -1 - i}`)
    if(cleanPhrase[i] !== cleanPhrase[cleanPhrase.length -1 - i]){
        result =`No way, "${phraseToCheck}" is not a Palindrome!!`
        break;
    } 
    result = `Yesss, "${phraseToCheck}" is a Palindrome`
}

console.log(result)