
let tg = window.Telegram.WebApp;

tg.expand();

var List_of_answers = [];
var emotinal = ''




function Emo_func(emo) {
    emotinal = emo
    console.log(emotinal)
    fill(emotinal)
  }




function fill(str) {
   List_of_answers.push(str)
   console.log(List_of_answers)
}

