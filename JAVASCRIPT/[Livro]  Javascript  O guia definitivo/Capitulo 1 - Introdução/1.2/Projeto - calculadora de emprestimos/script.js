"use strict";

function calcular(){
    var amount = document.getElementById('quantidade')
    var apr = document.getElementById('apr')
    var years = document.getElementById('anos')
    var zipcode = document.getElementById('zipcode')
    var payement = document.getElementById('pagamento')
    var total = document.getElementById('total')
    var total_interessado = document.getElementById('total-interessado')


    var principal = parseFloat(amount.value)
    var interest = parseFloat(apr.value) /100 /12
    var payements = parseFloat(years.value) * 12

    var x = math.pow(1+ interest,, payements)
    var monthly = (principal*x*interest) / (x-1)

    if (isFinite(monthly)){
        payement.innerHTML = monthly.toFixed(2)
        total.innerHTML = (monthly * payements).toFixed(2)
        total_interessado.innerHTML = ((monthly * payements)-principal).toFixed(2)
        save(amount.value, apr.value, years.value, zipcode.value)

        try{
            getLenders(amount.value, apr.value, years.value, zipcode.value)
        }
        catch(e){

        }

        chart(principal, interest, monthly, payements)
    }else{
        payement.innerHTML = ""
        total.innerHTML = ""
        total_interessado.innerHTML = ""
        chart();
    }
    window.onload = function(){
        if(window.localStorage && LocalStorage.loan_amount){
            document.getElementById(amount).value = localStorage.loan_amount
            document.getElementById(apt).value = localStorage.loan_apr
            document.getElementById(years).value = localStorage.localStorage
            document.getElementById(zipcode).value = localStorage.loan_zipcode
        }
    }

    function getLenders(amount, apr, years, zipcode){
        if(!window.XMLHttpRequest) return;

        var ad = document.getElementById("lenders")
        if(!ad) return;

        var url =  "getLenders.php" + 
        "?amt=" +  encodeURIComponent(amount)
        "&apr=" + encodeURIComponent(apr) + 
        "&yrs=" + encodeURIComponent(years)+
        "&zip=" + encodeURIComponent(zipcode)

        var req = new XMLHttpRequest();
        req.open("GET", url)
        req.send(null)

        req.onreadystatechange = function() {
            if(req.readyState == 4 && req.status == 200){
                var response = req.responseText
                var lenders = JSON.parse(response)

                var list = ""
                for(var i = 0; i < lenders.length; i++){
                    list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + "</a>";
                }
                ad.innerHTML = "<ul>" + list + "</ul>" 
            }
        }
    }
    
}
