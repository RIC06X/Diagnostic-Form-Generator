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
        // "measure": {
        //     "type": "text",
        //     "options": ["length", "width", "height"]
        // },
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

//TODO finish parsing json 
function importJsonFile(){
    load_file.addEventListener('click', function(){
        alert("coming soon");
    });
}

function AddNewList(){
    add_record.addEventListener('click', function(){
        var li = document.createElement('li');
        //add selector organ,diagnose
        var sel_organ = document.createElement('select');
        setSelectorOptions(sel_organ, Organ, "-Select Organ-");
        var sel_diagnose = document.createElement('select');
        setSelectorOptions(sel_diagnose, [], "-Select Diagnose-");
        var option_area;
        //add delete button for this list element
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent= 'delete';

        sel_organ.addEventListener("change", function(){
            removeOptions(sel_diagnose);
            var new_diagonoses = diagnose[sel_organ.value];
            setSelectorOptions(sel_diagnose, new_diagonoses , "-Select Diagnose-");
        });
        
        sel_diagnose.addEventListener("change", function () {  
            // remove previous options 
            if (option_area){
                li.removeChild(option_area);
            }
            option_area = document.createElement('div');
            option_area.name = 'option_area';
            if (sel_diagnose.value!=0){
                var ui_elements_data = paramDynamic[sel_diagnose.value];
                var ui_elements_data_keys = Object.keys(ui_elements_data);
                console.log(ui_elements_data_keys);
                ui_elements_data_keys.forEach(function(key){
                    console.log(ui_elements_data[key]);
                    var ui_element = getElementfromJSON(ui_elements_data[key], key);

                    if (ui_element){
                        option_area.appendChild(ui_element);
                    }
                });
                //append text box;
            }
            deleteBtn.insertAdjacentElement("beforebegin",option_area);
        });
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });
        li.appendChild(sel_organ);
        li.appendChild(sel_diagnose);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}


function getElementfromJSON(object, label_name){
    if (object){
        var rtnElement;
        switch (object['type']){
            case "dropdown":
                rtnElement = document.createElement('select');
                setSelectorOptions(rtnElement, object['options'], label_name);
                break;
            case "radio button":
                rtnElement = getNewRadioBtnGrp(object.options, label_name);
                break;
            default:
                //TODO finish text input 
                console.log(object);
                break;
        }
        return rtnElement;
    }
}

function getNewRadioBtnGrp(data, name){
    var div = document.createElement('div');
    var text = document.createTextNode(name+': ');
    div.append(text);
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

function setSelectorOptions(selector ,data, placeholder){
    //set emptyOption for placeholder
    if (placeholder){
        var emptyOption = new Option(placeholder,'',false, true);
        emptyOption.disabled = true;
        selector.appendChild(emptyOption);
    }
    //add options
    if (data.length!=0){
        for (var i=0; i < data.length; i++){
            var option = new Option(data[i], data[i]);
            selector.appendChild(option);
        }
    }
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