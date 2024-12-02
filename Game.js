let playerStats = {
    health: 100,
    mana: 100,
    gold: 0
};

const gameStory = {
    start: {
        text: "Köyün kenarındaki küçük kulübende uyanıyorsun. Bugün büyücülük yolculuğunun ilk günü. Ne yapmak istersin?",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                text: "İksir yapımını öğrenmek için köy meydanına git",
                nextScene: "village_square"
            },
            {
                text: "Büyülü ormanı keşfet",
                nextScene: "magic_forest"
            },
            {
                text: "Kristal mağarasını ziyaret et",
                nextScene: "crystal_cave"
            }
        ]
    },
    village_square: {
        text: "Köy meydanında yaşlı bir büyücü ile karşılaşıyorsun. Sana basit bir şifa iksiri yapmayı öğretebileceğini söylüyor.",
        image: 'img/village_square.jpg',
        choices: [
            {
                text: "Şifa iksiri yapmayı öğren (25 Mana)",
                action: () => {
                    if (playerStats.mana >= 25) {
                        playerStats.mana -= 25;
                        return "Şifa iksiri yapmayı öğrendin! Artık istediğin zaman kendini iyileştirebilirsin.";
                    }
                    return "Yeterli manan yok!";
                },
                nextScene: "start"
            },
            {
                text: "Köyün diğer bölgelerine git",
                nextScene: "start"
            }
        ]
    },
    magic_forest: {
        text: "Büyülü ormanda yürürken kırmızı mantarlar görüyorsun. Ayrıca tehlikeli yaratıklar da olabilir.",
        image: 'img/magic_forest.jpg',
        choices: [
            {
                text: "Mantarları topla",
                action: () => {
                    playerStats.gold += 10;
                    return "10 altın değerinde mantar topladın!";
                },
                nextScene: "start"
            },
            {
                text: "Daha derine ilerle",
                action: () => {
                    playerStats.health -= 20;
                    return "Bir orman canavarıyla karşılaştın ve 20 can kaybettin!";
                },
                nextScene: "start"
            }
        ]
    },
    crystal_cave: {
        text: "Kristal mağarasının girişindesin. İçeriden mavi bir ışık geliyor.",
        image: 'img/crystal_cave.jpg',
        choices: [
            {
                text: "Mağarayı keşfet",
                action: () => {
                    playerStats.mana += 30;
                    return "Büyülü kristaller sana 30 mana kazandırdı!";
                },
                nextScene: "start"
            },
            {
                text: "Köye geri dön",
                nextScene: "start"
            }
        ]
    }
};

function updateStats() {
    document.getElementById('health').textContent = playerStats.health;
    document.getElementById('mana').textContent = playerStats.mana;
    document.getElementById('gold').textContent = playerStats.gold;
}

function createChoiceButton(choice, scene) {
    const button = document.createElement('button');
    button.className = 'choice-button';
    button.textContent = choice.text;
    button.onclick = () => {
        let message = '';
        if (choice.action) {
            message = choice.action();
        }
        if (message) {
            showScene(scene, message);
        } else {
            showScene(gameStory[choice.nextScene]);
        }
    };
    return button;
}

function showScene(scene, additionalMessage = '') {
    const gameText = document.getElementById('game-text');
    const gameChoices = document.getElementById('game-choices');
    const heroContent = document.querySelector('.hero-content');
    
    heroContent.innerHTML = '';
    const img = document.createElement('img');
    img.src = scene.image;
    img.alt = 'Sahne Görseli';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    heroContent.appendChild(img);
    
    gameText.innerHTML = additionalMessage ? 
        `${additionalMessage}<br><br>${scene.text}` : 
        scene.text;
    
    gameChoices.innerHTML = '';
    scene.choices.forEach(choice => {
        gameChoices.appendChild(createChoiceButton(choice, scene));
    });
    
    updateStats();
}

function startGame() {
    document.querySelector('.hero').classList.add('hidden');
    document.getElementById('game-section').classList.remove('hidden');
    showScene(gameStory.start);
        // Mevcut içeriği temizle
        const heroContent = document.querySelector('.hero-content');
        heroContent.innerHTML = '';
        // Yeni görselleri ekle
        const images = [
            'img/GuestHouse.jpg',
        ];
    
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Maceraya Başla Görseli';
            img.style.width = '100%'; // Görsellerin genişliğini ayarlayın
            heroContent.appendChild(img);
        });
    


}

