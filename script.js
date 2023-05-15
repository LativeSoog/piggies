const gruntButton = document.getElementById("grunt")
const gooseButton = document.getElementById("noGoose")

gruntButton.addEventListener("click", () => {
    alert("Хрюююю!")
})

gooseButton.addEventListener("click", () => {
    let answerGoose = confirm("Вы уверены?")

    if (answerGoose) {
        alert("До превращения в рульку осталось...")
        alert("3...")
        alert("2...")
        alert("1...")
        alert("Поздравляем, вы стали рулькой. Возможно в следующий раз стоит подумать над ответом получше")
    } else if (!answerGoose) {
        alert("Правильный выбор!")
    }
})