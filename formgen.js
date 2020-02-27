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
var output_data = {};
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
            option_area.name = 'div_option_area';

            var div_textbox_grp = document.createElement('div');
            div_textbox_grp.name = 'div_textbox_grp';
            div_textbox_grp.setAttribute('class', 'container_textbox_grp');

            var temp_confirm_btn = document.createElement('button');
            temp_confirm_btn.textContent = 'confirm';

            var temp_save_btn = document.createElement('button');
            temp_save_btn.textContent = 'save';

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
                    temp_div.id = temp_uuid + "_div";
                    temp_checkbox.id = temp_uuid;
                    temp_sel_params.id = temp_uuid + '_selector';


                    //Add param, non-param check box function
                    var grp_name = temp_uuid + '_parame_checkbox';
                    temp_checkbox.type = 'checkbox';
                    temp_checkbox.name = grp_name;
                    temp_checkbox.value = 'hasParameter';
                    temp_label.htmlFor = grp_name;
                    temp_label.textContent = 'is parameter';
                    //fill selector with options
                    setSelectorOptions(temp_sel_params, Object.keys(paramDynamic[sel_diagnose.value]), "-Select Params-");
                    temp_div.appendChild(temp_sel_params);
                    temp_div.appendChild(temp_checkbox);
                    temp_div.appendChild(temp_label);
                    option_area.appendChild(temp_div);
                    temp_sel_params.addEventListener("change", sel_handler());
                    //temp_checkbox.addEventListener("change", checkboxHandler(paramDynamic[sel_diagnose.value]));
                }
            }

            var non_p_dict;
            var p_arr;
            var non_p_keys;
            var non_p_combine_values_arr;
            //confirm btn for generate text box
            temp_confirm_btn.addEventListener("click", function(){
                //console.log(this.parentNode);
                var parent = this.parentNode;
                var childNodes = parent.childNodes;
                var all_select = true;

                //find all combination of selections
                non_p_dict = {};
                p_arr = [];
                childNodes.forEach(function(node){
                    if (node.tagName !== 'BUTTON' && node.name !='div_textbox_grp'){
                        var uuid = (node.id).substring(0,36);
                        var temp_sel = document.getElementById(uuid+'_selector');
                        var temp_chkbox = document.getElementById(uuid);
                        //console.log(temp_sel.value);
                        if (temp_sel.value){
                            if (!temp_chkbox.checked){
                                non_p_dict[temp_sel.value] = paramDynamic[sel_diagnose.value][temp_sel.value].options;
                            }
                            else{
                                p_arr.push(temp_sel.value);
                            }
                        }else{
                            all_select=false;
                            //TODO optimised to for-loop to use break;
                        }
                    }
                });

                //check all selectors have value
                if (all_select){
                    //delete textboxs and labels of last selections
                    while(div_textbox_grp.hasChildNodes()){
                        div_textbox_grp.removeChild(div_textbox_grp.lastChild);
                    }
                    //generate textbox and label combincation according to selections 
                    if (isEmpty(non_p_dict)){
                        var str_p = 'Parameter(s): '+ p_arr;
                        div_textbox_grp.appendChild(get_textbox_list(str_p));

                    }else{
                        non_p_keys = Object.keys(non_p_dict);
                        non_p_combine_values_arr = combineArrays(Object.values(non_p_dict));
                        for (var i = 0; i< non_p_combine_values_arr.length; i++){
                            var str = '';
                            for(var j = 0; j < non_p_keys.length; j++){
                                str += non_p_keys[j]+': '+non_p_combine_values_arr[i][j]+"    ";
                            }
                            // console.log(str);
                            div_textbox_grp.appendChild(get_textbox_list(str));
                        }
                    }
                    //p_arr label + text input
                }
                else{
                    alert('Please finish selection!');
                }
            });

            temp_save_btn.addEventListener("click", function () { 
                var parent = this.parentNode;
                var div_textbox_grp = parent.querySelector('.container_textbox_grp');
                var text_box_grp = div_textbox_grp.querySelectorAll('.container_textbox_list');
                var rtn_texbox_json = {};

                if (non_p_combine_values_arr){
                    rtn_texbox_json['#ofFormats'] = non_p_combine_values_arr.length;
                    rtn_texbox_json.Param = non_p_keys;
                    for (var i = 0 ; i < non_p_combine_values_arr.length; i++){
                        var key = 'format'+i;
                        var temp_textbox_li = {};
                        temp_textbox_li['Non-P Value'] = non_p_combine_values_arr[i];
                        temp_textbox_li['text'] = text_box_grp[i].querySelector('.textbox_user_input').value;
                        rtn_texbox_json[key] = temp_textbox_li;
                    }
                }else{
                    rtn_texbox_json['#ofFormats'] = 1;
                    rtn_texbox_json.Param = p_arr;
                    var key_p = 'format0';
                    var temp_textbox_li_p = {};
                    temp_textbox_li_p['text'] = text_box_grp[0].querySelector('.textbox_user_input').value;
                    rtn_texbox_json[key_p] = temp_textbox_li_p;
                }
                console.log(JSON.stringify(rtn_texbox_json));
            });

            option_area.appendChild(div_textbox_grp);
            option_area.appendChild(temp_confirm_btn);
            option_area.appendChild(temp_save_btn);
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

