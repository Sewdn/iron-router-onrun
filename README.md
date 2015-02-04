The onRun hook is supposed to be fired when the route is ran, but not when the route is reran because of a computation invalidation. The doc states clearly that the onRun callback will not be ran when a hot code push reloads the page.

However, as soon as your app reloads because of a hotcode push, the onRun hook is never called again! Not even when you navigate to new routes. As soon as a route is activated, you expect this route to run the onRun callback (once), whether a hot code push has happened or not during your app runtime, no?

This can be a problem for a lot of people how track their analytics on an onRun hook (a suggested in the docs). As soon as you deploy, all connected users will not trigger any analytics until they refresh.

When you add crucial functionality in the onRun callback, your app can break after deployment for connected users.

Also, during development, this issue is triggered after every file you save.

I added a very simple app with only iron-router as non-core package to be able to reproduce the issue:
https://github.com/Sewdn/iron-router-onrun
