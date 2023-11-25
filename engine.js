

//criacao de estados por meio de uma variavel
const state ={
    score:{
        playerScore: 0, //atribuindo valores dos elementos
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides:{
        player1:"player-cards",
        player1Box: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBox: document.querySelector("#computer-cards"),
    },
    actions:{
        button: document.querySelector("#next-duel"),
    },
};

//variaveis de ligacao com as acoes
const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
};

//banco de dados
//variaveis de caminho  de cartas
const pathImages = "cards/";

const cardData = [
    {
        id:0,
        name: "Abacaxi",
        type: "(Agua) " + " Poder(0/1)",
        img: `${pathImages}0-abacaxi-agua.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [ 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:1,
        name: "Beleleco",
        type: "(Terra) " + " Poder(0/0)",
        img: `${pathImages}0-cabra-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:2,
        name: "Tesouro",
        type: "(Metal) " + " Poder(0/0)",
        img: `${pathImages}0-tesouro-metal.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:3,
        name: "Abelhante",
        type: "(Ar) " + " Poder(1/1)",
        img: `${pathImages}1-abelha-ar.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:4,
        name: "Elemental",
        type: "(Fogo) " + " Poder(1/1)",
        img: `${pathImages}1-elementaldefogo-fogo.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:5,
        name: "Elfa Arqueira",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-elfaarqueira-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:6,
        name: "Espirito",
        type: "(Sombra) " + " Poder(1/1)",
        img: `${pathImages}1-espirito-sombra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:7,
        name: "Espirito de Zumbi",
        type: "(Sombra) " + " Poder(1/1)",
        img: `${pathImages}1-espiritozumbi-sombra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:8,
        name: "Fada Guerreira",
        type: "(Ar) " + " Poder(1/1)",
        img: `${pathImages}1-fadaguerreira-ar.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:9,
        name: "Gatiano",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-gato-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:10,
        name: "Felino da Noite",
        type: "(Sombra) " + " Poder(1/1)",
        img: `${pathImages}1-gatodanoite-sombra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:11,
        name: "Goblin Meio Orc",
        type: "(Fogo) " + " Poder(1/1)",
        img: `${pathImages}1-goblin-orc-fogo.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:12,
        name: "Goblin",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-goblin-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:13,
        name: "Goblin Kamikaze",
        type: "(Fogo) " + " Poder(1/1)",
        img: `${pathImages}1-goblinkamikaze-fogo.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:14,
        name: "Hipo",
        type: "(Agua) " + " Poder(1/1)",
        img: `${pathImages}1-hipo-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:15,
        name: "Fazendeiro",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-humano-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:16,
        name: "Passaro Guerreiro",
        type: "(Ar) " + " Poder(1/1)",
        img: `${pathImages}1-passaroguerreiro-ar.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:17,
        name: "Planta Carnivora",
        type: "(Agua) " + " Poder(1/1)",
        img: `${pathImages}1-plantacarnivora-agua.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:18,
        name: "Porco Guerreiro",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-porcoguerreiro-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:19,
        name: "Ratonildo",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-rato-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:20,
        name: "Servo Robo",
        type: "(Metal) " + " Poder(1/1)",
        img: `${pathImages}1-roboservo-metal.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:21,
        name: "Tucano Robo",
        type: "(Metal) " + " Poder(1/1)",
        img: `${pathImages}1-robotucano-metal.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:22,
        name: "Tritão Guerreiro",
        type: "(Agua) " + " Poder(1/1)",
        img: `${pathImages}1-tritaoguerrero-aguaa.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:23,
        name: "Verme Filhote",
        type: "(Terra) " + " Poder(1/1)",
        img: `${pathImages}1-vermefilhote-terra.jpeg`,
        WinOf: [],
        LoseOf: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:24,
        name: "Zumbi Abobora",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-aboborazumbi-terra.jpg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [ 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:25,
        name: "Teia de Aranha",
        type: "(Ar) " + " Poder(2/2)",
        img: `${pathImages}2-aranha-ar.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [ 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:26,
        name: "Aranha",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-aranha-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:27,
        name: "Caramelo",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-cachorroguerreiro-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:28,
        name: "Kraken",
        type: "(Agua) " + " Poder(2/2)",
        img: `${pathImages}2-craken-agua.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:29,
        name: "Dragão Arco-Iris",
        type: "(Agua) " + " Poder(2/2)",
        img: `${pathImages}2-dragaoarcoiris-agua.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:30,
        name: "Barbaro",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-guerreirobarbaro-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:31,
        name: "Lobo",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-lobo-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:32,
        name: "Porco Barbaro",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-porcobarbaro-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:33,
        name: "Urso Zumbi",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-ursozumbi-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:34,
        name: "Vampiro",
        type: "(Ar) " + " Poder(2/2)",
        img: `${pathImages}2-vampiro-ar.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:35,
        name: "Paladino Zumbi",
        type: "(Sombra) " + " Poder(2/2)",
        img: `${pathImages}2-zimbipaldino-sombra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:36,
        name: "Zumbi",
        type: "(Terra) " + " Poder(2/2)",
        img: `${pathImages}2-zumbi-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        LoseOf: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:37,
        name: "Beholder",
        type: "(Fogo) " + " Poder(3/3)",
        img: `${pathImages}3-beholder-fogo.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:38,
        name: "Besta",
        type: "(Terra) " + " Poder(3/3)",
        img: `${pathImages}3-besta-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:39,
        name: "Besta Javali",
        type: "(Terra) " + " Poder(3/3)",
        img: `${pathImages}3-bestajvali-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:40,
        name: "Dinossauro",
        type: "(Terra) " + " Poder(3/3)",
        img: `${pathImages}3-dinossuro-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:41,
        name: "Dragão Lagarto",
        type: "(Terra) " + " Poder(3/3)",
        img: `${pathImages}3-dragaolagrto-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:42,
        name: "Goblin Guerreiro",
        type: "(Fogo) " + " Poder(3/3)",
        img: `${pathImages}3-gobliguerreiro-fogo.jpg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:43,
        name: "Javali",
        type: "(Terra) " + " Poder(3/3)",
        img: `${pathImages}3-javali-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:44,
        name: "Verme Ancião",
        type: "(Terra) " + " Poder(3/3)",
        img: `${pathImages}3-vermeanciao-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
        LoseOf: [45, 46, 47, 48, 49, 50, 51, 52],
    },
    {
        id:45,
        name: "Anjo Guerreiro",
        type: "(Ar " + " Poder(4/4)",
        img: `${pathImages}4-anjoguerreiro-ar.jpg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        LoseOf: [48, 49, 50, 51, 52],
    },
    {
        id:46,
        name: "Anjo Gato",
        type: "(Ar) " + " Poder(4/4)",
        img: `${pathImages}4-gatoanjo-ar.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        LoseOf: [48, 49, 50, 51, 52],
    },
    {
        id:47,
        name: "Rino",
        type: "(Terra) " + " Poder(4/4)",
        img: `${pathImages}4-rino-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
        LoseOf: [48, 49, 50, 51, 52],
    },
    {
        id:48,
        name: "Dragão Azul",
        type: "(Fogo) " + " Poder(6/6)",
        img: `${pathImages}6-dragaoazul-fogo.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        LoseOf: [ 50, 51, 52],
    },
    {
        id:49,
        name: "Verme Adulto",
        type: "(Terra) " + " Poder(6/6)",
        img: `${pathImages}6-vermedulto-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        LoseOf: [ 50, 51, 52],
    },
    {
        id:50,
        name: "Robo Destruidor",
        type: "(Metal) " + " Poder(Infi)",
        img: `${pathImages}infinity-robodestruidor-metal.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        LoseOf: [],
    },
    {
        id:51,
        name: "Slime",
        type: "(Terra) " + " Poder(Infi)",
        img: `${pathImages}infinity-slime-terra.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        LoseOf: [],
    },
    {
        id:52,
        name: "Robo Construtor",
        type: "(Metal) " + " Poder(Infi)",
        img: `${pathImages}infiniy-roboconstrutor-metal.jpeg`,
        WinOf: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        LoseOf: [],
    },
    
];

//funcao de radomizar as cartas
async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
};

