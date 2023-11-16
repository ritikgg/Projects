document.getElementById("searchInput").addEventListener("focus", function() {
    var input = document.getElementById("searchInput");
    // Added condition to clear the default text
    if (input.value === "Enter City Name") {
        input.value = "";
    }
});

document.getElementById("searchInput").addEventListener("blur", function() {
    var input = document.getElementById("searchInput");
    // Added condition to restore the default text if the input is empty
    if (input.value === "") {
        input.value = "Enter City Name";
    }
});

document.getElementById("searchInput").addEventListener("input", function() {
    var input = document.getElementById("searchInput");
    // Capitalize the first letter of the input value
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
});

var input = document.getElementById("searchInput").value;

// Input Validation
if (!input || input.trim() === "Enter City Name") {
    alert("Please enter a valid city name");
    return;
}

// Check for internet connection
if (!navigator.onLine) {
    alert("No internet connection. Please check your network settings.");
    return;
}

var apiUrl = // your API URL here;

// Show loading spinner
document.getElementById("loadingSpinner").style.display = "block";

// Make API call
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Weather information not available");
        }
        return response.json();
    })
    .then(data => {
        // Process the weather data
        // ...

        // Clear previous results
        document.getElementById("weatherDetails").innerHTML = "";
    })
    .catch(error => {
        console.error("Error fetching weather data:", error.message);
        alert("Error fetching weather data. Please try again later.");
    })
    .finally(() => {
        // Hide loading spinner after API call
        document.getElementById("loadingSpinner").style.display = "none";
    });

switch (val) {
    case 'Clouds':
        weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFTkt5z_dxU6w1UnS1PxiZV3HDiPGsAW5Lrsp09MnlCmkQre9GzO8MnGytaaY1eZoqBN6SMJ4U578_uDtiuXswovr1T3o-Kt5KK0mlN_zC0RDodJFaKHQ3Uk-HIZ3vuMvAKNJi8DDFwWA7F6BOxz78Oh-UePwJTuc3PG0ZIZypPE1xlMPl5z46joaEw/s320/Clouds.png";
        break;
    case 'Clear':
        weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7pmzNCftryAfpa1YBSzVeYtjgxDQnw09Ug0HVV47J8GEtHPYTH9hJgZ2M1k0YgE0pcZ1qekr4C14zyPCiVuQAfXLClK8Ww3hYB6v77yElP7Lo5BnUKo4n-w6yB17FAbw51WST6YKS0GMwyA4fYNxOZxEyNL6HhUfFRgVhOW0GyRdBRriMHFQ-qfh4cA/s320/sun.png";
        break;
    case 'Rain':
        weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDW_NdwvxV796rkFf43qmUDiTQePn5dg7PDfn1SijfpjtB0AWJMBcifU6LWyW7iOtjZhfqIJnKEGQ1PwbbXS7NoKMSAmvy7i2ljWXMYLue3EBIBBR2qTFbs6QCe5eoFr2CU9WzCVJ8u0J3z3eAo3Ajv1LXamZASFtbj9sA_gD-Kp3hfgAk17Xh17RoLQ/s320/rainy.png";
        break;
    case 'Mist':
        weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpL23l0t1U_ibWi01TFcHMF6J_t-9Ada5PavGlwG4M_mKIcx0pV1md9SN9ip1d84NaVowml5Do16XO3nsuttnM2-Ov05d-wCjEYjdzaOYfKvijw8k6Hfj9pOiPyEZTp2W20EPbTeONTgJE2Rdxs4KZUfg6f2PmbMF1094NcqJ7DwSFUQwYiRmVCNvuA/s320/mist.png";
        break;
    case 'Snow':
        weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-P3iT_uQK95qFY4h7QGdEtbRc1aVQo9BZy0ZWyPBvCNrP-4wnRStw0xYj9e4xa4ZlYISeNZqVJ33UP4YukR4jBennDD_obIN4QxYNZHdzG_z6_MNL2U08wMXwdFhtfvitW5LGiHgrwMJFC8QJFqbSO3woGSBqOdagGxaEQ20_S31Gc-GYL4vYzPzaPw/s320/snow.png";
        break;
    case 'Haze':
        weatherIcon.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjld66Ia5g_hpBn3Impi3zzOBHqWkjQInGLxTb2uXksuCsrkQU8HjlVyLobEJEGg8fRSIxeFzldGEHUmWcaiZBwAcRy4dGDpFX1BjTSB56qmBjW5tEW3RSC9_mCuLU_a8RuXchxGY7Oc8HLLl-IfaDW19Z0ZJJfNae9tECXRIyEu7rmJ3da08z8cI-phw/s320/haze.png";
        break;
}
