var words = ["text1.", "text2.", "text3."]
    var colors = ["#34c759" , "#34c759", "#34c759"]

    var counter = 0;
    var currentIndex = getRandomInt(0, words.length - 1);

    var text = document.getElementById("dinamicText");

    var stepInterval = setInterval(() => { step(); }, 200);
    var delInterval = null;
    var delTimeout = null;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function delIntervalCallback(){
        delInterval = setInterval(() => { del(); }, 100);
        clearTimeout(delTimeout);
    }

    function del(){
        if(counter == 0){
            let newIndex = getRandomInt(0, words.length - 1);
            while(newIndex == currentIndex){
                newIndex = getRandomInt(0, words.length -1 );
            }
            currentIndex = newIndex;
            clearInterval(delInterval);
            stepInterval = setInterval(() => { step(); }, 200);
        }
        else{
            text.textContent = text.textContent.slice(0, -1)
            counter--;
        }
    }

    function step(){
        if(counter >= words[currentIndex].length){
            clearInterval(stepInterval);
            delTimeout = setTimeout(() => { delIntervalCallback(); }, 2000);
        }
        else{
            text.textContent += words[currentIndex][counter];
            text.style.color = colors[currentIndex];
            counter++;
        }
    }
