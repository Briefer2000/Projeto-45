var background
var zombie
var plant
var backgroundmusic






function preload(){
 Background = loadImage("./Assets/Player's House.png")
 BackgroundMusic = loadSound("./Assets/Theme.mp3")
 Zumbi1 = loadImage("./Assets/Zumbi1.png")
 Zumbi2 = loadImage("./Assets/Zumbi2.png")
 Zumbi3 = loadImage("./Assets/Zumbi3.png")
 Zumbi4 = loadImage("./Assets/Zumbi4.png")
 Zumbi5 = loadImage("./Assets/Zumbi5.png")
 Zumbi6 = loadImage("./Assets/Zumbi6.png")
 PlantaGelo = loadImage("./Assets/PlantaGelo.png")
 PlantaDragão = loadImage("./Assets/PlantaDragão.png")
 Girassol = loadImage("./Assets/Girassol.png")
 PlantaToxica = loadImage("./Assets/PlantaToxica.png")
 PlantaAtiradora = loadImage("./Assets/PlantaAtiradora.png")
 Plantacenoura = loadImage("./Assets/Plantacenoura.png")
 PlantaMina = loadImage("./Assets/PlantaMina.png")
 PlantaDoisLados = loadImage("./Assets/PlantaDoisLados.png")
 PlantaBoomerang = loadImage("./Assets/Boomerang.png")
 Sol = loadImage("./Assets/Sol.png")

}

function setup() {
 createCanvas(windowWidth,windowHeight)
 BackgroundMusic.play()
 BackgroundMusic.setVolume(0.3)
 
}

function draw() {
 image(Background,0,0,windowWidth,windowHeight)
}

