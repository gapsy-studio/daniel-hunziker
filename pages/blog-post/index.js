import gsap from 'gsap'

let mm = gsap.matchMedia()

document.addEventListener('DOMContentLoaded', function () {
	function adjustContent() {
		const cards = document.querySelectorAll('.blog-list_card')
		const screenWidth = window.innerWidth

		cards.forEach((card) => {
			const title = card.querySelector('h4')
			const text = card.querySelector('.blog-list-card-text')

			const maxTitleChars = 50 // Максимальное количество символов для заголовка
			const halfMaxTitleChars = 35
			const maxTextChars = 135 // Максимальное количество символов для текста

			let titleText = title.textContent.trim()
			let textContent = text.textContent.trim()

			// Условия для экранов шире 480 пикселей
			if (screenWidth > 480) {
				// Обрезаем текст заголовка до 70 символов и добавляем многоточие, если нужно
				if (titleText.length > maxTitleChars) {
					title.innerHTML = titleText.slice(0, maxTitleChars).trim() + '...'
				} else {
					title.innerHTML = titleText
				}

				// Если текст заголовка меньше половины максимального, добавляем перенос строки
				if (title.textContent.length < halfMaxTitleChars) {
					title.innerHTML += '<br><br>' // Добавляем два <br>, чтобы гарантировать высоту двух строк
				}

				// Обрезаем текст до 120 символов и добавляем многоточие, если нужно
				if (textContent.length > maxTextChars) {
					text.textContent = textContent.slice(0, maxTextChars).trim() + '...'
				}
			}
			// Условия для экранов уже 379 пикселей и меньше
			else if (screenWidth <= 379) {
				// Не обрезаем заголовки, не добавляем <br>
				title.innerHTML = titleText

				// Обрезаем текст до 120 символов и добавляем многоточие, если нужно
				if (textContent.length > maxTextChars) {
					text.textContent = textContent.slice(0, maxTextChars).trim() + '...'
				}
			}
		})
	}

	// Вызываем функцию при загрузке страницы
	adjustContent()

	// Добавляем обработчик события на изменение размера окна
	window.addEventListener('resize', adjustContent)

	mm.add('(max-width: 479px)', () => {
		const swiper = new Swiper('.blog-list_wrapper', {
			slidesPerView: 1,
			loop: true,
			pagination: true,
			spaceBetween: 10,
		})
		return
	})
})
