

$(document).ready(function() {

    var projectDataKeys = Object.keys(projectData);    
    
    for (var i = projectDataKeys.length -1; i > -1; i--) {
        var projectID = projectDataKeys[i];
        $(".recent").after(
            
                "<div class='section project'>" +
                    "<div class='project-thumbnail'>" +
                        "<div class='project-cover' id='" + projectID + "'><h4>Click for more info</h4></div>" +
                        "<img src='" + projectData[projectDataKeys[i]].thumbnail + "' />" +
                    "</div>" +
                    "<div class='project-caption'>" + projectData[projectDataKeys[i]].title + "</div>" +
                "</div>"
            
        )

    }
    

})
    