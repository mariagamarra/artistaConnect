// Dados de exemplo
const artists = [];
const artworks = [];
const events = [];

// Função para criar um artista
function createArtist(name, bio) {
  const artist = { id: artists.length + 1, name, bio };
  artists.push(artist);
  return artist;
}

// Função para criar uma obra de arte
function createArtwork(title, artistId, medium) {
  const artwork = { id: artworks.length + 1, title, artistId, medium };
  artworks.push(artwork);
  return artwork;
}

// Função para criar um evento
function createEvent(name, date, location) {
  const event = { id: events.length + 1, name, date, location };
  events.push(event);
  return event;
}

// Função para exibir informações de um artista na lista
function displayArtists() {
  const artistsList = document.getElementById("artistsList");

  artists.forEach(artist => {
    const listItem = document.createElement("li");
    listItem.textContent = artist.name;
    listItem.addEventListener("click", () => displayArtistInfo(artist.id));
    artistsList.appendChild(listItem);
  });
}

// Função para exibir informações de uma obra de arte na lista
function displayArtworks() {
  const artworksList = document.getElementById("artworksList");

  artworks.forEach(artwork => {
    const listItem = document.createElement("li");
    listItem.textContent = artwork.title;
    artworksList.appendChild(listItem);
  });
}

// Função para exibir informações de um evento na lista
function displayEvents() {
  const eventsList = document.getElementById("eventsList");

  events.forEach(event => {
    const listItem = document.createElement("li");
    listItem.textContent = `${event.name} - ${event.date}`;
    eventsList.appendChild(listItem);
  });
}

// Função para exibir informações detalhadas de um artista
function displayArtistInfo(artistId) {
  const selectedArtist = artists.find(artist => artist.id === artistId);
  if (selectedArtist) {
    // Exibir informações do artista em um modal ou outra seção da página
    console.log("Nome do Artista:", selectedArtist.name);
    console.log("Biografia:", selectedArtist.bio);
  }
}

// Chamada das funções para exibir informações nas listas
displayArtists();
displayArtworks();
displayEvents();
     

