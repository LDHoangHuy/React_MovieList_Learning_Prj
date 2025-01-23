# React_MovieList_Learning_Prj
This is a simple website where you can search for movies, and mark your favorites, which will be saved on your favorite page.

## Demo link
<a href="https://react-movie-list-learning-prj.vercel.app/" target="_blank">https://react-movie-list-learning-prj.vercel.app/</a>

## Clone
After cloning the repository, go to the frontend folder, and in the terminal you should type the following:<br />
```bash
npm install
npm run dev
```
Then the website is supposed to be run on localhost.

## Details
I made this project because I needed something that was not too complicated for a beginner like me, but also not too simple so that I could learn something from it.<br />
This led me to a YouTube tutorial video from a channel called TechWithTim. The tutorial was comprehensive with the definition of any context that Tim mentioned during the tutorial.<br />
This project helped me learn some basic things about making a website (Front-End) with React, some concepts like: React components, state, API, useEffect, React context,...

## Bugs and the way I handled
During the project, I had to handle some bugs: <br /> 
The favorites were not being saved on the favorite page (if you refresh the page, they will be gone). Then I found out that Tim had missed the condition to check if there were any favorites (if there were then it could save those favorites to the local storage), so I added the condition and it worked.<br />
Some other bugs I coped with like: the favorite page did not render the right UI when there are no favorites; When you refreshed the page, the website lost the last thing you had changed (if you mark three favorite movies, the last one will not be saved and if you unmark three movies, just two movies are unmarked).<br />
Fortunately, after some work, those bugs were temporarily solved.

## Next steps
I plan to add more features, and more pages (e.g. the category page, the movie details page,...) to this project so that I can learn and practice with more concepts. I hope you enjoy the project and if there are bugs somewhere just let me know.<br />
If you have any suggestions or ideas for improving the project, I'm welcome to receive your messages.


