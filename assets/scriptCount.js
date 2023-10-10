function CalculateSumm()
{
    var ammount = document.getElementById("ammount");
    var item = document.getElementById("item");
    var result = document.getElementById("result");

    var ammountVal = parseInt(ammount.value);
    var itemPrice = parseInt(item.value);
    var isDigOnly = /\D/.test(ammount.value);
    if(!isNaN(ammountVal) && !isDigOnly && ammountVal !=0 )
    {
        
        var finalPrice = "Сумма: " + itemPrice*ammountVal + "руб.";
        result.textContent = finalPrice;
    }
    else
    {
        result.textContent = "Неверное количество товара";
    }
}

window.addEventListener('DOMContentLoaded', function(event)
{
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("calc-button");
    b.addEventListener("click", CalculateSumm);
});