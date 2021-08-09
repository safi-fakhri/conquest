<!DOCTYPE html>
<html lang="en">
  <head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="styles.css">
    
    <title>CONQUEST</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/jquery.japan-map.min.js"></script>
  </head>
  <body>
    <div class="page-title">
      <img id="title-logo" src="assets/images/Title.png" />
    </div>
    <div class="overlay-screen splash visible">
      <img class="splash-screen" src="assets/images/Splash Screen.png" />
    </div>
    <div class="overlay-screen" id="battle">
      <img class="splash-screen" src="assets/images/Fight.png" />
      <div class="battlefield">
        <div class="defender">
          <img class="oni defender-img" src="assets/images/characters/Oni/Oni_1.png" />
        </div>
        <div class="attacker">
          <img class="human attacker-img" src="assets/images/characters/Player_1/Attacker_Challenge.png" />
        </div>
      </div>
    </div>
    <div class="main-container">
      <div id="player-list">
      </div>
      <div class="map">
        <div id="map-container">
        </div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <div id="pref-name">
      </div>
    </div>

    <script type="text/javascript" src="js/conquest.js"></script>
  </body>
</html>