let main = document.getElementById('main');

fetch('/components/data.json').then(function (response) {
    return response.json();
})
.then(function (data) {
    for (var i = 0; i < data.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'card')
        card.innerHTML = (
            `<div class="card" style="width: 18rem;">
            <img src="`+ data[i].imgsrc + `" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">`+ data[i].name+ `</h5>
            <div class="price-holder">
            <h5>₹ </h5>
            <h5 class="card-title price"> `+ data[i].price + `</h5>
            </div>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button  id="button" href="" class="`+data[i].id+`">Add to cart</button>
            </div>
            </div>`
            );
            main.appendChild(card);
            let button = document.getElementById('button');
            
        }
        
        let arr = Array.from(button)
        console.log(arr.length);
        
        arr.forEach(function (button) {


            button.addEventListener('click', () => {


                let id = button.getAttribute('class');
                
                if(localStorage.getItem('id')==null){
                    localStorage.setItem('id', '[]');
                }

                var old=JSON.parse(localStorage.getItem('id'));
                old.push(id);

                localStorage.setItem('id', JSON.stringify(old))



                let card = button.parentNode;
                
                let price = card.childNodes[3].childNodes[3].innerHTML;
                let cost = localStorage.getItem('totalprice') //cost==>cost of cart

                
                
                let imgsrc=card.parentNode.childNodes[1].getAttribute('src');
                let title=card.parentNode.childNodes[3].childNodes[1].textContent;
      
                 

               
                
                localStorage.setItem('imgsrc', imgsrc);
                localStorage.setItem('title', title);
                
                
                

                
                if (cost != null) {
                    cost = parseInt(cost)
                    localStorage.setItem('totalprice', cost + parseInt(price))
                }
                else {
                    localStorage.setItem('totalprice', price)
                }

                let no_of_items = localStorage.getItem('number');
                
                if(no_of_items != null){
                    no_of_items=parseInt(no_of_items)
                    localStorage.setItem('number', no_of_items+1);
                }else{
                    localStorage.setItem('number', 1);
                }
            })
        }
        )
    })


    

    // console.log(id);
    // console.log(arr);
    // console.log('hi');
    // console.log(card.parentNode.childNodes[1].getAttribute('src'));
    // console.log(cost);
    // console.log(card.childNodes[3].childNodes[3].innerHTML);
    // let a=price.innerHTML
    // console.log(main);
    // console.log(button);
    // console.log(arr.length);
    // console.log(typeof(price));
    // console.log(price);
    // console.log(typeof(price))
    // console.log(a);
    // console.log(card);