    let droppable;
    let draggable;
    let newgame = 0;

    function allowDropThis(i) {
      i.preventDefault();
      droppable = i.path[0].classList[0];
    }

    function popup_box() {
      $('.popup_box').css("display", "block");
      $('.btn1').click(function() {
        $('.popup_box').css("display", "none");
      });
    }

    function loadimgkevad() {
      $("#spring").attr("src", "assets/images/uuskevad.jpg");
      newgame += 1;
      if (newgame == 4)
        popup_box();
    }

    function loadimgsuvi() {
      $("#summer").attr("src", "assets/images/uussuvi.jpg");
      newgame += 1;
      if (newgame == 4)
        popup_box();
    }

    function loadimgtalv() {
      $("#winter").attr("src", "assets/images/uustalv.jpg");
      newgame += 1;
      if (newgame == 4)
        popup_box();
    }

    function loadimgsygis() {
      $("#autumn").attr("src", "assets/images/uussygis.jpg");
      newgame += 1;
      if (newgame == 4)
        popup_box();
    }

    function dragThis(i) {
      i.dataTransfer.setData("argument", i.target.id);
      draggable = i.path[0].id;
    }

    function dropThis(i) {
      i.preventDefault();
      var data = i.dataTransfer.getData("argument");
      if (draggable == droppable && droppable == 'kevad') {
        i.target.appendChild(document.getElementById(data));
        loadimgkevad();
      }
      if (draggable == droppable && droppable == 'suvi') {
        i.target.appendChild(document.getElementById(data));
        loadimgsuvi();
      }
      if (draggable == droppable && droppable == 'sygis') {
        i.target.appendChild(document.getElementById(data));
        loadimgsygis();
      }
      if (draggable == droppable && droppable == 'talv') {
        i.target.appendChild(document.getElementById(data));
        loadimgtalv();
      }
    }