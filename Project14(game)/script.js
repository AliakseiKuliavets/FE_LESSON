
const score = document.querySelector("#score")
let scoreNum = 0
let object = document.querySelector("#object")



function start_game() {
    object.classList.toggle("start")
}

function hit() {
    scoreNum++;
    score.innerHTML = `Score: ${scoreNum}`

    object.classList.remove("start")
    void object.offsetWidth
    object.classList.add("start")
    
    let random_offset = Math.random() * 340 ;
    object.style.left = `${random_offset}px`

    cange_object_background();

    hit_sound.currentTime = 0;
    hit_sound.play();
}

function miss(event) {
    if (event.target.id == "area") {
        scoreNum--;
        if (scoreNum <= 0) {
            finish_game()
        }
        score.innerHTML = `Score ${scoreNum}`
    } 
    miss_sound.currentTime = 0;
    miss_sound.play();
}

function finish_game() {
    object.classList.remove("start")
    alert("You lose")
}
function cange_object_background() {
    const colors = ["blue", "yellow", "green", "brown", "red"];
    const random_index = Math.floor(Math.random()* colors.length);
    object.style.background = colors[random_index];

}


const hit_sound = new Audio("sounds_hit.wav")
const miss_sound = new Audio("sounds_miss.wav")
