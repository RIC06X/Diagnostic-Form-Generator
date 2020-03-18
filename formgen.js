console.log("formgen connected");

var add_record = document.getElementById("add");
var save_file = document.getElementById("save_to_file");
var ul = document.getElementById('list');
var output_temp = {};
//TODO update each sel_diagnos make new selection to improve efficiency of next list generation
var latest_selection;

main();

function main() {
    AddNewList();
    saveJsonFile();
}

function saveJsonFile() {
    save_file.addEventListener('click', function () {
        //var keys = Object.keys(output_temp);
        var output_json = {};
        var out_values = Object.values(output_temp);
        //console.log(out_values);
        var out_dict = {};
        //put diganose data with same diagnose name under same dicts;
        out_values.forEach(function(e){
            var key = Object.keys(e)[0];
            var value = Object.values(e)[0];
            if (!out_dict[key]){
                out_dict[key]=[];
            }
            out_dict[key].push(value);
        });
        console.log(out_dict);

        var diagnose_names = Object.keys(out_dict);
        diagnose_names.forEach(function(key){
            var temp = {};
            temp["#ofSentences"] = out_dict[key].length;
            for (var i = 0; i< out_dict[key].length;i++){
                var index = i+1;
                var str = 'sentence'+index;
                temp[str]= out_dict[key][i];
            }
            output_json[key]=temp;
        });
        //console.log(output_json);
        exportToJsonFile(output_json);
    });
}


//after user select number of parameters, div_autogen_area will be generated 
//the diagram is like 
// li{
//     div_selectors{
//         sel_organ
//         sel_diagose
//         sel_param_number
//     }
//     deleteBtn
//     div_autogenform{
//         div_selection_area{
//             div_selector_grp{
//                 temp_sel_params
//                 temp_checkbox
//                 temp_label
//             }
//             temp_confirm_btn
//         }
//         div_textbox_area{
//             div_textbox_grp{
//                div_textbox{
//                        label
//                        temp_textbox
//               }
//             }
//             temp_save_btn
//         }
//     }
// }

