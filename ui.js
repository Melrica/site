/* ==================================================================================================== */
/* Theme Modes
/* ==================================================================================================== */
document.addEventListener('DOMContentLoaded', function () {



	/* ==================== */
	/* Recent work
	/* ==================== */
	if (matchMedia('(hover: none)').matches) {
		const recentWork = document.querySelectorAll('.recentWork__list figure');

		function clearRecentWorkSelections() {
			recentWork.forEach(elFigure => {
				elFigure.classList.remove('--selected');
			});
		}

		recentWork.forEach(elFigure => {
			elFigure.addEventListener('click', function (e) {
				if (this.classList.contains('--selected')) {
					elFigure.classList.remove('--selected');
				} else {
					clearRecentWorkSelections();
					elFigure.classList.add('--selected');
				}
			});
		});
	}



	/* ==================== */
	/* Testimonials
	/* ==================== */
	const cards = document.querySelectorAll('.testimonial__card');
	const ctas = document.querySelectorAll('.testimonial__cta');

	document.querySelector('.jsNextTestimonial').addEventListener('click', function (e) {
		if (!this.classList.contains('--disabled')) {
			cards[0].classList.add('--hidden');
			ctas[1].classList.add('--disabled')

			cards[1].classList.remove('--hidden');
			ctas[0].classList.remove('--disabled')
		};
	});

	document.querySelector('.jsPrevTestimonial').addEventListener('click', function (e) {
		if (!this.classList.contains('--disabled')) {
			cards[1].classList.add('--hidden');
			ctas[0].classList.add('--disabled')

			cards[0].classList.remove('--hidden');
			ctas[1].classList.remove('--disabled')
		};
	});

});