# Dino Game
If you use Google Chrome, you surely know the mini-game
you can play, when you don't have an internet connection:  
The famous __Dino Game__!  
In this project you will create your own version of this game.

## What you're going to learn
- inline styling
- event listeners for user input
- DOM manipulation
- game loop using `setInterval`
- running code delayed using `setTimeout`
- AABB collision detection
- getting element positions using `getBoundingClientRect`
- browser data storage using `localStorage`

## Tasks
### Implement a game loop
We need a __game loop__ to run some code __every frame__.
This game loop will handle almost all our game logic,
including changing the Dino's y position depending on the gravity,
moving our obstacles towards the player, and handling
collision detection between the Dino and the obstacles.  
We can use the `setInterval` function to run a function in regular intervals.
- create an `update` function
- using `setInterval`, our `update` function runs roughly every `16.67` milliseconds (60 FPS)
- put a `console.log` in our `update` function to verify that it is being run every frame

### Make our Dino fall using gravity and velocity
Our __Dino__ player character needs to fall to the bottom
of our game area using __gravity__.
We can use gravity in combination with __velocity__ to
make our Dino move faster and faster.
Our Dino's `y` position has to increase, to move downwards,
but it needs to stop once the Dino reaches the bottom.
We can use our `update` function to move the Dino every frame.
- every frame, our Dino's __velocity__ will increase based on the __gravity__
- use our __velocity__ to move our Dino's `y` position every frame
- move our Dino HTML element to the new `y` position by
  changing the element's __inline styling__ with JavaScript
- stop moving our Dino once it reaches the bottom of our game area

### Make our Dino jump
When the player presses the __space__ key, the Dino should jump.
While jumping, if the player __releases__ the space key, the jump's strength should decrease.
- on __key down__, our Dino starts moving upwards
- while jumping, on __key up__, our Dino's upwards velocity is decreased

### Obstacles
Obstacles are blocks that __spawn__ on the right side of our game area
at random intervals. They move towards the left side, towards our Dino.
If they collide with our Dino, it's __game over__. The Dino must jump over
these obstacles. Once an obstacle reaches the left side of the game area,
it should __despawn__.
- __spawn__ a new obstacle on the right side of our game area,
  by __creating__ a new __HTML element__ for our obstacle
- spawn them in __random intervals__ (ex. randomly between 0.5 and 2 seconds), using `setTimeout`
- all obstacles __move to the left__ by some fixed pixel value every frame (ex. 10 pixels every frame)
- if an obstacle reaches the left side of our game area, it should be removed from the game,
  the obstacle's __HTML element__ should be __deleted__

### Collision with obstacles
When our Dino __collides__ with an __obstacle__, it's __game over__ and
the game should stop. We can implement a simple AABB collision detection
(see Background Materials) function to check for collision between two elements.  
<small>Hint: We can use the `element.getBoundingClientRect` function to easily get
an element's top/bottom/left/right position values (see Background Materials)</small>
- create a new function (ex. `doElementsCollide`) which should return `true`
  if the two elements passed as arguments are colliding with each other,
  using the AABB collision detection technique
- each frame, check if the Dino is colliding with any obstacle
- if colliding, stop the game

### Score and Game Over
We want to have a __score__, which is __incremented__ when our Dino
__jumps over an obstacle__. When the game is over, we want to
__display__ this score to the player.
- when an obstacle's `x` position has made it __passed__ the Dino's `x` position,
  we want our __score to increment__
- on __game over__, we want to __show__ our __score__ in the DOM, as an HTML element

### Highscore
We want to save our score into the browser's `localStorage`.
On __game over__, we should __get__ our stored __highscore__ (if it exists),
and if our new __score__ is greater than the stored __highscore__, we want
to overwrite our `localStorage`'s highscore with the new score.
On game over, we want to display the highscore, and we want to tell
the player if they just set a new highscore.
- on game over, compare __score__ to __highscore__ from `localStorage`,
  and if it's a new highscore we save the new highscore to `localStorage`
- on game over, we __display__ the current highscore, and tell the player
  if they just set a new highscore

## Background Materials
- [inline styling with JS](https://www.w3schools.com/js/js_htmldom_css.asp)
- [user input with `document.addEventListener`](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)
- [creating, inserting, removing HTML elements with JS](https://www.w3schools.com/js/js_htmldom_nodes.asp)
- [AABB collision detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- API docs:
    - [`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/window/setInterval)
    - [`HTMLElement.style` (inline style)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
    - [`getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
    - [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
