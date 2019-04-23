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
				SetResults(this.responseText);
			}
			if (this.status === 404) {
				SetResults("Page not found.");
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

// Hero Functions
function GetHeroBase(method, param = '') {
	return getRequest(heroController, getFunction, getHeroFile, method, param);
}

function getAllHeroes() {
	GetHeroBase("getAllHeroes");
}

function getHeroById() {
	var id = document.forms["form"]["heroId"].value;
	GetHeroBase("getHeroById", id);
}

function getHeroByName() {
	var name = document.forms["form"]["heroName"].value;
	GetHeroBase("getHeroByName", name);
}

function getHeroByRealName() {
	var realName = document.forms["form"]["heroRealName"].value;
	GetHeroBase("getHeroByRealName", realName);
}

function getHeroesByPublisher() {
	var publisher = document.forms["form"]["heroPublisher"].value;
	GetHeroBase("getHeroesByPublisher", publisher);
}

// Villain Functions
function GetVillanBase(method, param = '') {
	return getRequest(villainController, getFunction, getVillainFile, method, param);
}

function getAllVillains() {
	GetVillanBase("getAllVillains");
}

function getVillainsById() {
	var id = document.forms["form"]["villainId"].value;
	GetVillanBase("getVillainById", id);
}

function getVillainsByName() {
	var name = document.forms["form"]["villainName"].value;
	GetVillanBase("getVillainByName", name);
}

function getVillainByRealName() {
	var realName = document.forms["form"]["villainRealName"].value;
	GetVillanBase("getVillainByRealName", realName);
}

function getVillainsByPublisher() {
	var publisher = document.forms["form"]["villainPublisher"].value;
	GetVillanBase("getVillainByPublisher", publisher);
	getRequest(villainController, getFunction, getVillainFile, "villainPublisher", id);
}

function getVillainsByCrime() {
	var crime = document.forms["form"]["villainCrime"].value;
	GetVillanBase("getVillainByCrime", crime);
}

// Miscellanous Functions
function getPublishers(type) {
	if (type.toLowerCase() === "hero")
		GetGetHeroBase("getPublishers");
	else if (type.toLowerCase() === "villain")
		GetVillanBase("getPublishers");
	else
		return {
			"data": "Error: Not Found"
		};
}

function getCrimes() {
	GetVillanBase("getCrimes");
}
