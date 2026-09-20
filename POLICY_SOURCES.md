# POLICY SOURCES — KR-2026.09 / V19 family extension

The game keeps one policy version for a running match.

## Vehicle acquisition tax
- Korea Local Tax Act, Article 12 (rates for acquisition other than real property)
- Non-business passenger car: 70/1000 (7%)
- Compact passenger car: 40/1000 (4%)
- https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1032782819

## Annual automobile tax
- Korea Local Tax Act, Article 127
- Non-business passenger car:
  - 1,000cc or less: KRW 80 per cc
  - 1,600cc or less: KRW 140 per cc
  - over 1,600cc: KRW 200 per cc
- Vehicles aged 3 years or more: 5% reduction for each year after year 2; vehicle age capped at 12 years for the formula (maximum 50% reduction)
- https://www.law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1033358361

## Local education tax on automobile tax
- Korea Local Tax Act, Article 151(1)(7)
- 30% of automobile tax
- https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1026499929

## Mandatory motor insurance structure
- Guarantee of Automobile Accident Compensation Act, Article 5: vehicle owner must carry liability coverage for bodily injury and property damage.
- https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1025768537
- Enforcement Decree Article 3: compulsory bodily injury limits and property damage up to KRW 20 million per accident under Article 5(2).
- https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1031273501

## Game-balance values, not official rates
- Vehicle purchase prices
- Annual fuel/maintenance cost
- Mandatory insurance premium
- Optional own-damage premium and reimbursement ratio
- Accident repair-cost scenarios


## V18 이동수단 추가 기준
- 지방세법 제12조: 대통령령으로 정하는 이륜자동차 취득세 표준세율 2% (1천분의 20).
- 지방세법 제127조: 3륜 이하 소형자동차 비영업용 자동차세 연세액 18,000원.
- 자동차손해배상 보장법 체계: 자동차/이륜자동차 의무보험 가입 구조를 게임에 반영. 실제 보험료는 개인별 차이가 커 게임 밸런스값으로 별도 설정.
- 자전거에는 취득세·자동차세·자동차 의무보험을 적용하지 않는다.

# V19 family / parental-leave extension

## Parental leave entitlement
- Act on Equal Employment and Support for Work-Family Reconciliation, Article 19.
- Default parental leave period: up to 1 year.
- Qualifying parents may use up to an additional 6 months; V19 does not yet implement that extension.
- Current law page (effective 2026-09-18):
  https://law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1030171391

## Ordinary parental-leave benefit
- Enforcement Decree of the Employment Insurance Act, Article 95 (current 2026 rule).
- Months 1-3: 100% of monthly ordinary wage, minimum KRW 700,000, maximum KRW 2,500,000 per month.
- Months 4-6: 100%, minimum KRW 700,000, maximum KRW 2,000,000 per month.
- Month 7 onward: 80%, minimum KRW 700,000, maximum KRW 1,600,000 per month.
- Current law page:
  https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1030418971
- MOEL 1350 2026 guidance also confirms the same bands and the 180-day insured-unit-period eligibility condition for Employment Insurance parental-leave benefit.

## Game-balance / simplified family values
- Partner profile income, liquid assets, debt and modeled tenure.
- Partner debt repayment rate.
- Child annual cost bands and outside-childcare premium.
- Marriage and childbirth event availability/frequency.
- Severance uses an approximation (monthly wage x modeled tenure) because the prototype does not retain actual average-wage history.


## V20 housing / first-home sources (verified 2026-09-19)
- 지방세법 제11조: 유상거래 주택 취득세율. 취득가액 6억원 이하 주택 1%.
  https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1029489135
- 지방세특례제한법 제36조의3: 생애최초 주택 취득세 감면. 12억원 이하 자가 거주 목적 주택, 일반 주택 감면한도 200만원(소형주택 등 별도 300만원 범주 존재), 현행 일몰 2028-12-31.
  https://www.law.go.kr/LSW/lsRvsDocListP.do?chrClsCd=010202&lsId=011178&lsRvsGubun=all
- 지방세법 시행령 제109조: 2026년 1세대1주택 공정시장가액비율 3억원 이하 43%, 3억 초과 6억원 이하 44%, 6억원 초과 45%.
  https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lspttninfSeq=120262
- 지방세법 제111조의2: 9억원 이하 1세대1주택 재산세 세율 특례(0.05% / 0.1% / 0.2% / 0.35% 누진구간).
  https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029491305
- 금융위원회: 차주단위 DSR 은행권 40%, 비은행권 50% 규제 구조.
  https://www.fsc.go.kr/po040200/78428
