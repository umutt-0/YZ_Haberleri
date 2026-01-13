const newsData = [
    { 
        id: 1,
        title: "CES 2026: Tam Otonom Ev Robotları Tanıtıldı", 
        category: "Donanım", 
        summary: "Las Vegas'ta devam eden CES 2026'da, çok modlu yapay zeka ile çalışan yeni nesil 'ev yardımcıları' damga vurdu.", 
        full: `
            <p>CES 2026 fuarının en çok dikkat çeken duyurusu, birden fazla teknoloji devinin iş birliğiyle geliştirilen 'Universal Home OS' oldu. Bu sistemle donatılan robotlar, artık sadece basit temizlik yapmıyor; mutfakta yemek hazırlayabiliyor ve karmaşık ev bakım işlerini yürütebiliyor.</p>
            <p>Yeni nesil robotların en büyük özelliği, veriyi buluta göndermeden kendi işlemcileri üzerinde analiz etmesi. Bu durum, kullanıcıların gizlilik endişelerini büyük ölçüde ortadan kaldırıyor.</p>
        `
    },
    { 
        id: 2,
        title: "OpenAI 'O2' Modelini Yayınladı: Kodlama Tarih mi Oluyor?", 
        category: "Yazılım", 
        summary: "Yazılım geliştirme sürecini tamamen otonom hale getiren O2 modeli, dünya genelinde yazılımcı rollerini değiştiriyor.", 
        full: `
            <p>OpenAI'ın bugün duyurduğu O2 modeli, karmaşık yazılım mimarilerini tek bir komutla ayağa kaldırabiliyor. Hata ayıklama süreçlerini saniyelere indiren model, kendi kodundaki açıkları bulup yamayabiliyor.</p>
            <p>Sektör temsilcileri, bu gelişmenin yazılım dünyasında 'üretkenlik patlaması' yaratacağını öngörüyor.</p>
        `
    },
    { 
        id: 3,
        title: "AI Destekli Giyilebilir Cihazlarla Kalp Krizi Tahmini", 
        category: "Sağlık", 
        summary: "Mayo Clinic ve teknoloji devlerinin ortak çalışmasıyla, kalp krizi riskini 24 saat önceden haber veren algoritma onaylandı.", 
        full: `
            <p>Yeni biyometrik sensorlar, kan akışındaki mikroskobik değişimleri takip ederek olası krizleri semptomlar başlamadan teşhis ediyor. Bu sistem, şimdiden yüzlerce hayat kurtarmış durumda.</p>
        `
    }
];

function displayNews(data) {
    const list = document.getElementById('news-list');
    list.innerHTML = '';
    
    data.forEach(item => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.dataset.category = item.category;
        card.innerHTML = `
            <span class="category-tag">${item.category}</span>
            <h2>${item.title}</h2>
            <div class="summary-text">${item.summary}</div>
            <div id="full-${item.id}" class="full-content">${item.full}</div>
            <button class="read-more-btn" onclick="toggleNews(${item.id}, this)">Detaylı Analizi Oku</button>
        `;
        list.appendChild(card);
    });
}

function toggleNews(id, btn) {
    const content = document.getElementById(`full-${id}`);
    const isHidden = content.style.display !== 'block';
    content.style.display = isHidden ? 'block' : 'none';
    btn.innerText = isHidden ? 'İçeriği Kapat' : 'Detaylı Analizi Oku';
}

// Filtreleme İşlemi
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Aktif buton görselini güncelle
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.news-card');

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Sayfa yüklendiğinde haberleri getir
window.onload = () => displayNews(newsData);
