import './style.scss'

const buttonAddquote = document.querySelector('.add-quot-button')
const buttonNewQuote = document.querySelector('.new_quote')
let inputNewQuoute = document.querySelector('.input_quote_text')
const deleteLastQuote = document.querySelector('.delete_last_quote')
const clearAllArray = document.querySelector('.clear_array')

let arrayQuotes = [
    "Стремитесь не к успеху, а к ценностям, которые он дает. 'Альберт Эйнштейн'",
    "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. 'Наполеон Хилл'",
    "Сложнее всего начать действовать, все остальное зависит только от упорства. 'Амелия Эрхарт'",
    "Надо любить жизнь больше, чем смысл жизни. 'Федор Достоевский'",
    "Жизнь - это то, что с тобой происходит, пока ты строишь планы. 'Джон Леннон'",
    "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно. 'Альберт Эйнштейн'",
    "Начинать всегда стоит с того, что сеет сомнения. 'Борис Стругацкий'",
    "Настоящая ответственность бывает только личной. 'Фазиль Искандер'",
    "Неосмысленная жизнь не стоит того, чтобы жить. 'Сократ'",
    "80% успеха - это появиться в нужном месте в нужное время. 'Вуди Аллен'",
    "Ваше время ограничено, не тратьте его, живя чужой жизнью. 'Стив Джобс'",
    "Победа - это еще не все, все - это постоянное желание побеждать. 'Винс Ломбарди, тренер по американскому футболу'",
    "Наука — это организованные знания, мудрость — это организованная жизнь. 'Иммануил Кант'",
    "В моем словаре нет слова «невозможно». 'Наполеон Бонапарт'",
    "Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду. 'Христофор Колумб'",
    "Свобода ничего не стоит, если она не включает в себя свободу ошибаться. 'Махатма Ганди'",
    "Либо вы управляете вашим днем, либо день управляет вами. 'Джим Рон'",
    "Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы. 'Генри Форд'"
]


buttonAddquote.addEventListener('click', () => {
    if (arrayQuotes.length > 0){
        const quote = Object(arrayQuotes)
        const quoteRandom = quote[Math.floor(Math.random() * arrayQuotes.length)]
        document.querySelector('.quotes-box').innerHTML = quoteRandom
    }
})


buttonNewQuote.addEventListener('click', () => {
    let valueTextInput = inputNewQuoute.value;
    arrayQuotes.push(valueTextInput)

    inputNewQuoute.value = "";
})

deleteLastQuote.addEventListener('click', () => {
    arrayQuotes.pop()
    if (arrayQuotes.length == 0){
        document.querySelector('.quotes-box').innerHTML = "В памяти нет цитат! Добавьте новую цитату"
    }
})

clearAllArray.addEventListener('click', () => {
    arrayQuotes.length = 0
    document.querySelector('.quotes-box').innerHTML = "В памяти нет цитат! Добавьте новую цитату"
})