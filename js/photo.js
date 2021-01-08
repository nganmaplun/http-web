
function showPhoto(photo){
	return `
	<div class="card" >
      <h2>Photo: ${photo.name}</h2>
      <img src= " ${photo.image}" height =200px  width=100%>

      <p> Ban dang xem anh ${photo.category}</p>
    </div>
	`
}
function loadImage() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var photos_arr = JSON.parse(this.responseText);
      console.log(photos_arr[1]);
      document.getElementById("demo1").innerHTML = ` ${photos_arr.map(showPhoto).join(' ')}`;
    }
  };
  xhttp.open("GET", "data/photo.json", true);
  xhttp.send();
}