//criando imagens de cartas dinamicamente
async function createCardImage(idCard, fieldSide){
    const cardImage = document.createElement("img");
    // com o creatElement cria um elemento HTML especificado ou um Unknow element se o nome do elemento dado nao for conhecido
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "itens/back-card.jpg");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    //sistema pra implementar as cartas no campo de uso
    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("click", () =>{
            setCardsField(cardImage.getAttribute("data-id"));
        });
        cardImage.addEventListener("mouseover", () =>{
            drawSelectCard(idCard);
        });
    }
    return cardImage;
};

//funcao que identifica as cartas no campo de batalha
async function drawCardsInfield(cardId, computerCardId){
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;
};

//funcao que esconde e mostra as informacoes de tipo
async function ShowHiddenCardFieldsImage(value){
    if(value == true) {
        state.fieldCards.player.style.display = "block";
        state.fieldCards.computer.style.display = "block";
    }
    if(value == false){
        state.fieldCards.player.style.display = "none";
        state.fieldCards.computer.style.display = "none";
    }
};

//funcao de esconder os detalhes da carta
async function hiddenCardsDetails(){
    state.cardSprites.avatar.src ="";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
};

//funcao de acao de botao do resultado
async function drawButton(text){
    state.actions.button.innerText = text;
    state.actions.button.style.display = "block";
};

