$(document).ready(init);
function init()
{
    $.ajax({
        url:"contactos.json",
        success:function(data,estado,jqXHR){
            console.log("\tsuccess _______________");
            $('body').append("<table><th>Nombre</th><th>Edad</th><th>Email</th><th>Telefono</th></table>");
            for(var i = 0; i < data.length; i++)
            {
                $('table').append("<tr><td><strong>" + data[i].nombre + "</strong></td>" + "<td>" + data[i].edad + "</td>" + "<td>" + data[i].email + "</td>" + "<td>" + data[i].telefono + "</td></tr>");
            }
            $('table,th,tr,td').css("border","1px solid black");
        }
    });
}
