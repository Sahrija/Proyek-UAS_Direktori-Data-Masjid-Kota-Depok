const inpKecamatan = document.getElementById("kecamatan");
const inpKelurahan = document.getElementById("kelurahan");

let daftarKelurahan = {
    'beji': ['Beji', 'Beji Timur', 'Kemirimuka', 'Kukusan', 'Pondokcina', 'Tanahbaru'],
    'bojongsari': ['Bojongsari Lama', 'Bojongsaribaru', 'Curug', 'Durenmekar', 'Durenseribu', 'Pondok Petir', 'Serua'],
    'cilodong': ['Cilogong', 'Jatimulya', 'Kalibaru', 'Kalimulya', 'Sukamaju'],
    'cimanggis': ['Cisalak Pasar', 'Curug', 'Harjamukti', 'Mekarsari', 'Pasir Gunung Selatan', 'Tugu'],
    'cinere': ['Cinere', 'Gandul', 'Pangkalan Jati', 'Pangkalan Jati Baru'],
    'cipayung':['Bojong Pondok Terong','Cipayung','Cipayung Jaya','Pondok Jaya','Ratujaya'],
    'limo':['Grogol','Krukut', 'Limo','Meruyung'],
    'pancoran mas':['Depok', 'Depok Jaya', 'Mampang','Pancoran Mas','Rangkapan Jaya','Rangkapan Jaya Baru'],
    'sawangan':['Bedahan','Cinangka','Kedaung','Pasir Putih','Pengasinan','Sawangan Baru','Sawangan Lama'],
    'sukmajaya':['Abadijaya','Baktijaya','Cisalak','Mekarjaya','Sukmajaya','Titrajaya'],
    'tapos':['Cilangkap','Cimpaeun','Jatijajar','Leuwinaggung','Sukamaju Baru','Sukatani','Tapos'],
};

inpKecamatan.onchange = function () {
    if (inpKecamatan.value in daftarKelurahan) {
        let pilihanKelurahan = daftarKelurahan[inpKecamatan.value];
        let optionList = "<option value=''>Pilih satu dari (" + pilihanKelurahan.length + ") desa/kelurahan</option>";


        for (i in pilihanKelurahan) {


            optionList += "<option value='0'>" + pilihanKelurahan[i] + "</option>";
        }
        console.log(optionList);
        inpKelurahan.innerHTML = optionList;
        //inpKelurahan.innerHTML = "<option value='a'>b</option>"
    }
    else {
        inpKelurahan.innerHTML = "<option value=''>Pilih kecamatan terlebih dahulu</option>"
    }
}


var formSubmitting = true;
var setFormSubmitting = function() { formSubmitting = true; };

var namaMesjid = document.getElementById("nama-mesjid").value;

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {
        if (formSubmitting) {
            return undefined;
        }

        var confirmationMessage = 'Ups, sepertinya anda telah mengedit sesuatu. '
                                + 'Data yang anda masukkan tidak akan tersimpan, apakah anda yakin ingin muat ulang.';
        
        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    });
};



// add color to status tag
console.log("aaaaa");