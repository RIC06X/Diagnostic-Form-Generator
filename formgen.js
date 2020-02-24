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
};


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

function main() {
    AddNewList();
}

//TODO finish parsing json 
function importJsonFile() {
    load_file.addEventListener('click', function () {
        alert("coming soon");
    });
}

function AddNewList() {
    add_record.addEventListener('click', function () {
        var li = document.createElement('li');
        //add selector organ,diagnose
        var sel_organ = document.createElement('select');
        setSelectorOptions(sel_organ, Organ, "-Select Organ-");
        var sel_diagnose = document.createElement('select');
        setSelectorOptions(sel_diagnose, [], "-Select Diagnose-");
        var sel_param_number = document.createElement('select');
        setSelectorOptions(sel_param_number, [], "-Select Param Number-");


        //add delete button for this list element
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';

        sel_organ.addEventListener("change", function () {
            removeOptions(sel_diagnose);
            var new_diagonoses = diagnose[sel_organ.value];
            setSelectorOptions(sel_diagnose, new_diagonoses, "-Select Diagnose-");
        });

        //set sel_diagose listener to fill set_param_number options
        sel_diagnose.addEventListener("change", function () {
            removeOptions(sel_param_number);
            var param_number = [];
            //console.log(sel_diagnose.value);
            //console.log(paramDynamic[sel_diagnose.value]);
            for (var i = 1; i < Object.keys(paramDynamic[sel_diagnose.value]).length; i++) {
                param_number.push(i);
            }
            setSelectorOptions(sel_param_number, param_number, "-Select Param Number-");
        });

        var option_area;
        sel_param_number.addEventListener("change", function () {
            if (option_area) {
                li.removeChild(option_area);
            }
            option_area = document.createElement('div');
            option_area.name = 'option_area';
            //generate parameter selectors
            if (sel_param_number.value != 0) {
                for (var i = 0; i < sel_param_number.value; i++) {
                    //selector, p, non-p checkbox and additional options should be included in the same div
                    var temp_div = document.createElement('div');
                    //TODO_UI: add class Attribute to this div
                    var temp_uuid = create_UUID();
                    var temp_sel_params = document.createElement('select');
                    var temp_checkbox = document.createElement("input");
                    var temp_label = document.createElement('label');
                    //Add uuid for selector and checkbox
                    temp_checkbox.id = temp_uuid;
                    temp_sel_params.id = temp_uuid + '_selector';
                    //Add param, non-param check box function
                    var grp_name = temp_uuid + '_parame_checkbox';
                    temp_checkbox.type = 'checkbox';
                    temp_checkbox.name = grp_name;
                    temp_checkbox.value = 'hasParameter';
                    temp_label.htmlFor = grp_name;
                    temp_label.textContent = 'is parameter';

                    setSelectorOptions(temp_sel_params, Object.keys(paramDynamic[sel_diagnose.value]), "-Select Params-");
                    temp_div.appendChild(temp_sel_params);
                    temp_div.appendChild(temp_checkbox);
                    temp_div.appendChild(temp_label);
                    option_area.appendChild(temp_div);
                    temp_sel_params.addEventListener("change", sel_handler());
                    temp_checkbox.addEventListener("change", checkboxHandler(paramDynamic[sel_diagnose.value]));
                }
            }
            deleteBtn.insertAdjacentElement("beforebegin", option_area);
        });

        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        //Append sub UI element under current list
        li.appendChild(sel_organ);
        li.appendChild(sel_diagnose);
        li.appendChild(sel_param_number);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });
}

//selector listener handler
function sel_handler() {  
    return function(){
        //uncheck the following checkbox
        var sel_id = this.id;
        var check_id = sel_id.substring(0,36);
        var temp_checkbox = document.getElementById(check_id);
        temp_checkbox.checked = false;
        // console.log(temp_checkbox);
    };
}

//checkbox listener handler
function checkboxHandler(json_ui) {
    return function(){
        var temp_sel = document.getElementById(this.id + '_selector');
        var value = temp_sel.value;
        if (this.checked){
            console.log(value+ ' is a parameter');
            //TODO implement UI
            console.log(json_ui[value]);
        }else{
            console.log(value+' is not a parameter');
        }
    };
}

function getElementfromJSON(object, label_name) {
    if (object) {
        var rtnElement;
        switch (object['type']) {
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

function getNewRadioBtnGrp(data, name) {
    var div = document.createElement('div');
    var text = document.createTextNode(name + ': ');
    div.append(text);
    data.forEach(function (element) {
        var radiobtn = document.createElement('input');
        //can be optimized by 
        radiobtn.type = 'radio';
        radiobtn.name = name;
        radiobtn.value = element;

        var label = document.createElement('label');
        label.htmlFor = name;
        label.textContent = element;
        div.appendChild(radiobtn);
        div.appendChild(label);
    });
    return div;
}

function setSelectorOptions(selector, data, placeholder) {
    //set emptyOption for placeholder
    if (placeholder) {
        var emptyOption = new Option(placeholder, '', false, true);
        emptyOption.disabled = true;
        selector.appendChild(emptyOption);
    }
    //add options
    if (data.length != 0) {
        for (var i = 0; i < data.length; i++) {
            var option = new Option(data[i], data[i]);
            selector.appendChild(option);
        }
    }
}

function removeOptions(selectObj) {
    if (typeof selectObj != "object") {
        selectObj = document.getElementById(selectObj);
    }
    var len = selectObj.options.length;
    for (var i = 0; i < len; i++) {
        selectObj.options[0] = null;
    }
}

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

