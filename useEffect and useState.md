Si tu es en entretien d'embauche et qu'on te demande d'expliquer `useState` et `useEffect`, voici une façon claire et concise de répondre tout en démontrant ta compréhension de React et de ses hooks :

---

### `useState`

Le hook `useState` est utilisé dans React pour ajouter un **état local** à un composant fonctionnel. Avant les hooks, seuls les composants de classe pouvaient avoir un état. Avec `useState`, tu peux créer des composants fonctionnels dynamiques qui réagissent aux changements d'état sans avoir besoin d'utiliser des classes.

#### Exemple :

```jsx
import { useState } from "react";

function MonComposant() {
  const [count, setCount] = useState(0); // Déclare un état local "count"

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </div>
  );
}
```

- **Comment ça marche ?**

  - `useState(0)` initialise l'état avec une valeur (ici, 0).
  - Cela renvoie un tableau contenant l'état actuel (`count`) et une fonction (`setCount`) pour mettre à jour cet état.
  - Quand tu appelles `setCount`, le composant est re-rendu avec la nouvelle valeur de `count`.

- **Cas d'usage :** Gérer des valeurs d'interface utilisateur comme un compteur, des entrées de formulaire, ou tout état dynamique d'un composant.

---

### `useEffect`

`useEffect` est utilisé pour gérer les **effets de bord** dans un composant fonctionnel. Un effet de bord correspond à tout code qui interagit avec le monde extérieur ou qui nécessite une mise à jour après le rendu (par exemple, des appels API, des abonnements à des événements, ou la manipulation manuelle du DOM).

#### Exemple :

```jsx
import { useEffect, useState } from "react";

function MonComposant() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Appel d'une API au montage du composant
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois

  return (
    <div>
      {data ? <p>Données reçues : {data.value}</p> : <p>Chargement...</p>}
    </div>
  );
}
```

- **Comment ça marche ?**

  - Le premier argument de `useEffect` est une fonction qui contient l'effet (ici, un appel API).
  - Le second argument est un tableau de dépendances (ici vide), qui contrôle quand l'effet doit être exécuté. Un tableau vide signifie que l'effet s'exécute une seule fois, au montage du composant.
  - Le `return` à l'intérieur de `useEffect` est utilisé pour nettoyer les effets, comme désinscrire un événement ou arrêter un timer, lorsque le composant est démonté ou avant qu'il ne soit ré-exécuté.

- **Cas d'usage :** Appeler des API, gérer des abonnements à des événements, ou effectuer des actions après un rendu.

---

### Conclusion

- **`useState`** gère l'état local d'un composant fonctionnel.
- **`useEffect`** gère les effets de bord comme les appels API, les abonnements et les modifications du DOM.

Les deux hooks sont essentiels pour créer des composants fonctionnels réactifs et interactifs dans React.

---

Si tu ajoutes des exemples ou des détails pratiques, cela montrera non seulement ta compréhension théorique mais aussi que tu sais les utiliser efficacement dans des cas concrets.
