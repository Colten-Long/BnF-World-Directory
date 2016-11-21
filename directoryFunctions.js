var character = [];

function loadCharacters()
{
  {{foreach $characters as $character}}
    character.push(\{"fullName":"{$character_full_name}","firstName":"{$character_first_name}","lastName":"{$character_last_name}","animal":"{$character_animal}","ethics":"{$character_ethics}","morals":"{$character_morals}"\});
  {{endforeach}}
  document.write(character.join(", "));
}