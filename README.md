# simple-meteor-mvc
Very Simple-Meteor-Mvc sample. 


For me it's been hard to carve anything MVC-ish in a pretty solid meteoric matter. But damn! we got to make it MVC.. right?

Through trials and errors I ended up with one pretty simple approach to implement MVC structure with Meteor.

Wiki's MVC. Let's say this is the standard.

view/
        .html
        .js
        .less
        -anything related to the view. Has references to collections and session objects in html/helpers/events, so Model UPDATES the View (see picture).
controller.js 
        -any functions responding to user actions, called from the view (User USES the Controller), any         tracker.autoruns, etc. - controller MANIPULATES the Model.
model.js 
        -definitions of sessions, definitions of cols; server-binding (e.g. subscribes).

What I like about it - it's pretty natural way to fit Meteor in MVC concepts, so that your mind doesn't need to use brain every time you find/put code in. You may apply this logic on the level of single template, single page/control, package or whole app - any restriction here feels quite unnatural. I personally prefer to create either package- or control-level MVC - whatever single logical unit I have to show to users.


A bit of details:
- Control the load order (package.js). Usually-model.js, control.js, view/..
- Router.. very ambiguous object. I prefer to keep it in router.js.
- Using functions from Controller: very simple in the package: any global variable you define will be wrapped and available from any package code (another advantage of using package). So you can do in the controller.js
changeSearchToOffline = function () {}
and then run in your view.js event/handler:
changeSearchToOffline()
- I did not run the repo code, so consider it as a study-purpose only.
In the next post I will write about adding mobile app/browser separation to the picture. Due to the MVC implementation we will only need to duplicate view/.. part.
See this post for details: 
http://buzzar-app.blogspot.com/2015/09/simple-mvc-in-meteorjs.html

Please, enjoy and let me know your thoughts :)
