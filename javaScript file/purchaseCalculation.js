
// function to get extra cost
function setExtraCost(hardWareId, value) {
  document.getElementById(hardWareId).innerText = value;
  getTotalPrice();
}

// function to get total price
function getTotalPrice(){
    const bestPrice=parseFloat(document.getElementById('default-price').innerText);
    const memoryCost=parseFloat(document.getElementById('extra-memory-cost').innerText);
    const storageCost=parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost=parseFloat(document.getElementById('delevery-cost').innerText);
    const totalPrice= bestPrice+memoryCost+storageCost+deliveryCost;
    document.getElementById('total-price').innerText=totalPrice;
    document.getElementById('current-price').innerText=totalPrice;
}

// function to get discount using promo code
function PromoCodePrice() {
  const promoCode = document.getElementById("promocode-field").value;
  const currentPriceText = document.getElementById("total-price").innerText;
  let price = parseFloat(currentPriceText);
  const discount = parseFloat(price * 0.2);
  if (promoCode == "stevekaku") {
    price = price - discount;
    document.getElementById("current-price").innerText = price;
    document.getElementById("promocode-field").value = "";
  }else if(promoCode==''){
    alert("Please Type Your Promo Code. Then Click 'Apply' Button");
  }
  else{
      alert("Sorry! Your Code is Wrong. Please Try Again...");
  }
}

// extra memory event handler
document.getElementById("8gb-memory").addEventListener("click", function () {
  setExtraCost("extra-memory-cost", 0);
});
document.getElementById("16gb-memory").addEventListener("click", function () {
  setExtraCost("extra-memory-cost", 180);
});

// extra storage event handler
document.getElementById("256gb-storage").addEventListener("click", function () {
  setExtraCost("extra-storage-cost", 0);
});
document.getElementById("512gb-storage").addEventListener("click", function () {
  setExtraCost("extra-storage-cost", 100);
});
document.getElementById("1tb-storage").addEventListener("click", function () {
  setExtraCost("extra-storage-cost", 180);
});

// delivery event handler
document.getElementById("free-delivery").addEventListener("click", function () {
    setExtraCost("delevery-cost", 0);
});
document.getElementById("premium-delivery").addEventListener("click", function () {
    setExtraCost("delevery-cost", 20);
});

// promo code apply button event handler
document.getElementById("apply-btn").addEventListener("click", function () {
  PromoCodePrice();
});
