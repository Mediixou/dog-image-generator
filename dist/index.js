const { getRandomDogImage } = require("./generator");

async function main() {
    console.log("Récupération d'une image de chien...");
    const imageUrl = await getRandomDogImage();
    console.log("URL de l'image :", imageUrl);
}

main();
