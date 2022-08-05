document.querySelector('.show-more-button').addEventListener('click', function() {
	// If text is shown less, then show complete
	if(this.getAttribute('data-more') == 0) {
		this.setAttribute('data-more', 1);
		this.style.display = 'block';
		this.innerHTML = 'Know Less';

		this.previousElementSibling.style.display = 'none';
		this.previousElementSibling.previousElementSibling.style.display = 'inline';
	}
	// If text is shown complete, then show less
	else if(this.getAttribute('data-more') == 1) {
		this.setAttribute('data-more', 0);
		this.style.display = 'inline';
		this.innerHTML = 'Know More';

		this.previousElementSibling.style.display = 'inline';
		this.previousElementSibling.previousElementSibling.style.display = 'none';
	}	
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Know more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Know less";
    moreText.style.display = "inline";
  }
}
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var contentText = document.getElementById("content");
  var btnText = document.getElementById("buttonReadMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View All";
    contentText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View Less";
    contentText.style.display = "inline";
  }
}