- 금융위원회 2026 스트레스 DSR 운영: 수도권·규제지역 주담대 스트레스금리 3.0% 이상; 2026-07-01 이후 지방 비규제 주담대의 별도 완화가 2026-12-31까지 연장된 행정지도.
  https://better.fsc.go.kr/fsc_new/status/adminMap/PrvntcDetail.do?muNo=144&postNo=5349&stNo=11

### Important V20 implementation boundary
The code uses the **DSR concept and 40% bank ratio as an affordability reference**, but it is not an official DSR calculator because the prototype's existing game loans do not yet carry full maturity/amortization structures and the game economy compresses property prices. The mortgage LTV cap and actual mortgage rate remain explicit game-balance values.


## V22 채무위기·강제집행·개인회생 근거
- 민사집행법 제264조: 부동산 담보권 실행을 위한 경매신청 구조.
- 민사집행법 제271조~제273조: 유체동산·채권 및 그 밖의 재산권에 대한 담보권 실행 구조.
- 채무자 회생 및 파산에 관한 법률 제593조: 개인회생 신청 시 법원이 강제집행·가압류·담보권 실행 경매 등의 중지·금지를 명할 수 있는 구조.
- 같은 법 제611조: 개인회생 변제계획 및 변제기간(원칙 3년 이하, 특별한 사정이 있는 경우 5년 이하).

### 게임 모델 주의
V22의 `3년 연체 → 강제매각 위험`과 `강제매각 회수율 85%`는 **게임 밸런스 규칙**입니다. 대한민국 법률이 일률적으로 3년 뒤 강제매각하도록 정하거나 경매 회수율을 85%로 정하는 것이 아닙니다. 파산·면책도 법원의 판단과 절차가 필요하므로 V22는 자동 면책을 하지 않고 `검토` 상태까지만 구현합니다.


## V25 경기 사이클
V25의 경기 상태별 자산가치·매출·대출금리 가감치는 공식 정책값이 아니라 게임 밸런스 변수입니다. 세금·보험 공식 계산식은 기존 정책 버전을 그대로 유지합니다.

## V25 은퇴·연금·퇴직금
- 국민연금공단 노령연금: 가입기간 10년 이상, 1969년생 이후 지급개시연령 65세
  - https://ma.nps.or.kr/pnsinfo/ntpsklg/getOHAF0056M0.do
- 근로자퇴직급여 보장법 제8조·제15조: 계속근로기간 1년에 대해 30일분 이상의 평균임금
  - https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1023689759
  - https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1016105257
- 게임 단순화: 국민연금 '수급권 여부'까지만 공식 기준으로 판정. 실제 월 연금액은 A값·B값 및 가입이력 등이 필요하므로 V25에서 임의 산정하지 않음.
- 게임 단순화: 퇴직금은 평균임금 상세이력이 없어 `현재 연봉÷12 × 현재 직장 근속연수`로 근사함.


## V26 금융투자
- 국세청 원천징수 안내: 일반 이자소득 및 일반 배당소득 원천징수 세율 14%. 지방소득세는 소득세의 10%를 적용하므로 게임에서는 이자성 수익에 총 15.4% 원천징수로 반영.
- 국세청 2026 국내주식 양도소득세 안내: 국내 상장주식을 장내에서 거래하는 일반 소액주주는 양도소득세 신고대상이 아님. V26 주식형은 이 전제를 사용하며 배당은 별도로 모델링하지 않음.
- 투자상품 수익률·변동폭은 모두 게임 밸런스값이며 실제 금융상품 수익률이나 투자 권유가 아님.


## V27 고용·구직급여
- 고용보험 구직급여 수급요건: 이직 전 18개월 중 피보험단위기간 통산 180일 이상, 근로 의사·능력 및 적극적 재취업 노력, 원칙적으로 비자발적 이직.
- 2026.1.1 이후 이직자 구직급여: 기초일액의 60%, 1일 상한 68,100원, 8시간 근로 기준 하한 66,048원.
- 소정급여일수: 50세 미만 120~240일, 50세 이상 및 장애인 120~270일(가입기간 구간별).
- 공식 참고: 고용보험 제도 안내 및 고용노동부 2026 구직급여 상한액 안내.
- 게임 단순화: 1턴=1년이므로 실제 실업인정·지급주기를 시뮬레이션하지 않고 수급가능 총액을 실직 이벤트에서 일괄 정산합니다. 권고사직 발생확률은 공식 통계가 아니라 게임 밸런스값입니다.

