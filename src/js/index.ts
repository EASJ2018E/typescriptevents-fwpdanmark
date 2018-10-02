
let pushknap = document.getElementById("tilføj").addEventListener("click",tilføjVare);
let pushknap2 = document.getElementById("RunCode").addEventListener("click",MakeAllObjectInHTTP);
let inputElement = (document.getElementById("nyvare") as HTMLInputElement);
let inputType = (document.getElementById("TYPE") as HTMLInputElement);
let counter = 3;

let arrayList : string[] = ["1","2","3","4","5"];
let arrayList2 : string[] = ["Bananer","Jordbær","Slik","Cola","Mælk"];
let arrayList3 : string[] = ["S","S","U","U","S"];

function tilføjVare(){
    let opret = document.createElement("li");
    opret.setAttribute("id",count());
    let texte = document.createTextNode(inputElement.value);
    opret.appendChild(texte);

    if(inputType.value=="S"){
        let liste = document.getElementById("liste");
        opret.setAttribute("class","sundt")
        liste.appendChild(opret);
        console.log(opret);
    }
    else if(inputType.value=="U"){
        let Ulist = document.getElementById("listeUsund")
        opret.setAttribute("class","usundt")
        Ulist.appendChild(opret);
        console.log(opret)
    }
    
}

function count(){
    counter++;
    return counter+"";
}

function CreateElements(id1: string, text1: string, class1: string) : HTMLLIElement{
    let opret = document.createElement("li");
    opret.setAttribute("id",id1);
    let texte = document.createTextNode(text1);
    opret.appendChild(texte);
    
    if(class1 =="S"){
        opret.setAttribute("class","sundt") 
    }
    else if(class1 =="U"){
        opret.setAttribute("class","usundt") 
    }

    return opret;
}

function MakeAllObjectInHTTP() : void{
    let liste = document.getElementById("liste");
    let Ulist = document.getElementById("listeUsund")
    for( let i = 0 ; i <arrayList.length; i++){
        let result = CreateElements(arrayList[i],arrayList2[i],arrayList3[i]);
        if(arrayList3[i]=="S"){
            console.log("ssuns usn sunsuns")
            liste.appendChild(result);
        }
        else if(arrayList3[i]=="U"){
            Ulist.appendChild(result);
        }
    }
}
