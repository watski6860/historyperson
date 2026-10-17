// 조선 전기 주요 역사 인물 데이터
const characters = [
    {
        name: "이성계 (태조)",
        role: "조선 제1대 왕 / 건국자",
        achievement: "위화도 회군을 통해 실권을 장악하고 1392년 조선을 건국함.",
        description: "고려 말의 뛰어난 무관으로 왜구와 홍건적을 물리치며 명성을 떨쳤습니다. 최영의 요동 정벌 반대 주장을 계기로 회군을 단행하여 정권을 잡고 조선을 세웠습니다.",
        trivia: "조선 건국 후 도읍을 개경에서 한양(현재의 서울)으로 옮기고 궁궐과 종묘를 지었어요!"
    },
    {
        name: "정도전",
        role: "조선 건국의 설계자 / 문신·학자",
        achievement: "조선의 통치 규범인 《조선경국전》 저술 및 한양 도성과 궁궐 설계.",
        description: "이성계를 도와 조선 건국에 결정적인 역할을 한 정치가이자 성리학자입니다. 왕이 아닌 신하 중심의 재상 정치와 유교 중심의 국가 기틀을 마련했습니다.",
        trivia: "유교 사상을 바탕으로 신하가 중심이 되는 나라를 꿈꿨으나, 태종(이방원)과의 권력 다툼에서 비극적인 최후를 맞이했습니다."
    },
    {
        name: "이방원 (태종)",
        role: "조선 제2대 왕 / 왕권 강화의 주역",
        achievement: "호패법 실시, 6조 직계제 시행, 사병 혁파를 통한 왕권 강화.",
        description: "정도전 등을 제거하고 왕위에 올라 왕권을 강력하게 다졌습니다. 강력한 리더십으로 국가 행정 체제를 정비하고 조선의 기틀을 단단하게 만들었습니다.",
        trivia: "왕권을 강화하기 위해 공신들의 사병을 폐지하고, 백성들의 신분 증명서인 '호패'를 처음으로 만들게 했어요."
    },
    {
        name: "세종대왕",
        role: "조선 제4대 왕 / 문화·과학의 황금기",
        achievement: "훈민정음(한글) 창제, 집현전 운영, 과학기기(측우기·자격루 등) 발전.",
        description: "조선 전기의 문예 융성을 이끈 성군으로, 백성들이 문자를 몰라 억울한 일을 당하지 않도록 한글을 창제했습니다. 또한 집현전 학사들과 함께 유교 정치를 꽃피웠습니다.",
        trivia: "고기(육식)를 엄청나게 좋아했던 '고기 덕후' 왕으로도 유명해요! 눈병이 날 정도로 책을 많이 읽은 독서광이기도 했습니다."
    },
    {
        name: "장영실",
        role: "조선 전기의 천재 과학기술자",
        achievement: "자격루(물시계), 측우기, 혼천의 등 발명.",
        description: "노비 출신이었으나 뛰어난 기술과 재능을 세종에게 인정받아 신분의 벽을 뛰어넘고 종3품 대호군이라는 높은 관직까지 올랐습니다.",
        trivia: "세종이 장영실에게 가마(왕이 타는 의자)를 만들어 주었는데, 가마가 부서지는 바람에 불경죄로 의금부에 끌려간 이후 역사 속에서 기록이 사라졌습니다."
    }
];

// DOM 요소 선택
const cardGrid = document.getElementById('characterGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('detailModal');
const closeBtn = document.querySelector('.close-btn');

const modalName = document.getElementById('modalName');
const modalTitle = document.getElementById('modalTitle');
const modalAchievement = document.getElementById('modalAchievement');
const modalDescription = document.getElementById('modalDescription');
const modalTrivia = document.getElementById('modalTrivia');

// 카드 화면에 렌더링하는 함수
function renderCards(data) {
    cardGrid.innerHTML = '';
    
    if (data.length === 0) {
        cardGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d; padding: 2rem;">검색 결과가 없습니다. 다른 검색어를 입력해 보세요!</p>';
        return;
    }

    data.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${char.name}</h3>
            <div class="card-role">${char.role}</div>
            <p><strong>업적:</strong> ${char.achievement}</p>
        `;
        // 카드 클릭 시 모달 열기
        card.addEventListener('click', () => openModal(char));
        cardGrid.appendChild(card);
    });
}

// 모달창 열기
function openModal(char) {
    modalName.textContent = char.name;
    modalTitle.textContent = char.role;
    modalAchievement.textContent = char.achievement;
    modalDescription.textContent = char.description;
    modalTrivia.textContent = char.trivia;
    modal.style.display = 'flex';
}

// 모달창 닫기
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 실시간 검색 기능
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = characters.filter(char => 
        char.name.toLowerCase().includes(keyword) || 
        char.achievement.toLowerCase().includes(keyword) ||
        char.description.toLowerCase().includes(keyword) ||
        char.role.toLowerCase().includes(keyword)
    );
    renderCards(filtered);
});

// 초기 실행
renderCards(characters);