function get_textbox_list(str){
    var div_textbox = document.createElement('div');
    div_textbox.setAttribute('class', 'container_textbox_list');
    var temp_Textbox = document.createElement('input');
    temp_Textbox.type = 'text';
    temp_Textbox.name = str;
    temp_Textbox.setAttribute('class','textbox_user_input');
    var label = document.createElement('label');
    label.setAttribute('class', 'label_user_input');
    label.htmlFor = str;
    label.textContent = str;
    div_textbox.appendChild(label);
    div_textbox.appendChild(temp_Textbox);
    return div_textbox;
}

//selector listener handler
function sel_handler() {  
    return function(){
        //uncheck the following checkbox
        var sel_id = this.id;
        var check_id = sel_id.substring(0,36);
        var temp_checkbox = document.getElementById(check_id);
        temp_checkbox.checked = false;
        var nextNode = this.parentNode.nextElementSibling;
        while(nextNode){
            if (nextNode.name == 'div_textbox_grp'){
                while(nextNode.hasChildNodes()){
                    nextNode.removeChild(nextNode.lastChild);
                }
                break;
            }
            nextNode = nextNode.nextElementSibling;
        }
    };
}


function checkboxHandler(json_ui) {
    return function(){
        var temp_sel = document.getElementById(this.id + '_selector');
        var temp_div = document.getElementById(this.id + '_div');
        var value = temp_sel.value;
        var param_ui = document.getElementById(this.id + '_param_ui');
        //remove param_ui
        if (this.checked){
            console.log(value+ ' is a parameter');
            console.log(json_ui[value]);
            param_ui = getElementfromJSON(json_ui[value], value);
            if (typeof param_ui !== 'undefined'){
                param_ui.id = this.id + '_param_ui';
                temp_div.appendChild(param_ui);
            }
        }else{
            if (param_ui){
                temp_div.removeChild(param_ui);
            }
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
                setSelectorOptions(rtnElement, object.options);
                break;
            case "radio button":
                rtnElement = getRadioBtnGrp(object.options, label_name);
                break;
            case "text":
                rtnElement = getTextInputGrp(object.options, label_name);
                break;
            default:
                //TODO finish text input 
                alert('no such object'+ object);
                // console.log(object);
                break;
        }
        return rtnElement;
    }
}

function getTextInputGrp(json_ui, label_name){
    var div = document.createElement('div');
    div.name = label_name;
    json_ui.forEach(function(lable){
        var temp_Textbox = document.createElement('input');
        temp_Textbox.type = 'text';
        temp_Textbox.placeholder = lable;
        div.appendChild(temp_Textbox);
    });
    return div;
}

function getRadioBtnGrp(data, name) {
    var div = document.createElement('div');
    // var text = document.createTextNode(name + ': ');
    // div.append(text);
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

//return [[a,b],[a,c],[a,d]] array of array
function combineArrays( array_of_arrays ){
    if( ! array_of_arrays ){
        return [];
    }
    if( ! Array.isArray( array_of_arrays ) ){
        return [];
    }
    if( array_of_arrays.length == 0 ){
        return [];
    }
    for( let i = 0 ; i < array_of_arrays.length; i++ ){
        if( ! Array.isArray(array_of_arrays[i]) || array_of_arrays[i].length == 0 ){
            // If any of the arrays in array_of_arrays are not arrays or zero-length, return an empty array...
            return [];
        }
    }
    // Done with degenerate cases...

    // Start "odometer" with a 0 for each array in array_of_arrays.
    let odometer = new Array( array_of_arrays.length );
    odometer.fill( 0 ); 
    let output = [];
    let newCombination = formCombination( odometer, array_of_arrays );
    output.push( newCombination );
    while ( odometer_increment( odometer, array_of_arrays ) ){
        //console.log(odometer);
        newCombination = formCombination( odometer, array_of_arrays );
        output.push( newCombination );
    }
    return output;
}/* combineArrays() */


// Translate "odometer" to combinations from array_of_arrays
function formCombination( odometer, array_of_arrays ){
    // In Imperative Programmingese (i.e., English):
    // let s_output = "";
    // for( let i=0; i < odometer.length; i++ ){
    //    s_output += "" + array_of_arrays[i][odometer[i]]; 
    // }
    // return s_output;

    // In Functional Programmingese (Henny Youngman one-liner):
    return odometer.reduce(
        function(accumulator, odometer_value, odometer_index){
            accumulator.push(array_of_arrays[odometer_index][odometer_value]);
            return accumulator;
        },[]
    );
}/* formCombination() */

function odometer_increment( odometer, array_of_arrays ){

    // Basically, work you way from the rightmost digit of the "odometer"...
    // if you're able to increment without cycling that digit back to zero,
    // you're all done, otherwise, cycle that digit to zero and go one digit to the
    // left, and begin again until you're able to increment a digit
    // without cycling it...simple, huh...?
    for( let i_odometer_digit = odometer.length-1; i_odometer_digit >=0; i_odometer_digit-- ){ 
        let maxee = array_of_arrays[i_odometer_digit].length - 1;         
        if( odometer[i_odometer_digit] + 1 <= maxee ){
            // increment, and you're done...
            odometer[i_odometer_digit]++;
            return true;
        }
        else{
            if( i_odometer_digit - 1 < 0 ){
                // No more digits left to increment, end of the line...
                return false;
            }
            else{
                // Can't increment this digit, cycle it to zero and continue
                // the loop to go over to the next digit...
                odometer[i_odometer_digit]=0;
                continue;
            }
        }
    }/* for( let odometer_digit = odometer.length-1; odometer_digit >=0; odometer_digit-- ) */

}/* odometer_increment() */