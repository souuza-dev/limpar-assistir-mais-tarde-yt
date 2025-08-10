setInterval(function () {
  let video = document.getElementsByTagName('ytd-playlist-video-renderer')[0];
  if (!video) {
    console.log("Nenhum vídeo encontrado — talvez tudo tenha sido removido!");
    return;
  }

  let menuBtn = video.querySelector('#primary button[aria-label="Menu de ações"]');
  if (menuBtn) menuBtn.click();
  else return;

  setTimeout(() => {
    let items = document.evaluate(
      '//span[contains(text(),"Remover")]',
      document,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
    for (let i = 0; i < items.snapshotLength; i++) {
      items.snapshotItem(i).click();
    }
  }, 500);
}, 1000);
