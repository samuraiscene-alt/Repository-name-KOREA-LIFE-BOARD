# KOREA LIFE BOARD V39 — PWA PLAYTEST 1

V38의 게임 기능은 그대로 유지하고, iPhone GitHub Pages 실플레이 배포판으로 정리한 버전입니다.

- GitHub Pages 루트 배포를 위한 `.nojekyll` 포함
- Service Worker 캐시 버전을 `klb-v39-playtest1`로 갱신
- 화면 버전 표기를 `PLAYTEST 1`로 변경
- `PLAYTEST_CHECKLIST.md`에 iPhone 설치/실플레이 점검 순서 수록
- 게임 규칙/밸런스/저장 데이터 스키마는 V38과 동일

---

# KOREA LIFE BOARD V38

## V38 — iPhone 실플레이 게임 메뉴
- 안전한 턴 상태에서 열 수 있는 `게임 메뉴`를 추가했습니다.
- 메뉴에서 `계속하기 / 지금 저장 / 시작 화면으로 / 새 게임`을 사용할 수 있습니다.
- 시작 화면으로 나갈 때 현재 진행을 자동저장하고, 이어하기 전까지 저장본을 보호합니다.
- 효과음과 진동 피드백을 각각 켜고 끌 수 있으며 설정은 게임 저장과 별도로 기기에 유지됩니다.
- 주사위 굴림·말 이동·AI 턴·선택 팝업 중에는 메뉴를 잠가 상태 꼬임을 방지합니다.
- V37의 시작 화면, V36의 가로모드/복귀 안정화, V35의 최종 앱 아이콘, V34의 오프라인 PWA, V33의 자동저장을 그대로 유지합니다.

# KOREA LIFE BOARD V37

## V37 — iPhone 가로모드·잠금 복귀 안정화
- PWA 플레이 화면을 가로모드 우선으로 고정해 보드·3D 주사위가 세로 화면에서 깨지지 않도록 합니다.
- 세로 화면에서는 게임을 가리고 `아이폰을 가로로 돌려주세요` 안내를 표시합니다.
- `가로모드 시도` 버튼은 브라우저가 Screen Orientation API를 지원할 때 가로 잠금을 요청합니다. iPhone/iOS에서 강제 잠금이 지원되지 않는 경우에는 제어센터의 세로 화면 방향 고정을 끄도록 안내합니다.
- iOS 주소창/홈 화면 앱의 높이 변화에 대응하도록 실제 `window.innerHeight`를 CSS 높이에 동기화합니다.
- 화면 잠금, 앱 전환, 백그라운드 후 복귀 시 3D 렌더러 크기·플레이어 말 위치·HUD·카메라를 다시 맞춥니다.
- `pageshow`/BFCache 복귀도 처리해 Safari가 페이지를 메모리에서 되살린 경우 화면 위치를 복구합니다.
- V33~V35의 자동저장·이어하기·오프라인 캐시·최종 앱 아이콘을 그대로 유지합니다.

> iOS는 웹앱이 시스템의 `세로 화면 방향 고정`을 임의로 해제할 수 없습니다. 따라서 V37은 지원되는 환경에서만 가로 잠금을 요청하고, iPhone에서는 세로 상태에서 플레이를 막고 회전 안내를 제공하는 방식으로 동작합니다.

# KOREA LIFE BOARD V35

## V35 — 최종 앱 아이콘 적용
- 사용자가 확정한 `초록 머니백 + 주사위 + 금화 + 상승 화살표` 이미지를 PWA 최종 앱 아이콘으로 적용했습니다.
- iPhone 홈 화면용 `apple-touch-icon` 180px, PWA용 192/512px, 원본 보관용 1024px 아이콘을 포함합니다.
- 아이콘 파일명을 V35 전용으로 변경해 iPhone/Safari의 기존 아이콘 캐시 영향을 줄였습니다.
- service worker 캐시 버전을 `klb-v35`로 갱신했습니다.
- 기존 V34의 PWA 설치·오프라인·자동저장 기능은 그대로 유지합니다.

### iPhone에서 새 아이콘 확인
기존 홈 화면 아이콘이 이미 설치돼 있으면 iOS가 이전 아이콘을 계속 보관할 수 있습니다. 이 경우 기존 LIFE BOARD 홈 화면 아이콘만 삭제한 뒤 Safari에서 다시 `홈 화면에 추가`하면 V35 아이콘이 표시됩니다. 저장 데이터는 Safari 사이트 데이터를 지우지 않는 한 그대로 유지됩니다.

