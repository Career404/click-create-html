var utility = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "hundred", "hundred-one", "hundred-two", "hundred-three", "hundred-four", "hundred-five", "hundred-six", "hundred-seven", "hundred-eight", "hundred-nine", "hundred-ten", "hundred-eleven", "hundred-twelve", "hundred-thirteen", "hundred-fourteen", "hundred-fifteen", "hundred-sixteen", "hundred-seventeen", "hundred-eighteen", "hundred-nineteen", "hundred-twenty", "hundred-twenty-one", "hundred-twenty-two", "hundred-twenty-three", "hundred-twenty-four", "hundred-twenty-five", "hundred-twenty-six", "hundred-twenty-seven", "hundred-twenty-eight", "hundred-twenty-nine", "hundred-thirty", "hundred-thirty-one", "hundred-thirty-two", "hundred-thirty-three", "hundred-thirty-four", "hundred-thirty-five", "hundred-thirty-six", "hundred-thirty-seven", "hundred-thirty-eight", "hundred-thirty-nine", "hundred-forty", "hundred-forty-one", "hundred-forty-two", "hundred-forty-three", "hundred-forty-four", "hundred-forty-five", "hundred-forty-six", "hundred-forty-seven", "hundred-forty-eight", "hundred-forty-nine", "hundred-fifty", "hundred-fifty-one", "hundred-fifty-two", "hundred-fifty-three", "hundred-fifty-four", "hundred-fifty-five", "hundred-fifty-six", "hundred-fifty-seven", "hundred-fifty-eight", "hundred-fifty-nine", "hundred-sixty", "hundred-sixty-one", "hundred-sixty-two", "hundred-sixty-three", "hundred-sixty-four", "hundred-sixty-five", "hundred-sixty-six", "hundred-sixty-seven", "hundred-sixty-eight", "hundred-sixty-nine", "hundred-seventy", "hundred-seventy-one", "hundred-seventy-two", "hundred-seventy-three", "hundred-seventy-four", "hundred-seventy-five", "hundred-seventy-six", "hundred-seventy-seven", "hundred-seventy-eight", "hundred-seventy-nine", "hundred-eighty", "hundred-eighty-one", "hundred-eighty-two", "hundred-eighty-three", "hundred-eighty-four", "hundred-eighty-five", "hundred-eighty-six", "hundred-eighty-seven", "hundred-eighty-eight", "hundred-eighty-nine", "hundred-ninety", "hundred-ninety-one", "hundred-ninety-two", "hundred-ninety-three", "hundred-ninety-four", "hundred-ninety-five", "hundred-ninety-six", "hundred-ninety-seven", "hundred-ninety-eight", "hundred-ninety-nine", "two-hundred", "two-hundred-one"];
    var x = 0;
    var xtwo = 1;
    var xthree = 2;
    var xfour = 3;
    function nextArrayIndex() {
        x += 4;
        xtwo += 4;
        xthree += 4;
        xfour += 4;
    }  
var firstbutton = document.getElementById('firstbox')
function createHTML() {
    return `<div class="box">
<button class="quart" id="${utility[x]}" onclick="headchopped(this.id)"> Click me!</button>
<button class="quart" id="${utility[xtwo]}" onclick="headchopped(this.id)"> Click me!</button>
<button class="quart" id="${utility[xthree]}" onclick="headchopped(this.id)"> Click me!</button>
<button class="quart" id="${utility[xfour]}" onclick="headchopped(this.id)"> Click me!</button>
</div>`;
}
firstbutton.addEventListener('click', ()=> {
    firstbutton.innerHTML = createHTML();
    console.log(`You are fighting a hydra!`)
}, {once: true });
function headchopped(y) {
    var clickedbutton = document.getElementById(`${y}`);
    clickedbutton.removeAttribute("onclick");
    console.log(`You chopped ${y} heads`);
    nextArrayIndex();
    clickedbutton.innerHTML = createHTML();
}