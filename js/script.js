const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title');
    const descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
        // Закрываем все открытые окна
        document.querySelectorAll('.program-line__descr').forEach((elem) => {
            if (elem !== descr) {
                elem.classList.remove('active');
            }
        });

        // Переключаем класс у текущего элемента
        if (descr.classList.contains('active')) {
            descr.classList.remove('active');
        } else {
            descr.classList.add('active');
        }
    })
})