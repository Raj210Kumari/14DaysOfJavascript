let generateBtn=document.querySelector("#generateBtn")

const url="https://api.quotable.io/random?minLength=10&maxLength=70"

generateBtn.addEventListener("click",() => {
    
    const result = fetch(url).then((res) => res.json()).then((data)=>{
        console.log(data.content)
        quoteText.innerHTML=data.content
        author.innerHTML=`Author : ${data.author}`
    })
    
})
