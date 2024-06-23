Hi, this is the main repo for Radiant, a open source social network to find people with the same interest and join and chat in communities from your own school, college, campus and office.

Radiant was discontinued as of 16 June, 2024 due to personal and family reasons of the founder.




I couldnt provide with the actual env keys but here is the sample env. It has to be placed in the root directory and not inside frontend or backend folders.

If you are using windows, edit the package.json and add "SET" to 'start' and 'dev' 
### .env file structure

```js
PORT= 'for eg. 5000'
MONGO_URI='for eg. mongodb_uri_userid_password'
JWT_SECRET= 'for eg. Ilikecookies324342344411'
CLOUDINARY_CLOUD_NAME= 'get these keys from cloudinary dashboard for free'
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

I would love if you could maintain this project. 
Thanks