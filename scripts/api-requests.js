const apiUrl = 'https://80e5vibnt2.execute-api.us-west-2.amazonaws.com/default/ucsb-sa-ssis-hero-villan-sample-api';
// <controller>/<function>/<filename>/<method>/<id>
const apiKey = 'vStEDmXifu7Z55GmMcJQj5G3IvXyQUzx4NXZYAKP';

const heroController = 'hero';
const villainController = 'villain';
const getFunction = 'get';
const postFunction = 'post';
const deleteFunction = 'delete';
const getHeroFile = 'getHero';
const getVillainFile = 'getVillain';

function getRequest(controller, functionName, filename, method, id) {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				elmnt.innerHTML = this.responseText;
			}
			if (this.status === 404) {
				elmnt.innerHTML = "Page not found.";
			}
		}
	};
	xhr.open("GET", `${apiUrl}/${controller}/${functionName}/${filename}/${method}/${id}`, true);
	xhr.setRequestHeader("x-api-key", apiKey);
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.send();
}

function SetResults(response) {
	document.getElementById("results").innerHTML = response;
}

function getHeroById() {
	var id = document.forms["form"]["heroId"].value;
	var response = getRequest(heroController, getFunction, getHeroFile, "getHeroById", id);
	SetResults(response);
}
