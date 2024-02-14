---
layout: page
title: Will you...?
permalink: /question/
full-width: true
---

<link href='https://fonts.googleapis.com/css?family=Petit+Formal+Script' rel='stylesheet' type='text/css'>
<script src="{{ site.baseUrl}}/assets/js/question.js"></script>

I know I've already asked but I saw someone used an Instagram post to ask... and thought that was hella cute so I wanna do the same because you are a deserver of the hella cute.

# Dear Miss Linda Sito (presumably the first),

<div class="curtain">
  <!-- https://css-tricks.com/creating-css-sliding-door-effect/ -->
  <input class="checkbox" type="checkbox" checked>
  <div class="panel">
    <div class="open">✉️ CLICK TO OPEN ME UP</div>
  </div>
  <div class="question">
    <div class="text">
      Will you be my Valentines?
    </div>
    <div class="buttons">
      <button name="button" class="btn yes" onclick="yesButtonOnClickHandler()">YES</button>
      <button name="button" class="btn" id="noButton" onclick="noButtonOnClickHandler()">NO</button>
    </div>
  </div>
</div>

<dialog class="modalWrapper" id="noModal">
  <form class="modal" method="dialog">
    <div class="sadpuppy">
      But look the puppy is so sad if you say no.
    </div>
    <img src="{{ site.baseurl }}/assets/images/sadpuppers.jpeg">
    <button class="close" value="cancel"></button>
  </form>
</dialog>

<dialog class="modalWrapper" id="yesModal">
  <form class="modal" method="dialog">
    <div class="happypuppy">GOTEEEEEEEEEM :P Love you &lt;3 :)</div>
    <img src="{{ site.baseurl }}/assets/images/collage.jpeg">
  </form>
</dialog>
