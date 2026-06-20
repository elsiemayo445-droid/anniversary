function generateCode() {

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = "";

    for(let i=0;i<10;i++){

        code += chars.charAt(
        Math.floor(Math.random()*chars.length)
        );

    }

    return code;
}

function createProposal() {

    const proposer =
    document.getElementById("proposer").value;

    const partner =
    document.getElementById("partner").value;

    if(!proposer || !partner){

        alert("Please fill all fields");
        return;
    }

    const code = generateCode();

    const proposal = {

        proposer: proposer,
        partner: partner,
        date: new Date().toLocaleDateString()

    };

    localStorage.setItem(
        code,
        JSON.stringify(proposal)
    );

    document.getElementById(
        "proposalResult"
    ).innerHTML =
    `<h3>Your Proposal Code:</h3>
     <h2>${code}</h2>`;
}

function verifyProposal() {

    const code =
    document.getElementById("proposalCode").value;

    const proposal =
    localStorage.getItem(code);

    if(!proposal){

        alert("Invalid Code");
        return;
    }

    localStorage.setItem(
        "selectedProposal",
        proposal
    );

    window.location.href =
    "certificate.html";
}

window.onload = function(){

    const page =
    window.location.pathname;

    if(page.includes("certificate.html")){

        const proposal =
        JSON.parse(
        localStorage.getItem(
        "selectedProposal"));

        if(!proposal){
            return;
        }

        document.getElementById(
        "name1").innerText =
        proposal.proposer;

        document.getElementById(
        "name2").innerText =
        proposal.partner;

        document.getElementById(
        "date").innerText =
        proposal.date;
    }
};

function goToSlideshow(){

    window.location.href =
    "slideshow.html";

}
const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg"
];

let currentSlide = 0;

function startSlideshow() {

    const slide = document.getElementById("slide");

    if (!slide) return;

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= photos.length) {
            currentSlide = 0; // Start again from first photo
        }

        slide.style.opacity = 0;

        setTimeout(() => {

            slide.src = photos[currentSlide];

            slide.style.opacity = 1;

        }, 500);

    }, 3000);

}

function startMusic() {

    const song = document.getElementById("loveSong");

    if (!song) {
        console.log("Audio element not found");
        return;
    }

    song.play();

    song.addEventListener("ended", () => {
        console.log("Song finished");
        window.location.href = "loveletter.html";
    });

}

window.onload = function() {

    startSlideshow();

    startMusic();

};

function goToLoveLetter() {

    const song = document.getElementById("loveSong");

    if(song){
        song.pause();
    }

    window.location.href = "loveletter.html";
}