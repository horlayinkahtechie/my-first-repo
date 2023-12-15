const yorubaSelect = document.querySelector( '.yoruba' );
const igboSelect = document.querySelector( '.igbo' );
const hausaSelect = document.querySelector( '.hausa' );
const renderWord = document.querySelector( '.render' );
const playAudio1 = document.querySelector( '.audio1' );
const playAudio2 = document.querySelector( '.audio2' );
const audioMute = document.querySelector( '.audio-mute' );
const audioRemoveAdd2 = document.querySelector( '.audio-remove-add-2' );
const renderAudioBtn = document.querySelector('.render-audio-btn');
const toggleButton = document.getElementById('toggleButton');

let isPlaying = false;
const audio = new Audio('audio enhancing.mp3');
toggleButton.addEventListener('click', function () {
    if (isPlaying) {
        // If currently playing, pause the audio and change the icon to mute
        audio.pause();
        toggleButton.innerHTML = `<img src="noun-mute-audio-1236726.png" style="border-radius: 50%; width: 40px; height: 40px;" class="img-fluid word-name" alt="">`;
    } else {
        // If not playing, play the audio and change the icon to play
        audio.play();
        toggleButton.innerHTML = `<img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px;" class="img-fluid word-name" alt="">`;
    }
    isPlaying = !isPlaying;
});

// Optional: Pause audio when the user leaves the page
window.addEventListener('unload', function () {
    audio.pause();
});


