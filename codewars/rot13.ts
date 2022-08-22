function rot13(str: string): string {
  // J'utilise split pour transformer la string en tableau afin de pouvoir le pacourrir
  return str
    .split("")
    .map((element) => {
      // Si ce n'est pas une lettre je retourne l'élément sans modification
      if (!/[a-zA-Z]/.test(element)) return element;

      // Je transforme la lettre en majuscule, je récupère son char code et j'ajoute 13 pour le décalage
      const charCodeWithShift = element.toUpperCase().charCodeAt(0) + 13;

      // Si le nouveau char code est plus grand que 90, je soustrais 26 afin
      // d'avoir le bon char code. 90 correspond au char code de la lettre majuscule Z
      const newCharCode =
        charCodeWithShift > 90 ? charCodeWithShift - 26 : charCodeWithShift;

      // J'utilise String.fromCharCode pour avoir la nouvelle lettre
      return String.fromCharCode(newCharCode);
    })
    .join(""); // J'utilise join pour transformer le tableau en string
}
