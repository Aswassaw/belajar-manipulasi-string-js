// Membuat fungsi selector agar penggunaan DOM lebih mudah
function $(el) {
    if (el.slice(0, 1) === "#") {
        return document.getElementById(el.slice(1));
    } else {
        return document.querySelectorAll(el);
    }
}

// Container kedua / index 1
$('.container')[1].addEventListener('click', function (e) {
    // Jika tombol submit apapun ditekan
    if (e.target.classList.contains('submit')) {
        // Fungsi length
        if (e.target.parentElement.classList.contains('fungsi_length')) {
            $('#hasil_form_length').value = $('#form_length').value.length;
        }
        // Fungsi slice
        else if (e.target.parentElement.classList.contains('fungsi_slice')) {
            const text_slice = $('#form_slice').value;
            const index_awal = $('#index_slice1').value;
            const index_akhir = $('#index_slice2').value;
            const hasil_sebelumnya = $('#hasil_form_slice').value;
            let hasil;

            // Jika index akhir kosong
            index_akhir === '' ? hasil = text_slice.slice(index_awal) : hasil = text_slice.slice(index_awal, index_akhir);

            // Jika hasil isinya kosong, isikan hasil dengan 'Tidak Diketahui'
            if (hasil === '') {
                hasil = 'Tidak Diketahui'
            }

            let hasil_akhir = setTidakDiketahui(hasil_sebelumnya, hasil);

            $('#hasil_form_slice').value = hasil_akhir;
        }
        // Fungsi toUpperCase dan toLowerCase
        else if (e.target.parentElement.classList.contains('fungsi_upperlower')) {
            const text_upperlower = $('#form_upperlower').value;
            const hasil_sebelumnya = $('#hasil_upperlower').value;
            let hasil;

            // Jika yang ditekan tombol upper atau lower
            e.target.classList.contains('toUpperCase') ? hasil = text_upperlower.toUpperCase() : hasil = text_upperlower.toLowerCase();

            // Jika hasil isinya kosong, isikan hasil dengan 'Tidak Diketahui'
            if (hasil === '') {
                hasil = 'Tidak Diketahui'
            }

            let hasil_akhir = setTidakDiketahui(hasil_sebelumnya, hasil);

            $('#hasil_upperlower').value = hasil_akhir;
        }
        // Fungsi includes
        else if (e.target.parentElement.classList.contains('fungsi_includes')) {
            const text_includes = $('#form_includes').value;
            const cari_includes = $('#cari_includes').value;
            const index_includes = $('#index_includes').value;
            let hasil;

            // Mengisi hasil
            hasil = text_includes.includes(cari_includes, index_includes);

            $('#hasil_includes').value = hasil;
        }
        // Fungsi padStart dan padEnd
        else if (e.target.parentElement.classList.contains('fungsi_padstartend')) {
            const text_padstartend = $('#form_padstartend').value;
            const pengganti_padstartend = $('#ganti_padstartend').value;
            const jumlah_padstartend = $('#jumlah_padstartend').value;
            const hasil_sebelumnya = $('#hasil_padstartend').value;
            let hasil;

            // Jika yang ditekan tombol upper atau lower
            if (e.target.classList.contains('padStart')) {
                // Memotong text sejumlah jumlah_padtartend
                const text_padstartend_akhir = text_padstartend.slice(-jumlah_padstartend);
                hasil = text_padstartend_akhir.padStart(text_padstartend.length, pengganti_padstartend);
            } else {
                // Memotong text sejumlah jumlah_padtartend
                const text_padstartend_akhir = text_padstartend.slice(0, jumlah_padstartend);
                hasil = text_padstartend_akhir.padEnd(text_padstartend.length, pengganti_padstartend)
            }

            // Jika hasil isinya kosong, isikan hasil dengan 'Tidak Diketahui'
            if (hasil === '') {
                hasil = 'Tidak Diketahui'
            }

            let hasil_akhir = setTidakDiketahui(hasil_sebelumnya, hasil);

            // Jika text_padstartend kosong
            $('#hasil_padstartend').value = hasil_akhir;
        }
        // Fungsi startsWith dan endsWith
        else if (e.target.parentElement.classList.contains('fungsi_startendwith')) {
            const text_startendwith = $('#form_startendwith').value;
            const cari_startendwith = $('#cari_startendwith').value;
            const index_startendwith = $('#index_startendwith').value;
            let hasil;

            // Jika yang ditekan tombol start atau end
            if (e.target.classList.contains('startsWith')) {
                hasil = text_startendwith.startsWith(cari_startendwith, index_startendwith);
            } else {
                index_startendwith === '' ? hasil = text_startendwith.endsWith(cari_startendwith) : hasil = text_startendwith.endsWith(cari_startendwith, index_startendwith);
            }

            $('#hasil_startendwith').value = hasil;
        }
        // Fungsi repeat
        else if (e.target.parentElement.classList.contains('fungsi_repeat')) {
            const text_repeat = $('#form_repeat').value;
            const jumlah_repeat = $('#jumlah_repeat').value;
            const hasil_sebelumnya = $('#hasil_repeat').value;
            let hasil;

            hasil = text_repeat.repeat(jumlah_repeat);

            // Jika hasil isinya kosong, isikan hasil dengan 'Tidak Diketahui'
            if (hasil === '') {
                hasil = 'Tidak Diketahui'
            }

            let hasil_akhir = setTidakDiketahui(hasil_sebelumnya, hasil);

            // Jika text_repeat kosong
            $('#hasil_repeat').value = hasil_akhir;
        }
    }

    // Jika tombol penjelasan apapun ditekan
    else if (e.target.classList.contains('penjelasan')) {
        if (e.target.parentElement.classList.contains('fungsi_length')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: length</h4>', penjelasan_all.p_length);
        } else if (e.target.parentElement.classList.contains('fungsi_slice')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: slice()</h4>', penjelasan_all.p_slice);
        } else if (e.target.parentElement.classList.contains('fungsi_upperlower')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: toUpperCase() dan toLowerCase()</h4>', penjelasan_all.p_upperlower);
        } else if (e.target.parentElement.classList.contains('fungsi_includes')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: includes()</h4>', penjelasan_all.p_includes);
        } else if (e.target.parentElement.classList.contains('fungsi_padstartend')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: padStart() dan padEnd()</h4>', penjelasan_all.p_padstartend);
        } else if (e.target.parentElement.classList.contains('fungsi_startendwith')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: startsWith() dan endsWith()</h4>', penjelasan_all.p_startendwith);
        } else if (e.target.parentElement.classList.contains('fungsi_repeat')) {
            setModalPenjelasan('<h4>Penjelasan Fungsi: repeat()</h4>', penjelasan_all.p_repeat);
        }
    }
})

