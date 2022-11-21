var list = ["Daniel", 31, true];

list.push(new Date("June 14, 1991"));
const libro = {
  title: "Las aventuras de Sherlock Holmes",
  author: "Sir Arthur Conan Doyle",
  fecha: "14 de octubre de 1892",
  url: "https://es.wikipedia.org/wiki/Las_aventuras_de_Sherlock_Holmes"
}
list.push(libro);

console.log(list);