// Enoncé:
// On vous donne un tableau de string et un entier k. Votre tâche consiste à renvoyer
// la première chaîne la plus longue composée de k chaînes consécutives prises dans le tableau.

// arr c'est un tableau de string et k
// correspond au nombre d'élément à concaténer
function longestConsec(arr: string[], k: number) {
  // Si le paramètre k est plus petit ou plus grand
  // que la taille du tableau je retourne directement
  // une string vide
  if (k < 0 || k > arr.length) return "";

  // J'utilise reduce, ça me permet de parcourir
  // le tableau et de retourner directement la bonne
  // valeur au format string
  return arr.reduce((acc, _, i, arr) => {
    // J'utilise slice sur le tableau afin de récupérer
    // les éléments à concaténer
    // J'utilise join pour transformer les éléments du
    // tableau en une string afin de comparer sa taille
    // à la taille de la string précédemment retournée
    // Je retourne la string avec la taille la plus grande
    return acc.length < arr.slice(i, k + i).join("").length
      ? arr.slice(i, k + i).join("")
      : acc;
  }, "");
}
