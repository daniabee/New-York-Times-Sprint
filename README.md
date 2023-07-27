# Take Home Challenge
<img width="1430" alt="Screenshot 2023-07-27 at 10 02 48 AM" src="https://github.com/daniabee/New-York-Times-Sprint/assets/108088961/6a71b628-98f6-46eb-9195-9c339aa49ba2">

## MVP requirements:

- A list of articles
- A “detailed” view for each article (as opposed to summary/list view)
- Articles in the list must link to the detailed article view you create
- Some sort of search, filter, OR sort

## Run the project locally:

### `git clone git@github.com:daniabee/take-home-challenge.git`
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Run Testing: 

### `npm run cypress`

## Planning: 

![Untitled-2022-08-22-1416](https://user-images.githubusercontent.com/108088961/222281471-7a267974-7584-4c77-af77-cc7d0226dd63.png)

## Reflections: 

I believe I hit the MVP for this challenge and ontop of that, ensured end to end testing of the application. I believe testing is good practice when it comes to application development and that is why it is included. Additionally, in refrence to the search functionality, I decided to use the search endpoint provided by the NYT API rather than search, filter, or sort the 34 home page articles given in the home page. Using the provided endpoint rather than manually creating a search for the fetched 34 articles made more sense from a user perspective. In planning, I was anticipating reusing the article component for the populated searched articles, however, the objects given back are not formatted the same as the home page endpoint objects, therefore, I would have had to create another component for the searched articles specifically. The images do not work the same so it would have taken more time then I had. With more time, I would have liked to create a compatible design for the searched articles and link it to it's own details page. Additionally, I would have liked to add a sort feature to the home page to organize the articles alphabetically if the user desired. 
