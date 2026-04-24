// 미슐랭 가이드 서울 & 부산 2026 (2026년 3월 5일 발표 – 한국 발간 10주년)
const RESTAURANTS = [
  // ── 3 STAR ──
  {id:1,name:"밍글스",stars:3,category:"한식",region:"서울",address:"서울 강남구 도산대로 317",lat:37.5235,lng:127.0351,
   menus:[{name:"밍글스 테이스팅 코스",price:280000},{name:"점심 코스",price:150000}],priceMin:150000,priceMax:280000,
   desc:"강민구 셰프의 전통 장 기반 현대 한식. 2026년 3스타 유지(2년 연속). 제철 발효 식재료가 핵심.",
   hours:"12:00-15:00 / 18:00-22:00 (일 휴무)",phone:"02-515-7306"},

  // ── 2 STAR ──
  {id:2,name:"모수",stars:2,category:"현대식",region:"서울",address:"서울 용산구 이태원로55가길 45",lat:37.5340,lng:126.9940,
   menus:[{name:"셰프 테이스팅 코스",price:330000},{name:"와인 페어링",price:150000}],priceMin:330000,priceMax:480000,
   desc:"안성재 셰프. 2026년 2스타로 재선정. 한국 식재료 × 모던 프렌치의 세계적 수준 파인다이닝.",
   hours:"18:30-22:00 (일·월 휴무)",phone:"02-795-7120"},

  {id:3,name:"소수헌",stars:2,category:"한식",region:"서울",address:"서울 종로구 삼청로 122",lat:37.5843,lng:126.9807,
   menus:[{name:"소수헌 시그니처 코스",price:260000},{name:"런치 코스",price:140000}],priceMin:140000,priceMax:260000,
   desc:"2026년 1스타→2스타 승격. 전통 한옥에서 즐기는 정통 한식 코스. 북촌 고즈넉한 분위기.",
   hours:"12:00-15:00 / 18:00-21:30 (월 휴무)",phone:"02-737-8889"},

  {id:4,name:"라연",stars:2,category:"한식",region:"서울",address:"서울 중구 소공로 112 포시즌스호텔 6층",lat:37.5700,lng:126.9784,
   menus:[{name:"라연 시그니처 코스",price:350000},{name:"런치 코스",price:180000}],priceMin:180000,priceMax:350000,
   desc:"포시즌스 호텔의 한식 파인다이닝. 전통 한식의 미학을 세련되게 표현합니다.",
   hours:"12:00-14:30 / 18:00-21:30",phone:"02-6388-5000"},

  {id:5,name:"권숙수",stars:2,category:"한식",region:"서울",address:"서울 강남구 청담동 94-12",lat:37.5262,lng:127.0480,
   menus:[{name:"궁중 코스",price:250000},{name:"별미 코스",price:180000}],priceMin:180000,priceMax:250000,
   desc:"조선 궁중음식의 현대적 재해석. 정통 한식의 깊은 맛을 경험할 수 있는 청담동 명소.",
   hours:"12:00-22:00 (일 휴무)",phone:"02-548-8889"},

  {id:6,name:"정식당",stars:2,category:"현대 한식",region:"서울",address:"서울 강남구 선릉로158길 11",lat:37.5215,lng:127.0421,
   menus:[{name:"제철 코스",price:220000},{name:"시즌 디너",price:260000}],priceMin:220000,priceMax:260000,
   desc:"임정식 셰프. 한국의 계절을 담은 코스 요리로 세계적 명성. 뉴욕 지점도 운영.",
   hours:"12:00-14:00 / 18:00-21:00",phone:"02-517-4654"},

  {id:7,name:"알라 프리마",stars:2,category:"이탈리아식",region:"서울",address:"서울 강남구 학동로17길 13",lat:37.5186,lng:127.0302,
   menus:[{name:"이노베이티브 이탈리안 코스",price:240000},{name:"런치 코스",price:130000}],priceMin:130000,priceMax:240000,
   desc:"한국 식재료 × 이탈리아 기법의 이노베이티브 파인다이닝. 직접 만드는 생 파스타.",
   hours:"12:00-15:00 / 18:00-22:00 (월 휴무)",phone:"02-542-1235"},

  {id:8,name:"미토우",stars:2,category:"일식",region:"서울",address:"서울 강남구 도산대로70길 24 1층",lat:37.5241,lng:127.0375,
   menus:[{name:"가이세키 코스",price:280000},{name:"런치 코스",price:150000}],priceMin:150000,priceMax:280000,
   desc:"일식 가이세키 파인다이닝. 일본 전통 기법 + 한국 제철 식재료의 독창적 조합.",
   hours:"12:00-14:30 / 18:00-21:30 (월 휴무)",phone:"02-512-9490"},

  {id:9,name:"에빗",stars:2,category:"이탈리아식",region:"서울",address:"서울 종로구 북촌로5나길 20",lat:37.5798,lng:126.9840,
   menus:[{name:"이탈리안 파인다이닝 코스",price:220000},{name:"런치 코스",price:120000}],priceMin:120000,priceMax:220000,
   desc:"2026년 2스타 승격. 북촌 한옥마을 속 이탈리안 파인다이닝. 한국 식재료 × 이탈리아 요리.",
   hours:"12:00-14:30 / 18:00-21:00 (화 휴무)",phone:"02-741-6100"},

  {id:10,name:"스와니예",stars:2,category:"프랑스식",region:"서울",address:"서울 종로구 자하문로7길 11",lat:37.5780,lng:126.9673,
   menus:[{name:"그랑 메뉴 데귀스타시옹",price:270000},{name:"런치 코스",price:130000}],priceMin:130000,priceMax:270000,
   desc:"한국 대표 프렌치 레스토랑. 정통 프랑스 기법과 제철 식재료의 완벽한 조화.",
   hours:"12:00-14:30 / 18:00-21:30 (월 휴무)",phone:"02-737-4654"},

  // ── 1 STAR – 서울 ──
  {id:11,name:"윤(YUN)",stars:1,category:"한식",region:"서울",address:"서울 강남구 선릉로 805 1층",lat:37.5229,lng:127.0349,
   menus:[{name:"시즌 한식 코스",price:180000},{name:"런치 코스",price:100000}],priceMin:100000,priceMax:180000,
   desc:"전통 한식의 가치를 현대적 감각으로 풀어낸 파인다이닝. 제철 식재료 중심의 코스.",
   hours:"12:00-15:00 / 18:00-22:00 (일 휴무)",phone:"02-511-9911"},

  {id:12,name:"온지음 퀴진",stars:1,category:"한식",region:"서울",address:"서울 종로구 가회동 1-4",lat:37.5807,lng:126.9831,
   menus:[{name:"조선 궁중 코스",price:140000},{name:"전통 정식",price:80000}],priceMin:80000,priceMax:140000,
   desc:"북촌의 전통 한식 연구 기반 레스토랑. 조선 시대 조리법을 현대적으로 재현.",
   hours:"12:00-15:00 / 18:00-21:00 (월 휴무)",phone:"02-742-7545"},

  {id:13,name:"비채나",stars:1,category:"한식",region:"서울",address:"서울 송파구 올림픽로 300 롯데월드타워 81층",lat:37.5127,lng:127.1026,
   menus:[{name:"한식 파인다이닝 코스",price:230000},{name:"런치 코스",price:130000}],priceMin:130000,priceMax:230000,
   desc:"롯데월드타워 81층의 한식 파인다이닝. 서울 전경과 함께하는 고품격 한식 코스.",
   hours:"12:00-15:00 / 18:00-21:30 (월 휴무)",phone:"02-3213-1000"},

  {id:14,name:"이타닉 가든",stars:1,category:"현대식",region:"서울",address:"서울 강남구 테헤란로 231 조선팰리스 36층",lat:37.5049,lng:127.0388,
   menus:[{name:"가든 테이스팅 코스",price:250000},{name:"런치 코스",price:150000}],priceMin:150000,priceMax:250000,
   desc:"조선팰리스 36층 가든 컨셉 파인다이닝. 식물성 식재료 중심의 혁신적 요리.",
   hours:"12:00-14:30 / 18:30-22:00 (월 휴무)",phone:"02-6744-2300"},

  {id:15,name:"라망 시크레",stars:1,category:"프랑스식",region:"서울",address:"서울 중구 퇴계로 67 레스케이프호텔 26층",lat:37.5592,lng:126.9803,
   menus:[{name:"시그니처 프렌치 코스",price:220000},{name:"런치 코스",price:130000}],priceMin:130000,priceMax:220000,
   desc:"레스케이프 호텔 최상층의 럭셔리 프렌치 파인다이닝. 서울 야경과 함께하는 낭만.",
   hours:"12:00-14:30 / 18:30-21:30 (월 휴무)",phone:"02-317-4000"},

  {id:16,name:"소설한남",stars:1,category:"현대식",region:"서울",address:"서울 용산구 한남대로42길 29",lat:37.5356,lng:126.9988,
   menus:[{name:"컨템퍼러리 코스",price:190000},{name:"런치 코스",price:120000}],priceMin:120000,priceMax:190000,
   desc:"한남동의 세련된 컨템퍼러리 파인다이닝. 계절 식재료를 활용한 창의적 요리.",
   hours:"12:00-15:00 / 18:00-22:00 (월 휴무)",phone:"02-797-7007"},

  {id:17,name:"세븐스 도어",stars:1,category:"현대식",region:"서울",address:"서울 강남구 압구정로42길 22",lat:37.5269,lng:127.0421,
   menus:[{name:"7코스 시그니처",price:200000},{name:"런치 4코스",price:120000}],priceMin:120000,priceMax:200000,
   desc:"압구정의 컨템퍼러리 파인다이닝. 7개의 코스로 구성된 독창적 요리 경험.",
   hours:"12:00-15:00 / 18:00-22:00 (월 휴무)",phone:"02-548-7007"},

  {id:18,name:"익스퀴진",stars:1,category:"현대식",region:"서울",address:"서울 강남구 선릉로152길 8",lat:37.5218,lng:127.0388,
   menus:[{name:"컨템퍼러리 코스",price:190000},{name:"런치 코스",price:110000}],priceMin:110000,priceMax:190000,
   desc:"강남의 혁신적 컨템퍼러리 파인다이닝. 독특한 식재료 조합과 창의적 플레이팅.",
   hours:"12:00-14:30 / 18:30-21:30 (일 휴무)",phone:"02-548-2222"},

  {id:19,name:"빈호(VINHO)",stars:1,category:"현대식",region:"서울",address:"서울 강남구 도산대로 180",lat:37.5225,lng:127.0334,
   menus:[{name:"와인 페어링 코스",price:200000},{name:"런치 코스",price:110000}],priceMin:110000,priceMax:200000,
   desc:"와인과 음식의 완벽한 조화를 추구하는 파인다이닝. 2026년도 1스타 유지.",
   hours:"12:00-15:00 / 18:00-22:00 (월 휴무)",phone:"02-548-8881"},

  {id:20,name:"튜투아망(Tutoiement)",stars:1,category:"프랑스식",region:"서울",address:"서울 강남구 청담동 85-10",lat:37.5268,lng:127.0501,
   menus:[{name:"프렌치 테이스팅 코스",price:210000},{name:"런치 코스",price:120000}],priceMin:120000,priceMax:210000,
   desc:"청담동의 모던 프렌치 파인다이닝. 자유롭고 창의적인 프랑스 요리.",
   hours:"12:00-14:30 / 18:30-21:30 (일·월 휴무)",phone:"02-511-2700"},

  {id:21,name:"y'east",stars:1,category:"현대식",region:"서울",address:"서울 종로구 창덕궁길 29",lat:37.5790,lng:126.9912,
   menus:[{name:"발효 테이스팅 코스",price:180000},{name:"런치 코스",price:100000}],priceMin:100000,priceMax:180000,
   desc:"발효와 숙성에 집중한 독창적인 파인다이닝. 한국 전통 발효 식재료가 핵심.",
   hours:"18:00-22:00 (일·월 휴무)",phone:"02-765-9988"},

  {id:22,name:"스시 카네사카",stars:1,category:"일식",region:"서울",address:"서울 강남구 청담동 97-7",lat:37.5275,lng:127.0493,
   menus:[{name:"오마카세 스시",price:300000},{name:"런치 오마카세",price:170000}],priceMin:170000,priceMax:300000,
   desc:"2026년 신규 선정. 도쿄 3스타 카네사카의 서울점. 정통 에도마에 스시.",
   hours:"12:00-14:00 / 18:00-22:00 (일 휴무)",phone:"02-540-6688"},

  {id:23,name:"스시 마츠모토",stars:1,category:"일식",region:"서울",address:"서울 강남구 청담동 127-14",lat:37.5271,lng:127.0505,
   menus:[{name:"오마카세 코스",price:220000},{name:"런치 오마카세",price:120000}],priceMin:120000,priceMax:220000,
   desc:"청담동 정통 에도마에 스시. 매일 직송 신선 재료로 구성된 오마카세.",
   hours:"12:00-14:00 / 18:00-22:00 (일 휴무)",phone:"02-514-0110"},

  {id:24,name:"소울",stars:1,category:"일식",region:"서울",address:"서울 강남구 논현동 145-9",lat:37.5132,lng:127.0288,
   menus:[{name:"카이세키 코스",price:180000},{name:"오마카세 스시",price:150000}],priceMin:150000,priceMax:180000,
   desc:"한국 정서가 담긴 일식 파인다이닝. 신선한 제철 해산물로 구성된 카이세키.",
   hours:"18:00-22:00 (일·월 휴무)",phone:"02-548-8979"},

  {id:25,name:"에스콘디도",stars:1,category:"현대식",region:"서울",address:"서울 용산구 이태원로 241",lat:37.5349,lng:126.9972,
   menus:[{name:"라틴 인스파이어드 코스",price:190000},{name:"런치 코스",price:110000}],priceMin:110000,priceMax:190000,
   desc:"이태원의 라틴 인스파이어드 파인다이닝. 남미 요리 기법과 한국 식재료의 만남.",
   hours:"12:00-15:00 / 18:30-22:00 (월 휴무)",phone:"02-790-5050"},

  {id:26,name:"GAGGEN by Choi Junho",stars:1,category:"현대식",region:"서울",address:"서울 강남구 압구정로 236",lat:37.5273,lng:127.0430,
   menus:[{name:"시그니처 테이스팅 코스",price:280000},{name:"런치 코스",price:160000}],priceMin:160000,priceMax:280000,
   desc:"2026년 신규 선정. 최준호 셰프의 독창적 현대 요리. 첨단 조리 기법과 전통의 융합.",
   hours:"18:00-22:00 (일·월 휴무)",phone:"02-546-2626"},

  {id:27,name:"기와강",stars:1,category:"한식",region:"서울",address:"서울 종로구 삼청로 64",lat:37.5830,lng:126.9819,
   menus:[{name:"한식 오마카세",price:200000},{name:"런치 코스",price:120000}],priceMin:120000,priceMax:200000,
   desc:"2026년 신규 선정. 삼청동의 현대 한식 오마카세. 한옥에서 즐기는 격조 있는 한식.",
   hours:"12:00-14:30 / 18:00-21:30 (화 휴무)",phone:"02-723-7700"},

  {id:28,name:"레스토랑 쥬은",stars:1,category:"현대식",region:"서울",address:"서울 강남구 논현동 98-5",lat:37.5148,lng:127.0285,
   menus:[{name:"컨템퍼러리 코스",price:200000},{name:"런치 코스",price:120000}],priceMin:120000,priceMax:200000,
   desc:"2026년 신규 선정. 강남의 감각적인 컨템퍼러리 파인다이닝.",
   hours:"12:00-15:00 / 18:30-22:00 (월 휴무)",phone:"02-545-9100"},

  {id:29,name:"레스토랑 산",stars:1,category:"현대식",region:"서울",address:"서울 강남구 청담동 41-4",lat:37.5259,lng:127.0471,
   menus:[{name:"자연 영감 코스",price:210000},{name:"런치 코스",price:130000}],priceMin:130000,priceMax:210000,
   desc:"2026년 신규 선정. 자연에서 영감받은 코스 요리. 국내 소농 생산자 식재료 사용.",
   hours:"18:00-22:00 (일·월 휴무)",phone:"02-549-3300"},

  {id:30,name:"학시(Hakushi)",stars:1,category:"일식",region:"서울",address:"서울 강남구 압구정로60길 5",lat:37.5276,lng:127.0428,
   menus:[{name:"오마카세 스시",price:280000},{name:"런치 코스",price:160000}],priceMin:160000,priceMax:280000,
   desc:"2026년 신규 선정. 압구정의 고급 스시 오마카세. 장인 정신이 깃든 에도마에 스시.",
   hours:"12:00-14:00 / 18:00-22:00 (일 휴무)",phone:"02-547-0808"},

  {id:31,name:"콜라주",stars:1,category:"현대식",region:"서울",address:"서울 중구 장충동2가 산 5-5 신라호텔",lat:37.5560,lng:127.0059,
   menus:[{name:"콜라주 코스",price:240000},{name:"호텔 런치 코스",price:140000}],priceMin:140000,priceMax:240000,
   desc:"2026년 신규 선정. 신라호텔 내 파인다이닝. 동·서양 요리의 예술적 콜라주.",
   hours:"12:00-14:30 / 18:30-21:30 (월 휴무)",phone:"02-2233-3131"},

  {id:32,name:"무오키",stars:1,category:"현대식",region:"서울",address:"서울 강남구 도산대로 203",lat:37.5230,lng:127.0338,
   menus:[{name:"오마카세 코스",price:210000},{name:"런치 코스",price:120000}],priceMin:120000,priceMax:210000,
   desc:"가로수길의 모던 파인다이닝. 한국적 감성을 담은 창의적인 현대 요리.",
   hours:"12:00-15:00 / 18:30-22:00 (일 휴무)",phone:"02-547-4500"},

  {id:33,name:"강민철 레스토랑",stars:1,category:"현대식",region:"서울",address:"서울 강남구 청담동 52-7",lat:37.5256,lng:127.0465,
   menus:[{name:"셰프 테이스팅 코스",price:250000},{name:"런치 코스",price:150000}],priceMin:150000,priceMax:250000,
   desc:"강민철 셰프의 개인 레스토랑. 독창적 요리 철학이 담긴 고품격 코스.",
   hours:"18:00-22:00 (일·월 휴무)",phone:"02-546-9900"},

  // ── 1 STAR – 부산 ──
  {id:34,name:"모리",stars:1,category:"일식",region:"부산",address:"부산 해운대구 해운대해변로 264",lat:35.1580,lng:129.1604,
   menus:[{name:"해산물 오마카세",price:160000},{name:"스시 코스",price:120000}],priceMin:120000,priceMax:160000,
   desc:"해운대 바다 전망의 해산물 오마카세. 부산의 신선한 해산물이 강점.",
   hours:"12:00-14:30 / 18:00-21:30 (화 휴무)",phone:"051-743-3000"},

  {id:35,name:"팔레트",stars:1,category:"현대식",region:"부산",address:"부산 수영구 광안해변로 220",lat:35.1536,lng:129.1186,
   menus:[{name:"컨템퍼러리 코스",price:180000},{name:"런치 코스",price:95000}],priceMin:95000,priceMax:180000,
   desc:"광안리 해변의 컨템퍼러리 파인다이닝. 부산 바다 전망과 세련된 현대 요리.",
   hours:"12:00-15:00 / 18:00-22:00 (화 휴무)",phone:"051-752-9494"},

  {id:36,name:"피오토",stars:1,category:"이탈리아식",region:"부산",address:"부산 기장군 기장읍 기장해안로 147",lat:35.2458,lng:129.2198,
   menus:[{name:"이탈리안 제철 코스",price:160000},{name:"파스타 런치",price:65000}],priceMin:65000,priceMax:160000,
   desc:"그린 스타도 보유. 지속 가능한 식재료 사용의 이탈리안 레스토랑. 기장 바다 뷰.",
   hours:"12:00-15:00 / 18:00-21:30 (월 휴무)",phone:"051-724-2100"}
];
