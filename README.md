# 301-practice-4
**1.In an express server application, what does dotenv do**


loads environment variables from a .env file into process.env .


**2.What does the following code do:**

function render( item ) {
  let markup = $('#item-template').html();
  let runTemplate = Handlebars.compile(markup);
  $("#list").append( runTemplate(markup) );
};

*create a template using handlebars this template taking the form that we want from "item-template" id and append it in "list " id* 





**3.What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put** **a rule with positioning?**
Absolute :
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

Relative :
An element with position: relative; is positioned relative to its normal position.

we put a rule with positioning in layout file 