## V28 교육·자격·경력
- V28의 교육과정명, 교육비, 경력연수 조건은 실제 국가자격·면허·채용규정을 복제한 것이 아니라 게임 밸런스용 추상화입니다.
- 특히 의료·법률 등 전문직은 현실에서 각 직종별 법정 자격·학위·시험요건이 다르므로, 게임의 `전문직 진입 자격 트랙`을 실제 자격으로 해석하면 안 됩니다.


## V29 이혼·재산분할·자녀 양육
- 대한민국 민법 제839조의2: 이혼 시 재산분할을 청구할 수 있고, 협의가 되지 않으면 가정법원이 쌍방의 협력으로 이룩한 재산의 액수와 기타 사정을 참작해 분할의 액수와 방법을 정합니다.
- 대한민국 민법 제837조: 이혼 시 자녀의 양육자, 양육비용 부담, 면접교섭 등을 협의하며, 협의가 되지 않거나 자녀 복리에 반하면 법원이 자녀의 나이·부모 재산상황 등을 고려해 정할 수 있습니다.
- V29의 25~45% 재산분할 기여율, 15% 소득기준/45% 양육비기준, 7년 이벤트 간격은 실제 법정 수치가 아니라 게임 밸런스용 단순화입니다.


## V30 재혼
- V30의 이혼 후 3년 대기 및 5년 재혼 이벤트 간격은 게임 밸런스값이며 실제 법정 재혼 대기기간을 의미하지 않습니다.
- 재혼 시 기존 이혼 관련 재산분할 미지급금과 자녀 양육비 흐름을 게임 상태에서 계속 유지하도록 설계했습니다.
\n\n## V31 상속·증여\n- 「상속세 및 증여세법」 제53조: 성년자가 직계존속으로부터 증여받는 경우 증여재산공제 5,000만원. 동일 공제는 10년 합산 기준으로 관리됩니다.\n- 같은 법 제53조의2: 혼인일 전후 2년 이내 또는 자녀 출생·입양일부터 2년 이내에 직계존속 증여를 받는 경우 별도 공제를 적용하며, 혼인·출산 공제 합산 한도는 1억원입니다.\n- 같은 법 제26조·제56조: 상속세 및 증여세는 과세표준에 10%, 20%, 30%, 40%, 50% 누진세율을 적용합니다.\n- 국세청 상속공제 안내: 거주자의 상속에서 요건을 충족하는 경우 기초공제와 기타 인적공제 합계와 5억원 일괄공제 중 큰 금액을 적용할 수 있습니다. V31은 복잡성을 줄이기 위해 상속 이벤트에 5억원 일괄공제만 사용합니다.\n- V31의 증여액 8,000만원, 상속재산 6.5억원, 상속지분 50%, 이벤트 발생연령은 법정 수치가 아니라 게임 밸런스값입니다.\n

## V32 로또6/45 특별 기회
- 동행복권 로또6/45 공식 안내: 판매가격 1게임 1,000원, 전체 당첨확률 약 1/42, 1등 1/8,145,060, 2등 1/1,357,510, 3등 1/35,724, 4등 1/733, 5등 1/45. 4등 50,000원·5등 5,000원은 고정당첨금.
  - https://www.dhlottery.co.kr/lt645/intro
- 소득세법 제84조: 복권 당첨금은 건별 200만원 이하이면 소득세 과세최저한으로 비과세.
  - https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1016426653
- 동행복권 당첨자 가이드: 200만원 초과~3억원 이하 원천징수 총 22%(소득세 20% + 지방소득세 상당 2%), 3억원 초과 총 33%(30% + 3%).
  - https://m.dhlottery.co.kr/guide/wnrGuide
- V32의 1~3등 당첨금 대표값(20억원 / 5천만원 / 150만원)은 실제 회차별 당첨금이 아니라 게임 밸런스값입니다. 실제 1~3등은 판매액과 당첨자 수에 따라 변동합니다.

## V33 저장/이어하기
- V33은 정책·세율을 변경하지 않습니다.
- iPhone PWA 플레이테스트용 로컬 자동저장/이어하기 기능만 추가했습니다.


## V34 PWA 설치·오프라인
- V34는 정책·세율·법정요건을 변경하지 않습니다.
- manifest/service worker/아이콘/오프라인 캐시만 추가합니다.


## V35 최종 PWA 앱 아이콘
- V35는 정책·세율·법정요건을 변경하지 않습니다.
- 사용자가 확정한 앱 아이콘을 PWA manifest, Apple touch icon, service worker 캐시에 적용했습니다.