npx create-react-app portfolio-react
docker build --tag react .
docker run react
docker run --publish 3000:3000 react
docker-compose run app