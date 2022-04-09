

const futbolcular = [
    {
        name: "Fernando",
        surname: "Muslera",
        age: "32",
        kadroDurumu: "İlk 11",
        formaNumarasi: "1",
        millet: "Yabancı"

    },
    {
        name: "Sacha",
        surname: "Boey",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "2",
        millet: "Yabancı",

    },
    {
        name: "Marcao",
        surname: "Teixeira",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "3",
        millet: "Yabancı",

    },
    {
        name: "Victor",
        surname: "Nelsson",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "4",
        millet: "Yabancı",

    },
    {
        name: "Patrick",
        surname: "VanAanholt",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "5",
        millet: "Yabancı",

    },
    {
        name: "Alexandru",
        surname: "Cicaldau",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "6",
        millet: "Yabancı",

    },
    {
        name: "Berkan",
        surname: "Kutlu",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "7",
        millet: "Türk",

    },
    {
        name: "Taylan",
        surname: "Antalyali",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "8",
        millet: "Türk",

    },
    {
        name: "Kerem",
        surname: "Aktürkoğlu",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "9",
        millet: "Türk",

    },
    {
        name: "Olimpiu",
        surname: "Morutan",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "10",

        millet: "Yabancı"
    },

    {
        name: "Bafetimbi",
        surname: "Gomis",
        age: "28",
        kadroDurumu: "İlk 11",
        formaNumarasi: "11",

        millet: "Yabancı"
    },

    {
        name: "Inakı",
        surname: "Pena",
        age: "28",
        kadroDurumu: "Yedek",
        formaNumarasi: "12",
        millet: "Yabancı"
    },


    {
        name: "Emre",
        surname: "Kilinc",
        age: "28",
        kadroDurumu: "Yedek",
        formaNumarasi: "13",

        millet: "Türk"
    },
    {
        name: "Mustafa",
        surname: "Muhammed",
        age: "28",
        kadroDurumu: "Yedek",
        formaNumarasi: "14",
        millet: "Yabancı"
    },
    {
        name: "Halil",
        surname: "Dervisoglu",
        age: "28",
        kadroDurumu: "Yedek",
        formaNumarasi: "15",
        millet: "Türk"
    },
    {
        name: "Arda",
        surname: "Turan",
        age: "28",
        kadroDurumu: "Yedek",
        formaNumarasi: "16",

        millet: "Türk"
    },
    {

        name: "Ryan",
        surname: "Babel",
        age: "28",
        kadroDurumu: "Yedek",
        formaNumarasi: "17",
        millet: "Yabancı"
    },
    {

        name: "Barış Alper",
        surname: "Yilmaz",
        age: "28",
        kadroDurumu: "Yedek",

        formaNumarasi: "18",
        millet: "Türk"

    }
]

/*const yedekler = futbolcular.filter(item => item.kadroDurumu === "Yedek");
console.log(yedekler);
const ilk11 = futbolcular.filter(item => item.kadroDurumu === "İlk 11");
console.log(ilk11); */
console.log(futbolcular);
let = degisiklikSayisi = 0;
let kadrodaYabanciSiniri = 14;
let sahadaYabanciSiniri = 8;







