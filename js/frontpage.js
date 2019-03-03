        // SNUP JSON fra json-fil
        var request = new XMLHttpRequest();
        request.open("GET", "./api/art.json", false);
        request.send(null)
        var artapi = JSON.parse(request.responseText);

        // SNUP JSON fra json-fil
        var request = new XMLHttpRequest();
        request.open("GET", "./api/blog.json", false);
        request.send(null)
        var blogapi = JSON.parse(request.responseText);


        // Make Front Page: 
        console.log(artapi.art.length)


        var artapilength = artapi.art.length;

        document.getElementById("newimgpreview").src = "../assets/thumb/" + artapi.art[artapilength - 1].imgfilnavn
        document.getElementById("newimgtitle").innerHTML = artapi.art[artapilength - 1].title
        document.getElementById("newimgpreviewupdated").innerHTML ="updated: " + artapi.art[artapilength - 1].updated

        

        var blogapilength = blogapi.blog.length;

        document.getElementById("newblogcontentdate").innerHTML = "updated: " + blogapi.blog[blogapilength - 1].updated
        document.getElementById("newblogcontentheadeline").innerHTML = blogapi.blog[blogapilength - 1].headline
        document.getElementById("newblogcontenttext").innerHTML = blogapi.blog[blogapilength - 1].content

