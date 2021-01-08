
function age(age) {
	// body...
	if (age>30)
		return 	`gia`
	else 
		return age
}
function printkk(mu){

	return `<div class="card" >
      <h2>Music ${mu.name} </h2>
      <img src=" ${mu.image}" width=100% height=200px >
      <p> Age: ${age(mu.age)}</p>
      
    </div>
	`

}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var music_array = JSON.parse(this.responseText);
      document.getElementById("demo1").innerHTML = ` ${music_array.map(printkk).join('  ')}`;
    }
  };
  xhttp.open("GET", "data/music.json", true);
  xhttp.send();
}

