async function caricaDati() {
    try {
        // 1. Recupera il file JSON
        const risposta = await fetch('dati.json');
        const dati = await risposta.json();

        const contenitore = document.getElementById('lista-eventi');

        // 2. Cicla attraverso l'array degli eventi
        dati.eventi.forEach(evento => {
            // 3. Crea il template HTML per ogni singolo elemento
            const card = `
                <div class="card">
                    <h3>${evento.titolo}</h3>
                    <p><strong>Data:</strong> ${evento.data}</p>
                    <p>${evento.descrizione}</p>
                    <span class="tag">${evento.categoria}</span>
                </div>
            `;
            // 4. Aggiungilo al contenitore
            contenitore.innerHTML += card;
        });
    } catch (errore) {
        console.error("Errore nel caricamento dei dati:", errore);
    }
}

// Avvia la funzione al caricamento della pagina
caricaDati();
