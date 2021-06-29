menu_list_array = ["Veg Margherita Pizza",
                        "tandoori pizza",
                        "mexican green wave",
                        "indi tandoori paneer",
                        "corn and cheese pizza"];

function getmenu(){
    var htmldata="";
    
    menu_list_array.sort();
for (var i=0;i<menu_list_array.lenght;i++){
    htmldata=htmldata +menu_list_array[i];
    console.log(menu_list_array[i]);
}
  

    document.getElementById("display_menu").innerHTML=htmldata;

}

