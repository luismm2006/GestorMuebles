export function getFavoritos() {
  const fav = localStorage.getItem("favoritos");
  return fav ? JSON.parse(fav) : [];
}

export function addFavorito(id) {
  const favoritos = getFavoritos();
  const idStr = id.toString();
  if (!favoritos.includes(idStr)) {
    favoritos.push(idStr);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

export function removeFavorito(id) {
  const idStr = id.toString();
  const favoritos = getFavoritos().filter(favId => favId !== idStr);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

export function isFavorito(id) {
  return getFavoritos().includes(id.toString());
}
