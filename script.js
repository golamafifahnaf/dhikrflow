const zikrs = [
    { id: 'z1', name: 'سُبْحَانَ ٱللَّٰهِ', meaning: 'Glory be to Allah', target: 33 },
    { id: 'z2', name: 'ٱلْحَمْدُ لِلَّٰهِ', meaning: 'All praise is due to Allah', target: 33 },
    { id: 'z3', name: 'اَللهُ أَكْبَرُ', meaning: 'Allah is the greatest', target: 34 },
    { id: 'z4', name: 'أَسْتَغْفِرُ ٱللَّٰهَ', meaning: 'I seek forgiveness from Allah', target: 100 },
    { id: 'z5', name: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ', meaning: 'There is no God but Allah', target: 100 }
];

let showZikr    = document.getElementById('showZikr');
let showMeaning = document.getElementById('showMeaning');
let showTarget  = document.getElementById('showTarget');
let showCount   = document.getElementById('showCount');
let showStatus  = document.getElementById('showStatus');

let targetVal   = 0;
let countVal    = 0;

function clearActive() {
    document.querySelectorAll('.zikr').forEach(btn => {
        btn.classList.remove('active');
    });
}

function zikrSelector(button, name, meaning, target) {
    clearActive();
    button.classList.add('active');

    targetVal = target;
    countVal = 0;
    showZikr.innerText = name;
    showMeaning.innerText = meaning;
    showTarget.innerText = "Target: " + targetVal;
    showCount.innerText = countVal;
    showStatus.innerText = "";
}

zikrs.forEach(item => {
    const btn = document.getElementById(item.id);

    btn.addEventListener('click', () => {
        zikrSelector(btn, item.name, item.meaning, item.target);
    });
});

const count = document.getElementById('count');
count.addEventListener('click', ()=> {
    if(targetVal === 0) {
        showStatus.innerText = "Select a Dhikr first!";
        return;
    }

    if(countVal === targetVal) {
        countVal = 0;
        count.innerText = "COUNT";
        showStatus.innerText = "";
    }
    else {
        countVal++;

        if(countVal === targetVal) {
            count.innerText = "RESET";
            showStatus.innerText = "MashaAllah! Great Job!";
        }
    }

    showCount.innerText = countVal;
});