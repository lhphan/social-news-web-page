// create form elements
const form = document.createElement("form");
form.className = "form-inline";
form.innerHTML = '<div class="form-group"><label for="formAuthor" class="sr-only">Enter author</label><input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="formAuthor" placeholder="Enter author" required></div><div class="form-group"><label for="formTitle" class="sr-only">Enter link title</label><input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="formTitle" size=40 placeholder="Enter link title"></div><div class="form-group" required><label for="formUrl" class="sr-only">Enter link URL</label><input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="formUrl" size=70 placeholder="Enter link URL" required></div><button type="submit" class="btn btn-primary">Add link</button>';

// show form when user clicks on submit button
const contentDiv = document.getElementById("content");
document.getElementById("submitButton").addEventListener("click", ()=> {
	contentDiv.insertBefore(form, contentDiv.childNodes[0]);
	document.querySelector("form").addEventListener("submit", e => {
		e.preventDefault();
		const author = document.getElementById("formAuthor").value;
		const title = document.getElementById("formTitle").value;
		const url = document.getElementById("formUrl").value;

		if(author !== null && title !== null && url !== null){
			const linkDiv = document.createElement("div");
			linkDiv.className = "link";
			const h4Element = document.createElement("h4");
			h4Element.className = "linkHeadLine";
			console.log("form complete");
			contentDiv.append(linkDiv);
			const linkElement = document.createElement("a");
			linkElement.setAttribute("href", url);
			linkElement.className = "linkTitle";
			linkElement.textContent = title;
			const spanUrl = document.createElement("span");
			spanUrl.className = "linkUrl";
			// check if the URL starts with http
			if(url.toLowerCase().startsWith("http") === false){
				spanUrl.textContent = "http://" + url;
			}else{
				spanUrl.textContent = url;
			}
			const spanAuthor = document.createElement("span");
			spanAuthor.className = "linkAuthor";
			spanAuthor.textContent = `Submitted by ${author}`;

			// when user submits form, link is added to list

			contentDiv.insertBefore(linkDiv, contentDiv.childNodes[1]);
			linkDiv.append(h4Element);
			h4Element.append(linkElement);
			h4Element.append(spanUrl);
			linkDiv.append(spanAuthor);
		}

		// success message appears and disappears after 2 seconds
		
		
	});
});





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

const displayDefaultLinks = defaultLinks.map(link => {
	const linkDiv = document.createElement("div");
	linkDiv.className = "link";
	linkDiv.innerHTML = `<h4 class="linkHeadLine"><a href="${link.url}" class="linkTitle">${link.title}</a><span class="linkUrl">${link.url}</span></h4><span class="linkAuthor">Submitted by ${link.user}</span>`;
	contentDiv.append(linkDiv);
});








