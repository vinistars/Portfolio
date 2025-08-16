function toggleMode()
{
    const html = document.documentElement;
    html.classList.toggle("light")

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light"))
    {
        img.setAttribute("src", "imagens/foto.jpg");
    }
    else
    {
        img.setAttribute("src", "imagens/Captura de tela 2025-08-16 135618.png");
    }    

}