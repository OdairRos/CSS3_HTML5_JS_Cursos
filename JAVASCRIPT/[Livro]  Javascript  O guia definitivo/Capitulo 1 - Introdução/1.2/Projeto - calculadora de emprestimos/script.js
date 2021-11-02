"use strict";

require('math')
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

    var x = math.pow(1+ interest, payements)
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
    
    function chart(principal, interest, monthly, payements){
        var graph = document.getElementById("graph");
        graph.width = graph.width

        if(aruments.length == 0 || !graph.getContext) return;

        var g = graph.getContext("2d");
        var width = graph.width, height = graph.height;

        function paymentToX(n){ return n * width / payements}
        function amountToY(a) { return height - (a * height/(monthly*payements))}
        g.moveTo(paymentToX(0), amountToY(0));
        lineTo(paymentToX(payments),	
            amountToY(monthly*payments));
        g.lineTo(paymentToX(payments), amountToY(0));
        g.closePath();
        g.fillStyle ="#f88"
        g.fill();
        g.font = "bold 12px sans-serif";
        g.fillText("Total interest in paymets",20,20)

        var equity = 0;
        g.beginPath();
        g.moveTo(paymentToX(0), amountToY(0));

        for(var p = 1; p <= payments; p++){
            var ThisMonthsIntrest = (principal-equity)*interest
            equity += (monthly - ThisMonthsIntrest)
            g.lineTo(paymentToX(p), amountToY(equity));
        }

        g.lineTo(paymentToX(paymests), amountToY(0));
        g.closePath();
        g.fillStyle = "green";
        g.fill();
        g.fillText("Total equity", 20,35)

        var bal = principal;
        g.beginPath();
        g.moveTo(paymentToX(0), amountToY(bal))
        for(var p = 1; p <= payments; p++){
            var ThisMonthsIntrest = bal*interest
            bal -= (monthly - ThisMonthsIntrest)
            g.lineTo(paymentToX(p), amountToY(bal))

        }

        g.lineWidth = 3;
        g.stroke();
        g.fillStyle = 'black'
        g.fillText('Loan balance', 20,50)

        g.textAlign='center';

        var y = amountToY(0)
        for(var year=1; year*12 <= payments; year++){
            var x = paymentToX(year*12)
            g.fillRect(x-0.5, y-3,1,3)
            if(year == 1) g.fillText('Year', x,y-5)
            if(year%5 == 0 && year* 12 !== payments)
                g.fillText(String(year), x,y-5)
        }

        g.textAlign = 'right';
        g.textBaseline = 'middle';
        var ticks = [monthly*payments,principal]
        var rightEdge = paymentToX(payements)
        for(var i = 0; i < ticks.length; i++){
            var y = amountToY(ticks[i].toFixed(0),
                rightEdge-5, y)
        }

        
    }
}
