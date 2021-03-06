console.log('data loaded');
var Organ = ["NONE",
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
    "none": [],
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