document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/fahad.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-fahad");
      const kelasElement = document.getElementById("kelas-fahad");
      const npmElement = document.getElementById("npm-fahad");
      const kontakElement = document.getElementById("kontak-fahad");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
  });

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/ryaas.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-ryaas");
      const kelasElement = document.getElementById("kelas-ryaas");
      const npmElement = document.getElementById("npm-ryaas");
      const kontakElement = document.getElementById("kontak-ryaas");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
});


    