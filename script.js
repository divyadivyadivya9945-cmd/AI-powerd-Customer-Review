let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

function analyzeReview(){

let text = document.getElementById("review").value;

let positiveWords = ["good","great","excellent","best","amazing","love"];
let negativeWords = ["bad","poor","worst","hate","slow","problem"];

let sentiment = "Neutral";

positiveWords.forEach(word=>{
if(text.toLowerCase().includes(word)){
sentiment="Positive 😊";
}
});

negativeWords.forEach(word=>{
if(text.toLowerCase().includes(word)){
sentiment="Negative 😡";
}
});

document.getElementById("result").innerHTML="Sentiment: "+sentiment;

reviews.push({text, sentiment});

localStorage.setItem("reviews", JSON.stringify(reviews));

}

if(document.getElementById("reviewList")){

let list=document.getElementById("reviewList");

let positive=0;
let negative=0;

reviews.forEach(r=>{

let li=document.createElement("li");
li.innerHTML=r.text+" - "+r.sentiment;
list.appendChild(li);

if(r.sentiment.includes("Positive")) positive++;
if(r.sentiment.includes("Negative")) negative++;

});

document.getElementById("total").innerHTML=reviews.length;
document.getElementById("positive").innerHTML=positive;
document.getElementById("negative").innerHTML=negative;

}
