// input-field

let input_field=document.getElementById('input_field');


// search-btn

let search_btn=document.getElementById('search_btn');



// sound

let sound=document.getElementById('sound');


// result

let result=document.getElementById('result');



  let dictionary=()=>{

     let word=input_field.value;

     let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

     fetch(url)
     .then(res=>res.json())
     .then(data=>{

         console.log(data[0]);

         result.innerHTML=`
         
         <div class="word flex justify-between items-center">

             <!-- typist word -->

            <p  class="text-4xl font-extrabold text-black">${data[0].word}</p>

            

            <button>

                <i onclick="playSound()"  class="fa-solid fa-volume-high" style="color: #ae9cff;font-size: 29px;"></i>

            </button>

           </div>


           <!-- word details  -->

           <div class="details pt-4  text-sm font-bold text-black">

             <p ><span>${data[0].meanings[0].partOfSpeech}</span> <span>${data[0].phonetic}</span></p>
            

           </div>


           <!-- word meaning -->

           <div class="pt-4">

               <p id="word_meaning" class="text-sm text-black font-semibold">${data[0].meanings[0].definitions[0].definition}</p>

           </div>


           <!-- word example -->

           <div class="pt-4 mt-4" style="border-left: 8px solid #ae9cff;">

            <p id="word-exapmle" class="text-sm text-black font-semibold pl-5">${data[0].meanings[0].definitions[0].example || ''}</p>

           </div>

         
         `;

         sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
         console.log(sound);

         

     })

     .catch(()=>{

        result.innerHTML=`<h3>Couldn not find the word</h3>`;

     })

     input_field.value='';

  }



// speaker add sound

 function playSound(){

  sound.play();
}


//  search button add event listener

 search_btn.addEventListener('click',dictionary);



// function call
dictionary();

    



  

