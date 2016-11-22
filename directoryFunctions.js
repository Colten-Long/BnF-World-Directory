// Global Variables
var character = [];

// Debug Functions
function alert(message) { document.getElementById("alertBox").innerHTML = message; }

// Data Functions
function loadCharacters()
{
  var output = "";
  {{foreach $record as $character}}
    output += {$character_full_name};
    output += {$character=>character_full_name};//Note the equal sign in the pipe.
    output += {$character->character_full_name};//Note the minus sign in the pipe.
    output += {$character=>customFieldDisplayByKey('character_full_name', 'listing')};
    output += {$character->customFieldDisplayByKey('character_full_name', 'listing')};
    output += {$character->customFieldDisplayByKey('character_full_name', 'display')};
    //{$character->customFieldDisplayByKey('character_full_name', 'listing')|raw} //character.push(\{"fullName":"{$character_full_name}","firstName":"{$character_first_name}","lastName":"{$character_last_name}","animal":"{$character_animal}","ethics":"{$character_ethics}","morals":"{$character_morals}"\});
  {{endforeach}}
  //document.write(character.join(", "));
  alert(output);
}