// Fungsi untuk mengubah isi dari modal_penjelasan
function setModalPenjelasan(isi_title, isi_body) {
    $('#modal_title').innerHTML = isi_title;
    $('#modal_body').innerHTML = isi_body;
}

// Fungsi untuk menambah jumlah angka setelah 'Tidak Diketahui'
function setTidakDiketahui(hasil_sebelumnya, hasil) {
    let hasil_akhir;
    // Jika hasil_sebelumnya adalah 'Tidak Diketahui
    if (hasil_sebelumnya === 'Tidak Diketahui') {
        hasil_akhir = `Tidak Diketahui x2`;
    } else if (hasil_sebelumnya.length > 16 && hasil === 'Tidak Diketahui') {
        hasil_akhir = `Tidak Diketahui x${parseInt(hasil_sebelumnya.slice(17)) + 1}`;
    } else {
        hasil_akhir = hasil;
    }
    // Kembalikan hasil_akhir
    return hasil_akhir;
}

// Semua penjelasan
const penjelasan_all = {
    // Penjelasan length
    p_length:
        `This property returns the number of code units in the string. UTF-16, the string format used by JavaScript, uses a single 16-bit code unit to represent the most common characters, but needs to use two code units for less commonly-used characters, so it's possible for the value returned by length to not match the actual number of characters in the string.
    <br><br>
    ECMASCript 2016 (ed. 7) established a maximum length of 2^53 - 1 elements. Previously, no maximum length was specified.
    <br><br>
    For an empty string, length is 0.
    <br><br>
    The static property String.length returns the value 1.
    <br><br>
    Example:
    
    <div class="card card-body bg-dark mt-2" style="color: white;">
        var x = 'Mozilla';
        <br>
        var empty = '';
        <br><br>
        console.log('Mozilla is ' + x.length + ' code units long');
        <br>
        /* "Mozilla is 7 code units long" */
        <br><br>
        console.log('The empty string has a length of ' + empty.length);
        <br>
        /* "The empty string has a length of 0" */            
    </div>`,
    // Penjelasan slice
    p_slice:
        `slice() extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string.
    <br><br>
    slice() extracts up to but not including endIndex. str.slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).
    <br><br>
    As an example, str.slice(2, -1) extracts the third character through the second to last character in the string.
    <br><br>
    Parameters:
    
    <div class="card card-body bg-dark mt-2" style="color: white;">
        1. beginIndex: The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.
        <br>
        2. endIndex: Optional. The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).
    </div>
    <br>
    Example:
    
    <div class="card card-body bg-dark mt-2" style="color: white;">
        var str1 = 'The morning is upon us.', // the length of str1 is 23.
            <br>
            str2 = str1.slice(1, 8),
            <br>
            str3 = str1.slice(4, -2),
            <br>
            str4 = str1.slice(12),
            <br>
            str5 = str1.slice(30);
            <br>
        console.log(str2); // OUTPUT: he morn
        <br>
        console.log(str3); // OUTPUT: morning is upon u
        <br>
        console.log(str4); // OUTPUT: is upon us.
        <br>
        console.log(str5); // OUTPUT: ""
    </div>`,
    // Penjelasan upperlower
    p_upperlower:
        `<p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#toUpperCase">
            toUpperCase
        </button>
    </p>
    <div class="collapse" id="toUpperCase">
        <div class="card card-body mb-3">
            The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.
            <br><br>
            You cannot call this method on null or undefined (via Function.prototype.call, for example) , if you do, a TypeError will be thrown.
            <br><br>
            Example:
            
            <div class="card card-body bg-dark mt-2" style="color: white;">
                console.log('alphabet'.toUpperCase()); // 'ALPHABET'
            </div>
        </div>
    </div>

    <p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#toLowerCase">
            toLowerCase
        </button>
    </p>
    <div class="collapse" id="toLowerCase">
        <div class="card card-body">
            The toLowerCase() method returns the value of the string converted to lower case. toLowerCase() does not affect the value of the string str itself.
            <br><br>
            Example:
            
            <div class="card card-body bg-dark mt-2" style="color: white;">
                console.log('ALPHABET'.toLowerCase()); // 'alphabet'
            </div>
        </div>
    </div>`,
    // Penjelasan includes
    p_includes:
        `This method lets you determine whether or not a string includes another string.
    <br><br>
    Parameters:
    
    <div class="card card-body bg-dark mt-2" style="color: white;">
        1. searchString: A string to be searched for within this string.
        <br>
        2. position (Optional): The position within the string at which to begin searching for searchString. (defaults to 0).
    </div>
    <br>
    Example:
    
    <div class="card card-body bg-dark mt-2" style="color: white;">
    var str = 'To be, or not to be, that is the question.';
    <br>
        console.log(str.includes('To be'));       // true
        <br>
        console.log(str.includes('question'));    // true
        <br>
        console.log(str.includes('nonexistent')); // false
        <br>
        console.log(str.includes('To be', 1));    // false
        <br>
        console.log(str.includes('TO BE'));       // false
    </div>`,
    // Penjelasan padstartend
    p_padstartend:
        `<p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#padStart">
            padStart
        </button>
    </p>
    <div class="collapse" id="padStart">
        <div class="card card-body mb-3">
            The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start (left) of the current string.
            <br><br>
            Parameters:

            <div class="card card-body bg-dark mt-2" style="color: white;">
                1. targetLength: The length of the resulting string once the current string has been padded. If the value is less than the current string's length, the current string is returned as is.
                <br>
                2. padString (Optional): The string to pad the current string with. If this padding string is too long to stay within the targetLength, it will be truncated from the right. The default value is " " (U+0020 'SPACE').
            </div>
            <br>
            Example:
            
            <div class="card card-body bg-dark mt-2" style="color: white;">
                'abc'.padStart(10);         // "       abc"
                <br>
                'abc'.padStart(10, "foo");  // "foofoofabc"
                <br>
                'abc'.padStart(6,"123465"); // "123abc"
                <br>
                'abc'.padStart(8, "0");     // "00000abc"
                <br>
                'abc'.padStart(1);          // "abc"    
            </div>
        </div>
    </div>

    <p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#padEnd">
            padEnd
        </button>
    </p>
    <div class="collapse" id="padEnd">
        <div class="card card-body mb-3">
            The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
            <br><br>
            Parameters:

            <div class="card card-body bg-dark mt-2" style="color: white;">
                1. targetLength: The length of the resulting string once the current string has been padded. If the value is lower than the current string's length, the current string will be returned as is.
                <br>
                2. padString (Optional): The string to pad the current string with. If this string is too long to stay within the target length, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020).
            </div>
            <br>
            Example:
            
            <div class="card card-body bg-dark mt-2" style="color: white;">
                'abc'.padEnd(10);          // "abc       "
                <br>
                'abc'.padEnd(10, "foo");   // "abcfoofoof"
                <br>
                'abc'.padEnd(6, "123456"); // "abc123"
                <br>
                'abc'.padEnd(1);           // "abc"        
            </div>
        </div>
    </div>`,
    // Penjelasan startendwith
    p_startendwith:
        `<p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#startsWith">
            startsWith
        </button>
    </p>
    <div class="collapse" id="startsWith">
        <div class="card card-body mb-3">
            This method lets you determine whether or not a string begins with another string. This method is case-sensitive.
            <br><br>
            Parameters:
    
            <div class="card card-body bg-dark mt-2" style="color: white;">
                1. searchString: The characters to be searched for at the start of this string.
                <br>
                2. position (Optional): The position in this string at which to begin searching for searchString; defaults to 0.
            </div>
            <br>
            Example:
            
            <div class="card card-body bg-dark mt-2" style="color: white;">
                // startswith
                <br>
                var str = 'To be, or not to be, that is the question.';
                <br><br>
                console.log(str.startsWith('To be'));         // true
                <br>
                console.log(str.startsWith('not to be'));     // false
                <br>
                console.log(str.startsWith('not to be', 10)); // true
            </div>
        </div>
    </div>
    
    <p>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#endsWith">
            endsWith
        </button>
    </p>
    <div class="collapse" id="endsWith">
        <div class="card card-body mb-3">
            This method lets you determine whether or not a string ends with another string. This method is case-sensitive.
            <br><br>
            Parameters:
    
            <div class="card card-body bg-dark mt-2" style="color: white;">
                1. searchString: The characters to be searched for at the end of this string.
                <br>
                2. length: Optional. If provided it is used as the length of str. If omitted, the default value is the length of the string.
            </div>
            <br>
            Example:
            
            <div class="card card-body bg-dark mt-2" style="color: white;">
                var str = 'To be, or not to be, that is the question.';
                <br><br>
                console.log(str.endsWith('question.')); // true
                <br>
                console.log(str.endsWith('to be'));     // false
                <br>
                console.log(str.endsWith('to be', 19)); // true    
            </div>
        </div>
    </div>`,
    p_repeat:
        `The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    <br><br>
    Parameters:

    <div class="card card-body bg-dark mt-2" style="color: white;">
        1. count: An integer between 0 and +∞: [0, +∞), indicating the number of times to repeat the string in the newly-created string that is to be returned.
    </div>
    <br>
    Example:
    
    <div class="card card-body bg-dark mt-2" style="color: white;">
        'abc'.repeat(-1);   // RangeError
        <br>
        'abc'.repeat(0);    // ''
        <br>
        'abc'.repeat(1);    // 'abc'
        <br>
        'abc'.repeat(2);    // 'abcabc'
        <br>
        'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
        <br>
        'abc'.repeat(1/0);  // RangeError
        <br><br>
        ({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
        <br>
        // 'abcabc' (repeat() is a generic method)
    <div>`
}