function AddNewList() {
    add_record.addEventListener('click', function () {
        var li = document.createElement('li');

        //set uuid for both li and element, modify element need also change here. 
        var uuid = create_UUID();
        li.id = uuid;
        
        var div_sel_header = document.createElement('div');
        div_sel_header.setAttribute('class', 'div_sel_header row');

        var div_selectors = document.createElement('div');
        div_selectors.setAttribute('class', 'div_selectors form-group');

        var sel_diagnose = document.createElement('select');
        // sel_diagnose.setAttribute('class', 'form-control');
        setSelectorOptions(sel_diagnose, Object.keys(paramDynamic), "-Select Diagnose-");

        //TODO Fix last selection
        // if (latest_selection){
        //     sel_diagnose.value = latest_selection;
        // }
        
        var sel_param_number = document.createElement('select');
        // sel_param_number.setAttribute('class', 'form-control');
        setSelectorOptions(sel_param_number, [], "-Select Param Number-");

        div_selectors.appendChild(sel_diagnose);
        div_selectors.appendChild(sel_param_number);

        //Delete btn for delete this list
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';

        //Append sub UI element under current list
        div_sel_header.appendChild(div_selectors);
        div_sel_header.appendChild(deleteBtn);
        li.appendChild(div_sel_header);

        ul.appendChild(li);

        deleteBtn.addEventListener('click', function () {
            delete output_temp[uuid];
            li.remove();
            //TODO remove list item from json data
        });

        //set sel_diagose listener to fill set_param_number options
        sel_diagnose.addEventListener("change", function () {
            //delete previous selection and data
            removeOptions(sel_param_number);
            if (li.contains(div_autogen_area)) {
                li.removeChild(div_autogen_area);
            }
            var param_number = [];
            for (var i = 1; i < Object.keys(paramDynamic[sel_diagnose.value]).length; i++) {
                param_number.push(i);
            }
            setSelectorOptions(sel_param_number, param_number, "-Select Param Number-");
        });

        var div_autogen_area;
        sel_param_number.addEventListener("change", function () {
            //BUG if select diagnose twice, bug appears, div_autogen_area found.
            if (li.contains(div_autogen_area)) {
                li.removeChild(div_autogen_area);
            }
            //implement ui structure
            div_autogen_area = document.createElement('div');
            div_autogen_area.setAttribute('class', 'div_autogenform');
            li.appendChild(div_autogen_area);

            var div_selection_area = document.createElement('div');
            div_selection_area.setAttribute('class', 'div_selection_area row');

            var div_selector_grp = document.createElement('div');
            div_selector_grp.setAttribute('class', 'div_selector_grp');
            var temp_confirm_btn = document.createElement('button');
            temp_confirm_btn.textContent = 'confirm';
            div_selection_area.appendChild(div_selector_grp);
            div_selection_area.appendChild(temp_confirm_btn);


            var div_textbox_area = document.createElement('div');
            div_textbox_area.setAttribute('class', 'div_textbox_area row');
            var div_textbox_grp = document.createElement('div');
            div_textbox_grp.setAttribute('class', 'div_textbox_grp');

            var temp_save_btn = document.createElement('button');
            temp_save_btn.textContent = 'save';
            temp_save_btn.style.display = 'none';

            div_textbox_area.appendChild(div_textbox_grp);
            div_textbox_area.appendChild(temp_save_btn);

            div_autogen_area.appendChild(div_selection_area);
            div_autogen_area.appendChild(div_textbox_area);

            //populate child ui elements for div_selector_grp
            if (sel_param_number.value != 0) {
                for (var i = 0; i < sel_param_number.value; i++) {
                    var div_selector_row = document.createElement('div');
                    div_selector_row.setAttribute('class','div_selector_row');

                    var temp_sel_params = document.createElement('select');
                    var temp_checkbox = document.createElement("input");
                    var temp_label = document.createElement('label');

                    temp_checkbox.type = 'checkbox';
                    temp_checkbox.value = 'hasParameter';
                    temp_checkbox.style.display = 'none';
                    //fill selector with options
                    setSelectorOptions(temp_sel_params, Object.keys(paramDynamic[sel_diagnose.value]), "-Select Params-");
                    div_selector_row.appendChild(temp_sel_params);
                    div_selector_row.appendChild(temp_checkbox);
                    div_selector_row.appendChild(temp_label);

                    div_selector_grp.appendChild(div_selector_row);
                    temp_sel_params.addEventListener("change", sel_handler());
                    temp_checkbox.addEventListener("change", chk_handler());
                }
            }

            var non_p_dict;
            var p_arr;
            var non_p_keys;
            var non_p_combine_values_arr;

            //confirm btn for generate text box
            temp_confirm_btn.addEventListener("click", function(){
                //flag to check if all checkbox are checked
                var flg_all_selection_made = true;
                //find all combination of selections
                non_p_dict = {};
                p_arr = [];
                non_p_combine_values_arr = [];
                var grp = div_selector_grp.children;
                for (var i = 0; i < grp.length; i++){
                        var temp_sel    = grp[i].children[0];
                        var temp_chkbox = grp[i].children[1];
                        if (temp_sel.value){
                            if (!temp_chkbox.checked){
                                non_p_dict[temp_sel.value] = paramDynamic[sel_diagnose.value][temp_sel.value].options;
                            }
                            else{
                                p_arr.push(temp_sel.value);
                            }
                        }else{
                            flg_all_selection_made=false;
                        }
                }

                // all selections have been made, 
                if (flg_all_selection_made){
                    //delete textboxs and labels of last selections (child nodes of div_textbox_grp)
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
                    temp_save_btn.style.display = "block";
                    temp_confirm_btn.textContent = 'update';
                }
                else{
                    alert('Please finish selection!');
                }
            });

            //save textbox value to dict for future json output use
            temp_save_btn.addEventListener("click", function () { 
                var div_textbox_area = this.parentNode;
                var div_textbox_grp = div_textbox_area.children[0]; 
                var text_box_grp = div_textbox_grp.querySelectorAll('.div_textbox_row');
                //temporary json dict for holding infomation

                //delete privous saved data
                if (output_temp[sel_diagnose.value]){
                    if (output_temp[sel_diagnose.value][uuid]){
                        //console.log(output_temp[sel_diagnose.value][uuid]);
                        delete output_temp[sel_diagnose.value][uuid];
                    }
                }

                var usr_data_wrapper = {};
                var user_data = {};
                if (non_p_combine_values_arr.length!=0){
                    //Non-Parameter related selections
                    //if rtn_te
                    user_data['#ofFormats'] = non_p_combine_values_arr.length;
                    user_data.Param = p_arr;
                    user_data.Non_P = non_p_keys;
                    for (var i = 0 ; i < non_p_combine_values_arr.length; i++){
                        var index = i+1;
                        var key = 'format'+ index;
                        var temp_textbox_li = {};
                        temp_textbox_li['Non-P Value'] = non_p_combine_values_arr[i];
                        temp_textbox_li.text = text_box_grp[i].querySelector('.textbox_user_input').value;
                        user_data[key] = temp_textbox_li;
                    }
                }else{
                    //Parameter only related selections
                    user_data['#ofFormats'] = 1;
                    user_data.Param = p_arr;
                    user_data.Non_P = [];
                    var key_p = 'format1';
                    var temp_textbox_li_p = {};
                    temp_textbox_li_p['Non-P Value'] = [];
                    temp_textbox_li_p.text = text_box_grp[0].querySelector('.textbox_user_input').value;
                    user_data[key_p] = temp_textbox_li_p;
                }
                
                usr_data_wrapper[sel_diagnose.value] = user_data;
                output_temp[uuid] = usr_data_wrapper;
                //console.log(JSON.stringify(output_temp));
            });
        });
    });
}

