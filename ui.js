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



});