# KOREA LIFE BOARD V34

## V34 — iPhone PWA 설치·오프라인 기반
- `manifest.webmanifest`를 추가해 홈 화면 설치 시 독립 앱(standalone) 형태로 실행됩니다.
- iPhone용 `apple-touch-icon`과 192/512px PWA 아이콘을 포함합니다.
- `service worker`가 게임 셸(`index.html`, `style.css`, `app.js`, PWA 파일/아이콘)을 캐시합니다.
- 같은 출처의 파일은 온라인일 때 최신 버전을 우선 받고, 네트워크가 없으면 캐시본으로 실행합니다.
- Three.js/Rapier 등 외부 3D 의존성은 서비스워커가 제어하는 온라인 실행에서 런타임 캐시됩니다. **처음 설치 직후 최소 한 번은 온라인으로 완전히 실행한 뒤** 오프라인 테스트하는 것을 권장합니다.
- 화면 하단에 `Safari · 온라인 / 홈 화면 앱 · 온라인 / 오프라인 모드` 상태를 표시합니다.
- V33의 `localStorage` 자동저장/이어하기와 결합되어 앱 종료 후 다시 홈 화면 아이콘으로 실행해도 마지막 안정 상태를 복원합니다.
- Mac/Xcode 없이 iPhone Safari + GitHub Pages에서 실제 플레이테스트하기 위한 PWA 기반 단계입니다.

### iPhone 테스트 순서
1. GitHub Pages 주소를 Safari에서 한 번 정상 실행합니다.
2. 공유 버튼 → `홈 화면에 추가`로 설치합니다.
3. 홈 화면의 LIFE BOARD 아이콘으로 다시 실행합니다.
4. 온라인 상태에서 한 번 완전히 로드한 뒤, 필요하면 비행기 모드/오프라인에서도 재실행을 확인합니다.

# KOREA LIFE BOARD V33

## V33 — 특별 기회: 로또6/45
- `특별 기회` 칸에서 이동수단 구매/업그레이드 또는 로또6/45 5게임 구매를 선택할 수 있습니다.
- 로또6/45 가격은 실제 1게임 1,000원을 반영해 5게임 묶음 5,000원으로 처리합니다.
- 등위별 당첨확률은 동행복권 공식 확률(1등 1/8,145,060 · 2등 1/1,357,510 · 3등 1/35,724 · 4등 1/733 · 5등 1/45)을 사용합니다.
- 4등 5만원, 5등 5천원은 실제 고정당첨금을 사용합니다. 1~3등은 회차별 판매액과 당첨자 수에 따라 실제 금액이 달라지므로 게임 대표값(1등 20억 / 2등 5천만 / 3등 150만)을 사용합니다.
- 당첨금 200만원 이하는 비과세, 200만원 초과~3억원 이하는 총 22%, 3억원 초과는 총 33% 원천징수 구조를 적용합니다.
- 각 플레이어는 누적 복권 구입액, 당첨액, 세금, 최고당첨 등위를 내부 기록합니다.
- AI는 이동수단을 우선 검토하고, 구매 여력이 없을 때 낮은 확률로 복권에 참여합니다.

# KOREA LIFE BOARD V25

## V25 추가: 경기 사이클
- 전 플레이어가 한 바퀴씩 완료하면 게임의 경제연도가 1년 진행됩니다.
- 경기 상태는 `정상 / 호황 / 둔화 / 불황 / 회복` 5단계입니다.
- 경기 상태는 지역자산의 게임 평가가치, 사업 매출, 은행대출 금리에만 영향을 줍니다.
- 세금·공적보험료율 등 대한민국 공식 제도값은 경기 상태 때문에 임의로 바꾸지 않습니다.
- 제1·제2금융권 일반대출은 경기 금리스프레드가 매년 반영되는 변동금리형 게임 모델입니다.
- 주택담보대출은 취급 시점의 경기금리가 고정되는 단순화 모델입니다.
- 경기별 가격·매출·금리 배율은 모두 **게임 밸런스값**이며 실제 한국 거시경제 전망치가 아닙니다.

### V25 게임 밸런스값
- 정상: 자산 1.00 / 사업매출 1.00 / 금리스프레드 +0.0%p
- 호황: 자산 1.08 / 사업매출 1.08 / +0.5%p
- 둔화: 자산 1.02 / 사업매출 0.96 / +1.0%p
- 불황: 자산 0.88 / 사업매출 0.82 / +1.8%p
- 회복: 자산 0.96 / 사업매출 1.03 / +0.6%p

