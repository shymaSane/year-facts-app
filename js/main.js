

var number = document.getElementById('number')
number.addEventListener('keyup', loadQuote)

function loadQuote(e) {
    var currentValue = e.target.value;
    let httpRequest = new XMLHttpRequest;
    httpRequest.open('Get', 'http://numbersapi.com/'+ currentValue +'/year', true )
    httpRequest.onload = function(){
        if(this.status == 200){
            
            document.getElementById('fact').innerHTML = this.responseText
        } else if (this.status == 404) {
            throw console.error("Not found");
            
        }
    }
    httpRequest.send()
    
}