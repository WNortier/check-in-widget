function templateFactory(){

function employeeTemplater(object) {
    Handlebars.registerHelper('incremented', function (index) {
        index++;
        return index;
    });
    var templateSource = document.querySelector(".employeeTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);
    var insertPoint = document.querySelector(".employeeTemplateInsertPoint")
    var userDataHTML = userTemplate(object);
    insertPoint.innerHTML = userDataHTML;
}

return {
    employeeTemplater
}
}