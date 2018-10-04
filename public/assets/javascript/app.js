var newCardA = $('<a class="carousel-item" href="'+projectsArray[i].Url+'" target="blank" style="width:310px;overflow:initial"></a>');
        newCardA.append($('<img src="'+projectsArray[i].Pic+'" alt="Portfolio Pic" style="border-radius: 25px;">')).append($('<p class="ctr-txt white-text">'+projectsArray[i].Name+'</p>'));
        $("#proj-row").append(newCardA);