var name_array=[];
var display_array=[];
var display_array_sorting=[];
function submit(){
    /*var name_1=document.getElementById("name1").value;
    var name_2=document.getElementById("name2").value;
    var name_3=document.getElementById("name3").value;
    var name_4=document.getElementById("name4").value;

    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);*/
    for(var j=1; j<=4; j++){
        var name=document.getElementById("name"+j).value;
        name_array.push(name);
    }

    
    for(var k=0; k<name_array.length; k++){
        display_array.push("<h4>NAME - "+name_array[k]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sort(){
    name_array.sort();
    for(var k=0; k<name_array.length; k++){
        display_array_sorting.push("<h4>NAME - "+name_array[k]+"</h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array_sorting;
    var remove_commas=display_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}