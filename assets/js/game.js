var playerName = 'Clank McKrank';
// var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// WIN - all enemy robots defeated
//    1 fight all enemy robots
//    2 Defeat each enemy robot
// LOSE player's health has fallen below zero
window.alert("Welcome to Robot Gladiators!");

// fight function
var fight = function(enemyName) {
    for(;enemyHealth > 0 && playerHealth > 0;){
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        break;
      }
    }
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }      
    }
  };

// run fight function to start game
for(var i =0;( i < enemyNames.length + 1 ); i++){
  if (playerHealth > 0) {
    window.alert("Welcome to round " + (i+1) )
    debugger;
  enemyHealth = 50;
  var pickedEnemyName = enemyNames[i];
  fight(pickedEnemyName);
  }
  else {
    window.alert("You have lost your robot in battle! GAME OVER")
  }
}
