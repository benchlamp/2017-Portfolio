

$(document).ready(function() {

    var projectDataKeys = Object.keys(projectData);    
    
    for (var i = projectDataKeys.length -1; i > -1; i--) {
        var projectID = projectDataKeys[i];
        $(".recent").after(
            
                "<div class='section project' id='project-" + i + "'>" + 
                    "<div class='project-thumbnail'>" +
                        "<div class='project-cover' id='" + projectID + "'><h4><strong>Click for more info</strong></h4></div>" +
                        "<img src='" + projectData[projectDataKeys[i]].thumbnail + "' />" +
                    "</div>" +
                    "<div class='project-caption'>" + projectData[projectDataKeys[i]].caption + "</div>" +
                "</div>"
            
        )

    }
    
    
    $(".menu a[href^='#']").on('click', function(e) {
        
        e.preventDefault();
        
        var hash = this.hash;
        
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function() {
            window.location.hash = hash;
        });
    });
    

})
    