export const bannerComponent = () => {
  const bannerGaleria = document.createElement("section");
  bannerGaleria.id = "bannerGaleria";

  //   const galeria = document.createElement("article");
  //   galeria.id = "galeria";
  bannerGaleria.innerHTML = `
    <h2 class="galeria">GALERIA</h2>`;

  //  }
  return bannerGaleria;
};
