const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
}
const loadLevelWord = (id) => {
    const url = (`https://openapi.programming-hero.com/api/level/${id}`);
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLeveWord(data.data))

}
const displayLeveWord = (words) => {
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if(words.length == 0) {
        wordContainer.innerHTML = `
        <div class="text-center col-span-full space-y-4 font-bangla">
        <div class="text-9xl text-gray-400">
         <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
         <p class="text-xl font-medium  text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
         <h3 class="text-3xl font-semibold">নেক্সট Lesson এ যান</h3>

        </div>
         `;
        return;
    }

   words.forEach(word => {
    const btnsection = document.createElement("div");
    btnsection.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center px-5 py-14 space-y-4">
            <h3 class="font-bold text-2xl">${word.word}</h3>
            <p class="font-semibold">Meaning / pronounciation</p>
            <div class="font-bangla">"${word.meaning} / ${word.pronunciation}"</div>

            <div class=" flex justify-between ">
                <div class="btn btn-outline btn-info">
                <i class="fa-solid fa-circle-info"></i>
                </div>

                <div class="btn btn-outline btn-info">
                <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
        </div>
        `;
        wordContainer.append(btnsection);
   })
        
    
}

const displayLesson = (lessons) => {
  // 1.
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
    2.
  for(let lesson of lessons){
    // console.log(lesson);
    // 3. 
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
                <button onclick="loadLevelWord(${lesson.level_no})"  href="" class="btn btn-soft btn-primary gap-5">
                <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no} </button>
    `;
    levelContainer.append(btnDiv);
  }

     

}
loadLessons()