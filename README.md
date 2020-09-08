# Östsvea Website

A simple website for Östsvea vid Åbo Akademi built with Gatsby using Strapi as a headless CMS.

## Getting started

### Prerequisites
This project requires [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/)

Node -v 14

Gatsby CLI ``` npm install -g gatsby-cli ```

### Installing

Set env ```API_URL=STRAPI_URL``` for local development set STRAPI_URL to ```localhost:1337```

To start Strapi use:

```
docker-compose up
```

Strapi should now be running at:

```
localhost:1337
```

To run the project:

do ``` npm install ```

then ``` gatsby develop ```

