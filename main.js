function toggleActivate() {
    var checkBox = document.getElementById("toggle");
    var priceA = document.getElementsByClassName("annually");
    var priceM = document.getElementsByClassName("monthly");

    for (var i = 0; i < priceA.length; i++) {
        if (checkBox.checked == true) {
            priceM[i].style.display = "block";
            priceA[i].style.display = "none";
        } else if (checkBox.checked == false) {
            priceM[i].style.display = "none";
            priceA[i].style.display = "block";
        }
    }
}
toggleActivate();