function enregistrerachat(){
    var Id_fournisseur=document.getElementById("IDF").value;
    var Qantité=document.getElementById("Q").value;
    var Prix_unitaire=document.getElementById("PU").value;
    var Date=document.getElementById("Date").value;
    var Table=document.getElementById("Table");
    var ligne=Table.insertRow(1);
    var cellule1=ligne.insertCell(0);
    var cellule2=ligne.insertCell(1);
    var cellule3=ligne.insertCell(2);
    var cellule4=ligne.insertCell(3);
    console.log(Id_fournisseur,Qantité,Prix_unitaire,Date);
    cellule1.innerHTML=Id_fournisseur;
    cellule2.innerHTML=Qantité;
    cellule3.innerHTML=Prix_unitaire;
    cellule4.innerHTML=Date; 
    } 

    function enregistrervente(){
        var Id_Client=document.getElementById("Id_Client").value;
        var Quantité_Vendu=document.getElementById("QV").value;
        var Prix_vente=document.getElementById("PV").value;
        var Date_vente=document.getElementById("DateV").value;
        var Table=document.getElementById("table");
        var ligne=Table.insertRow(1);
        var cellule1=ligne.insertCell(0);
        var cellule2=ligne.insertCell(1);
        var cellule3=ligne.insertCell(2);
        var cellule4=ligne.insertCell(3);
        console.log(Id_Client,Quantité_Vendu,Prix_vente,Date_vente);
        cellule1.innerHTML=Id_Client;
        cellule2.innerHTML=Quantité_Vendu;
        cellule3.innerHTML=Prix_vente;
        cellule4.innerHTML=Date_vente;
         
        }