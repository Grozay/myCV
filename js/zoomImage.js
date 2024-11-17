const imgZoom = document.querySelector('.img-zoomable');
const divZoomArea = document.querySelector('#div-zoom-area');
const imgZoomAreaContent = document.querySelector('#img-zoom-area-content');

imgZoom.addEventListener('click', () => {
  divZoomArea.style.display = 'block';
  imgZoomAreaContent.src = imgZoom.src;
});

divZoomArea.addEventListener('click', () => {
  divZoomArea.style.display = 'none';
});

