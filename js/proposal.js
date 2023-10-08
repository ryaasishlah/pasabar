document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul-proposal");
        const isiElement = document.getElementById("isi-proposal");



        // Populate HTML elements with user data
        judulElement.textContent = userData.Judul;
        isiElement.textContent = userData.Isi;


    } catch (error) {
        console.error('Error:', error);
    }
});