//return a element node of textbox and lable, the lable's textcontent is the input argument 'str'
function get_textbox_list(str){
    var div_textbox_row = document.createElement('div');
    div_textbox_row.setAttribute('class', 'div_textbox_row');
    var temp_Textbox = document.createElement('input');
    temp_Textbox.type = 'text';
    temp_Textbox.name = str;
    temp_Textbox.setAttribute('class','textbox_user_input');
    var label = document.createElement('label');
    label.setAttribute('class', 'label_user_input');
    label.htmlFor = str;
    label.textContent = str;
    div_textbox_row.appendChild(label);
    div_textbox_row.appendChild(temp_Textbox);
    return div_textbox_row;
}

//selector listener handler
function sel_handler() {  
    return function(){
        //uncheck the following checkbox and delete the previous generated div_textbox_grp
        var div_selector_row = this.parentNode;
        var temp_checkbox = div_selector_row.children[1];
        var temp_label   = div_selector_row.children[2];
        var div_autogenform = div_selector_row.parentNode.parentNode.parentNode;
        var div_textbox_grp = div_autogenform.children[1].children[0];
        temp_checkbox.style.display = 'block';
        temp_label.textContent = 'Check to use '+ this.value + ' notation to replace all '+ this.value+' in the textarea';

        temp_checkbox.checked = false;
        while (div_textbox_grp.hasChildNodes()){
            div_textbox_grp.removeChild(div_textbox_grp.lastChild);
        }
    };
}
//checkbox handler
function chk_handler(){
    return function () {  
        var div_selector_row = this.parentNode;
        var div_autogenform = div_selector_row.parentNode.parentNode.parentNode;
        var div_textbox_grp = div_autogenform.children[1].children[0];
        while (div_textbox_grp.hasChildNodes()){
            div_textbox_grp.removeChild(div_textbox_grp.lastChild);
        }
    };
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

function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
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

// Thanks John D. Aynedjian from StackOverFlow for his method to compute combination of arrais!
// John D. Aynedjian's Code Start
// return [[a,b],[a,c],[a,d]] array of array
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

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
//John D. Aynedjian's Code END



// function getElementfromJSON(object, label_name) {
//     if (object) {
//         var rtnElement;
//         switch (object['type']) {
//             case "dropdown":
//                 rtnElement = document.createElement('select');
//                 setSelectorOptions(rtnElement, object.options);
//                 break;
//             case "radio button":
//                 rtnElement = getRadioBtnGrp(object.options, label_name);
//                 break;
//             case "text":
//                 rtnElement = getTextInputGrp(object.options, label_name);
//                 break;
//             default:
//                 //TODO finish text input 
//                 alert('no such object'+ object);
//                 // console.log(object);
//                 break;
//         }
//         return rtnElement;
//     }
// }

// function getTextInputGrp(json_ui, label_name){
//     var div = document.createElement('div');
//     div.name = label_name;
//     json_ui.forEach(function(lable){
//         var temp_Textbox = document.createElement('input');
//         temp_Textbox.type = 'text';
//         temp_Textbox.placeholder = lable;
//         div.appendChild(temp_Textbox);
//     });
//     return div;
// }

// // function getRadioBtnGrp(data, name) {
//     var div = document.createElement('div');
//     // var text = document.createTextNode(name + ': ');
//     // div.append(text);
//     data.forEach(function (element) {
//         var radiobtn = document.createElement('input');
//         //can be optimized by 
//         radiobtn.type = 'radio';
//         radiobtn.name = name;
//         radiobtn.value = element;
//         var label = document.createElement('label');
//         label.htmlFor = name;
//         label.textContent = element;
//         div.appendChild(radiobtn);
//         div.appendChild(label);
//     });
//     return div;
// }


