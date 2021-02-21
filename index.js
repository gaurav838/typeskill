var text = ['hey! how are you ', 'a whole new world ', 'there is nothing common about us ',
    'do i look like zayn malik ', 'shradha kapoor is beautifull ', 'where should i go for my next tour ',
    'she said do you love me ', 'i said only partly ', 'someday i make people surprise with my MMA fights ',
    'my stories noise is still trending ', 'i was basketball captain of my school ', 'i was football captain too ',
    'i always scored lowest in my class ', 'i believe in practicals ', 'i dont smoke ', 'i think i should add dummy text ',
    'i can add dummy text but my internet connection not working now ', 'somewhere between walmart sucess story',
    'elon musk is real gem', 'bill gates is only good ', 'who are you ', 'a whole new world ', 'kese mujhe tum mil gye ',
    'girl you still gotta time ', 'there is nothing common about us ', 'i rather be anywhere, anywhere but here ',
    'oh ho jaane jaana dhoonde tujhe deewana ', 'ish dil ka m kya krun '
];
var wr = 0
function func20(event) {
    var contmt = wr++;
    // console.log(contmt);
    document.getElementById('alrt').style.display = "block";
    document.getElementById('alrt').innerHTML = "'you have typed '" + contmt + "' words'";
}

var tmss = 0;
    function alertFunc() {
        tmss++;
        document.getElementById('timedisplay').innerHTML = tmss;
        console.log(tmss);

    }
function func1() {
    var bbb = document.getElementById('txt');
    var ccc = document.getElementById('btn').innerHTML;
    bbb.removeAttribute("disabled");
    bbb.placeholder = "your time starts now... start typing here";
    var myVar = setInterval(alertFunc, 1000);

    switch (document.getElementById('btn').innerHTML) {
        case "start":
            

            document.getElementById('btn').innerHTML = "end";
            
            break;
        case "end":



            var a = document.getElementById('txt').innerHTML.length;

            document.getElementById('btn').innerHTML = "start";
            document.getElementById('txt').disabled = true;
            bbb.placeholder = "press start and type here..."
            // console.log(tmss);
            clearInterval(myVar)
            // myStopFunction();

            break;

    }

}

function myStopFunction() {
    console.log(tmss + 'kk');


}

document.addEventListener('mousemove', function (e) {
    // console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},${e.clientY})`;
});

var i = 0;
function func2(event) {
    var a = event.key;
    var g = document.getElementById('rnd').innerHTML;
    var m = String(g);
    var b = m.charAt(i);

    if (a === b) {
        document.getElementById('rnd').style.color = "blue";
        i++;

        if (m.length == i) {
            i = 0;
            var b = Math.floor(Math.random() * text.length);
            const para = document.getElementById('rnd');
            para.innerHTML = text[b];

        }
    }
    else {
        document.getElementById('rnd').style.color = "red";
        // console.log('failed'); 
        document.getElementById('auddd').play();

        document.getElementById('typee').innerHTML = b;

        // console.log(b);
        // console.log(i);
        if (m.length == i) {

            var b = Math.floor(Math.random() * text.length);
            const para = document.getElementById('rnd');
            para.innerHTML = text[b];
        }
    }
}