//funcao que insere os resultados das partidas nas telas
async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
};

//funcao que determina a vitoria e derrota das partidas, e insere os dados na tela
async function checkDuelResults(playerCardId, computerCardId){
    let duelResults = "Draw";
    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(computerCardId)){
        duelResults = "Win";
        state.score.playerScore++;
    }
    if(playerCard.LoseOf.includes(computerCardId)){
        duelResults = "Lose";
        state.score.computerScore++;
    }
    // acao de audio
    //await playAudio(duelResults);

    return duelResults;
};

//funcao de remove e seleciona as cartas
async function removeAllCardsImages(){
    let {computerBox, player1Box}= state.playerSides;
    let imgElements = computerBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = player1Box.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
};

//inserindo as cartas no campo de batalha
async function drawCards(cardNumbers, fieldSide){
    for(let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    };
};

//funcao que insere as informacoes na table
async function drawSelectCard(index){
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Atribute : " + cardData[index].type;
};

//funcao de mostra o resultado e reinicia das partidas
async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "block";
    state.fieldCards.player.style.display ="none";
    state.fieldCards.computer.style.display = "none";

    init();
};

//criando a funcao de set de imagens onde vai ser chamado as acoes de outras funcoes externas
async function setCardsField(cardId) {
    //acao de remover as cartas
    await removeAllCardsImages();

    //acao de randomizar as cartas do bot
    let computerCardId = await getRandomCardId();

    //acao de esconder as cartas inimigas para que o jogador nao se possa ver
    await ShowHiddenCardFieldsImage(true);

    //escondendo os detalhes das cartas quando inicalizar o jogo novamente
    await hiddenCardsDetails();

    //inserindo as caartas na tela, tanto do computador quanto os de jogador
    await drawCardsInfield(cardId, computerCardId);

    //variavel de checar o resultado de cada paartida
    let duelResults = await checkDuelResults(cardId, computerCardId);

    //chamando acoes de calcular os pontos e botao de vitoria
    await updateScore();
    await drawButton(duelResults);
};

//funcao que inicia e execulta o progrma 
function init(){
    ShowHiddenCardFieldsImage(false);

    drawCards(7, playerSides.player1);
    drawCards(7, playerSides.computer);

    
};

init();