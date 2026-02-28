// Create a character card with: properties: name, class, level, health, and image and methods: attacked and levelUp

// Use an object with properties and methods.

// The .attacked() method will subtract 20 from the health property value. When the health property reaches zero, let the user know the character has died.

// The .levelUp() method will add 1 to the level property value.
const deathMessage = document.querySelector(".deathMessage");
const reset = document.querySelector(".reset");
const attacked = document.querySelector(".attacked");
const levelUp = document.querySelector(".levelUp");
const level = document.querySelector("#level");
const health = document.querySelector("#health");
const charClass = document.querySelector("#class");

let megaKnight = {
    name: "Mega Knight",
    class: "Strong Brute",
    level: 1,
    health: 100,
    image: "Gemini_Generated_Image_9z4ju79z4ju79z4j.png",
    attacked: function() {
        let newHealth = megaKnight.health - 20;
        if (newHealth === 0) {
            deathMessage.classList.add("active");
            health.innerHTML = `<strong>Health:</strong> 0`;
        } else {
            megaKnight.health -= 20;
            health.innerHTML = `<strong>Health:</strong> ${megaKnight.health}`;
        }
    },
    levelUp: function () {
        if (health.innerHTML != `<strong>Health:</strong> 0`) {
            megaKnight.level += 1;
            megaKnight.health += 20;
            level.innerHTML = `<strong>Level:</strong> ${megaKnight.level}`;
            health.innerHTML = `<strong>Health:</strong> ${megaKnight.health}`;
        }
    }
}

charClass.innerHTML = `<strong>Class:</strong> ${megaKnight.class}`;
level.innerHTML = `<strong>Level:</strong> ${megaKnight.level}`;
health.innerHTML = `<strong>Health:</strong> ${megaKnight.health}`;

reset.addEventListener("click", () => {
    deathMessage.classList.remove("active");
    megaKnight.health = 100;
    megaKnight.level = 1;
    level.innerHTML = `<strong>Level:</strong> ${megaKnight.level}`;
    health.innerHTML = `<strong>Health:</strong> ${megaKnight.health}`;
})

attacked.addEventListener("click", () => {
    megaKnight.attacked();
})

levelUp.addEventListener("click", () => {
    megaKnight.levelUp();
})