# KOREA LIFE BOARD V23

V20 기반 경량 업데이트.

## V23 추가
- 플레이어별 게임용 신용점수(초기 850)
- 연체 발생 시 신용점수 하락, 무연체 해에는 완만한 회복
- 신용상태: 우수/양호/보통/주의/위험
- 제1금융권: 연체가 있거나 신용점수 700 미만이면 신규대출 제한
- 제2금융권: 신용점수 550 미만이면 신규대출 제한
- 신용점수에 따라 대출한도 자동 조정
- 연간정산 후 신용상태 갱신

※ V23 신용점수는 KCB/NICE 실제 점수 산식을 복제한 것이 아니라 게임 밸런스용 모델입니다. 실제 법적 압류·차압·회생·파산 절차는 다음 버전에서 별도 구현합니다.
# KOREA LIFE BOARD Prototype V20

V20 adds residential housing and first-home ownership to the V19 family-economy prototype.

## Added in V20
- Housing status is now separate from commercial property ownership.
- Players begin in `가족과 거주` and can later choose:
  - family/shared residence
  - monthly rent
  - jeonse
  - first small apartment
  - larger family apartment
- Monthly-rent and jeonse deposits leave cash while occupied and are returned when moving.
- Housing costs are settled once per completed lap/year.
- Owner-occupied homes have game-balance maintenance costs plus official 2026 residential property-tax mechanics.
- A first-home purchase can use a mortgage if cash is insufficient.
- Mortgage payments amortize principal and interest every year; unpaid scheduled payments become arrears.
- Mortgage balance is included in total household debt.
- Housing choices are offered through life-event spaces from age 22, with a cooldown so they do not block all other life events.
- AI players can rent, use jeonse, or buy a home based on age/family/cash.

## Official-policy pieces used
- Residential acquisition-tax rate for a house priced at KRW 600 million or less: 1%.
- General first-home acquisition-tax relief: up to KRW 2 million for an eligible owner-occupied home priced at KRW 1.2 billion or less through the current statutory sunset.
- 2026 one-house fair-market-value ratio: 43% up to KRW 300 million, 44% above KRW 300 million through KRW 600 million, 45% above that.
- One-house property-tax special rates (up to the statutory eligibility ceiling) plus local education tax / urban-area portion are modeled.
- Bank DSR 40% and 2026 stress-DSR concepts are used only as an affordability reference in the prototype mortgage screen.

## Reality / game-balance boundary
Housing prices, deposits, rents, management costs, owner maintenance costs and the mortgage's actual interest rate are game-balance values. The game-scale mortgage LTV cap is intentionally **not** represented as an official Korean LTV rule because current LTV limits depend on borrower/region/property conditions and game prices are compressed.

The V20 mortgage affordability calculation is therefore **DSR-informed, not an official loan-approval calculator**. Existing unsecured/game loans do not yet have enough amortization detail to reproduce regulatory DSR exactly.

## Current limits
- Home sale, capital gains tax, multi-home ownership and inheritance are not yet modeled.
- Birth/child-rearing home acquisition-tax relief is not yet stacked with first-home relief.
- Detailed mortgage policy products, guarantee fees, registration/legal fees and brokerage commissions are not yet modeled.
- Jeonse loans and jeonse-deposit guarantee insurance are later modules.


## V23 추가: 장기연체 · 강제집행 위험 · 담보권 실행
- 연체 지속기간에 따라 `독촉·추심 → 강제집행 위험 → 담보권 실행·강제매각 → 개인회생·파산 검토` 상태가 표시됩니다.
- **3년**은 실제 법정 기한이 아니라 게임 리듬을 위한 장기연체 단계 기준입니다. 실제 강제집행/경매 시점은 채권 종류·담보·법원 절차에 따라 달라집니다.
- 주택담보대출이 있고 장기연체가 지속되면 자가주택 담보권 실행을 우선 모델링합니다. 자가가 없으면 보유 지역자산 중 고가 자산의 강제매각 위험이 반영됩니다.
- 강제매각 회수율 85%는 **게임 밸런스값**이며 실제 경매 낙찰가율이 아닙니다.
- 강제매각 뒤에도 과도한 연체·채무가 남으면 `개인회생·파산 검토` 상태로 진입합니다. V23에서는 실제 면책/변제계획을 자동 확정하지 않습니다.
- 개인회생의 실제 변제계획은 법원 절차이며, 법상 원칙적으로 변제기간은 변제개시일부터 3년을 초과하지 않고 특별한 사정이 있으면 5년 범위가 가능합니다.


