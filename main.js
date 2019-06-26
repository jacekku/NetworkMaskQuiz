function toIP(number){
	if(!Number(number) || number<0 || number>32)return undefined
	let n = number
	let out=[]
	for (let i=0;i<4;i++){
		let c = n>=8?8:n
		out.push(
			256-(2**(8-c))
			)
		n=n-c
	}
	return out.join(".")
}
function randInt(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener("load",start)
function start(){
    question = document.querySelector(".question")    
    answers = document.querySelectorAll(".answer")    
    console.log(question,answers)
    answers.forEach(e=>e.addEventListener("click",userAnswers))
    newQuestion()
}
function userAnswers(event){
    element=event.toElement
    ID = element.id
    answers.forEach(e=>e.style.background="#faa")
    answers[correctID].style.background="#afa"
}
function newQuestion(){
    reset()
    generateQuestion()
}

function generateQuestion(){
    mask = randInt(4, 32)
    offset=randInt(-3,0)
    question.innerHTML="/"+mask
    answers.forEach((e,index)=>e.innerHTML=toIP(mask+index+offset))
    correctID=-offset
}
function reset(){
    answers.forEach(e=>e.style.background="white")
}