
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

async function getRandomDogImage() {
    const fetch = (await import("node-fetch")).default; 

    try {
        const response = await fetch(DOG_API_URL);
        const data = await response.json();
        if (data.status === "success") {
            return data.message; 
        } else {
            throw new Error("Erreur lors de la récupération de l'image.");
        }
    } catch (error) {
        console.error("Erreur :", error);
        return "Aucune image disponible.";
    }
}

module.exports = { getRandomDogImage };
