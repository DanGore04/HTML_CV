
    let popup = document.getElementById("popup");

    function openPopup(){
        popup.classList.add("open-popup");
        document.getElementById("popup").scrollIntoView({ behavior: "smooth" });
    }

    function closePopup(){
        popup.classList.remove("open-popup");
    }

    function openSkills(){
        document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    }
