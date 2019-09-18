document.addEventListener("DOMContentLoaded", function(){
	//load page content
	var page = window.location.hash.substr(1);
	if (page == "") page = "home";
	loadPage(page);
	
	function loadPage(page){
		var xhttp = new XMLHttpRequest ();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4){
				var content = document.querySelector("#body-content");
				if (this.status == 200){
					content.innerHTML = xhttp.responseText;
				} else if (this.status == 404){
					content.innerHTML = "<p>Halaman Tidak ditemukan.</p>";
				} else {
					content.innerHTML = "<p>Upss... halaman tidak dapat diakses.</p>";
				}
			}
		};
		xhttp.open("GET", "pages/" + page + ".html", true);
		xhttp.send();
	}
	
	//turn on sidebar
	var elems = document.querySelectorAll(".sidenav");
	M.Sidenav.init(elems);
	loadNav();
			
	function loadNav(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4){
					if(this.status != 200) return;
					
					//load menu ya asu
					document.querySelectorAll(".topnav, .sidenav").forEach(function(elm){
						elm.innerHTML = xhttp.responseText;
					});
					
					//event listener uwu
					document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm){
						elm.addEventListener("click", function(event){
							
							//close sidenav
							var sidenav = document.querySelector(".sidenav");
							M.Sidenav.getInstance(sidenav).close();
							
							//load content yang dipanggil
							page = event.target.getAttribute("href").substr(1);
							loadPage(page);
						});
					});
			}
		};
		xhttp.open("GET", "nav.html", true);
		xhttp.send();
		}
	});