const blurredImages = document.querySelectorAll('.blur-load');

blurredImages.forEach((wrapper) => {
  const image = wrapper.querySelector('img');

  const loaded = () => {
    wrapper.classList.add('loaded');
    console.log('loaded');
  };

  if (image.complete) {
    loaded();
  } else {
    image.addEventListener('load', loaded);
  }
});
