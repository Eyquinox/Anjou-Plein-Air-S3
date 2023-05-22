[![Upload prod Website to S3](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/main.yml/badge.svg)](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/main.yml)
[![Broken Link Check](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/broken-link-check.yml/badge.svg)](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/broken-link-check.yml)
# Anjou-Plein-Air-S3
Push to AWS S3 Bucket

## Organisation des dossiers
| ".ghithub" fichiers de configuration propre à Github

| "public" fichiers du site web

## Fonctionnement du site web
Les fichiers du site web sont stockés et mis à jour ici.

**GhitHub** Se charge de stocker les fichiers du site web et l'historique de toutes les modifications.

**AWS** Se charge de distribuer le site web.

- Lorsque les modifications sont poussées sur la branche "master", Github vérifie le code puis envoie une copie vers AWS qui se chargera de publier la nouvelle version du site (anjoupleinair.fr)
- Lorsque les modifications sont poussées sur la branche "dev", Github vérifie le code puis envoie une copie vers AWS qui se chargera de publier la nouvelle version du site de préproduction (beta.anjoupleinair.fr)

### Passage en prod :
Tout commit dans la branche "**master**" sera envoyé vers le compartiment S3 et le CDN CloudFront mis à jour.

### Passage en test :
Commit dans la branche "dev" pour mettre à jour le site disponible à l'adresse "beta.anjoupleinair.fr" *(mise à jour du compartiment S3)*

### Commit sur github uniquement :
Commit dans une autre branche que "master" ou "dev"
