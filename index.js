let nilai_umum = angka_random()
console.log("Array umum ")
console.log(nilai_umum)

let ganjil = getGanjilGenap(nilai_umum,"ganjil")
let genap = getGanjilGenap(nilai_umum,"genap")

console.log("array index ganjil =")
console.log(ganjil)
console.log("array index genap =")
console.log(genap)

console.log("minimal ganjil = "+getMin(ganjil))
console.log("minimal genap = "+getMin(genap)+ "\n")

console.log("maksimal ganjil = "+getMax(ganjil))
console.log("maksimal genap = "+getMax(genap)+ "\n")

console.log("Total ganjil = "+getTotal(ganjil))
console.log("Total genap = "+getTotal(genap)+ "\n")

console.log("rata rata genap = "+getAverage(genap))
console.log("rata rata ganjil = "+getAverage(ganjil)+ "\n")

console.log("nilai minimal "+ pebanding(getMin(ganjil),getMin(genap)))
console.log("nilai maksimal "+ pebanding(getMax(ganjil),getMax(genap)))
console.log("nilai total "+ pebanding(getTotal(ganjil),getTotal(genap)))
console.log("nilai rata rata "+ pebanding(getAverage(ganjil),getAverage(genap)))


function angka_random(){
    let random = []
    for (x=0; x<100 ; x++){
        random.push(Math.floor(Math.random() * 50) + 1)
    }
    return random
}

function getGanjilGenap(nilai,request) {
    let num = []
    switch (request) {
        case "ganjil":
            for(x in nilai){
                if(x % 2 == 0){
                    num.push(nilai[x])
                }
            }
          break;
        case "genap":
            for(x in nilai){
                if(x % 2 != 0){
                    num.push(nilai[x])
                }
            }
          break;
      }
      return num
}

function getMin(nilai){
    let min = nilai[0]

    for(x = 0 ; x <nilai.length ;x++){
        if(nilai[x] < min ){
            min = nilai[x]
        }
    }

    return min
}

function getMax(nilai){
    let max = nilai[0]

    for(x = 0 ; x < nilai.length ;x++){
        if(nilai[x] > max ){
            max = nilai[x]
        }
    }
    return max
}

function getTotal(nilai){
    let total = 0
    for(x of nilai){
        total += x
    }
    return total
}

function getAverage(nilai){
    let avg = getTotal(nilai) / nilai.length
    return avg
}

function pebanding(ganjil, genap){
    let hasil
    if(ganjil > genap ){
        hasil = "array Ganjil lebih besar dari array Genap"
    }else if(ganjil < genap){
        hasil = "array Genap lebih besar dari array Ganjil"

    }else{
        hasil = "array Ganjil dan Genap sama"
    }
    return hasil
}



