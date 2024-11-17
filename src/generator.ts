import fetch from "node-fetch"; // Import de node-fetch

// URL de l'API Dog CEO
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

// Interface pour typer la réponse de l'API
interface DogApiResponse {
    message: string; // URL de l'image du chien
    status: string;  // Statut de la réponse ("success" ou autre)
}

// Fonction pour récupérer une image de chien aléatoire
export async function getRandomDogImage(): Promise<string> {
    try {
        // Appel à l'API
        const response = await fetch(DOG_API_URL);

        // Vérification de la validité de la réponse
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Conversion de la réponse en JSON
        const data = (await response.json()) as DogApiResponse;

        // Vérification du statut dans la réponse JSON
        if (data.status === "success") {
            return data.message; // Retourne l'URL de l'image
        } else {
            throw new Error("La réponse de l'API indique un échec.");
        }
    } catch (error) {
        // Gestion des erreurs
        console.error("Erreur lors de la récupération de l'image :", error);
        return "Aucune image disponible.";
    }
}
