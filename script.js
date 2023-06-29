const students = [
  { name: "João", n1: 5, n2: 7 },
  { name: "Leticia", n1: 9, n2: 10 },
  { name: "Diogo", n1: 5, n2: 4 },
  { name: "Julia", n1: 8, n2: 7 },
]
function average(student) {
  const average = ((student.n1 + student.n2) / 2).toFixed(1)
  const approved = average >= 7
  if (approved) {
    alert(`A média do(a) aluno(a) ${student.name} é ${average}
  Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é ${average}
  Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}
for (let student of students) {
  average(student)
}
