# Mongoose Pagination Example

# Environment variables
* `MONGODB_URI`, the mongodb uri for the api. By default the uri is `mongodb://localhost/mydatbaase`

# Docker Compose
start the project
```
docker-compose up
```

## seed the database
create 100 projects objects inside mongodb

```
docker exec -it api npm run seed
```