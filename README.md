<h1 align="center">𝙺𝙰𝚆𝙰𝙺𝙸²²7</h1>

<p align="center">
    <img alt="OVL" src="https://files.catbox.moe/rb0a4f.jpg">
</p>

<p align="center">
    Un bot WhatsApp multi-appareil open source. N'oubliez pas de laisser une ⭐ (star) pour le projet.
</p>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="MIT License" />
    </a>
    <a href="https://github.com/WhiskeySockets/Baileys">
        <img src="https://img.shields.io/badge/Baileys-Web%20API-orange?style=flat-square" alt="Using Baileys Web API" />
    </a>
    <a href="https://github.com/kawaki20/CELI1/stargazers">
        <img src="https://img.shields.io/github/stars/kawaki20/CELI1?style=flat-square" alt="Stars" />
    </a>
    <a href="https://github.com/kawaki20/CELI1/network/members">
        <img src="https://img.shields.io/github/forks/kawaki20/CELI1?style=flat-square" alt="Forks" />
    </a>
</p>

---

<details>
  <summary>🚀 Déploiement de Célibataire</summary>

### 🧬 Étape 1 : Fork du dépôt GitHub  
[![Fork GitHub](https://img.shields.io/badge/Fork%20le%20Repo-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kawaki20/CELI1/fork)

---

### 🔐 Étape 2 : Générer une SESSION ID

📌 **Conserve la Session-ID dans un endroit sécurisé.** 

[![Obtenir SESSION-ID](https://img.shields.io/badge/Obtenir%20SESSION--ID1-0A0A0A?style=for-the-badge&logo=key&logoColor=white)](https://premier-armadillo-ovl-02d9d108.koyeb.app/)  
[![Obtenir SESSION-ID](https://img.shields.io/badge/Obtenir%20SESSION--ID2-0A0A0A?style=for-the-badge&logo=key&logoColor=white)](https://ruling-alma-ahc-ec8ca560.koyeb.app/)  
[![Obtenir SESSION-ID](https://img.shields.io/badge/Obtenir%20SESSION--ID3-0A0A0A?style=for-the-badge&logo=key&logoColor=white)](https://shivering-lizzy-fatao177-3ee3096c.koyeb.app/)

---

### 🗄️ Étape 3 : Créer une base de données  
[![Créer Base de Données](https://img.shields.io/badge/Supabase-Base%20de%20donn%C3%A9es-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
> Ou utilise une base de données existante.

### 🚀 Étape 4 : Méthodes de déploiement

#### <img src="https://img.shields.io/badge/Render-12100E?style=for-the-badge&logo=render&logoColor=white" height="28" />
- Créez un compte : [Lien Render](https://dashboard.render.com/register)
- Déploiement rapide : [Déployer sur Render](https://dashboard.render.com/web/new)

#### <img src="https://img.shields.io/badge/Koyeb-000000?style=for-the-badge&logo=koyeb&logoColor=white" height="28" />
- Créez un compte : [Lien Koyeb](https://app.koyeb.com/auth/signup)
- Déploiement rapide : [Déployer sur Koyeb](https://app.koyeb.com/deploy?type=git&name=ovl-md&repository=https%3A%2F%2Fgithub.com%2Fkawaki20-devs%2FCELI1&branch=main&builder=dockerfile&env%5BPREFIXE%5D=%F0%9F%97%BF&env%5BNOM_OWNER%5D=Ainz&env%5BNUMERO_OWNER%5D=227xxxxxxxx&env%5BMODE%5D=public&env%5BSESSION_ID%5D=ovl&env%5BDATABASE%5D=&env%5BLEVEL_UP%5D=non&env%5BSTICKER_PACK_NAME%5D=Wa-sticker&env%5BSTICKER_AUTHOR_NAME%5D=OVL-MD&instance_type=free)

#### <img src="https://img.shields.io/badge/Panel-grey?style=for-the-badge&logo=windows-terminal&logoColor=white" height="28" />
- Créez un serveur
- Ajoutez le fichier `index.js` ou `main.js`
- Démarrez le bot

#### <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" height="28" />
- Ajoutez un fichier `.env`
- Créez le fichier `.github/workflows/deploy.yml`

</details>

---

<details>
  <summary>📝 Fichier index.js ou main.js pour déploiement sur panel</summary>

```js
const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const env_file = ``; // Ajoutez ici vos variables d'environnement

if (!env_file.trim()) {
  console.error("Aucune donnée de configuration dans 'env_file'. Remplissez les infos.");
  process.exit(1);
}

const envPath = path.join(__dirname, 'ovl', '.env');

function runCommand(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: 'inherit', ...options });
  if (result.error || result.status !== 0) {
    throw new Error(`Erreur lors de l'exécution : ${command}`);
  }
}

if (!existsSync('ovl')) {
  console.log("Clonage...");
  runCommand('git', ['clone', 'https://github.com/Ainz-devs/OVL-MD-V2', 'ovl']);
  runCommand('npm', ['install'], { cwd: 'ovl' });
}

if (!existsSync(envPath)) {
  mkdirSync(path.dirname(envPath), { recursive: true });
  writeFileSync(envPath, env_file.trim());
}

runCommand('npm', ['run', 'Ovl'], { cwd: 'ovl' });
```

</details>

---

<details>
  <summary>⚙️ Fichier .github/workflows/deploy.yml</summary>

```yaml
name: OVL-MD Bot CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 */5 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [20.x]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
      - run: |
          sudo apt update
          sudo apt install -y ffmpeg
          npm i
      - run: timeout 18300s npm run Ovl
```

</details>

---

<details>
  <summary>🔐 Exemple de fichier .env</summary>

```env
PREFIXE=1
NOM_OWNER=kawaki227
NUMERO_OWNER=22782639423
MODE=public
SESSION_ID=ovl
DATABASE=
LEVEL_UP=non
STICKER_PACK_NAME=𝙺𝙰𝚆𝙰𝙺𝙸²²7
STICKER_AUTHOR_NAME=CIBABA
RENDER_API_KEY=rnd_DVj2TllEeCuUiUv4lsZnkf9rCjQ1
```

</details>

---

### 🌍 Rejoins la Communauté OVL

[![WhatsApp Support](https://img.shields.io/badge/Support%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/CC4ZQ20BEahLGF2ewPWpUg)
[![Telegram Channel](https://img.shields.io/badge/Canal%20Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/K_awaki)

Partage, pose tes questions, et reste à jour avec toutes les nouveautés du projet !

---

### 👨‍💻 Développeur Principal
- **𝙺𝙰𝚆𝙰𝙺𝙸²²7**
---
### 🙌 Remerciements
- ainzi – pour son soutien et aide dans la gestion du bot au support.
---
### 📄 Licence

Distribué sous la licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus d’informations.
