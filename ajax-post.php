<script>
function showUser(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//document.getElementById("txtHint").innerHTML = this.responseText;
			var myObj = JSON.parse(this.responseText);
			/*for (var key of Object.keys(myObj)) {
			  alert(key + " -> " + myObj[key]);
			}*/
			 /* myObj.forEach(obj => {
				  Object.entries(obj).forEach(([key, value]) => {
					  //alert(key + ' | ' + value);
				ajaxReturn += value + '<br />';
			  });
				});    
			document.getElementById("txtHint").innerHTML = ajaxReturn;*/
			//document.getElementById("txtHint").innerHTML = JSON.stringify(this.responseText);
            document.getElementById("txtHint").innerHTML = JSON.stringify(myObj);
		  }
    };
    xmlhttp.open("GET", "ajax-get.php?q=" + str, true);
    xmlhttp.send();
  }
}

var ajaxReturn = '';
</script>

<form>
<select name="users" onchange="showUser(this.value)">
  <option value="">Select a person:</option>
  <option value="1">Peter Griffin</option>
  <option value="2">Lois Griffin</option>
  <option value="3">Joseph Swanson</option>
  <option value="4">Glenn Quagmire</option>
  </select>
</form>
<br>
<p id="txtIterate">Data: <br /></p>
<div id="txtHint"><b>Person info will be listed here...</b></div>

