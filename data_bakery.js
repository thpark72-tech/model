// 천하제빵 (The Great Baker) 출연 베이커리 데이터
const BAKERY_DATA = [
  {
    id: "bakery01", name: "어글리베이커리", chef: "정정훈", category: "베이커리", region: "서울",
    address: "서울 마포구 월드컵로13길 73", lat: 37.5563, lng: 126.9065,
    menus: [{ name: "대파빵", price: 6500 }, { name: "치즈덕후", price: 4200 }],
    priceMin: 4000, priceMax: 15000,
    desc: "천하제빵 출연 정정훈 셰프의 빵집. 맘모스빵과 대파빵이 시그니처.",
    hours: "12:00-21:00 (월,화 휴무)", phone: "02-332-2800"
  },
  {
    id: "bakery02", name: "레브두 (Reve doux)", chef: "방준호", category: "디저트", region: "서울",
    address: "서울 송파구 백제고분로45길 19", lat: 37.5112, lng: 127.1085,
    menus: [{ name: "밀푀유", price: 9500 }, { name: "무스케이크", price: 8500 }],
    priceMin: 8000, priceMax: 20000,
    desc: "천하제빵 출연 방준호 셰프의 고급 디저트 카페. 예술적인 플레이팅이 특징.",
    hours: "12:00-21:00", phone: "02-421-0000"
  },
  {
    id: "bakery03", name: "하레하레 (둔산본점)", chef: "이창민", category: "베이커리", region: "대전",
    address: "대전 서구 둔산로 155", lat: 36.3505, lng: 127.3915,
    menus: [{ name: "쌀하레치즈", price: 5500 }, { name: "명란바게트", price: 4800 }],
    priceMin: 4000, priceMax: 15000,
    desc: "천하제빵 출연 이창민 셰프의 대전 대표 빵집. 세계 제과 월드컵 우승 경력.",
    hours: "08:00-22:00", phone: "042-483-1595"
  },
  {
    id: "bakery04", name: "봉주르마담", chef: "김시엽", category: "베이커리", region: "제주",
    address: "제주 서귀포시 대청로 33", lat: 33.2505, lng: 126.5085,
    menus: [{ name: "뺑스위스", price: 5200 }, { name: "에그타르트", price: 3800 }],
    priceMin: 3500, priceMax: 12000,
    desc: "천하제빵 출연 김시엽 셰프의 제주 서귀포 빵집. 정통 프랑스 스타일 베이커리.",
    hours: "09:00-21:00", phone: "064-739-2810"
  },
  {
    id: "bakery05", name: "1983 브레드", chef: "김연인", category: "베이커리", region: "경기",
    address: "경기 고양시 일산동구 위시티로 49", lat: 37.6763, lng: 126.8165,
    menus: [{ name: "연탄식빵", price: 7500 }, { name: "연탄재식빵", price: 7500 }],
    priceMin: 7000, priceMax: 10000,
    desc: "천하제빵 출연 김연인 셰프의 이색 베이커리. 연탄 모양 식빵이 전 세계적으로 화제.",
    hours: "10:00-20:00", phone: "031-000-0000"
  },
  {
    id: "bakery06", name: "슬지제빵소", chef: "김종우", category: "베이커리/찐빵", region: "전북",
    address: "전북 부안군 진서면 청자로 1076", lat: 35.6222, lng: 126.6225,
    menus: [{ name: "찐빵 세트", price: 12000 }, { name: "크림치즈찐빵", price: 3500 }],
    priceMin: 3000, priceMax: 20000,
    desc: "천하제빵 출연 김종우 셰프의 2대째 내려오는 찐빵 명가. 세련된 공간과 맛.",
    hours: "10:00-19:00", phone: "063-583-3959"
  },
  {
    id: "bakery07", name: "정남미명과", chef: "정남미", category: "베이커리", region: "강원",
    address: "강원 강릉시 하슬라로 232번길 8-1", lat: 37.7712, lng: 128.8765,
    menus: [{ name: "구황작물빵 세트", price: 18000 }],
    priceMin: 3500, priceMax: 25000,
    desc: "천하제빵 출연 정남미 셰프의 강릉 빵집. 감자, 고구마 등 구황작물 비주얼 빵으로 유명.",
    hours: "11:00-19:00", phone: "033-000-0000"
  }
];
