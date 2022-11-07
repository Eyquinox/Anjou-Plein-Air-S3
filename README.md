[![Upload prod Website to S3](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/main.yml/badge.svg)](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/main.yml)
[![Broken Link Check](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/broken-link-check.yml/badge.svg)](https://github.com/Eyquinox/Anjou-Plein-Air-S3/actions/workflows/broken-link-check.yml)
# Anjou-Plein-Air-S3
Push to AWS S3 Bucket

## Fonctionnement

### Passage en prod :
Tout commit dans la branche "master" sera pousser vers le compartiment S3 consulté par le CDN CloudFront.


### Commit sur github uniquement :
Commit dans une autre branche que "master"

### Passage en test :
Commit dans la branche "dev" pour mettre à jour le site disponible à l'adresse "beta.anjoupleinair.fr"
