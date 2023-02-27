
hasMoreVowels = (word) => {
    testWord = word.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let wordVowels = []
    let wordConsonant = []
    let wordArr = testWord.split('')
    wordVowels = wordArr.filter((e) => e.includes(vowels))
    console.log(e)
}

hasMoreVowels('Forrest')