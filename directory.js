var directory;
//var characterXML;
var table = "";
var character = [];//[[,,,,,,,]];
// Array Details:
// 0. name
// 1. class
// 2. gender
// 3. animal
// 4. alignment
// 5. owner
// 6. profile image
// 7. profile url
// 8. location
// 9. level

// ===== Debug Functions =====
function alert(message) { document.getElementById("alertBox").innerHTML = message; }

function pageLoadNotice()
{
  alert("External JS loaded");
}

// ===== Javascript Data Functions =====
function setArrayXML(characterXML)
{
  characterXML = directory.getElementsByTagName("pc");
  alert("Setting array of " + characterXML.length + " player characters.");
  for(var i = 0; i < characterXML.length; i++)
  {
    setArrayXMLRow(characterXML[i],i);
  } 
}

function setArrayXMLRow(characterXML, i)
{
  alert("Setting " + characterXML.getElementsByTagName("fullName")[0].childNodes[0].nodeValue + ".");
  character[i] = [];
  if(characterXML.getElementsByTagName("fullName")[0].hasChildNodes())
  {
    character[i][0] = characterXML.getElementsByTagName("fullName")[0].childNodes[0].nodeValue;
  }
  else
  {
    if(characterXML.getElementsByTagName("firstName")[0].hasChildNodes())
    {
      character[i][0] = characterXML.getElementsByTagName("firstName")[0].childNodes[0].nodeValue;
    }
    else if(characterXML.getElementsByTagName("lastName")[0].hasChildNodes())
    {
      character[i][0] = characterXML.getElementsByTagName("lastName")[0].childNodes[0].nodeValue;
    }
    else character[i][0] = "Nameless";
  }
  if(characterXML.getElementsByTagName("class")[0].hasChildNodes())
  {
    character[i][1] = characterXML.getElementsByTagName("class")[0].childNodes[0].nodeValue;
  }
  else character[i][1] = "Classless";
  if(characterXML.getElementsByTagName("gender")[0].hasChildNodes())
  {
    character[i][2] = characterXML.getElementsByTagName("gender")[0].childNodes[0].nodeValue;
  }
  else character[i][2] = "Genderless";
  if(characterXML.getElementsByTagName("animal")[0].hasChildNodes())
  {
    character[i][3] = characterXML.getElementsByTagName("animal")[0].childNodes[0].nodeValue;
  }
  else character[i][3] = "Human";
  if(characterXML.getElementsByTagName("ethics")[0].hasChildNodes())
  {
    character[i][4] = characterXML.getElementsByTagName("ethics")[0].childNodes[0].nodeValue;
    if(characterXML.getElementsByTagName("morals")[0].hasChildNodes())
    {
      character[i][4] += " " + characterXML.getElementsByTagName("morals")[0].childNodes[0].nodeValue;
    }
    else character[i][4] += " Neutral";
  }
  else
  {
    if(characterXML.getElementsByTagName("morals")[0].hasChildNodes())
    {
      character[i][4] = "Neutral " + characterXML.getElementsByTagName("morals")[0].childNodes[0].nodeValue;
    }
    else character[i][4] = "Neutral";
  }
  if(characterXML.getElementsByTagName("owner")[0].hasChildNodes())
  {
    character[i][5] = characterXML.getElementsByTagName("owner")[0].childNodes[0].nodeValue;
  }
  else character[i][5] = "Disowned";
  if(characterXML.getElementsByTagName("portrait")[0].hasChildNodes())
  {
    character[i][6] = characterXML.getElementsByTagName("portrait")[0].childNodes[0].nodeValue;
  }
  else character[i][6] = "http://i.imgur.com/3iWdOSI.jpg";
  if(characterXML.getElementsByTagName("profile")[0].hasChildNodes())
  {
    character[i][7] = characterXML.getElementsByTagName("profile")[0].childNodes[0].nodeValue;
  }
  else character[i][7] = "";
  if(characterXML.getElementsByTagName("location")[0].hasChildNodes())
  {
    character[i][8] = characterXML.getElementsByTagName("location")[0].childNodes[0].nodeValue;
  }
  else character[i][8] = "Unknown";
  if(characterXML.getElementsByTagName("level")[0].hasChildNodes())
  {
    character[i][9] = characterXML.getElementsByTagName("level")[0].childNodes[0].nodeValue;
  }
  else character[i][9] = "Unknown";
}

function relocate(i)
{
  switch (character[i][8])
  {
    case "Desert Kingdom": character[i][8] = "The Wildlands"; break;
    case "The Wildlands": character[i][8] = "The Wildlands"; break;
    case "Port Alnnabidh Alssahra'": character[i][8] = "The Wildlands"; break;
    case "The Westlands": character[i][8] = "The Westlands"; break;
    case "Generic Kingdom": character[i][8] = "Generic Kingdom"; break;
    case "GK": character[i][8] = "Generic Kingdom"; break;
    case "Starter Town": character[i][8] = "Generic Kingdom"; break;
    case "Mage Tower": character[i][8] = "Generic Kingdom"; break;
    case "Fort Wooden": character[i][8] = "Generic Kingdom"; break;
    case "Mage Tower": character[i][8] = "Generic Kingdom"; break;
    case "Woolburgh": character[i][8] = "Generic Kingdom"; break;
    case "El'Labia": character[i][8] = "Generic Kingdom"; break;
    case "El' Labia": character[i][8] = "Generic Kingdom"; break;
    case "Cevicha": character[i][8] = "Generic Kingdom"; break;
    case "Kalamariata": character[i][8] = "Generic Kingdom"; break;
    case "Capital City": character[i][8] = "Generic Kingdom"; break;
    case "Butteholde": character[i][8] = "Generic Kingdom"; break;
    case "Cumorhe": character[i][8] = "Generic Kingdom"; break;
    case "Rift of Mists": character[i][8] = "Generic Kingdom"; break;
    case "Lachance": character[i][8] = "Generic Kingdom"; break;
    case "Ankledeep": character[i][8] = "Generic Kingdom"; break;
    case "The Taint": character[i][8] = "Generic Kingdom"; break;
    case "Boggy Bottom": character[i][8] = "Generic Kingdom"; break;
    case "Pen Island": character[i][8] = "Generic Kingdom"; break;
    case "Gaelick": character[i][8] = "Generic Kingdom"; break;
    case "Rabbitia": character[i][8] = "Generic Kingdom"; break;
    case "Woodland Kingdom": character[i][8] = "Generic Kingdom"; break;
    case "Schwanzatdt": character[i][8] = "Generic Kingdom"; break;
    default: character[i][8] = "Generic Kingdom";
  }
}

