You need to install Docker first on your machine.

`cd app` then `docker-compose up`

There are URLs of containers:

- Frontend: `localhost:7001`
	- `/` -- Item lists
	- `/?category_id=ID` -- filter item list by category_id
	- `/:id` -- item detail by id 
- Backend: `localhost:5000` -- Modify some ruby code for CORS / PORT mapping
	- `GET: /items` -- Get all item list in `{ data: [] }`
	- `GET: /items?category_id=ID` -- Get filtered items by `params.category_id`
	- `GET: /items/:id` -- Get item by id
	- `GET: /categories` -- Get all categories
---

**Architecture & Technologies:**

- Frontend (Pages component / Pure components & functions -- for testablility)
	- React
	- Javascript
	- Webpack

- Misc
	- Docker (Images, Containers for CICD)
	- Jest: Unit testing
	- DOTENV - config injection with JENKINS or CICD pipeline

- Future improvements
	- Jest & Enzyme
	- SCSS