// create form elements
const form = document.createElement("form");
form.className = "form-inline";
form.innerHTML = '<div class="form-group"><label for="formAuthor" class="sr-only">Enter author</label><input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="formAuthor" placeholder="Enter author"></div><div class="form-group"><label for="formTitle" class="sr-only">Enter link title</label><input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="formTitle" size=40 placeholder="Enter link title"></div><div class="form-group"><label for="formUrl" class="sr-only">Enter link URL</label><input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="formUrl" size=70 placeholder="Enter link URL"></div><button type="submit" class="btn btn-primary">Add link</button>';

// show form when user clicks on submit button
const contentDiv = document.getElementById("content");
document.getElementById("submitButton").addEventListener("click", ()=> contentDiv.insertBefore(form, contentDiv.childNodes[0]));

// validate form (fields are required)


// when use submits form, link is added to list


// create 3 prepopulated links
const defaultLinks = [
	{
		user:"Baptiste", 
	 	title: "Hacker News", 
	 	url: "https://news.ycombinator.com"
	 },
	 {
	 	user:"Thomas", 
	 	title: "Reddit", 
	 	url: "https://reddit.com"
	 },
	 {
	 	user:"Daniel", 
	 	title: "Boing Boing", 
	 	url: "http://boingboing.net"
	 }
];






// success message appears and disappears after 2 seconds

