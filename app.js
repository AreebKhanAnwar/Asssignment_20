// --------------------------------------Question No2 ----------------------------------------------------------------

function ExtendText() {
    var para = document.getElementById("para");
    var para_Text = document.getElementById("para").innerHTML;
    var remain = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo autem molestias neque, a sed ipsum, enim reprehenderit quibusdam dolorum dolor. Quisquam ratione nisi unde, nobis eligendi quod repellat! Voluptas"
    

    var link = document.getElementById("link");
    if (link.innerHTML == "See More") {
        para.innerHTML = para_Text + remain;
        link.innerHTML = "See Less"
    }
    else {
        para.innerHTML = para_Text.slice(0, -remain.length);
        link.innerHTML = "See More";
    }
}

// --------------------------------------Question No1 ----------------------------------------------------------------