## V23 추가
- 장기연체 압류자산을 즉시 강제매각하지 않고 경매공고로 전환
- 자동평가액과 경매차수에 따라 최저입찰가 자동 산정
- 다른 플레이어/AI가 순서대로 입찰 또는 포기
- 최고입찰자 낙찰, 전원 포기 시 유찰
- 유찰 시 다음 경매 최저가 자동 하향
- 낙찰 시 낙찰대금 및 취득 관련 세금 자동 차감, 소유권 변경
- 낙찰대금은 주담대 및 연체·대출 변제에 우선 충당, 잔액은 기존 소유자에게 반환
- 상가 임차인이 있는 지역은 게임 간소화 규칙으로 새 소유자에게 임대차 승계

※ 최초 최저가 80%, 유찰 시 15% 하향은 실제 법정 경매기준이 아니라 게임 밸런스값입니다.

## V25 — 은퇴·연금·퇴직금
- 게임 종료 연령: 65세
- 국민연금: 실제 보험료가 발생한 연도만 가입기간으로 누적
- 65세 시 국민연금 가입기간 10년 이상이면 노령연금 수급권 확보로 표시
- 공무원·교사 계열은 국민연금과 분리해 직역연금 가입기간만 별도 추적
- 연금액 자체는 공식 A값·B값 등 추가 변수가 필요해 이번 버전에서는 임의 추정하지 않음
- 퇴직금: 계속근로 1년당 30일분 평균임금 원칙을 반영하되, 게임은 3개월 임금 이력이 없으므로 월급×근속연수로 근사
- 65세 도달 시 해당 플레이어는 더 이상 주사위를 굴리지 않으며, 모든 플레이어가 은퇴하면 순자산 순위를 표시


## V26
- 투자칸 2개 실제 기능화
- 500만원 단위 정기예금형 / 채권형 / 국내 상장주식 분산투자
- 경기 5단계에 따른 연간 평가손익
- 예금·채권형 양(+)수익의 이자성 부분은 15.4% 원천징수 모델
- 투자칸에서 추가매수 또는 전액매도 가능
- AI도 경기상태에 따라 보수/공격 투자 자동선택


## V27
- 직업칸에 고용상태(취업/구직)를 추가했습니다.
- 경기 둔화·불황 시 민간 임금근로자에게 조건형 권고사직 이벤트가 발생할 수 있습니다. 발생확률은 게임 밸런스값입니다.
- 자진퇴사와 비자발적 실직을 구분합니다.
- 비자발적 실직은 고용보험 피보험기간 180일 이상을 게임 월 단위로 근사해 구직급여 자격을 판정합니다.
- 2026년 구직급여 일액은 평균임금 60%, 8시간 기준 하한 66,048원, 상한 68,100원을 반영합니다.
- 소정급여일수는 연령과 피보험기간에 따라 120~270일을 반영합니다.
- 게임은 1턴=1년이라 실제 수개월 지급절차를 한 번의 실직 이벤트에서 일괄 정산합니다.

## V28
- 직업칸에 게임용 교육·자격 과정을 추가했습니다.
- 8개 직군별 교육 과정을 이수하면 해당 직군의 상위 직업 진입에 활용됩니다.
- 2단계 직업은 `직무자격 보유` 또는 `동일 직군 경력 2년`, 3단계 직업은 `직무자격 + 동일 직군 경력 4년`을 기본 게임조건으로 사용합니다.
- 전문직은 실제 면허·학위 체계를 그대로 재현하지 않으며, `전문직 진입 자격 트랙`이라는 게임 추상화 자격을 필수로 둡니다.
- 교육비·진입조건·과정명은 게임 밸런스값이며 실제 채용요건이나 국가자격 취득요건이 아닙니다.
- AI도 현금·경력 상태를 보고 자기 직군 교육을 이수한 뒤 승진을 노릴 수 있습니다.


