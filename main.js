const bttn = document.querySelector(".submit");

const originalPreview = document.querySelector(".preview");
bttn.addEventListener("click", () => {
    const titleInput = document.querySelector(".add-title").value;
    const infoInput = document.querySelector(".add-info").value;

    if (titleInput != "" && infoInput != "") { // Proceed if input is detected
        const clonePreview = originalPreview.cloneNode(true);
        clonePreview.querySelector(".preview-title").textContent = titleInput;
        clonePreview.querySelector(".preview-info").textContent = infoInput;
        clonePreview.style.display = "block";

        clonePreview.querySelector(".remove-bttn").addEventListener("click", () => {
            clonePreview.remove();
        })
        
        document.querySelector(".scroll-block").appendChild(clonePreview);
    }

});
