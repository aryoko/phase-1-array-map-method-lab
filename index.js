const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let stringy = ""
let newString = ""
let newWord = ""
let newWordArray = []
let newWordCollection = []

function titleCased() {
  tutorials.map(function (tutorial) {
    let wordArray = tutorial.split(" ")
    for (let word of wordArray) {
      let firstCap = word.toUpperCase()
      let s = firstCap.slice(1)
      let f = firstCap.slice(0, 1)
      let lowRest = s.toLowerCase()
      newWord = f + lowRest
      newWordArray.push(newWord)
    }
    newString = newWordArray.toString()
    newString = newString.replace(/,/g, " ")
    newString = newString.replace(/Oo/g, "OO")
    newString = newString.replace(/Api/g, "API")
    newString = newString.replace(/Nan/g, "NaN")
    newString = newString.replace(/Stoppropagation/g, "StopPropagation")
    newString = newString.replace(/Preventdefault/g, "PreventDefault")
    newString = newString.replace(/Jsonp/g, "JSONP")
    newWordCollection.push(newString)
    newWordArray = []
  })
return newWordCollection
}
