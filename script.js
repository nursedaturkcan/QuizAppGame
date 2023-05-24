const quizData=[
    { 
    question: "Birleşmiş Milletler’in genel merkez binasını ziyaret etmek isteyen biri hangi şehre gitmelidir?",
    a:"Lüksemburg",
    b:"New York",
    c:"Brüksel",
    d:"Paris",
    e:"İstanbul",
    correct:"b",
},
{ 
    question: "Birleşmiş Milletler’in genel merkez binasını ziyaret etmek isteyen biri hangi şehre gitmelidir?",
    a:"Lüksemburg",
    b:"New York",
    c:"Brüksel",
    d:"Paris",
    e:"İstanbul",
    correct:"b",
},
{ 
    question: "Normalde bulundukları ortamın çok uzağında karşılaşan kişiler klişe olarak hangisini söylerler?",
    a:"Dünyalara Değişmem",
    b:"Dünya Dönüyor ",
    c:"Dünya Çok Küçük",
    d:"Dünya Gözüyle Gördüm",
    e:"Dünya Gel",
    correct:"c",
},
{ 
    question: "“CEO”nun Türkçe karşılığı hangisidir?",
    a:"Özel Kalem Müdürü",
    b:"İnsan Kaynakları Müdürü ",
    c:"Genel Yayın Yönetmeni",
    d:"İcra Kurulu Başkanı",
    e:"Yargıç",
    correct:'d',
},
{ 
    question: "“Bu sene şampiyon görelim sizi” şeklinde başlayan tezahürat, hangi takımın taraftarları tarafından yapılır?",
    a:"Galatasaray",
    b:"Beşiktaş",
    c:"Fenerbahçe",
    d:"Trabzonspor",
    e:"Konyaspor",
    correct:"b",
},
   
]
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");

const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const e_text=document.getElementById("e_text");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;
loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
    deselectedAnswers();
  
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
  }
// seçilmemiş seççeneklerde gezinme
  function deselectedAnswers(){
answerEls.forEach(answerEl=>answerEl.checked=false)
  };
  function getSelected(){
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
        
    })
    return answer;

  }
submitBtn.addEventListener("click",()=>{
const answer=getSelected();
//!console.log(answer);
if(answer){
    if(answer==quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML=` <h2> Test tamamlandı puanınız: ${score*20} </h2>
        <button class="submit" onClick="location.reload()">Tekrar Dene!</button>`
    }
}
});

