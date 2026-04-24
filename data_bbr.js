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
  {
    id: "s1w08", name: "가매일식", season: 1, tier: "백수저", chef: "안유성", category: "일식", region: "광주",
    address: "광주광역시 서구 상무대로 1104-26", lat: 35.1522, lng: 126.8834,
    menus: [{ name: "사시미 코스", price: 120000 }, { name: "전복죽", price: 25000 }],
    priceMin: 25000, priceMax: 150000,
    desc: "광주를 대표하는 일식 대가 안유성 명장의 식당. 정통 일식의 진수.",
    hours: "11:30-22:00", phone: "062-352-7711"
  },
  {
    id: "s1w09", name: "오르치에르", season: 1, tier: "백수저", chef: "박준우", category: "디저트/와인", region: "서울",
    address: "서울 종로구 자하문로16길 4", lat: 37.5812, lng: 126.9712,
    menus: [{ name: "레몬 타르트", price: 9000 }, { name: "와인 페어링", price: 45000 }],
    priceMin: 9000, priceMax: 60000,
    desc: "마스터셰프 코리아 준우승자 박준우 셰프의 디저트 카페 겸 와인바.",
    hours: "12:00-22:00", phone: "02-730-0000"
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
    id: "s1b07", name: "포노 부오노", season: 1, tier: "흑수저", chef: "김태성 (히든 천재)", category: "이탈리안", region: "서울",
    address: "서울 강남구 도산대로45길 8-7", lat: 37.5242, lng: 127.0372,
    menus: [{ name: "프로슈토 피자", price: 28000 }, { name: "파스타", price: 24000 }],
    priceMin: 20000, priceMax: 60000,
    desc: "히든 천재 셰프의 감각적인 이탈리안 비스트로. 와인과 즐기기 좋은 요리들.",
    hours: "18:00-24:00", phone: "02-511-0000"
  },
  {
    id: "s1b08", name: "부토 (BUTO)", season: 1, tier: "흑수저", chef: "임희원 (셀럽의 셰프)", category: "한식 모던", region: "서울",
    address: "서울 용산구 한남대로27가길 32", lat: 37.5362, lng: 127.0015,
    menus: [{ name: "베지테리언 메뉴", price: 22000 }, { name: "숯불 요리", price: 35000 }],
    priceMin: 20000, priceMax: 80000,
    desc: "임희원 셰프의 창의적인 한식 다이닝. 채소 본연의 맛을 살린 요리가 일품.",
    hours: "17:30-23:00", phone: "02-790-0000"
  },
  {
    id: "s1b09", name: "에다마메", season: 1, tier: "흑수저", chef: "이선용 (간귀)", category: "이자카야", region: "서울",
    address: "서울 용산구 한강대로76길 11-40", lat: 37.5422, lng: 126.9715,
    menus: [{ name: "야키소바", price: 16000 }, { name: "명란 오이", price: 12000 }],
    priceMin: 10000, priceMax: 40000,
    desc: "간 조절의 달인 간귀 셰프가 운영하는 캐주얼 이자카야.",
    hours: "17:00-01:00", phone: "02-000-0000"
  },
  {
    id: "s1b10", name: "큔 (Qyun)", season: 1, tier: "흑수저", chef: "김혜수 (서촌 황태자)", category: "한식", region: "서울",
    address: "서울 종로구 자하문로26길 17-2", lat: 37.5815, lng: 126.9695,
    menus: [{ name: "채식 플레이트", price: 22000 }],
    priceMin: 15000, priceMax: 40000,
    desc: "서촌의 고즈넉한 분위기에서 즐기는 건강한 채식 요리.",
    hours: "11:30-18:00", phone: "02-730-0000"
  },
  {
    id: "s1b11", name: "본연 (BONYON)", season: 1, tier: "흑수저", chef: "배경준 (원투쓰리)", category: "컨템포러리", region: "서울",
    address: "서울 강남구 논현로 742", lat: 37.5205, lng: 127.0315,
    menus: [{ name: "코스 요리", price: 180000 }],
    priceMin: 180000, priceMax: 180000,
    desc: "미슐랭 3스타 출신 원투쓰리 셰프의 우드파이어 다이닝.",
    hours: "18:00-22:00", phone: "02-000-0000"
  },
  {
    id: "s1b12", name: "윤주당", season: 1, tier: "흑수저", chef: "윤나라 (술 빚는 윤주모)", category: "한식 주점", region: "서울",
    address: "서울 용산구 신흥로 81-1", lat: 37.5453, lng: 126.9856,
    menus: [{ name: "주모의 한상", price: 120000 }, { name: "치즈 감자전", price: 22000 }],
    priceMin: 22000, priceMax: 150000,
    desc: "전통주 전문가 윤나라 셰프의 해방촌 핫플레이스. 술과 요리의 완벽한 페어링.",
    hours: "17:00-22:00 (예약 권장)", phone: "02-000-0000"
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
    id: "s2w03", name: "비스트로 드 욘트빌", season: 2, tier: "백수저", chef: "타미 리 (프렌치 파파)", category: "프렌치", region: "서울",
    address: "서울 강남구 선릉로152길 12", lat: 37.5245, lng: 127.0415,
    menus: [{ name: "프렌치 코스", price: 120000 }],
    priceMin: 80000, priceMax: 150000,
    desc: "정통 프렌치 비스트로의 정수. 클래식한 프랑스 요리를 경험할 수 있는 곳.",
    hours: "11:30-22:00", phone: "02-518-9184"
  },
  {
    id: "s2w04", name: "카덴", season: 2, tier: "백수저", chef: "정호영", category: "일식", region: "서울",
    address: "서울 서대문구 연희로 173", lat: 37.5685, lng: 126.9312,
    menus: [{ name: "우동", price: 15000 }, { name: "사시미 모리아와세", price: 65000 }],
    priceMin: 15000, priceMax: 100000,
    desc: "정호영 셰프의 일식 요리 전문점. 다양한 종류의 우동과 이자카야 메뉴.",
    hours: "11:30-22:00", phone: "02-337-6360"
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
    id: "s2b02", name: "셰누프라이빗키친", season: 2, tier: "흑수저", chef: "고효일 (안녕 봉주르)", category: "유러피안", region: "서울",
    address: "서울 용산구 독서당로 39", lat: 37.5335, lng: 127.0115,
    menus: [{ name: "프라이빗 코스", price: 120000 }],
    priceMin: 120000, priceMax: 120000,
    desc: "안녕 봉주르 셰프의 아늑한 프라이빗 키친. 따뜻한 감성의 요리들.",
    hours: "예약제", phone: "010-0000-0000"
  },
  {
    id: "s2b03", name: "모노로그", season: 2, tier: "흑수저", chef: "신현도 (칼마카세)", category: "일식", region: "서울",
    address: "서울 강남구 논현로152길 31", lat: 37.5235, lng: 127.0335,
    menus: [{ name: "가이세키 코스", price: 150000 }],
    priceMin: 150000, priceMax: 150000,
    desc: "칼마카세 셰프의 정교한 일식 코스 요리. 칼 맛의 진수를 보여줌.",
    hours: "18:00-22:00", phone: "02-000-0000"
  },
  {
    id: "s2b04", name: "쌤쌤쌤 (SamSamSam)", season: 2, tier: "흑수저", chef: "유행왕", category: "양식", region: "서울",
    address: "서울 용산구 한강대로50길 25", lat: 37.5285, lng: 126.9715,
    menus: [{ name: "라자냐", price: 19000 }, { name: "잠봉뵈르 파스타", price: 18000 }],
    priceMin: 15000, priceMax: 40000,
    desc: "용리단길 최고의 핫플레이스. 유행왕 셰프의 미국 감성 가득한 이탈리안.",
    hours: "11:30-22:00", phone: "02-000-0000"
  },
  {
    id: "s2b05", name: "오리지널 넘버스", season: 2, tier: "흑수저", chef: "이찬양 (삐딱한 천재)", category: "이탈리안", region: "서울",
    address: "서울 강남구 선릉로157길 23", lat: 37.5255, lng: 127.0385,
    menus: [{ name: "생면 파스타", price: 26000 }],
    priceMin: 20000, priceMax: 60000,
    desc: "삐딱한 천재 셰프의 힙한 파스타바. 감각적인 인테리어와 맛.",
    hours: "17:00-23:00", phone: "02-000-0000"
  },
  {
    id: "s2b06", name: "바삭마차", season: 2, tier: "흑수저", chef: "양수현 (망원시장 히어로)", category: "돈까스", region: "서울",
    address: "서울 마포구 월드컵로13길 64", lat: 37.5562, lng: 126.9065,
    menus: [{ name: "수제 돈까스", price: 4000 }],
    priceMin: 4000, priceMax: 20000,
    desc: "망원시장의 명물. 양수현 셰프의 바삭하고 육즙 가득한 수제 돈까스.",
    hours: "10:00-20:00", phone: "02-000-0000"
  },
  {
    id: "s2b07", name: "떡산", season: 2, tier: "흑수저", chef: "김두래 (떡볶이 명인)", category: "분식", region: "서울",
    address: "서울 은평구 연서로 247-1", lat: 37.6202, lng: 126.9205,
    menus: [{ name: "가래떡 떡볶이", price: 5000 }],
    priceMin: 5000, priceMax: 15000,
    desc: "줄 서서 먹는 떡볶이 명인의 분식집. 진하고 깊은 고추장 양념이 특징.",
    hours: "11:00-20:00", phone: "02-000-0000"
  },

  // ══════════════════════════════════════
  // 지방 주요 식당 (Regional Highlights)
  // ══════════════════════════════════════
  {
    id: "reg01", name: "미트컬쳐 (Meet Culture)", season: 1, tier: "백수저", chef: "조은주 (청와대 셰프)", category: "유러피안", region: "강릉",
    address: "강원 강릉시 경강로 2629", lat: 37.7725, lng: 128.9185,
    menus: [{ name: "스테이크", price: 45000 }, { name: "피쉬앤칩스", price: 22000 }],
    priceMin: 20000, priceMax: 80000,
    desc: "강릉에서 만나는 청와대 셰프의 유러피안 퀴진. 신선한 현지 식재료를 사용.",
    hours: "11:30-21:00 (B.T 15:00-17:30)", phone: "033-644-2629"
  },
  {
    id: "reg02", name: "모리노아루요", season: 1, tier: "백수저", chef: "김승민", category: "일식/덮밥", region: "제주",
    address: "제주 제주시 애월읍 하소로 769-58", lat: 33.4285, lng: 126.3985,
    menus: [{ name: "카이센동", price: 25000 }, { name: "메로동", price: 18000 }],
    priceMin: 15000, priceMax: 35000,
    desc: "마스터셰프 코리아 시즌1 우승자 김승민 셰프의 덮밥 전문점. 숲속 고즈넉한 분위기.",
    hours: "11:30-20:00 (일요일 휴무)", phone: "064-799-4253"
  },
  {
    id: "reg03", name: "전주비빔소리", season: 1, tier: "흑수저", chef: "유비빔 (비빔대왕)", category: "한식", region: "전주",
    address: "전북 전주시 덕진구 건지산로 53-3", lat: 35.8455, lng: 127.1355,
    menus: [{ name: "비빔밥", price: 12000 }, { name: "청국장", price: 10000 }],
    priceMin: 10000, priceMax: 30000,
    desc: "비빔에 인생을 건 비빔대왕 유비빔 셰프의 식당. 비빔 박자에 맞춰 비벼 먹는 재미.",
    hours: "09:00-21:00", phone: "063-245-0000"
  },
  {
    id: "reg04", name: "태화장", season: 1, tier: "흑수저", chef: "박지영 (중식 마녀)", category: "중식", region: "대전",
    address: "대전 동구 중앙로203번길 78", lat: 36.3335, lng: 127.4335,
    menus: [{ name: "난자완스", price: 35000 }, { name: "탕수육", price: 25000 }],
    priceMin: 15000, priceMax: 60000,
    desc: "대전에서 가장 오래된 중식당 중 하나. 박지영 셰프의 내공이 담긴 요리들.",
    hours: "11:00-21:00", phone: "042-256-1091"
  },
  {
    id: "reg05", name: "친밀 제주", season: 1, tier: "백수저", chef: "오세득", category: "양식", region: "제주",
    address: "제주 제주시 애월읍 유수암로 12", lat: 33.4335, lng: 126.4175,
    menus: [{ name: "파스타", price: 24000 }, { name: "버거", price: 18000 }],
    priceMin: 18000, priceMax: 50000,
    desc: "오세득 셰프의 제주 다이닝. 제주 식재료를 활용한 감각적인 서양 요리.",
    hours: "11:00-20:00", phone: "064-000-0000"
  },
  {
    id: "reg06", name: "엄마밥상", season: 1, tier: "흑수저", chef: "천만백반", category: "한식", region: "경북",
    address: "경북 칠곡군 동명면 한티로 594", lat: 36.0125, lng: 128.5715,
    menus: [{ name: "엄마밥상 정식", price: 15000 }],
    priceMin: 15000, priceMax: 15000,
    desc: "천만 번 차린 백반의 내공. 정성 가득한 한식 밥상을 만날 수 있는 곳.",
    hours: "11:00-20:00", phone: "054-000-0000"
  },
  {
    id: "reg07", name: "천향", season: 1, tier: "흑수저", chef: "김동현 (부채도사)", category: "중식", region: "경기",
    address: "경기 성남시 분당구 판교역로 231", lat: 37.4015, lng: 127.1115,
    menus: [{ name: "코스 요리", price: 55000 }, { name: "자장면", price: 10000 }],
    priceMin: 10000, priceMax: 100000,
    desc: "판교의 유명한 프리미엄 중식당. 부채도사 셰프의 화려한 중식 스킬.",
    hours: "11:30-22:00", phone: "031-8016-8100"
  },
  {
    id: "reg08", name: "최씨네피자", season: 1, tier: "흑수저", chef: "월클 레시피", category: "양식/피자", region: "대구",
    address: "대구 중구 국채보상로 635-1", lat: 35.8715, lng: 128.6015,
    menus: [{ name: "월클 피자", price: 25000 }],
    priceMin: 20000, priceMax: 40000,
    desc: "대구에서 즐기는 월드클래스 레시피 피자. 독특한 토핑이 매력적.",
    hours: "12:00-22:00", phone: "053-000-0000"
  }
];

