# TODO LIST REST API application

NodeJS application providing a REAST API to a TODO list web-project.


## Getting Started

The project can be seen in action [here]()

# REST API

The REST API has the following routes:

* Create Single TODO;
* Read Single TODO; 
* Update Single TODO;
* Destroy Single TODO;
* Toogle Single TODO Status (Uncompleted/Completed);
* Show All TODOs;
* Show All TODOs (by Title + Date + id); 
* Destroy All TODOs;
* Show All TODOs (by Date).

## Create Single TODO
### Request
`POST /todo`

## Read Single TODO 
### Request
`GET /todo/{id}`

## Update Single TODO
### Request
`PUT/PATCH/POST /todo/{id}`

## Destroy Single TODO
### Request
`DELETE /todo/{id}`

## Toogle Single TODO Status (Uncompleted/Completed)
### Request
`PATCH /todo/{id}/toogle`

## Show All TODOs
### Request
`GET /todo/all`

## Show All TODOs (only Title + Date + id) 
### Request
`GET /todo`

## Destroy All TODOs
### Request
`DELETE /todo/all`

## Show All TODOs (by Date)
### Request
`GET /todo/all/{date}`

## Deployment

This project is being deployed to Heroku via Github.

## Built With

* [Express](https://expressjs.com) - The web framework used
* [NPM](https://maven.apache.org/) - Dependency Management
* [MONGOOSE](https://mongoosejs.com/) - Used to generate the mongodb objects models for the application.

## Authors

* **Eric Ogata** - *Initial work* - [EricOgata](https://github.com/EricOgata)

See also the list of [contributors](https://github.com/EricOgata/todoListBackEnd/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used