        // SNUP JSON fra json-fil
        var request = new XMLHttpRequest();
        request.open("GET", "../api/art.json", false);
        request.send(null);
        var artapi = JSON.parse(request.responseText);


        var artapilength = artapi.art.length;

        var i;
        for (i = 0; i < artapilength; i++) {

            var tempimg = document.createElement("figure")
            tempimg.className = "galleryimg imgtransfernumber_" + i;
            tempimg.innerHTML = "<img src='../assets/thumb/" + artapi.art[i].imgfilnavn + "'> <figcaption> " + artapi.art[i].title + "<span></span> " + artapi.art[i].score + " </figcaption>"


            gallery.appendChild(tempimg);

            if (i == artapilength - 1) {
                var newmarker = document.createElement("div")
                newmarker.innerHTML = "<p id='newmarkerid' > NEW!! </p>"
                tempimg.appendChild(newmarker)

            }

 
            document.getElementsByClassName("galleryimg")[i].addEventListener("click", function () {

                var clickedimg = this;
                var imgdatanumber = clickedimg.className.split(' ')[1]
                console.log(imgdatanumber);
                localStorage.setItem('imgdatanumber', imgdatanumber);

                window.location = "imgpage.html";
            })

        }