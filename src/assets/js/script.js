//Création de la div

function createTag(tag, content=false, classe=false, id=false, before=false){
    var myTag = document.createElement(tag);
    if(content) {
        var myContent = document.createTextNode(content);
        myTag.appendChild(myContent)
    }
    if(classe) {
        var tabClass = classe.split(" ");
        tabClass.forEach(item => {
            myTag.classList.add(item);
        });
    }
    if(id) {
        myTag.setAttribute.add("id",id);
    }

    if(before) {
        var next = document.querySelector(before);
        document.body.insertBefore(myTag,next);
    }
    else{
        document.body.appendChild(myTag);
    }
    return myTag;
}

var hello = createTag("h1","Hello world !","red b s-30");