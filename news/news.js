const nerds = document.getElementsByClassName("nerd-info");

for(let nerd of nerds)
{
    const toggle = document.getElementById(nerd.dataset.number);

    nerd.addEventListener("click", () => 
    {
        nerd.classList.toggle("active");
        toggle.classList.toggle("hidden");
    });
}