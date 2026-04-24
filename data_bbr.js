// 흑백요리사 시즌1 & 시즌2 출연 셰프 식당 데이터 (미슐랭 스타 미보유자 포함)
const BBR_RESTAURANTS = [
  // ══════════════════════════════════════
  // 시즌 1 (2024) - 백수저 (White Spoon)
  // ══════════════════════════════════════
  {
    id: "s1w01", name: "쵸이닷 (CHOI.)", season: 1, tier: "백수저", chef: "최현석", category: "이탈리안", region: "서울",
    address: "서울 강남구 도산대로 457", lat: 37.5268, lng: 127.0500,
    menus: [{ name: "디너 코스", price: 198000 }, { name: "런치 코스", price: 98000 }],
    priceMin: 98000, priceMax: 198000,
    desc: "최현석 셰프의 창의성이 돋보이는 파인다이닝. '무' 파스타 등 실험적인 메뉴가 특징.",
    hours: "12:00-22:00 (B.T 15:00-18:00)", phone: "02-518-0318"
  },
  {
    id: "s1w02", name: "홍보각", season: 1, tier: "백수저", chef: "여경래", category: "중식", region: "서울",
    address: "서울 강남구 봉은사로 130", lat: 37.5036, lng: 127.0294,
    menus: [{ name: "여경래 셰프 코스", price: 150000 }, { name: "런치 코스", price: 100000 }],
    priceMin: 100000, priceMax: 150000,
    desc: "중식 대가 여경래 셰프의 정통 광동 요리. 불도장과 모자새우가 시그니처.",
    hours: "12:00-21:30 (B.T 15:00-18:00)", phone: "02-531-6457"
  },
  {
    id: "s1w03", name: "티엔미미 강남점", season: 1, tier: "백수저", chef: "정지선", category: "중식", region: "서울",
    address: "서울 서초구 사임당로 143", lat: 37.4916, lng: 127.0267,
    menus: [{ name: "딤섬 세트", price: 45000 }, { name: "마늘새우찜", price: 38000 }],
    priceMin: 38000, priceMax: 80000,
    desc: "중식 여전사 정지선 셰프의 딤섬 전문점. 독특한 비주얼의 딤섬이 일품.",
    hours: "11:00-22:00", phone: "02-588-1040"
  },
  {
    id: "s1w04", name: "식당 네오", season: 1, tier: "백수저", chef: "최강록", category: "일식", region: "서울",
    address: "서울 송파구 삼전로12길 4", lat: 37.5065, lng: 127.0850,
    menus: [{ name: "키마구레 코스", price: 77000 }],
    priceMin: 77000, priceMax: 77000,
    desc: "최강록 셰프의 '믿고 맡기는' 일식 코스. 술 주문이 필수인 미식가들의 성지.",
    hours: "18:00-22:00 (예약제)", phone: "02-421-1234"
  },
  {
    id: "s1w05", name: "파브리키친", season: 1, tier: "백수저", chef: "파브리", category: "이탈리안", region: "서울",
    address: "서울 용산구 한강대로15길 23-6", lat: 37.5275, lng: 126.9634,
    menus: [{ name: "파스타", price: 18000 }, { name: "리조또", price: 22000 }],
    priceMin: 18000, priceMax: 45000,
    desc: "한국을 사랑하는 파브리 셰프의 캐주얼 이탈리안. 현지 맛을 가성비 있게 제공.",
    hours: "11:30-21:30", phone: "02-749-1403"
  },
  {
    id: "s1w06", name: "나경버섯농가", season: 1, tier: "백수저", chef: "이영숙", category: "한식", region: "부여",
    address: "충남 부여군 석성면 비당로109번길 100", lat: 36.2166, lng: 126.9174,
    menus: [{ name: "버섯전골 정식", price: 30000 }],
    priceMin: 30000, priceMax: 30000,
    desc: "한식대첩 우승자 이영숙 셰프의 버섯 요리 전문점. 자연의 맛을 그대로 담은 건강식.",
    hours: "11:00-15:00 (예약 권장)", phone: "041-836-0039"
  },
  {
    id: "s1w07", name: "진진", season: 1, tier: "백수저", chef: "황진선", category: "중식", region: "서울",
    address: "서울 마포구 잔다리로 123", lat: 37.5582, lng: 126.9142,
    menus: [{ name: "멘보샤", price: 20000 }, { name: "대게살볶음", price: 25000 }],
    priceMin: 20000, priceMax: 50000,
    desc: "황진선 셰프의 중식당. 가성비 좋은 고퀄리티 중식 요리로 유명.",
    hours: "17:00-22:00", phone: "02-332-0388"
  },

  // ══════════════════════════════════════
  // 시즌 1 (2024) - 흑수저 (Black Spoon)
  // ══════════════════════════════════════
  {
    id: "s1b01", name: "비아 톨레도 파스타바", season: 1, tier: "흑수저", chef: "권성준 (나폴리 맛피아)", category: "이탈리안", region: "서울",
    address: "서울 용산구 원효로83길 7-2", lat: 37.5415, lng: 126.9634,
    menus: [{ name: "시즌 코스", price: 89000 }],
    priceMin: 89000, priceMax: 89000,
    desc: "시즌 1 우승자 나폴리 맛피아의 생면 파스타바. 예약 경쟁이 가장 치열한 곳.",
    hours: "17:00-22:00 (예약제)", phone: "0507-1335-0105"
  },
  {
    id: "s1b02", name: "디핀 신당", season: 1, tier: "흑수저", chef: "윤남노 (요리하는 돌아이)", category: "재패니즈 프렌치", region: "서울",
    address: "서울 중구 퇴계로 411", lat: 37.5656, lng: 127.0163,
    menus: [{ name: "뇨끼", price: 28000 }, { name: "오리 가슴살 스테이크", price: 42000 }],
    priceMin: 25000, priceMax: 60000,
    desc: "독특한 감성의 윤남노 셰프가 운영하는 와인바 겸 레스토랑. 감각적인 요리가 특징.",
    hours: "18:00-24:00", phone: "02-2232-0730"
  },
  {
    id: "s1b03", name: "즐거운 술상", season: 1, tier: "흑수저", chef: "김미령 (이모카세 1호)", category: "한식", region: "서울",
    address: "서울 도봉구 노해로 341", lat: 37.6483, lng: 127.0345,
    menus: [{ name: "이모카세 코스", price: 50000 }],
    priceMin: 50000, priceMax: 50000,
    desc: "창동 시장의 전설, 이모카세 1호의 손맛을 느낄 수 있는 곳. 제철 안주가 끝없이 나옴.",
    hours: "17:00-22:00", phone: "010-0000-0000"
  },
  {
    id: "s1b04", name: "트리드 (trid)", season: 1, tier: "흑수저", chef: "강승원 (트리플 스타)", category: "컨템포러리", region: "서울",
    address: "서울 강남구 선릉로162길 16", lat: 37.5255, lng: 127.0435,
    menus: [{ name: "디너 코스", price: 240000 }, { name: "런치 코스", price: 150000 }],
    priceMin: 150000, priceMax: 240000,
    desc: "완벽주의 셰프 트리플 스타의 파인다이닝. 정교한 테크닉과 밸런스가 돋보임.",
    hours: "12:00-22:00", phone: "02-512-8312"
  },
  {
    id: "s1b05", name: "조광201", season: 1, tier: "흑수저", chef: "조광효 (만찢남)", category: "중식", region: "서울",
    address: "서울 송파구 새말로8길 13", lat: 37.4839, lng: 127.1245,
    menus: [{ name: "동파육", price: 28000 }, { name: "마라탕", price: 18000 }],
    priceMin: 15000, priceMax: 40000,
    desc: "만화를 통해 요리를 독학한 셰프의 사천 요리 전문점. 강렬한 향신료의 풍미.",
    hours: "18:00-23:00", phone: "0507-1331-0102"
  },
  {
    id: "s1b06", name: "도량", season: 1, tier: "흑수저", chef: "임태훈 (철가방 요리사)", category: "중식", region: "서울",
    address: "서울 종로구 자하문로6길 6", lat: 37.5779, lng: 126.9665,
    menus: [{ name: "훠궈 세트", price: 35000 }, { name: "동파육", price: 42000 }],
    priceMin: 20000, priceMax: 60000,
    desc: "서촌의 유명한 중식당. 임태훈 셰프의 깊은 내공이 담긴 딤섬과 훠궈.",
    hours: "11:00-21:30", phone: "02-739-0109"
  },
  {
    id: "s1b07", name: "군몽", season: 1, tier: "흑수저", chef: "데이비드 리 (고기깡패)", category: "양식", region: "서울",
    address: "서울 용산구 한남대로27가길 15", lat: 37.5365, lng: 127.0012,
    menus: [{ name: "본인 스테이크", price: 120000 }, { name: "파스타", price: 28000 }],
    priceMin: 28000, priceMax: 150000,
    desc: "고기 요리의 정점을 보여주는 고기깡패 셰프의 스테이크 하우스.",
    hours: "17:00-23:00", phone: "02-790-0000"
  },
  {
    id: "s1b08", name: "리북방", season: 1, tier: "흑수저", chef: "최지형 (북한 음식 전문가)", category: "한식", region: "서울",
    address: "서울 마포구 마포대로1길 16", lat: 37.5385, lng: 126.9456,
    menus: [{ name: "순대 맡김차림", price: 65000 }],
    priceMin: 65000, priceMax: 65000,
    desc: "북한 음식을 현대적으로 재해석한 순대 오마카세. 이북 음식의 정수.",
    hours: "12:00-22:00 (예약제)", phone: "02-3141-0048"
  },
  {
    id: "s1b09", name: "마마리마켓", season: 1, tier: "흑수저", chef: "송하슬람 (반찬 셰프)", category: "한식", region: "서울",
    address: "서울 강남구 역삼로 515", lat: 37.5025, lng: 127.0585,
    menus: [{ name: "반찬 세트", price: 25000 }],
    priceMin: 15000, priceMax: 50000,
    desc: "정갈한 반찬과 도시락을 제공하는 반찬 셰프의 매장.",
    hours: "10:00-20:00", phone: "02-555-0000"
  },
  {
    id: "s1b10", name: "큔 (Qyun)", season: 1, tier: "흑수저", chef: "김혜수 (서촌 황태자)", category: "한식", region: "서울",
    address: "서울 종로구 자하문로26길 17-2", lat: 37.5815, lng: 126.9695,
    menus: [{ name: "채식 플레이트", price: 22000 }],
    priceMin: 15000, priceMax: 40000,
    desc: "서촌의 고즈넉한 분위기에서 즐기는 건강한 채식 요리.",
    hours: "11:30-18:00", phone: "02-730-0000"
  },

  // ══════════════════════════════════════
  // 시즌 2 (2025) - 백수저 (White Spoon)
  // ══════════════════════════════════════
  {
    id: "s2w01", name: "스와니예 (Soigné)", season: 2, tier: "백수저", chef: "이준", category: "이노베이티브", region: "서울",
    address: "서울 강남구 강남대로162길 16", lat: 37.5225, lng: 127.0405,
    menus: [{ name: "디너 테이스팅", price: 270000 }, { name: "런치 테이스팅", price: 150000 }],
    priceMin: 150000, priceMax: 270000,
    desc: "미쉐린 2스타 이준 셰프의 레스토랑. 매 시즌마다 바뀌는 에피소드 메뉴가 특징.",
    hours: "12:00-22:00", phone: "02-3444-0303"
  },
  {
    id: "s2w02", name: "이타닉 가든", season: 2, tier: "백수저", chef: "손종원", category: "이노베이티브", region: "서울",
    address: "서울 강남구 테헤란로 231", lat: 37.5049, lng: 127.0388,
    menus: [{ name: "테이스팅 코스", price: 300000 }],
    priceMin: 300000, priceMax: 300000,
    desc: "조선 팰리스 최상층에 위치한 손종원 셰프의 파인다이닝. 한국적 식재료의 극치.",
    hours: "18:00-22:00", phone: "02-6744-2300"
  },
  {
    id: "s2w03", name: "카덴", season: 2, tier: "백수저", chef: "정호영", category: "일식", region: "서울",
    address: "서울 서대문구 연희로 173", lat: 37.5685, lng: 126.9312,
    menus: [{ name: "우동", price: 15000 }, { name: "사시미 모리아와세", price: 65000 }],
    priceMin: 15000, priceMax: 100000,
    desc: "정호영 셰프의 일식 요리 전문점. 다양한 종류의 우동과 이자카야 메뉴.",
    hours: "11:30-22:00", phone: "02-337-6360"
  },
  {
    id: "s2w04", name: "오스테리아 샘킴", season: 2, tier: "백수저", chef: "샘킴", category: "이탈리안", region: "서울",
    address: "서울 마포구 양화로3길 55", lat: 37.5504, lng: 126.9156,
    menus: [{ name: "관자 구이", price: 28000 }, { name: "멜란자네", price: 22000 }],
    priceMin: 20000, priceMax: 60000,
    desc: "샘킴 셰프의 건강한 이탈리안 요리. 자연주의 철학이 담긴 메뉴들.",
    hours: "11:30-22:00", phone: "02-324-3338"
  },

  // ══════════════════════════════════════
  // 시즌 2 (2025) - 흑수저 (Black Spoon)
  // ══════════════════════════════════════
  {
    id: "s2b01", name: "온6.5", season: 2, tier: "흑수저", chef: "이정수 (김치다이닝)", category: "한식", region: "서울",
    address: "서울 종로구 북촌로1길 28", lat: 37.5775, lng: 126.9852,
    menus: [{ name: "김치 튀김", price: 18000 }, { name: "전복 김치 김밥", price: 24000 }],
    priceMin: 15000, priceMax: 50000,
    desc: "김치를 주제로 한 이색 다이닝. 외국인 관광객들에게도 인기 만점.",
    hours: "17:30-23:00", phone: "010-0000-0000"
  },
  {
    id: "s2b02", name: "삼미분식", season: 2, tier: "흑수저", chef: "정시우 (닭발로 16억)", category: "분식", region: "서울",
    address: "서울 서대문구 거북골로 33-4", lat: 37.5812, lng: 126.9245,
    menus: [{ name: "무뼈닭발", price: 18000 }, { name: "삼미세트", price: 25000 }],
    priceMin: 10000, priceMax: 30000,
    desc: "명지대 근처의 전설적인 분식집. 화끈한 닭발 맛으로 입소문.",
    hours: "11:00-24:00", phone: "02-300-0000"
  },
  {
    id: "s2b03", name: "호루몬", season: 2, tier: "흑수저", chef: "나원계 (내장백서)", category: "일식", region: "서울",
    address: "서울 강남구 강남대로156길 31", lat: 37.5195, lng: 127.0225,
    menus: [{ name: "호루몬 야끼", price: 25000 }],
    priceMin: 20000, priceMax: 50000,
    desc: "내장 요리의 대가 나원계 셰프의 호루몬 전문점. 술 한잔하기 최고의 분위기.",
    hours: "18:00-01:00", phone: "02-000-0000"
  },
  {
    id: "s2b04", name: "힙한식", season: 2, tier: "흑수저", chef: "이정서 (남해 힙스터)", category: "한식", region: "남해",
    address: "경남 남해군 남해읍 남해대로 2749", lat: 34.8385, lng: 127.8925,
    menus: [{ name: "전복솥밥 세트", price: 45000 }],
    priceMin: 30000, priceMax: 60000,
    desc: "남해의 식재료를 세련되게 풀어낸 한식당. 전국에서 찾아오는 핫플레이스.",
    hours: "11:00-16:00", phone: "055-862-0000"
  },
  {
    id: "s2b05", name: "아선재", season: 2, tier: "흑수저", chef: "명현지 (그때 명셰프)", category: "한식", region: "서울",
    address: "서울 강남구 영동대로 221", lat: 37.4955, lng: 127.0675,
    menus: [{ name: "한정식 코스", price: 55000 }],
    priceMin: 40000, priceMax: 100000,
    desc: "품격 있는 한정식 전문점. 상견례나 모임 장소로 유명한 정통 한식.",
    hours: "11:30-22:00", phone: "02-555-0000"
  }
];
