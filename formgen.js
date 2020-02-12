//TODO
//unlimted linked selectors
//test json element generation

console.log("connected");

var Organ = [
    "right frontal bone",
    "left frontal bone",
    "right temporal bone",
    "left temporal bone",
    "right parietal bone",
    "left parietal bone",
];

var diagnose = {
    "right frontal bone": ["fracture(B)", "lesion(B)"],
    "left frontal bone": ["fracture(B)", "lesion(B)"],
    "right temporal bone": ["fracture(B)", "lesion(B)"],
    "left temporal bone": ["fracture(B)", "lesion(B)"],
    "right parietal bone": ["fracture(B)", "lesion(B)"],
    "left parietal bone": ["fracture(B)", "lesion(B)"]
}


var paramDynamic = {
    "fracture(B)": {
        "pos": "bone",
        "displaced": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "comminuted": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "lesion(B)": {
        "pos": "bone",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "type": {
            "type": "radio button",
            "options": ["lytic", "blastic"]
        },
        "focal type": {
            "type": "radio button",
            "options": ["focal", "diffuse"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    }
};

var add_record = document.getElementById("add");
var load_file = document.getElementById("load_file");
var ul = document.getElementById('list');

//main 
main();

function main(){
    AddNewList();
}

function getElementfromJson(object){
    if (object){
        var div = document.createElement('div');
        switch (object.type){
            case "dropdown":
                var selector = getNewSelector(object.options);
                div.appendChild(selector);
                break;
            case "radio button":
                var radiobuttonGroup = getNewRadioBtnGrp(object.options);
                div.appendChild(radiobuttonGroup);
                break;
            default:
                //TODO finish text input 
                break;
        }
        return div;
    }
}

//TODO finish parsing json 
function importJsonFile(){
    load_file.addEventListener('click', function(){
        alert("coming soon");
    });
}

function AddNewList(){
    add_record.addEventListener('click', function(){
        var li = document.createElement('li');

        //add selector organ
        var sel_organ = getNewSelector(Organ, "Organ");
        sel_organ.addEventListener("change", function(){
            console.log(this.value);
        });
        li.appendChild(sel_organ);


        //add delete button for this list element
        var deleteBtn = document.createElement('button');
        deleteBtn.appendChild(document.createTextNode('delete'));
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}

function getNewRadioBtnGrp(data, name){
    var div = document.createElement('div');
    data.forEach(function (element) {  
        var radiobtn = document.createElement('input');
        //can be optimized by 
        radiobtn.type='radio';
        radiobtn.name= name;
        radiobtn.value = element;
        
        var label = document.createElement('label');
        label.htmlFor=name;
        label.textContent=element;
        div.appendChild(radiobtn);
        div.appendChild(label);
    });
    return div;
}

function getNewSelector(data, placeholder){
    var selector = document.createElement('select');
    //set emptyOption for placeholder
    if (placeholder){
        var emptyOption = new Option(placeholder,'',false, true);
        emptyOption.disabled = true;
        selector.appendChild(emptyOption);
    }
    //add options
    data.forEach(function(element) {
        var option = new Option(element, element);
        selector.appendChild(option);
    });
    return selector;
}

function removeOptions(selectObj){
    if (typeof selectObj != "object"){
        selectObj = document.getElementById(selectObj);
    }
    var len = selectObj.options.length;
    for (var i=0; i < len; i++){
        selectObj.options[0]=null;
    }
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}