function createProfile(i)
{
  var out;
  out = '<div class="char"><a id="imgLink" href="';
  out += character[i][7];
  out += '" target="_blank" ><img id="profilePic" class="portraitBig" src="'
  out += character[i][6];
  out += '" /></a><a id="nameLink" href="'
  out += character[i][7];
  out += '" target="_blank"><div id="name" class="profileName">'
  out += character[i][0];
  out += '</div></a><div id="class">'
  out += character[i][1];
  out += '</div><div id="gender">'
  out += character[i][2];
  out += '</div><div id="animal">'
  out += character[i][3];
  out += '</div><div id="alignment">'
  out += character[i][4];
  out += '</div><a id="ownerLink" href="';
  out += '#'; // Replace this with the owner's URL.
  out += '" target="_blank"><div id="owner">'
  out += character[i][5];
  out += '</div></a></div>';
  
  document.getElementById("profiles").innerHTML += out;
}

function characterRow(i)
{
  alert("Character Row " + character[i][0]);
  table += "<tr><td><a href='";
  table += character[i][7];
  table += "' target='_blank'><img class='portrait' src='";
  table += character[i][6];
  table += "' /></a></td><td class='nameCell'><a href='";
  table += character[i][7];
  table += "' target='_blank'>";
  table += character[i][0];
  table += "</a></td><td class='levelCell'>";
  switch(character[i][9])
  {
    case "2": table += "Regular"; break;
    case "3": table += "Veteran"; break;
    case "4": table += "Elite"; break;
    case "5": table += "Epic"; break;
    default: table += "Noob";
  }
  table += "</td></tr>";
}

// ===== Functions Called by Site =====
function clickPlace(locationIn)
{
  fillDirectory(locationIn);
}

function loadDirectory()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      directory = this.responseText;
      alert(directory);
      //alert("Database loaded.");
    }
  };
  xhttp.open("GET", document.getElementById("dataURLBox").value, true);
  xhttp.send();
}

function loadDirectoryPHP()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      directory = this.responseText;
      alert(directory);
      //alert("Database loaded.");
    }
  };
  xhttp.open("GET", "/cms/records/bnf_characters", true);
  //xhttp.open("GET", "./directory.xml", true);
  xhttp.send();
}

function loadDirectoryXML()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      directory = this.responseXML;
      alert("XML loaded.");
    }
  };
  xhttp.open("GET", "./directory.xml", true);
  xhttp.send();
}

function callRoll()
{
  // Clearing old roll.
  document.getElementById("profiles").innerHTML = "";
  alert("Calling roll.");
  
  //setArrayXML(directory.getElementsByTagName("pc"));
  setArrayPHP(directory.getElementsByTagName("records"));
  characterSort(0);
  
  for(var i = 0; i < character.length; i++)
  {
    createProfile(i);
  }
}

function fillDirectory(locationIn)
{
  alert("Filling directory.");
  setArrayXML(directory.getElementsByTagName("pc"));
  
  table = "<tr><th>&nbsp;</th></tr>";

  // Sort by level first.
  characterSort(9);
  
  for(var i = 0; i < character.length; i++)
  {
    alert(character[i][0] + "'s location: " + character[i][8]);
    relocate(i);
    if(locationIn == character[i][8]) characterRow(i);
  }
  document.getElementById("directoryTable").innerHTML = table;
}
// ===== Glow and Unglow =====
function applyGlow(location)
{
  for(var i = 0; i < location.length; i++)
  {
    //document.getElementById(location[i]).style.filter = "blur(2px)";
    /*document.getElementById(location[i]).style.stroke = "#ffffff";
    document.getElementById(location[i]).style.stroke-width = "2";
    document.getElementById(location[i]).style.transition = "stroke 0.333s";*/
    document.getElementById(location[i]).setAttribute("class", "mapBorder mapBorderGlow");
  }
}
function removeGlow(location)
{
  for(var i = 0; i < location.length; i++)
  {
    //document.getElementById(location[i]).style.filter = "blur(2px)";
    /*document.getElementById(location[i]).style.stroke = "#ffffff";
    document.getElementById(location[i]).style.stroke-width = "2";
    document.getElementById(location[i]).style.transition = "stroke 0.333s";*/
    document.getElementById(location[i]).setAttribute("class", "mapBorder");
  }
}

// ===== Built-In Merge Sort =====
function characterSort(value)
{
  character = character.sort(function(a,b)
  {
    return +(a[value] > b[value]) || +(a[value] === b[value]) -1;
  });
}
