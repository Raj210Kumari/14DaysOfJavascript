// searchInput
// searchBtn

const container=document.getElementById("container")
const dictionary = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result)
    wordSearched.innerHTML= result[0].word
    definition.innerHTML= result[0].meanings[0].definitions[0].definition;
};


searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    dictionary(searchInput.value)
})

container.style.backgroundcolour=red