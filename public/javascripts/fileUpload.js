const rootStyles = window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('--book-cover-width-large') && rootStyles.getPropertyValue('--book-cover-width-large') != ''){
  ready()
}
else{
  document.getElementById('main-css').addEventListener('load' , ready)
}

function ready(){
  const coverWidth = parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
  const aspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
  const coverHeight = coverWidth / aspectRatio

  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(FilePondPluginImageResize);
  FilePond.registerPlugin(FilePondPluginFileEncode);
  const inputElements = document.querySelectorAll('input[type="file"]');
  inputElements.forEach((inputElement) => {
    FilePond.create(inputElement);
  });


  FilePond.setOptions({
      stylePanelAspectRatio: 1 / aspectRatio,
      imageResizeTargetWidth: coverWidth,
      imageResizeTargetHeight: coverHeight
  })
  FilePond.parse(document.body);
}
