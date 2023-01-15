var stocks;
        async function getStocks() {
            await fetch(`https://api.polygon.io/v2/aggs/ticker/${document.getElementById("stockInp").value.toUpperCase()}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=bhKFpZCDAVPM30oSedy1jvAnBwBsZtnn`).then(resp => resp.json()).then(data => {stocks = data.results })
            stocks.map(data => console.log((document.getElementById("stockInp").value)));
            
            // var symbol =  document.getElementById("symbol");
            var indic = document.getElementById("indic");
            var price = document.getElementById("price");
            var perftext = document.getElementById("perftext");
            
            perftext.innerHTML ="The stock is " ;
            
            if(stocks[0].o < stocks[0].c) {
                indic.src = "./src/img/chevron-up-svgrepo-com (1).svg";
                price.style.color = "green" ;
                // symbol.innerHTML = "Up";
                perftext.innerHTML += `better by ${(stocks[0].c - stocks[0].o).toFixed(3)} points`;
            }
            else  {
                indic.src = "./src/img/chevron-down-svgrepo-com (1).svg";
                price.style.color = "red" ;
                // symbol.innerHTML = "Low";
                perftext.innerHTML += `worse by ${(stocks[0].o - stocks[0].c).toFixed(3)} points`;
            }

            document.getElementById("price").innerHTML = stocks[0].c;
            console.log(stocks[0]);
        }
        getStocks();
        window.addEventListener('keydown' ,(e)=> {if(e.key == 'Enter') {getStocks() ; console.log(stocks[0])}});
        