## V29
- 인생 이벤트에 이혼 선택을 추가했습니다. 혼인 5년 이상 이후 일정 간격으로 가족 이벤트에서 혼인 유지 또는 협의이혼을 선택할 수 있습니다.
- 실제 민법상 재산분할은 부부가 혼인 중 협력해 형성한 재산과 여러 사정을 참작합니다. 게임에서는 이를 단순화해 `혼인 시작 이후 순자산 증가분 × 게임 기여율(25~45%)`로 계산합니다.
- 재산분할액을 현금으로 전액 지급하지 못하면 남은 금액은 게임 내부 `재산분할 미지급금`으로 남고 매년 일부를 상환합니다.
- 자녀가 있는 경우 V29에서는 자녀가 플레이어와 계속 거주하는 것으로 단순화하고, 전 배우자 소득과 자녀 연령별 양육비를 기준으로 게임용 연간 양육비 지원액을 계산합니다.
- 실제 자녀 양육자·양육비는 당사자 협의 또는 법원이 자녀 복리, 나이, 부모 재산상황 등을 고려해 정하며 V29의 비율은 법정 고정비율이 아닙니다.
- 이혼 뒤 배우자 소득·부채는 가계에서 빠지고, 자녀 양육비는 계속 발생합니다.


## V30
- 이혼 후 게임 기준 3년이 지나면 재혼 기회가 열립니다. 3년 대기기간과 이후 5년 이벤트 간격은 법정 기간이 아니라 게임 밸런스값입니다.
- 재혼 시 새 배우자의 직업·소득·유동자산·부채가 새 가계에 합류합니다.
- 재혼해도 이전 혼인의 재산분할 미지급금과 기존 미성년 자녀에 대한 양육비 흐름은 삭제되지 않습니다.
- 각 혼인에 번호를 부여하고 자녀도 어느 혼인에서 태어났는지 연결해, 재혼 후 다시 이혼하더라도 전 배우자별 양육비 계산이 섞이지 않게 했습니다.
- 기존 자녀는 플레이어와 계속 거주하는 V29의 단순화 규칙을 유지합니다.
\n\n## V31\n- 인생 이벤트에 `부모 증여`와 `상속 정산`을 추가했습니다. 경쟁 모드의 시작조건은 그대로 동일하며, 각 플레이어에게 같은 기준금액과 연령 조건을 사용합니다.\n- 부모 증여는 게임 기준 30세 이후 첫 가족 이벤트에서 1회 제안됩니다. 증여액 8,000만원은 게임 밸런스값입니다.\n- 성년 자녀가 직계존속에게 증여받을 때 10년 합산 5,000만원 증여재산공제를 적용합니다. 혼인일 전후 2년 또는 출산·입양일부터 2년 이내라면 혼인·출산 추가공제를 합산 한도 1억원까지 적용할 수 있도록 구현했습니다.\n- 증여세와 상속세는 동일한 10~50% 누진세율 구조를 사용합니다.\n- 상속은 게임 기준 55세 이후 1회 발생하며, 부모 순상속재산 6.5억원·플레이어 지분 50%는 게임 밸런스값입니다.\n- 상속세는 전체 상속재산에 일괄공제 5억원을 적용한 뒤 산출하고, 산출세액의 50%를 플레이어 지분에 배분하는 단순 모델입니다. 실제 상속세는 배우자공제, 금융재산공제, 채무·장례비, 상속인 구성 등 추가 요소가 있으므로 V31 계산은 실무 신고용이 아닙니다.\n

## V33 — PWA 플레이테스트 저장/이어하기
- iPhone Safari/PWA에서 `localStorage` 기반 자동저장
- 턴·구매·대출·가족·주거·투자 등 안정된 상태에서 자동저장
- 앱을 닫거나 화면이 백그라운드로 가기 전 마지막 안정 상태 저장
- 다음 실행 시 게임 모드, 플레이어 진행, 현금/부채, 직업/가족/주거, 투자, 소유 부동산/임대차, 경기상태를 자동 복원
- 수동 `저장` 버튼과 저장시각 표시
- 진행 중 `처음부터` 터치 시 확인창으로 오작동 방지
- 주사위 이동/선택창 도중에는 중간 상태를 저장하지 않고 직전 안정 상태를 유지

이 버전은 Mac/Xcode 이전에 iPhone PWA에서 장시간 실제 플레이테스트하기 위한 기반 단계입니다.


## V37 시작 화면 · 이어하기
- 앱 실행 시 바로 보드가 활성화되지 않고 `이어하기 / 새 게임` 시작 화면이 먼저 표시됩니다.
- 저장 데이터가 있으면 현재 플레이어·나이·연차·현금·저장시각을 간단히 보여줍니다.
- 시작 화면을 보고 있는 동안 자동저장을 잠가 기존 저장본이 빈 새 게임으로 덮어써지지 않습니다.
- `이어하기`를 누르면 V33 이후의 전체 저장상태를 복원합니다.
- `새 게임 시작`은 게임 모드를 먼저 고른 뒤 시작하며, 기존 저장본이 있으면 삭제 확인을 거칩니다.