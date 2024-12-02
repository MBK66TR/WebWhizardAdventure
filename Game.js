let playerStats = {
    health: 100,
    mana: 100,
    Intelligence: 10,
    Strength: 10,
    Agility: 10,
    gold: 0
};

//Variables 
let progress = 0;

const gameStory = {

    //#region GuestHouse
    start: {
        text: "(Bir kulübende uyanıyorsun. Kendini ve hafızanı kaybetmişsin kim olduğunu bile bilmiyorsun. Karşında Yaşlı bir adam oturuyor.)",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                text: "Sende kimsin?",
                nextScene: "FirstWhizard_1",
                progress: progress + 1
            },
            
        ]
    },



    FirstWhizard_1: {
        text: "Yaşlı adam sana kendini tanıtıyor. 'ben bu köyün şifacısıyım.' diyor. ",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                text: "Ben kimim?",
                nextScene: "FirstWhizard_2",
                progress: progress + 1
            }
        ]
    },
    FirstWhizard_2: {
        text: "Seni tanımıyorum kapımın önünde yardıma muhtaç bir haldeydin şimdi durumunun bu kadar iyi olduğunu görmek güzel.",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                text: "Neredeyim ben?",
                nextScene: "FirstWhizard_3",
                progress: progress + 1
            }
        ]
    },
    
    FirstWhizard_3: {
        text: "(Şifacı bulunduğun adayı anlatır. Sen bu adayı daha önce ne duymuş nede görmüşsün. Ada hakkında hiçbir fikrin yok.)",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                text: "Biraz dışarıyı dolanabilir miyim?",
                nextScene: "FirstWhizard_4",
                progress: progress + 1
            }
        ]
    },

    FirstWhizard_4: {
        text: "Hayır. Şu an gece. Geceleri etraf kötü ruhlar ile doludur. Tehlikelidir geceleri dışarı çıkmak. ",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                text: "Sabahı bekle",
                nextScene: "FirstWhizard_6",
                progress: progress + 1
            },
            {
                text: "Dışarı çık",
                action: () => {
                    playerStats.Strength += 1;
                    playerStats.health -= 25;
                },
                nextScene: "FirstWhizard_5_1",
                progress: progress + 1
            },
        ]
    },

    FirstWhizard_5_1: {
        text: "Kötü Ruhlar tarafından saldırdı. Savunma için hareket bile edemedin.(Yetersiz Zeka)(25 Can Kaybettin)(1 Dayanıklılık Kazandın)",
        image: 'img/DemonsOnStreet.jpg',
        choices: [
            {
                text: "Devam et",
                nextScene: "FirstWhizard_5",
                progress: progress + 1
            }
        ]
    },

    FirstWhizard_5: {
        text: " Baygın bir şekilde kendini tekrar şifacının yatağında buluyorsun. Şifacı sana seni iyileştirdiğini ve köydekilerden birinin seni bulduğu için şanslı olduğunu söylüyor.",
        image: 'img/GuestHouse.jpg',
        choices: [
            {
                action: () => {
                    playerStats.health = 100;
                },
                text: "Büyücüyle konuş",
                nextScene: "Meydan",
                progress: progress + 1
            }
        ]
    },
    //#endregion

    //progress 5 or 6
    Meydan: {
        text: "Gün doğduğunda köyün meydanına gidiyorsun.",
        image: 'img/village_square.jpg',
        choices: [
            {
                text: "Adada bir tehlike var.",
                nextScene: "AdadakiTehlike",
                progress: progress + 1
            },
            {
                text: "",
                nextScene: "village_square",
                progress: progress + 1
            },
            {
                text: "",
                nextScene: "village_square",
                progress: progress + 1
            },
            {
                text: "",
                nextScene: "village_square",
                progress: progress + 1
            },
        ]
    },

    //#region AdadakiTehlike
    AdadakiTehlike: {
        text: "Köy meydanında bir grup insan toplanmış ve tartışıyor. Yaşlı bir adam, 'Adanın kuzeyinde bir kule var. Orada bir zamanlar adanın koruyucuları yaşardı. Ancak onlar kaybolduktan sonra ada kötü ruhların istilasına uğradı.' diyor.",
        image: 'img/VillageSquare.jpg',
        choices: [
            {
                text: "Kuleye gitmek ve bu laneti çözmek istiyorum.",
                nextScene: "Kuleye_Yolculuk",
                progress: progress + 1
            },
            {
                text: "Köyde kalıp lanet hakkında daha fazla bilgi toplamalıyım.",
                nextScene: "Meydan",
                progress: progress + 1
            }
        ]
    },
    
    Kuleye_Yolculuk: {
        text: "Kuleye doğru yola çıkıyorsun. Yolculuk sırasında derin ve karanlık bir ormandan geçmen gerekiyor.",
        image: 'img/ForestPath.jpg',
        choices: [
            {
                text: "Fısıltıların kaynağını araştır",
                nextScene: "OrmandakiRuhlar",
                condition: () => playerStats.Intelligence >= 15,
                failScene: "YetersizZeka",
                progress: progress + 1
            },
            {
                text: "Yoluna devam et",
                nextScene: "Orman_GuvenliCikis",
                progress: progress + 1
            }
        ]
    },
    
    OrmandakiRuhlar: {
        text: "Fısıltıları takip ederek, terk edilmiş bir tapınağa ulaşıyorsun. İçeride eski bir ruh, adanın geçmişi hakkında konuşuyor. 'Bir zamanlar bu ada, büyücülerin cenneti idi. Ama ihanet her şeyi mahvetti.' diyor.",
        image: 'img/AbandonedTemple.jpg',
        choices: [
            {
                text: "Ruhun hikayesini dinle ve detayları öğren.",
                action: () => {
                    playerStats.Intelligence += 1;
                },
                nextScene: "RuhHikayesi",
                progress: progress + 1
            },
            {
                text: "Bu fazla zaman alıyor, yoluma devam etmeliyim.",
                nextScene: "Orman_GuvenliCikis",
                progress: progress + 1
            }
        ]
    },
    
    RuhHikayesi: {
        text: "Ruh, adanın eski büyücüleri ve onların yarattığı lanet hakkında detaylı bilgiler veriyor. Adanın kalbinde saklanan bir artefakt, lanetin kaynağı olabilir. Ancak artefakt, güçlü bir koruyucunun elinde.",
        image: 'img/AncientArtifact.jpg',
        choices: [
            {
                text: "Artefaktı bulmak için tapınağın içindeki haritayı al.",
                nextScene: "ArtefaktArayisi",
                progress: progress + 1
            },
            {
                text: "Haritayı almak riskli görünüyor, buradan uzaklaş.",
                nextScene: "Orman_GuvenliCikis",
                progress: progress + 1
            }
        ]
    },
    
    Orman_GuvenliCikis: {
        text: "Ormandan çıkmayı başarıyorsun, ancak seni bekleyen yeni bir tehlike var. Kuleye ulaştığında girişin, eski bir büyüyle mühürlendiğini görüyorsun.",
        image: 'img/TowerEntrance.jpg',
        choices: [
            {
                text: "Mührü çözmek için büyü öğren.",
                action: () => {
                    playerStats.mana -= 50;
                },
                nextScene: "Kule_MuhurCozme",
                progress: progress + 1
            },
            {
                text: "Köye dönüp yardım iste.",
                nextScene: "Meydan",
                progress: progress + 1
            }
        ]
    },
    
    Kule_MuhurCozme: {
        text: "Mührü çözmek için eski büyücülerin kitabından bir büyü öğreniyorsun. Ancak büyü, gücünü büyük ölçüde tüketiyor.",
        image: 'img/SpellBook.jpg',
        choices: [
            {
                text: "Gücünü toparlayıp kuleye gir.",
                action: () => {
                    playerStats.mana += 20;
                },
                nextScene: "Kule_Icerik",
                progress: progress + 1
            },
            {
                text: "Güvenli bir yere çekilip iyileşmeyi bekle.",
                nextScene: "Kule_Gecikme",
                progress: progress + 1
            }
        ]
    },
    
    Kule_Icerik: {
        text: "Kulenin içinde adanın tarihine dair birçok bilgi ve büyücülerin kullandığı büyülerin sırlarını buluyorsun. Ancak en üst katta seni bekleyen koruyucu, devasa bir gölge yaratık.",
        image: 'img/ShadowGuardian.jpg',
        choices: [
            {
                text: "Koruyucu ile savaş.",
                nextScene: "KoruyucuSavas",
                progress: progress + 1
            },
            {
                text: "Saldırmadan önce strateji oluştur.",
                condition: () => playerStats.Intelligence >= 13,
                failScene: "YetersizZeka",
                nextScene: "Koruyucu_Strateji",
                progress: progress + 1
            }
        ]
    },
    
    KoruyucuSavas: {
        text: "Zorlu bir savaşın ardından, koruyucuyu yenmeyi başarıyorsun. Ancak lanetin tamamen çözülmediğini fark ediyorsun. Daha derine inmen gerekiyor.",
        image: 'img/VictoryOverGuardian.jpg',
        choices: [
            {
                text: "Artefaktı araştırmaya devam et.",
                nextScene: "ArtefaktKalinma",
                progress: progress + 1
            },
            {
                text: "Köy halkına yardım için geri dön.",
                nextScene: "KoyeDonus",
                progress: progress + 1
            }
        ]
    },
    
    Kule_Gecikme: {
        text: "Kulenin içinde dinlenirken, büyü gücün biraz toparlanıyor. Ancak bir grup ruh seni saldırıya uğratıyor. Artık kaçma şansın yok.",
        image: 'img/TowerBattle.jpg',
        choices: [
            {
                text: "Savunma yap ve ruhlarla savaş.",
                nextScene: "RuhlarlaSavas",
                progress: progress + 1
            },
            {
                text: "Tüm gücünü kullanarak bir büyü yap.",
                nextScene: "BuyuSonuc",
                progress: progress + 1
            }
        ]
    },
    //#endregion

    // Yetersiz zeka durumunda gösterilecek sahne
    YetersizZeka: {
        text: "Zekan bu gizemi çözmek için yetersiz. Daha fazla tecrübe kazanmalısın.",
        image: 'img/ForestPath.jpg',
        choices: [
            {
                text: "Geri dön",
                nextScene: "Meydan",
                progress: progress
            }
        ]
    },

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
        if (choice.condition) {
            if (choice.condition()) {
                if (choice.action) {
                    choice.action();
                }
                showScene(gameStory[choice.nextScene]);
            } else {
                showScene(gameStory[choice.failScene]);
            }
        } else {
            if (choice.action) {
                choice.action();
            }
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

