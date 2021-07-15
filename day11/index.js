const questions = [
    {
        'question' : 'What is part of a database that holds only one type of information?',
        'options' : ['Field', 'Report', 'Record', 'File']
    },
    {
        'question' : 'In which decade with the first transatlantic radio broadcast occur?',
        'options' : ['1900s', '1860s', '1870s', '1850s']
    },
    {
        'question' : 'In which decade was the American Institute of Electrical Engineers (AIEE) founded?',
        'options' : ['1880s', '1850s', '1930s', '1950s']
    },
    {
        'question' : '.MOV extension refers usually to what kind of file?',
        'options' : ['Animation/movie file', 'Image file', 'Audio file', 'MS Office document']
    },
    {
        'question' : 'Changing computer language of 1\'s and 0\'s to characters that a person can understand is...',
        'options' : ['Decode', 'Clip Art', 'Highlight', 'Execute']
    },
    {
        'question': '\t\n' +
            'What\'s a web browser?',
        'options' : ['A software program that allows you to access sites on the World Wide Web', 'A person who likes to look at websites', '\tA computer that stores WWW files', 'A kind of spider']
    },
    {
        'question' : '\t\n' +
            'http://www.indiabix.com - is an example of what?',
        'options' : ['A URL', 'An access code', 'A directory', 'A server']
    }
];

const body = document.body;
let score = 0;

function shuffle(arr) {
    for(let i=0; i < arr.length; i++) {
        let ind = Math.floor(Math.random() * (i+1))
        let temp = arr[i]
        arr[i] = arr[ind]
        arr[ind] = temp
    }
}

function reveal(option) {
    const options = option.closest('.options')

    options.querySelectorAll('button').forEach((button)=>{
        button.click()
    })
}

function createOption(option, answer=false) {
    const optionHolder = document.createElement('div')
    optionHolder.className = "option"

    const button = document.createElement('button')
    button.innerHTML = option
    button.addEventListener('click', ()=>{
        if(answer) {
            if(!button.classList.contains('correct')) {
                score++
            }
            button.classList.add('correct')
        }
        else {
            button.classList.add('wrong')
        }
        reveal(button)
    })
    optionHolder.append(button)
    return optionHolder
}

shuffle(questions)

questions.forEach((current, number) => {


    const container = document.createElement('div')
    container.className = "container"

    const question = document.createElement('div')
    question.className = "question"

    question.innerHTML = `${number+1}. ${current.question}`
    container.append(question)

    const options = document.createElement('div')
    options.className = "options"

    const optionArr = []
    current.options.forEach((option, number)=>{
        if (number===0) {
            optionArr.push(createOption(option, true))
        }
        else{
            optionArr.push(createOption(option))
        }
    })

    shuffle(optionArr)
    optionArr.forEach((option)=>{
        options.append(option)
    })
    container.append(options)
    document.body.append(container)
})

const showresult = document.querySelector('.result')
showresult.addEventListener('click', ()=>{
    showresult.innerHTML = `${score}/${questions.length}`
})