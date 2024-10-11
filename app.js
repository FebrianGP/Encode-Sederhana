
function encodeToJson() {
    const name = document.getElementById('nama').value;
    const age = document.getElementById('umur').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    const kota = document.getElementById('kota').value;
    const negara = document.getElementById('negara').value;

    const userData = {
        name: name,
        age: parseInt(age, 10),
        email: email,
        alamat: alamat,
        kota: kota,
        negara: negara

    };

    // Encode 
    const jsonString = JSON.stringify(userData, null,4); 
    document.getElementById('jsonOutput').textContent = jsonString;
}


// tombol encode
document.getElementById('encodeButton').addEventListener('click', encodeToJson);


