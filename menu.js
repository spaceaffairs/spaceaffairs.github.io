document.write('<div id="myNav" class="overlay">\
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
      <div class="overlay-content">\
        <a href="index.html">Home</a>\
        <a href="news.html">News</a>\
        <a onclick="openNav2();closeNav()">Archive</a>\
        <a href="about.html">About</a>\
        <a href="contact.html">Contact</a>\
      </div>\
    </div>\
    <div id="myNav2" class="overlay">\
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav2()">&times;</a>\
      <div class="overlay-content">\
            <h1> Selected works </h1>\
            <h2> &#8210; interventions &#8210; </h2>\
            <a href="O2.html">O &#35;2</a>\
            <a href="digital.html">Digit(al) - on touching Clouds</a>\
            <a href="O.html">O</a>\
            <h2> &#8210; education &#8210; </h2>\
            <a href="defyinggravity.html">Defying Gravity</a>\
         </div>\
    </div>\
    <span style="font-size:30px;color:white;cursor:pointer;z-index:99" onclick="openNav()">&#9776; menu</span>\
    <script>\
            function openNav() {\
              document.getElementById("myNav").style.width = "100%";\
            }\
            function closeNav() {\
              document.getElementById("myNav").style.width = "0%";\
            }        \
            function openNav2() {\
              document.getElementById("myNav2").style.width = "100%";\
            }\
            function closeNav2() {\
              document.getElementById("myNav2").style.width = "0%";\
            }\
            function openPage(pageName,elmnt) {\
            var tabcontent;\
            tabcontent = document.getElementsByClassName("tabcontent");\
            for (var i = 0; i < tabcontent.length; i++) {\
            tabcontent[i].style.display = "none";\
            }\
            document.getElementById(pageName).style.display = "block";\
            elmnt.style.backgroundColor = "";\
        }\
        </script>\
');

//  <a href="schwerelos.html">Schwerelos</a>\