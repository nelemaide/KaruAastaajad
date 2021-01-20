    let trueTxt = "Suvelkarumarjunosib.Sügiseltaringiluusib.Talvekspoebtasügavalepõhku,etsiiskevadeltundavärsketõhku.";

    function popup_box() {
      $('.popup_box').css("display", "block");
      $('.btn1').click(function() {
        $('.popup_box').css("display", "none");
      });
    }

    function popup_box2() {
      $('.popup_box2').css("display", "block");
      $('.btn1').click(function() {
        $('.popup_box2').css("display", "none");
      });
    }

    function checkSentence() {
      console.log("button is pressed");
      let checkTxt = document.getElementById("insertedText").value;
      console.log(checkTxt);
      checkTxt = checkTxt.replace(/\s+/g, '');
      let result = checkTxt.localeCompare(trueTxt);
      if (result == 0) {
        console.log("Õige vastus");
        popup_box();
      } else {
        popup_box2();
        console.log("Vale vastus");
      }
    }