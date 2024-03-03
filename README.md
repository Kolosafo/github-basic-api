 # github-basic-api

This package simplifies fetching data from GitHub by providing functions for the following tasks:

**User Information**
- Get details of a specific user by username.
- Get a random user from GitHub.

**Repositories**
- Get a list of a user's public repositories.
- Get details of a specific repository by owner and repo name.
- Get a random public repository from GitHub.

## Installation

```bash
npm i github-basic-api
```

## Usage

```javascript
import {getRepoDetails, getRandomRepos, searchRepos, getUser, getRandomUsers} from 'github-basic-api';

// returns a repo detail
console.log(await getRepoDetails('Kolosafo', 'github-api')); //params: Repo owner and repo name

// returns an array of random github repositories
console.log(await getRandomRepos());

// returns an array of matching github repositories
console.log(await searchRepos('github-api')); //param: repo name

// returns a user's profile details
console.log(await getRandomUsers());

// returns an array of random github users
console.log(await getUser('Kolosafo')); //param: github username

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)