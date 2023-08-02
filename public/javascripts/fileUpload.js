FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginImageResize);
FilePond.registerPlugin(FilePondPluginFileEncode);
const inputElements = document.querySelectorAll('input[type="file"]');
inputElements.forEach((inputElement) => {
  FilePond.create(inputElement);
});


FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
})
FilePond.parse(document.body);
