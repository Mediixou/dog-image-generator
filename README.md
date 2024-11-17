
# **dog-image-generator**

Un module simple et pratique pour générer des images aléatoires de chiens en utilisant l'API publique [Dog CEO](https://dog.ceo/dog-api/).

## **Installation**

Ajoutez le module à votre projet avec npm :

```bash
npm install dog-image-generator
```

## **Utilisation**

Voici un exemple pour utiliser le module dans votre projet Node.js :

### **Exemple de code**

```javascript
const { getRandomDogImage } = require ("dog-image-generator");

async function main() {
    console.log("Génération d'une image de chien...");
    const imageUrl = await getRandomDogImage();
    console.log("URL de l'image :", imageUrl);
}

main();
```

### **Sortie attendue**

```
Génération d'une image de chien...
URL de l'image : https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg
```

---

## **Fonctionnalités**

- **Génération rapide :** Obtenez une URL d'image de chien en un appel d'API.
- **API fiable :** Utilise l'API publique et gratuite de Dog CEO.
- **Facilité d'intégration :** Idéal pour les projets Node.js et TypeScript.

---

## **Documentation de l'API**

### Fonction exportée :
#### `getRandomDogImage()`
Renvoie une URL d'image de chien sous la forme d'une chaîne de caractères.

- **Retour :** `Promise<string>`  
  Une promesse contenant l'URL de l'image de chien.

### **Exemple :**

```javascript
const imageUrl = await getRandomDogImage();
console.log(imageUrl); // https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg
```

---

## **Prérequis**

- **Node.js v16+**
- Le module est compatible avec les ESM (`type: "module"` dans `package.json`).

---

## **Contributions**

Les contributions sont les bienvenues ! Si vous avez une idée ou trouvez un problème, n'hésitez pas à ouvrir une **issue** ou une **pull request**.

---

## **Licence**

Ce module est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.
