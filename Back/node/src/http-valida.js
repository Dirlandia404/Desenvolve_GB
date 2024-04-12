function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}
async function checaStatus(listaUrs) {
  const arrStatus = await Promise.all(
    listaUrs.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;
      } catch (error) {
        return manejaErros(error);
      }
    })
  );
  return arrStatus;
}

function manejaErros(erro) {
  if (erro.cause.code === "ENOTFOUND") {
    return "link não encontrado";
  } else {
    return "ocorreu algum erro";
  }
}
export default async function listaValidada(listaLinks) {
  const links = extraiLinks(listaLinks);
  const status = await checaStatus(links);
  return listaLinks.map((objeto, índice) => ({
    ...objeto,
    status: status[índice],
  }));
}
