// Global Variables
var character = [];

// Debug Functions
function alert(message) { document.getElementById("alertBox").innerHTML = message; }

// Data Functions
function loadCharacters()
{
  var output = "";
  <?php
  {{foreach $record as $character}}
    //echo "output += {$character_full_name};";
    echo "output += $character->character_full_name;";//Note the minus sign in the pipe.
    echo "output += {$character->character_full_name};";
    echo "output += {$character->customFieldDisplayByKey('character_full_name', 'listing')};";
    echo "output += {$character->customFieldDisplayByKey('character_full_name', 'display')};";
    //echo "output += {$character=>character_full_name};";//Note the equal sign in the pipe.
    //echo "output += {$character=>customFieldDisplayByKey('character_full_name', 'listing')};";
    //echo "{$character->customFieldDisplayByKey('character_full_name', 'listing')|raw}";
    //echo "character.push({'fullName':'{$character_full_name}','firstName':'{$character_first_name}','lastName':'{$character_last_name}','animal':'{$character_animal}','ethics':'{$character_ethics}','morals':'{$character_morals}'});";
  {{endforeach}}
  ?>
  //document.write(character.join(", "));
  alert(output);
}