export default interface Tecnologia {
    id: number
    nome: string
    descricao: string
    imagem: string
    destaque: boolean
}

// const t: Partial <Tecnologia> = {
//     id: 1,
//     nome: 'Angular',
//     descricao: 'Framework mantido pelo Google',
//     imagem: 'angular.png',
//     destaque: true
// }

// console.log(t)