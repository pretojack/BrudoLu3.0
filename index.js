const calcularDate = () => {
  // Usa o formato de data ISO para garantir compatibilidade
  let start = new Date('2023-11-27');
  let end = new Date();

  // Verifica se as datas são válidas
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return 'Data inválida';
  }

  let diff = Math.abs(end - start);
  let timeDay = 1000 * 60 * 60 * 24; // Milissegundos em um dia
  let diffDay = Math.ceil(diff / timeDay) - 1;

  return diffDay;
}

let horas1 = document.querySelector("#horas");
const diffDay = calcularDate();

// Verifica se a diferença em dias é um número
if (!isNaN(diffDay)) {
  horas1.innerHTML = `Já fazem <span>${diffDay}</span> dias que a gente namora <i class="fas fa-heart c"></i>`;
} else {
  horas1.innerHTML = `Erro ao calcular a data.`;
}
horas1.id = 'horas1';
