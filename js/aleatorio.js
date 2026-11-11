
const nomes = [ Carol, Natali, Eliza, Apollo];
export function aleatorio (lista){ 
   const posicao = Math.floor ( Math.random ()* lista.length);
   return lista[posicao];
}