// Fungsi untuk mode gelap dan mode terang
let tema_mode = $('#tema-mode');

// Jika pada local storage telah terdapat sebuah item dengan nama tema yang isinya adalah dark
if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.toggle('dark');
    tema_mode.setAttribute('checked', 'checked');
    tema_mode.nextElementSibling.innerText = "Dark";
    // Tooggle untuk menambahkan class bernama bg-dark pada elemen dengan class card-content
    $('.card-content').forEach(index => index.classList.toggle('card-dark'));
}

// Ketika terdapat perubahan pada tema-mode, maka jalankan fungsi setDarkMode
tema_mode.addEventListener('change', setDarkMode);

// Fungsi untuk darkmode
function setDarkMode() {
    // Jika pada local storage telah terdapat sebuah item dengan nama tema yang isinya adalah dark
    if (localStorage.getItem('tema') === 'dark') {
        // Hapus item dengan nama tema
        localStorage.removeItem('tema');
        tema_mode.nextElementSibling.innerText = "Light";
    }

    // Jika tidak ada
    else {
        // Tambahkan item bernama tema dengan isi dark
        localStorage.setItem('tema', 'dark');
        tema_mode.nextElementSibling.innerText = "Dark";
    }
    // Toggle untuk menambahkan class bernama dark pada body
    document.body.classList.toggle('dark');
    // Tooggle untuk menambahkan class bernama bg-dark pada elemen dengan class card-content
    $('.card-content').forEach(index => index.classList.toggle('card-dark'));
}
