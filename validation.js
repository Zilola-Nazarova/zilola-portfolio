function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	const suggestEmail=' Replace with it '+form.elements['user_email'].value.toLowerCase();
	console.log(suggestEmail);
	msg.innerText = message + suggestEmail;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function validateEmail(input, invalidMsg) {
	const emailRegex = /^[^A-Z\s]+\.[^A-Z\s]+$/;
	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#send-message");

const EMAIL_LOWERCASE = "Please enter a your email in lower case.";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let emailValid = validateEmail(form.elements["user_email"], EMAIL_LOWERCASE);
	// if valid, submit the form.
	if (emailValid) {
		form.submit();
	}
});

