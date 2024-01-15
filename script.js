
const buttonArr = document.querySelectorAll(".speedButton")
const bushArr = document.querySelectorAll(".bush")
const propell = document.querySelector("#propell")
const sky = document.querySelector("#sky")

buttonArr.forEach(element => {
    element.onclick = (e) => {

        const duration = `${e.target.value}s`
        
        propell.style.animationDuration = duration
        bushArr.forEach(bush => {
            bush.style.animationDuration = duration
        })
        sky.style.animationDuration = duration

    }
});