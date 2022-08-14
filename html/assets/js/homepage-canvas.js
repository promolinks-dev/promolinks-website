(function () {

	const canvas = document.querySelector("#home-canvas");

	if (!canvas) {
		return;
	}

	const canvasBgImage = new Image();
	const backgroundColor = "#030318";
	const width = window.innerWidth;
	const height = window.innerHeight - 100;
	const baseUrl = canvas.getAttribute('data-baseurl') ?? window.location.origin;

	canvasBgImage.src = baseUrl + canvas.getAttribute('data-canvas-bg-path');
	canvasBgImage.onload = render

	canvas.width = width;
	canvas.height = height;

	const ctx = canvas.getContext("2d");

	let counter = 0;

	const minStarOpacity = 0.1;
	const maxStarOpacity = 0.6;

	function randomInt(max, min = 0) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const maxStarRadius = 1.5;

	function createStars(width, height, spacing) {
		const stars = [];

		for (let x = 0; x < width; x += spacing) {
			for (let y = 0; y < height; y += spacing) {
				const star = {
					x: x + randomInt(spacing),
					y: y + randomInt(spacing),
					r: Math.random() * maxStarRadius,
				};
				stars.push(star);
			}
		}
		return stars;
	}


	const stars = createStars(width, height, 35);


	function fillCircle(ctx, x, y, r, fillStyle) {
		ctx.beginPath();
		ctx.fillStyle = fillStyle;
		ctx.arc(x, y, r, 0, Math.PI * 2);
		ctx.fill();
	}

	function getOpacity(factor, counter, starIndex) {

		if (stars[starIndex]['opacity'] != undefined) {
			if (!(stars[starIndex]['opacity'] + 0.04) > maxStarOpacity) {
				// minStarOpacity + 0.01  
				return stars[starIndex]['opacity'] + 0.04
			}
		}

		const opacityIncrement = (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
		const opacity = minStarOpacity + opacityIncrement;

		return opacity;
	}

	function setCanvasBgImage(ctx) {
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, width, height);
		ctx.drawImage(canvasBgImage, 0, 0, width, height);
	}

	function render() {

		setCanvasBgImage(ctx)

		stars.forEach(function (star, i) {
			// factor will be a different number for every star
			const factor = counter * i;
			const x = star.x;
			const y = star.y;
			const opacity = getOpacity(factor, counter, i);

			stars[i] = {
				...star,
				opacity
			}

			fillCircle(ctx, x, y, star.r, `rgba(255, 255, 255, ${opacity}`);
		});
		counter++;
		requestAnimationFrame(render);
	}
})();
