function load_message(){
    xhr=null;
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if((4==xhr.readyState) && 200==xhr.status){
            document.getElementById("messages").innerHTML=xhr.responseText;
        }
        if((4==xhr.readyState) && 404==xhr.status){
            alert("fichier introuvable");
        }
    }
    xhr.open("Get","data.php",true);
    xhr.send(null);
}
function insert_data(){
    var nom=document.getElementById("nom").value;
    var email=document.getElementById("email").value;
    var contenu=document.getElementById("contenu").value;

    xhr=null;
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if((4==xhr.readyState) && 200==xhr.status){
            document.getElementById("messages").innerHTML=xhr.responseText;
        }
        if((4==xhr.readyState) && 404==xhr.status){
            alert("fichier introuvable");
        }
    }
    xhr.open("GET","insertion.php?nom="+nom+"&email="+email+"&contenu="+contenu,true);
    xhr.send(null);
}
function delete_data(val){
    xhr=null;
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if((4==xhr.readyState) && 200==xhr.status){
            document.getElementById("messages").innerHTML=xhr.responseText;
        }
        if((4==xhr.readyState) && 404==xhr.status){
            alert("fichier introuvable");
        }
    }
    xhr.open("GET","delete.php?id="+val,true);
    xhr.send(null);
    
    }
    function update_data(val){
    xhr=null;
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if((4==xhr.readyState)&&200==xhr.status){
            document.getElementById("messages").innerHTML=xhr.responseText;
        }
        if((4==xhr.readyState)&&404==xhr.status){
            alert("fichier introuvable");
        }
    }
    //xhr.open("GET","update2.php?id="+val,true);
    xhr.open("GET","update_ajax.php?id="+val,true);
    xhr.send(null);
}
function update_ajax(){
    var nom=document.getElementById("nom_update").value;
    var email=document.getElementById("email_update").value;
    var id=document.getElementById("id_update").value;
    var contenu=document.getElementById("contenu_update").value;
    xhr=null;
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if((4==xhr.readyState) && 200==xhr.status){
            document.getElementById("messages").innerHTML=xhr.responseText;
        }
        if((4==xhr.readyState) && 404==xhr.status){
            alert("fichier introuvable");
        }
    }
    xhr.open("GET","update4.php?id="+id+"& nom="+nom+"&email="+email+"&contenu="+contenu,true);
    xhr.send(null);
}
