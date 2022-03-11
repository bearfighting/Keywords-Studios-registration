# Keywords-Studios-registration

## usage

### setup 
docker-compose up -d

### init db
docker exec -it keywords-studios-registration_api_1 npx knex migrate:up --env production

### start app

in a browser, go to the link http://localhost:3000
