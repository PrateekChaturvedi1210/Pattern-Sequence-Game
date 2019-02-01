$(document).ready(function () {
    // counter = 1;
    // var Pattern = {
    //     "level1": ["s1", "s2", "s3", "s4"],
    //     "level2": ["s1", "s3", "s2", "s4"],
    //     "level3": ["s3", "s2", "s1", "s4"],
    //     "level4": ["s4", "s2", "s3", "s1"],
    //     "level5": ["s2", "s4", "s1", "s3"]

    // }
    // $("#start").click(function () {
    //     console.log("16", counter);
    //     if (counter > 5) {
    //         counter = 1;
    //     }
    //     else {
    //         counter = counter;
    //     }

    //     var LevelNo = Pattern["level" + counter];
    //     console.log("4", LevelNo);
    //     levelgo(LevelNo);

    // });

    // levelnosmain = 0;
    // function levelgo(levelnos) {
    //     levelnosmain = levelnos;
    //     UserSequence = [];
    //     console.log(UserSequence);
    //     $("#" + levelnos[0]).css("opacity", "1");
    //     setTimeout(function () {
    //         $("#" + levelnos[0]).css("opacity", "0.2");
    //         $("#" + levelnos[1]).css("opacity", "1");
    //     }, 1000);

    //     setTimeout(function () {
    //         $("#" + levelnos[1]).css("opacity", "0.2");
    //         $("#" + levelnos[2]).css("opacity", "1");
    //     }, 2000);
    //     setTimeout(function () {
    //         $("#" + levelnos[2]).css("opacity", "0.2");
    //         $("#" + levelnos[3]).css("opacity", "1");
    //     }, 3000);
    //     setTimeout(function () {
    //         $("#" + levelnos[3]).css("opacity", "0.2");
    //         alert("select sequence");
    //     }, 4000);
    // }

    // $('.sector').click(function () {

    //     UserSequence.push(this.id);
    //     console.log("1", UserSequence);
    //     console.log("2", levelnosmain);
    //     if (UserSequence.length == 4) {

    //         var is_same = UserSequence.length == levelnosmain.length &&
    //             UserSequence.every(function (element, index) {
    //                 return element === levelnosmain[index];
    //             });

    //         if (is_same == true) {
    //             counter++;
    //             if (counter > 5) {
    //                 alert("Game Finish")
    //             }
    //             else {
    //                 alert("Next Level");
    //                 var LevelNumber = Pattern["level" + counter];
    //                 levelgo(LevelNumber);
    //             }
    //         }
    //         else {
    //             alert("restart");
    //             counter = 1;
    //             var LevelNumber = Pattern["level" + counter];
    //             levelgo(LevelNumber);
    //         }
    //     }
    // })


    var Level = [];
    var UserSequence = [];
    var LevelCounter = 1;
    let gameStarted=false;
    let lost=false;

    function generatePattern() {

        while (Level.length < 4) {
            var randomNo = Math.floor(Math.random() * 4) + 1;
            var sRandomNo = "s" + randomNo;
            if (Level.includes(sRandomNo)) {

            } else {
                Level.push(sRandomNo);
            }

        }
        if (Level.length == 4) {
            levelgo(Level);
        } else {
            document.getElementById("output").innerHTML="Generating Pattern";
        }

    }

    $("#start").click(function () {
        gameStarted=true
        generatePattern()
    });

    function levelgo(level) {
        UserSequence = [];
        if(lost){
            document.getElementById("output").innerHTML="You Loss.Restarting Level" +" " +LevelCounter;
        }
        else{
            document.getElementById("output").innerHTML="Starting Level" +" " +LevelCounter;
        }
       

        $("#" + level[0]).css("opacity", "1");
        setTimeout(function () {
            $("#" + level[0]).css("opacity", "0.2");
            $("#" + level[1]).css("opacity", "1");
        }, 1000);

        setTimeout(function () {
            $("#" + level[1]).css("opacity", "0.2");
            $("#" + level[2]).css("opacity", "1");
        }, 2000);
        setTimeout(function () {
            $("#" + level[2]).css("opacity", "0.2");
            $("#" + level[3]).css("opacity", "1");
        }, 3000);
        setTimeout(function () {
            $("#" + level[3]).css("opacity", "0.2");
            setTimeout(function(){
                document.getElementById("output").innerHTML="Select Sequence";
            })
          
        }, 4000);
    }

    $('.sector').click(function () {
        if(gameStarted){
            $("#" +this.id).css("opacity", "1");
        }
        UserSequence.push(this.id);
        if (UserSequence.length == 4) {
            var is_same = UserSequence.length == Level.length &&
                UserSequence.every(function (element, index) {
                    return element === Level[index];
                });
            if (is_same == true) {
                lost=false
                LevelCounter++
                if (LevelCounter < 10) {
                    $("#s1,#s2,#s3,#s4").css("opacity", "0.2");
                    Level = [];
                    setTimeout(function(){
                        generatePattern();
                    },1000)
                    
                } else {
                    document.getElementById("output").innerHTML="You won the Game.";
                }
            } else {
                $("#s1,#s2,#s3,#s4").css("opacity", "0.2");
                LevelCounter = 1;
                lost=true;
                Level = [];
                setTimeout(function(){

                    generatePattern();
                },1000)

            }
        }
    })

});
