
// NOTE: было
function drawRating(vote) {
	if (vote >= 0 && vote <= 20) {
    	return '★☆☆☆☆';
	}
	else if (vote > 20 && vote <= 40) {
		return '★★☆☆☆';
	}
	else if (vote > 40 && vote <= 60) {
		return '★★★☆☆';
	}
	else if (vote > 60 && vote <= 80) {
		return '★★★★☆';
	}
	else if (vote > 80 && vote <= 100) {
		return '★★★★★';
	}
}

// NOTE: стало
function drawRatingNew(vote) {
  const MAX_RATING = 100,
        MIN_RATING = 0,
        AMOUNT = 5, // должна быть возможность рисовать рейтинг из любого количества звездочек
        emptyStar = "\u2606", //'☆', переведем спецсимволы в коды
        filledStar = "\u2605", //'★',
        starsCount = Math.ceil(AMOUNT * vote / MAX_RATING);
  // Добавим проверку вводного значения
  console.assert((vote >= MIN_RATING) && (vote <= MAX_RATING), "Vote value is incorrect");
  return filledStar.repeat(starsCount) + emptyStar.repeat(AMOUNT - starsCount);
}


// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
// Проверка работы результата
console.log(drawRatingNew(0) ); // ★☆☆☆☆
console.log(drawRatingNew(1) ); // ★☆☆☆☆
console.log(drawRatingNew(50)); // ★★★☆☆
console.log(drawRatingNew(99)); // ★★★★★