playAudio2.addEventListener( 'click', function () { 
    if ( isPlaying ) {

        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
} );

//Yoruba Section
const yorubaWords = [ { word: 'Igba', Sound: "Do Do", meaning: 'Bowl', example: "Mo fi Igba Mu omi", meaninginenglish: "I used a bowl to drink water"},
    { word: 'Agbado', sound: 'Do Do Mi', meaning: 'Corn', example: 'Mo Je Agbado at Epa ni aro yi', meaninginenglish: "I ate corn and groundnut this morning" },
    { word: 'Eba', Sound: "Do Do", meaning: 'Turned Casava flakes', example: "Mo je eba pelu obe", meaninginenglish: "I ate Turned casava flakes with soup" },
    { word: 'Iresi', Sound: "Do Mi Do", meaning: 'Rice', example: "Mo je iresi at obe", meaninginenglish: "I ate rice and stew"  },
    { word: 'Adiye', meaning: 'Fowl', Sound: "Do Mi Mi", example: "Mo ni Adiye pupo ni ile mi", meaninginenglish: "I have plenty fowl in my house" },
    { word: 'Owo', meaning: 'Money', Sound: "Re Mi", example: "Owo mi ti tan lati ana", meaninginenglish: "My money has finished since yesterday" },
    { word: 'Ẹ̀dá', meaning: 'Creation', example: 'Eda ti olorun da po', meaninginenglish: "The creations that God created is much" },
    { word: 'Ọ̀ṣàn', meaning: 'Afternoon', example: 'Osan ti pon', meaninginenglish: "It is afternoon"},
    { word: 'Ẹ̀fọ́', meaning: 'Vegetable soup', example: 'Mo je Efo ati Eba', meaninginenglish: "I ate vegetable soup and Eba" },
    { word: 'Bí', meaning: 'Ask', example: 'Bi Aburo e', meaninginenglish: "Ask your younger one" },
    { word: 'Nínú', meaning: 'Inside', example: 'O wa Ninu abo', meaninginenglish: "It is inside the plate" },
    { word: 'Díẹ̀', meaning: 'Little', example: 'Die ni ki o mu', meaninginenglish: "You should take little" },
    { word: 'Ẹ̀yà', meaning: 'Part', example: 'Owo wa lara eya ara', meaninginenglish: "The hand is a part of the body" },
    { word: 'Wọn', meaning: 'They', example: 'Won ti Jeun Tan', meaninginenglish: "They have eaten" },
    { word: 'Ìwé', meaning: 'Book', example: 'Lo ka iwe e', meaninginenglish: "Go and read your books" },
    { word: 'Ńlá', meaning: 'Big', example: 'Wo Ile nla yen', meaninginenglish: "See that Big house" },
    { word: 'ọ̀kan', meaning: 'Mind', example: 'Mu okan Kuro', meaninginenglish: "Remove one" },
    { word: 'Jù', meaning: 'To Throw', example: 'O ju oko ba mi', meaninginenglish: "He threw stone at me" },
    { word: 'Wà', meaning: 'Come', example: 'Wa Nibi', meaninginenglish: "Come here"},
    { word: 'Oja', meaning: 'Market', example: 'Mo lo ran ata ni Oja', meaninginenglish: "I went to buy peper in the market" },
    { word: 'Ìyàwó', meaning: 'Wife', example: 'Iyawo mi niyen', meaninginenglish: "That is my wife" },
    { word: 'Bàbá', meaning: 'Father', example: 'Baba mi niyen', meaninginenglish: "That is my father" },
    { word: 'Ọmọ', meaning: 'Child', example: 'Omo mi niyen', meaninginenglish: "That is my son" },
    { word: 'Kúrò', meaning: 'Leave', example: 'Kuro ni ibeyen', meaninginenglish: "Leave that place" },
    { word: 'Jẹ', meaning: 'To eat', example: 'Je iresi ati eja', meaninginenglish: "Eat rice and fish" },
    { word: 'Inú', meaning: 'Stomach', example: 'Inu n run mi', meaninginenglish: "My stomach is aching me" },
    { word: 'Sare', meaning: 'To run', example: 'Mo sare lati ibi de ibeyen', meaninginenglish: "I run from this place to that place" },
    { word: 'Kọ̀', meaning: 'To pick up', example: 'Lo ko awon Idoti yen', meaninginenglish: "Go and pack those dirts" },
    { word: 'Rìn', meaning: 'To walk', example: 'Mo rin lati ibi dey ibeyen', meaninginenglish: "I trek from this place to that place"  },
    { word: 'Lọ́', meaning: 'To leave', example: 'Mo ti n lo', meaninginenglish: "I am leaving" },
    { word: 'Gbogbo', meaning: 'All', example: 'Ma mu gbogbo e tan', meaninginenglish: "Do not drink them all" },
    { word: 'Àárọ̀', meaning: 'Morning', example: 'Aaro Ni awa', meaninginenglish: "We are in the morning" },
    { word: 'Alẹ́', meaning: 'Night', example: 'Ale Ni awa', meaninginenglish: "We are in the night" },
    { word: 'Pàtàkì', meaning: 'Important', example: 'Iwe e se pataki', meaninginenglish: "Your books are very important" },
    { word: 'Ìdílé', meaning: 'Family', example: 'Idile ti e da', meaninginenglish: "Where is your family" },
    { word: 'Jìnnà', meaning: 'To be done', example: 'Ounje ti jinna', meaninginenglish: "Your food is ready" },
    { word: 'Pẹ̀lú', meaning: 'With', example: 'Mo wa pelu e', meaninginenglish: "I am with you" },
    { word: 'Kú', meaning: 'To die', example: 'Adiye mi ti ku', meaninginenglish: "My fowl is dead" },
    { word: 'Gbọ̀', meaning: 'To Hear', example: 'Se oun gbo mi', meaninginenglish: "Are you hearing me" }
];

const igbowords = [ { word: '-chalụ àba', meaning: 'lie flat on the back', example: 'Òf̣ ộ sì mù chàl ̣ ụ āba', meaninginenglish: 'Ọfọ asked me to lie flat on my back' },
    { word: 'àba', meaning: 'Back', example: '-dinà n’àba, dinà àba', meaninginenglish: 'Sleep on the back ' },
    { word: 'dị abadaba', meaning: 'Be wide, broad, flat', example: 'Wètalụ m̄ nni ǹkè m n’ime afele dī ̣abadaba', meaninginenglish: ' Bring me my own food in a broad flat plate' },
    { word: 'ma àbùbà', meaning: 'Be fatty, plumpy, fat', example: 'M̀ kpi ǹkaà màlù àbu ̣ bà', meaninginenglish: 'This he-goat is fat, or, the meat of this he-goat is fatty' }, 
    { word: 'yili àfè', meaning: 'Put on clothes', example: 'Yili àfè gị kà ànyị je Ụkà', meaninginenglish: 'Put on your clothes and let us go to Church ' },
    { word: 'afịfịa', meaning: 'Herb', example: 'Onye dibìà nà-èje ̣ ịkpā afịfịa', meaninginenglish: 'The native doctor is going to collect the herbs' },
    { word: 'dibìà', meaning: 'Native doctor', example: 'Onye dibìà nà-èje ̣ ịkpā afịfịa', meaninginenglish: 'The native doctor is going to collect the herbs' },
    { word: 'bu afọ imē', meaning: 'Be pregnant', example: 'Ngọzī bù afọ imē', meaninginenglish: 'Ngozi is pregnant' },
    { word: 'elili afō', meaning: 'The intestine', example: 'elili afō', meaninginenglish: 'The intestine' },
    { word: 'gọ àgùgò', meaning: 'To deny', example: 'Adā m àchọ ūkpa onye n ̣ ā-agọ àgùgọ̀ ife o m ̣ ēlụ', meaninginenglish: ' I do not like the company of anybody who denies what he has done' },
    { word: "àgbọọbìà", meaning: 'A young girl', example: 'Roseline bù nwa ̣ āgbọò', meaninginenglish: 'Roseline is a young girl' },
    {word: 'agbụ', meaning: 'Bound', example: 'O kèlù yà agb ̣ ụ', meaninginenglish: 'He bound him'}
];

//Selecting the Get Random Word btn
const getRandomWordBtn = document.getElementById( 'btn' );

// Add event listener outside the rendering functions
getRandomWordBtn.addEventListener('click', function () {
    updateResults();
});


//Generating Random words based on the selected language for Yoruba Language

function renderYorubaResults() {
    const getRandomWord = Math.floor(Math.random() * yorubaWords.length);
    const randomWordObject = yorubaWords[getRandomWord];
    return `
    <div class="render container">
    <div class="row">
        <div class="col-md-7">
            <p class="word-name">${randomWordObject.word} (${randomWordObject.meaning})</p>
            
        </div>
        <div class="col-md-5">
            <button class="audio" type="button"><img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px; " class="img-fluid word-name" alt=""></button>
        </div>
        <div class="col-md-7">
            <p class="word-example">${randomWordObject.example} (${randomWordObject.meaninginenglish})</p>
        </div>
        <div class="col-md-5">
            <button class="audio" type="button"><img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px; " class="img-fluid word-name" alt=""></button>
        </div>
    </div>
</div>
    `;
}

//Generating Random words based on the selected language for Hausa Language
// function renderHausaResults() {
//     const getRandomWord = Math.floor(Math.random() * hausawords.length);
//     const randomWordObject = hausawords[getRandomWord];
//     return `
//     <div class="render container">
//     <div class="row">
//         <div class="col-md-7">
//             <p class="word-name">${randomWordObject.word} (${randomWordObject.meaning})</p>
            
//         </div>
//         <div class="col-md-5">
//             <button class="audio" type="button"><img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px; " class="img-fluid word-name" alt=""></button>
//         </div>
//         <div class="col-md-7">
//             <p class="word-example">${randomWordObject.example} (${randomWordObject.meaninginenglish})</p>
//         </div>
//         <div class="col-md-5">
//             <button class="audio" type="button"><img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px; " class="img-fluid word-name" alt=""></button>
//         </div>
//     </div>
// </div>
//     `;
// }


//Generating Random words based on the selected language for Igbo Language

function renderIgboResults() {
    const getRandomWord = Math.floor(Math.random() * igbowords.length);
    const randomWordObject = igbowords[getRandomWord];
    return `
        <!-- Igbo-specific HTML content goes here -->
        <div class="render container">
                <div class="row">
                    <div class="col-md-7">
                        <p class="word-name">${randomWordObject.word} (${randomWordObject.meaning})</p>
                        
                    </div>
                    <div class="col-md-5">
                        <button class="audio" type="button"><img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px; " class="img-fluid word-name" alt=""></button>
                    </div>
                    <div class="col-md-7">
                        <p class="word-example">${randomWordObject.example} (${randomWordObject.meaninginenglish})</p>
                    </div>
                    <div class="col-md-5">
                        <button class="audio" type="button"><img src="noun-audio-3397384.png" style="border-radius: 50%; width: 40px; height: 40px; " class="img-fluid word-name" alt=""></button>
                    </div>
                </div>
            </div>
    `;
}

function getResults(languages) {
    switch (languages) {
        case "yoruba":
            return renderYorubaResults();
        // case "hausa":
        //     return renderHausaResults();
        case "igbo":
            return renderIgboResults();
        default:
            return "No results available";
    }
}    

function updateResults() {
    var languageInput = document.querySelector('.language-input').value;
    var results = getResults(languageInput);
    document.querySelector('.render').innerHTML = results;
}