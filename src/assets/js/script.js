//Création de la div

function createTag(tag, content=false, classe=false, id=false, before=false){
    var myTag = document.createElement(tag);
    if(content) {
        var content = document.createTextNode(content);
        myTag.appendChild(content)
    }
    if(classe) {
        myTag.classList.add(classe);
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