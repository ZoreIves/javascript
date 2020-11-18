function forinObject(){
    var mobil = {
        merk : "GM",
        warna : "Maroon",
        type : "SUV",
        harga : 580000000
    }

    for(var a in mobil){
        console.log(mobil[a]);
    }
}

forinObject()