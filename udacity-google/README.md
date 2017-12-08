# Google Front End Challenge
My personal portfolio for the projects proposed during the 2017 Udacity program: "Google Developer Challenge Scholarship: Front-End Web Dev"

1. Mockup to Article: Lesson 4
- Using an image as reference, create an HTML + CSS mockup as similar as possible.
2. Animal Trading Cards: Lesson 8
- Similar to the mockup project, but with more personalization of the content. Create a trading card with infos on your favorite animal.
3. Pixel Art Maker: Lesson 21
- Create a HTML+CSS+JS (jQuery) page with a dinamically resizable grid and a color picker to create pixel arts.

### Changelog ###

- 8 December 2017
  - Project 1 edited: 
    - Changed some tags to their "semantic" respective: `article, header, time, summary, figure, details`.
    - A `<sup>` was missing: fixed.
  - Project 2 edited:
    - Changed the tag for the main title from `h3` to `h1`
    - Added a fixed `width` of `300` to the `img` tag
  - Project 3 tweaked, following features added:
    - Button to clear all pixels
    - Button to color all pixels with the color picked
    - Second color picker to change the page's background color
    - Check for maximum and minimum values for height and width
    - Status paragraph: the text changes or is added to report a problem to the user. (No actual use implemented so far)
    - `$(someFunction)` method used to wait for the DOM to be ready
  - Minor CSS fixes to Projects 1 & 2 (`font-size`,`text-align`, etc.)

- 6 December 2017
  - Project 3 edited: 
    - Added some line of code to color "pixels" by keeping the mouse pressed and overing the cells.
  
    Added:
    ```javascript
    var down = false;
    $(document)
    .mousedown(function(){
       down = true;
       console.log("Mouse pressed.");
     })
    .mouseup(function(){
      down = false;
      console.log("Mouse released.");
    });
    ```
    Edited:
    ```javascript
    function fill(event){
    $(event.target).css("background-color", colorPicker.val());
    }

    $("table").on("mouseenter", "td", function(event){
      if(down){
        fill(event);
      }
    })
    .on("mousedown","td",function(event){
      fill(event);
    });
    ```
