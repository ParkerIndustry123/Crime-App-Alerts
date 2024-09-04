// Crime data arrays
const precincts = [
    "1ST PRECINCT", "6TH PRECINCT", "CENTRAL PARK", 
    "13TH PRECINCT", "5TH PRECINCT", "QUEENS", "BRONX", 
    "BROOKLYN", "HARLEM", "UPPER EAST SIDE"
];

const crimes = [
    { type: "Robbery in progress", audio: "C:/Users/Guyin/Downloads/Roberry.wav" },
    { type: "10-33 Emergency", audio: "C:/Users/Guyin/Downloads/10 33.wav" },
    { type: "Shots fired", audio: "C:/Users/Guyin/Downloads/Shots Fired.wav" },
    { type: "Suspicious activity", audio: "C:/Users/Guyin/Downloads/Sus.wav" },
    { type: "Assault reported", audio: "C:/Users/Guyin/Downloads/Assault.wav" },
    { type: "Pursuit in progress", audio: "audio/pursuit.mp3" }
];

const frequencies = [
    "460.4500", "480.5200", "560.4000", "460.1250", 
    "475.7500", "490.3200", "530.5500"
];

// Function to play audio with error handling
function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

// Function to randomize precinct and crime data
function generateCrimeReport() {
    const precinct = precincts[Math.floor(Math.random() * precincts.length)];
    const crime = crimes[Math.floor(Math.random() * crimes.length)];
    const frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    
    // Create the crime report element
    const report = document.createElement("div");
    report.className = "precinct";
    report.innerHTML = `
        <h2>${precinct}</h2>
        <p>${crime.type}</p>
        <p>FM: 101.3 FREQ.: ${frequency}</p>
    `;

    // Add the report to the UI
    const precinctsContainer = document.getElementById("precincts");
    precinctsContainer.appendChild(report);

    // Play the specific police report audio for the crime type
    playAudio(crime.audio);
}

// Generate a new crime report every 5 minutes
setInterval(generateCrimeReport, 300000);

// Initialize with a few reports
generateCrimeReport();
generateCrimeReport();
