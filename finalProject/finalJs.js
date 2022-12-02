// let username ＝ "";
//USING RICK AND MORTY API 
document.getElementById("myButton").onclick = function() {

  username = document.getElementById("myInput").value;
  console.log(username);
  // document.getElementById("searchNumber").innerHTML = "Number: " + username;

  const baseURL = "https://rickandmortyapi.com/api/character/" + username;
  fetch(baseURL).then(resp => resp.json()).then(data => displayData(data));

  function displayData(data) {
    const json = data;

    var jsonStringify200 = JSON.stringify(json);
    const obj200 = JSON.parse(jsonStringify200);
    document.getElementById("charProfile").src = obj200.image;

    var jsonStringify1 = JSON.stringify(json);
    const obj1 = JSON.parse(jsonStringify1);
    document.getElementById("charName").innerHTML = obj1.name;

    var jsonStringify3 = JSON.stringify(json);
    const obj3 = JSON.parse(jsonStringify3);
    document.getElementById("charSpecies").innerHTML = obj3.species;

    var jsonStringify4 = JSON.stringify(json);
    const obj4 = JSON.parse(jsonStringify4);
    document.getElementById("charGender").innerHTML = obj4.gender;

    var jsonStringify5 = JSON.stringify(json);
    const obj5 = JSON.parse(jsonStringify5);
    document.getElementById("charOrigin").innerHTML = obj5.origin.name;


  }
}

