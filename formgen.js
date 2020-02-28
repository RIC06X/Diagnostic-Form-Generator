console.log("connected");

var Organ = [
    "right frontal bone",
    "left frontal bone",
    "right temporal bone",
    "left temporal bone",
    "right parietal bone",
    "left parietal bone",
    "zygomatic bone",
    "nasal bone",
    "nasal septum",
    "zygomatic arch",
    "mandibular heads",
    "right mastoid air cells",
    "left mastoid air cells",
    "sphenoid sinus",
    "ethmoid sinus",
    "right maxillary sinus",
    "left maxillary sinus",
    "right frontal lobe",
    "left frontal lobe",
    "right parietal lobe",
    "left parietal lobe",
    "right temporal lobe",
    "right occipital lobe",
    "left temporal lobe",
    "left occipital lobe",
    "Superior sagittal sinus",
    "right caudate",
    "left caudate",
    "right thalamus",
    "left thalamus",
    "pons",
    "midbrain",
    "right cerebellum",
    "left cerebellum",
    "right internal capscule",
    "left internal capscule",
    "right globe",
    "left globe",
    "left medial rectus muscle",
    "left lateral rectus muscle",
    "left superior rectus muscle",
    "left optic nerve",
    "left post septal fat",
    "right medical rectus muscle",
    "right lateral rectus muscle",
    "right superior rectus muscle",
    "right optic nerve",
    "right post septal fat",
    "frontal sinus",
    "right lentiform nucleus",
    "left lentiform nucleus",
    "supra sellar cistern",
    "interpeduncular cistern",
    "prepontine cistern",
    "medulla oblongata",
    "right lateral ventricle",
    "left lateral ventricle",
    "3rd ventricle",
    "4th ventricle",
    "Corpus Callosum",
    "foramen magnum",
    "quadrigeminal plate cistern",
    "right cerebellopontine angle",
    "left cerebellopontine angle",
    "right cavernous sinus",
    "left cavernous sinus",
    "dosum sellae",
    "Sella turcica",
    "superior cerebellar cistern",
    "occipital bone",
    "clivus",
    "right sigmoid sinus",
    "left sigmoid sinus",
    "right sphenoid bone",
    "left spehnoid bone",
    "septum pellucidum",
    "sphenoid body",
    "pineal gland",
    "right carotid canal",
    "left carotid canal",
    "right jugular foramen",
    "left jugular foramen",
    "right mandibular heasd"
];
var diagnose = {
    "right frontal bone": ["fracture(B)", "lesion(B)"],
    "left frontal bone": ["fracture(B)", "lesion(B)"],
    "right temporal bone": ["fracture(B)", "lesion(B)"],
    "left temporal bone": ["fracture(B)", "lesion(B)"],
    "right parietal bone": ["fracture(B)", "lesion(B)"],
    "left parietal bone": ["fracture(B)", "lesion(B)"],
    "zygomatic bone": ["fracture(B)", "lesion(B)"],
    "nasal bone": ["fracture(B)", "lesion(B)"],
    "nasal septum": ["fracture(B)", "lesion(B)"],
    "zygomatic arch": ["fracture(B)", "lesion(B)"],
    "mandibular heads": ["fracture(B)", "lesion(B)"],
    "right mastoid air cells": [],
    "left mastoid air cells": [],
    "sphenoid sinus": ["mucosal thickening(S)", "lesion(S)"],
    "ethmoid sinus": ["mucosal thickening(S)", "lesion(S)"],
    "right maxillary sinus": ["mucosal thickening(S)", "lesion(S)"],
    "left maxillary sinus": ["mucosal thickening(S)", "lesion(S)"],
    "right frontal lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left frontal lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right parietal lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left parietal lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right temporal lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right occipital lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left temporal lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left occipital lobe": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "Superior sagittal sinus": ["pathology(V)"],
    "right caudate": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left caudate": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right thalamus": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left thalamus": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "pons": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "midbrain": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right cerebellum": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left cerebellum": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right internal capscule": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left internal capscule": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right globe": ["infaction(G)", "soft tissue tumor(G)", "detached membranes(G)", "traument injury(G)", "post operation change(G)"],
    "left globe": ["infaction(G)", "soft tissue tumor(G)", "detached membranes(G)", "traument injury(G)", "post operation change(G)"],
    "left medial rectus muscle": ["pathology(M)"],
    "left lateral rectus muscle": ["pathology(M)"],
    "left superior rectus muscle": ["pathology(M)"],
    "left optic nerve": ["pathology(N)"],
    "left post septal fat": ["traumatic injury(S)", "infaction(S)"],
    "right medical rectus muscle": ["pathology(M)"],
    "right lateral rectus muscle": ["pathology(M)"],
    "right superior rectus muscle": ["pathology(M)"],
    "right optic nerve": ["pathology(N)"],
    "right post septal fat": ["traumatic injury(S)", "infaction(S)"],
    "frontal sinus": ["mucosal thickening(S)", "lesion(S)"],
    "right lentiform nucleus": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left lentiform nucleus": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "supra sellar cistern": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "interpeduncular cistern": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "prepontine cistern": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "medulla oblongata": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "right lateral ventricle": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "left lateral ventricle": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "3rd ventricle": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "4th ventricle": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "Corpus Callosum": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "foramen magnum": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "quadrigeminal plate cistern": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "right cerebellopontine angle": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "left cerebellopontine angle": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "right cavernous sinus": ["pathology(V)"],
    "left cavernous sinus": ["pathology(V)"],
    "dosum sellae": ["fracture(B)", "lesion(B)"],
    "Sella turcica": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "superior cerebellar cistern": ["bleed(V/E)", "lesion(V/E)", "atrophy(V/E)", "hydrocephalus(V/E)"],
    "occipital bone": ["fracture(B)", "lesion(B)"],
    "clivus": ["fracture(B)", "lesion(B)"],
    "right sigmoid sinus": ["pathology(V)"],
    "left sigmoid sinus": ["pathology(V)"],
    "right sphenoid bone": ["fracture(B)", "lesion(B)"],
    "left spehnoid bone": ["fracture(B)", "lesion(B)"],
    "septum pellucidum": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "sphenoid body": ["fracture(B)", "lesion(B)"],
    "pineal gland": ["parenchymal bleed(H)", "extra-axial bleed(H)", "infaction(H)", "lesion(H)", "white matter disease(H)", "edema(H)"],
    "left carotid canal": [],
    "right jugular foramen": [],
    "left jugular foramen": [],
    "right mandibular heasd": []
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
    },
    "bleed(H)": {
        "pos": "brain",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "location": {
            "type": "dropdown",
            "options": ["subarachnoid", "subdural", "epidural"]
        },
        "acuity level": {
            "type": "dropdown",
            "options": ["acute", "subacute", "chronic"]
        },
        "mass effect": {
            "type": "radio button",
            "options": ["midline shift", "local"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "infaction(H)": {
        "pos": "brain",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "acuity level": {
            "type": "dropdown",
            "options": ["acute", "subacute", "chronic"]
        },
        "hemorrhage": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "mass effect": {
            "type": "radio button",
            "options": ["midline shift", "local"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "lesion(H)": {
        "pos": "brain",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "calcified": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "hemorrhage": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "mass effect": {
            "type": "radio button",
            "options": ["midline shift", "local"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "white matter disease(H)": {
        "pos": "brain",
        "focal type": {
            "type": "radio button",
            "options": ["focal", "diffuse"]
        },
        "severity": {
            "type": "dropdown",
            "options": ["severe", "medium", "mild"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "edema(H)": {
        "pos": "brain",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "mass effect": {
            "type": "radio button",
            "options": ["midline shift", "local"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "mucosal thickening(S)": {
        "pos": "sinuses",
        "severity": {
            "type": "dropdown",
            "options": ["severe", "medium", "mild"]
        },
        "fluid": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "lesion(S)": {
        "pos": "sinuses",
        "poly/cyst": {
            "type": "dropdown",
            "options": ["small", "medium", "large"]
        },
        "soft tissue": {
            "type": "dropdown",
            "options": ["small", "medium", "large"]
        },
        "fluid": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "pathology(M)": {
        "pos": "muscles",
        "swelling": {
            "type": "radio button",
            "options": ["focal", "diffuse"]
        },
        "displaced": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "lesion": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "infaction(G)": {
        "pos": "globes",
        "infaction around glabes": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "obssess": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "soft tissue tumor(G)": {
        "pos": "globes",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "calcified": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "detached membranes(G)": {
        "pos": "globes",
        "choroidal detachment": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "retial detachment": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "traument injury(G)": {
        "pos": "globes",
        "rapture": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "blood in globe": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "anterior chamber intact": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "lens displaced": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "post operative change(G)": {
        "pos": "globes",
        "globe repair": {
            "type": "radio button",
            "options": ["syes", "no"]
        },
        "s/p cataracts sorgery": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "bleed(V/E)": {
        "pos": "ventricles/extra axial spaces",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "focal type": {
            "type": "radio button",
            "options": ["focal", "diffuse"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "lesion(V/E)": {
        "pos": "ventricles/extra axial spaces",
        "size": {
            "type": "dropdown",
            "options": ["large", "medium", "small"]
        },
        "calcified": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "atrophy(V/E)": {
        "pos": "ventricles/extra axial spaces",
        "severity": {
            "type": "dropdown",
            "options": ["severe", "medium", "mild"]
        },
        "focal type": {
            "type": "radio button",
            "options": ["focal", "diffuse"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "hydrocephalus(V/E)": {
        "pos": "ventricles/extra axial spaces",
        "severity": {
            "type": "dropdown",
            "options": ["severe", "medium", "mild"]
        },
        "focal type": {
            "type": "radio button",
            "options": ["focal", "diffuse"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "pathology(V)": {
        "pos": "vessels",
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "dense": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "aneurysmal": {
            "type": "radio button",
            "options": ["fusiform", "berry"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "pathology(N)": {
        "pos": "nerves",
        "swelling": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "lesion": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "traumatic injury(S)": {
        "pos": "soft tissues",
        "laceration": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "hematoma": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "soft tissue swelling": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    },
    "infaction(S)": {
        "pos": "soft tissues",
        "soft tissue swelling": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "abssess": {
            "type": "radio button",
            "options": ["yes", "no"]
        },
        "measure": {
            "type": "text",
            "options": ["length", "width", "height"]
        },
        "impression": {
            "type": "radio button",
            "options": ["yes", "no"]
        }
    }
};

var add_record = document.getElementById("add");
var save_file = document.getElementById("save_to_file");
var ul = document.getElementById('list');
var output_json = {};
var output_temp = {};

//main 
main();

function main() {
    AddNewList();
    saveJsonFile();
}

//TODO finish parsing json 
function saveJsonFile() {
    save_file.addEventListener('click', function () {
        var keys = Object.keys(output_temp);
        keys.forEach(function (key){
            var temp = {};
            temp["#ofSentences"] = output_temp[key].length;
            for (var i = 0; i< output_temp[key].length;i++){
                var index = i+1;
                var str = 'sentence'+index;
                temp[str]= output_temp[key][i];
            }
            output_json[key]=temp;
        });
        exportToJsonFile(output_json);
        //console.log(output_json);
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
                        var index = i+1;
                        var key = 'format'+ index;
                        var temp_textbox_li = {};
                        temp_textbox_li['Non-P Value'] = non_p_combine_values_arr[i];
                        temp_textbox_li['text'] = text_box_grp[i].querySelector('.textbox_user_input').value;
                        rtn_texbox_json[key] = temp_textbox_li;
                    }
                    non_p_combine_values_arr=[];
                }else{
                    rtn_texbox_json['#ofFormats'] = 1;
                    rtn_texbox_json.Param = p_arr;
                    var key_p = 'format1';
                    var temp_textbox_li_p = {};
                    temp_textbox_li_p['text'] = text_box_grp[0].querySelector('.textbox_user_input').value;
                    rtn_texbox_json[key_p] = temp_textbox_li_p;
                }
                if (isEmpty(output_temp[sel_diagnose.value])){
                    output_temp[sel_diagnose.value]=[];
                    output_temp[sel_diagnose.value].push(rtn_texbox_json);
                }else{
                    output_temp[sel_diagnose.value].push(rtn_texbox_json);
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

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}