function oyuncuDegisikligi(girenOyuncuFN, cikanOyuncuFN) {


    let girenOyuncu = futbolcular.find(futbolcu => futbolcu.formaNumarasi == girenOyuncuFN);

    let cikanOyuncu = futbolcular.find(futbolcu => futbolcu.formaNumarasi == cikanOyuncuFN);
    let girenIndex = futbolcular.indexOf(girenOyuncu);
    let cikanIndex = futbolcular.indexOf(cikanOyuncu);
    /*
    Aşağıdaki objectleri splice() metodu ile arraya göndererek de yapılabilir
    
        let futbolcuCikan = {
            name: cikanOyuncu.name,
            surname: cikanOyuncu.surname,
            age: cikanOyuncu.age,
            kadroDurumu: "Oyundan Cikan",
    
            formaNumarasi: cikanOyuncu.formaNumarasi,
            millet: cikanOyuncu.millet
        }
        let futbolcuGiren = {
            name: girenOyuncu.name,
            surname: girenOyuncu.surname,
            age: girenOyuncu.age,
            kadroDurumu: "Sonradan Giren",
            formaNumarasi: girenOyuncu.formaNumarasi,
            millet: girenOyuncu.millet
    
        }
    
    
    */
    if (degisiklikSayisi < 5) {
        if ((cikanOyuncu.kadroDurumu === "İlk 11" || cikanOyuncu.kadroDurumu === "Sonradan Giren") && girenOyuncu.kadroDurumu === "Yedek") {





            yabanciHesapla();







            if ((yabancilar.length < kadrodaYabanciSiniri) && (ilk11Yabancilari.length <= sahadaYabanciSiniri)) {

                if (yabanciHesapla() === 8 && girenOyuncu.millet === "Yabancı" && cikanOyuncu.millet == "Türk") {

                    console.log("Bu değişiklik yapılamaz.Sahada en fazla 8 yabancı olabilir.Şu anda sahada " + yabanciHesapla() + " yabancı var")
                }
                else {


                    console.log("Bu değişiklik yapılabilir")

                    //futbolcular.splice(girenIndex, 1, futbolcuGiren);
                    //futbolcular.splice(cikanIndex, 1, futbolcuCikan);
                    girenOyuncu.kadroDurumu = "Sonradan Giren"
                    cikanOyuncu.kadroDurumu = "Oyundan Cikan"
                    degisiklikSayisi = degisiklikSayisi + 1;

                    console.log(`GALATASARAY TAKIMININ ${degisiklikSayisi}.DEĞİŞİKLİĞİ`)
                    console.log(`${cikanOyuncu.name.toUpperCase() + " " + cikanOyuncu.surname.toUpperCase()} oyundan çıktı...Yerine ${girenOyuncu.name.toUpperCase() + " " + girenOyuncu.surname.toUpperCase()} oyuna girdi sahada ${yabanciHesapla()} yabancı oyuncu bulunuyor `)

                    let yabanciHakki = sahadaYabanciSiniri - yabanciHesapla();
                    degisiklikHakkı = 5 - degisiklikSayisi;

                    if (degisiklikHakkı == 0) {
                        console.log("UYARI!--Oyuncu Değişikliği Hakkınız Tükendi.Oyuncu Değişikliği Haklarınızı Tamamen Kullandınız")
                    }
                    else {
                        console.log(degisiklikHakkı + " adet değişiklik daha yapabilirsiniz")



                        if (degisiklikHakkı >= yabanciHakki) {
                            if (yabanciHakki === 0) {

                                console.log("Yabancı Oyuncu Hakkınız Kalmadı")
                            } else {


                                console.log(yabanciHakki + " yabancı oyuncuyu daha oyuna alma hakkınız var")
                            }


                        } else if (degisiklikHakkı < yabanciHakki) {
                            console.log(degisiklikHakkı + " yabancı oyuncuyu daha oyuna alma hakkınız var")

                        } else { console.log("error") }




                    }


                }


            } else {
                console.log(`Kadroda ${yabancilar.length} yabancı oyuncu yar.Kadrodaki yabancı sayısı ${kadrodaYabanciSiniri}'ten fazla olamaz!`);


            }











        }
        else if (cikanOyuncu.kadroDurumu === "Yedek" && (girenOyuncu.kadroDurumu === "İlk 11" || girenOyuncu.kadroDurumu === "Sonradan Giren")) {

            console.log("UYARI!-- HATALI DEĞİŞİLİKLİK !")
            console.log(`Oyuna alınmak istenen ${girenOyuncu.name.toUpperCase() + " " + girenOyuncu.surname.toUpperCase()} zaten oyunda  olduğu için değişiklik hatalı.Oyuna oyuncu almak için yedek kulubesindeki bir oyuncu numarası giriniz`);

            console.log(`Oyundan çıkartmak istediğiniz ${cikanOyuncu.name.toUpperCase() + " " + cikanOyuncu.surname.toLocaleUpperCase()} zaten yedekte olduğu için değişiklik hatalı.Oyuncu çıkartmak için sahadaki bir oyuncu numarası giriniz`);


        }
        else if (cikanOyuncu.kadroDurumu === "Yedek" && girenOyuncu.kadroDurumu === "Oyundan Cikan") {
            console.log("UYARI!-- HATALI DEĞİŞİLİKLİK !")

            console.log(`Oyundan çıkarılmak istenen ${cikanOyuncu.name.toUpperCase() + " " + cikanOyuncu.surname.toUpperCase()} zaten yedekte olduğu için ve oyuna alınmak istenen ${girenOyuncu.name.toUpperCase() + " " + girenOyuncu.surname.toUpperCase()} daha önce oyundan çıktığı için bu değişikliği yapamazsınız`);



        }







        else if (cikanOyuncu.kadroDurumu === "Yedek") {

            console.log("UYARI!-- HATALI DEĞİŞİLİKLİK !")

            console.log(`Oyundan çıkarılmak istenen ${cikanOyuncu.name.toUpperCase() + " " + cikanOyuncu.surname.toUpperCase()} zaten yedekte olduğu için bu değişikliği yapamazsınız.Oyuncu çıkartmak için sahadaki bir oyuncu numarası giriniz`);
        }
        else if (cikanOyuncu.kadroDurumu === "Oyundan Cikan") {
            console.log("UYARI!-- HATALI DEĞİŞİLİKLİK !")

            console.log(`Oyundan çıkarılmak istenen ${cikanOyuncu.name.toUpperCase() + " " + cikanOyuncu.surname.toUpperCase()} zaten oyundan çıkarıldığı için bu değişikliği yapamazsınız.Oyuncu çıkartmak için sahadaki bir oyuncu numarası giriniz`);




        }



        else if (girenOyuncu.kadroDurumu === "Oyundan Cikan") {

            console.log("UYARI!-- HATALI DEĞİŞİLİKLİK !")

            console.log(`Oyuna girmesini istediğiniz ${girenOyuncu.name.toUpperCase() + " " + girenOyuncu.surname.toUpperCase()} daha önce oyundan çıktığı için oyuna giremez!`)
        }

        else if (girenOyuncu.kadroDurumu === "İlk 11" || girenOyuncu.kadroDurumu === "Sonradan Giren") {
            console.log(`Oyuna alınmak istenen ${girenOyuncu.name.toUpperCase() + " " + girenOyuncu.surname.toUpperCase()} zaten oyunda  olduğu için değişiklik hatalı.Oyuna oyuncu almak için yedek kulubesindeki bir oyuncu numarası giriniz`)

        } else {
            console.log("error")
        }
    }

    else {

        console.log("UYARI!--Oyuncu Değişikliği Hakkınız Tükendi.Oyuncu Değişikliği Haklarınızı Tamamen Kullandınız")
    }
}
let yabancilar = futbolcular.filter(futbolcu => futbolcu.millet === "Yabancı");
let ilk11Yabancilari = yabancilar.filter(futbolcu => futbolcu.kadroDurumu === "İlk 11")


console.log(`Kadrodaki toplam Yabancı Sayısı = ${yabancilar.length}`)
console.log(`İlk 11'deki Yabancı Sayısı = ${ilk11Yabancilari.length}`)


function yabanciHesapla() {



    let sahadakiYabancilar = futbolcular.filter(futbolcu =>

        futbolcu.kadroDurumu === "İlk 11" && futbolcu.millet === "Yabancı" || (futbolcu.kadroDurumu === "Sonradan Giren" && futbolcu.millet === "Yabancı"))


    return sahadakiYabancilar.length;
}





oyuncuDegisikligi(18, 1)
oyuncuDegisikligi(16, 2)
oyuncuDegisikligi(15, 3)
oyuncuDegisikligi(13, 4)
oyuncuDegisikligi(12, 5)
oyuncuDegisikligi(17, 9)




















