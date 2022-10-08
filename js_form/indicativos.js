$(document).ready(function () {

    obtenerPaises();
})

function obtenerPaises() {

    $.ajax({
      url: "https://restcountries.com/v3.1/all",
      type: "GET",
      dataType: "json",
      success: function (data) {

        var plantilla = "";
  
        for (let i = 0; i < data.length; i++) {

          if(data[i].altSpellings[0] == "Saint Helena" || data[i].altSpellings[0] == "BES islands"){
            data[i].altSpellings[0] == "SH"
            data[i].altSpellings[0] == "BI"
          }else{
            plantilla += `
                  <option style="margin-right: 7px;" value="${data[i].altSpellings[2]}" href="#">${data[i].flag + " " + data[i].altSpellings[0]}</option>
              `;
          }
        }
        $("#paises").html('<option value="0" selected href="#">País</option>' + plantilla);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
