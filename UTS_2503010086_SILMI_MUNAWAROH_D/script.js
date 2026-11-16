function searchAlbum_silmi() {
    let input = document.getElementById('searchAlbum_silmi').value.toLowerCase();
    let cards = document.querySelectorAll('.album-card_silmi');
    let notFoundMsg = document.getElementById('notFoundAlbum_silmi');
    let jumlahDitemukan = 0;

    cards.forEach(card => {
        let title = card.querySelector('.album-title_silmi').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "flex"; 
            jumlahDitemukan++; 
        } else {
            card.style.display = "none"; 
        }
    });

    if (jumlahDitemukan === 0) {
        notFoundMsg.style.display = "block";
    } else {
        notFoundMsg.style.display = "none";
    }
}

function searchPlaylist_silmi() {
    let input = document.getElementById('searchPlaylist_silmi').value.toLowerCase();
    let cards = document.querySelectorAll('.playlist-card_silmi');
    let notFoundMsg = document.getElementById('notFoundPlaylist_silmi');
    let jumlahDitemukan = 0;

    cards.forEach(card => {
        let title = card.querySelector('.playlist-title_silmi').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "flex"; 
            jumlahDitemukan++;
        } else {
            card.style.display = "none"; 
        }
    });

    if (jumlahDitemukan === 0) {
        notFoundMsg.style.display = "block";
    } else {
        notFoundMsg.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-silmi");
    if (form) {
        form.addEventListener("submit", function(event) {
            alert("Yeay! Pesan berhasil dikirim ke email Silmi. Terima kasih sudah mampir ke MOA Zone!");
        });
    }
});

window.onscroll = function() {
    let btn = document.getElementById("backToTop_silmi");
    if (!btn) {
        btn = document.createElement("button");
        btn.id = "backToTop_silmi";
        btn.innerHTML = "⬆";
        btn.style.cssText = "position: fixed; bottom: 20px; right: 20px; background: #111111; color: #ffffff; border: none; padding: 10px 14px; border-radius: 50%; font-size: 16px; cursor: pointer; display: none; z-index: 999; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.3);";
        document.body.appendChild(btn);
        btn.onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
    }
    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};