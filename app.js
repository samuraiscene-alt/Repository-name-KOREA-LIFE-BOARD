window.__KLB_BOOT_STAGE__ = 'APP_MODULE_START';
let THREE = null;
let RoundedBoxGeometry = null;

const boardViewport = document.querySelector('#boardViewport');
const boardCamera = document.querySelector('#boardCamera');
const boardEl = document.querySelector('#board');
const diceHost = document.querySelector('#diceScene');
const tokenLayer = document.querySelector('#tokenLayer');
const rollButton = document.querySelector('#rollButton');
const resetButton = document.querySelector('#resetButton');
const saveButton = document.querySelector('#saveButton');
const saveStatusEl = document.querySelector('#saveStatus');
const startScreenEl = document.querySelector('#startScreen');
const savedGameCardEl = document.querySelector('#savedGameCard');
const savedGameModeEl = document.querySelector('#savedGameMode');
const savedGamePlayerEl = document.querySelector('#savedGamePlayer');
const savedGameMetaEl = document.querySelector('#savedGameMeta');
const continueGameButton = document.querySelector('#continueGameButton');
const startModeSelect = document.querySelector('#startModeSelect');
const newGameButton = document.querySelector('#newGameButton');
const startScreenNoteEl = document.querySelector('#startScreenNote');
const gameMenuButton = document.querySelector('#gameMenuButton');
const gameMenuEl = document.querySelector('#gameMenu');
const menuCloseButton = document.querySelector('#menuCloseButton');
const menuContinueButton = document.querySelector('#menuContinueButton');
const menuSaveButton = document.querySelector('#menuSaveButton');
const menuHomeButton = document.querySelector('#menuHomeButton');
const menuNewGameButton = document.querySelector('#menuNewGameButton');
const soundToggle = document.querySelector('#soundToggle');
const hapticToggle = document.querySelector('#hapticToggle');
const menuStatusEl = document.querySelector('#menuStatus');
const statusPill = document.querySelector('#statusPill');
const diceResult = document.querySelector('#diceResult');
const ageEl = document.querySelector('#age');
const lapEl = document.querySelector('#lap');
const economyStateEl = document.querySelector('#economyState');
const currentCellEl = document.querySelector('#currentCell');
const cashEl = document.querySelector('#cash');
const debtEl = document.querySelector('#debt');
const moveProgressEl = document.querySelector('#moveProgress');
const arrivalToastEl = document.querySelector('#arrivalToast');
const playerNameEl = document.querySelector('#playerName');
const gameModeSelect = document.querySelector('#gameModeSelect');
const turnRosterEl = document.querySelector('#turnRoster');
const arrivalDetailEl = document.querySelector('#arrivalDetail');
const arrivalTypeEl = document.querySelector('#arrivalType');
const arrivalNameEl = document.querySelector('#arrivalName');
const arrivalDescEl = document.querySelector('#arrivalDesc');
const purchasePanelEl = document.querySelector('#purchasePanel');
const purchaseNameEl = document.querySelector('#purchaseName');
const purchasePriceEl = document.querySelector('#purchasePrice');
const purchaseTaxEl = document.querySelector('#purchaseTax');
const purchaseTotalEl = document.querySelector('#purchaseTotal');
const purchaseCashEl = document.querySelector('#purchaseCash');
const purchaseHintEl = document.querySelector('#purchaseHint');
const buyButton = document.querySelector('#buyButton');
const skipBuyButton = document.querySelector('#skipBuyButton');
const loanBuyBank1Button = document.querySelector('#loanBuyBank1Button');
const loanBuyBank2Button = document.querySelector('#loanBuyBank2Button');
const bankPanelEl = document.querySelector('#bankPanel');
const bankCashEl = document.querySelector('#bankCash');
const bank1DebtEl = document.querySelector('#bank1Debt');
const bank2DebtEl = document.querySelector('#bank2Debt');
const bankHintEl = document.querySelector('#bankHint');
const borrowBank1Button = document.querySelector('#borrowBank1Button');
const borrowBank2Button = document.querySelector('#borrowBank2Button');
const repayLoanButton = document.querySelector('#repayLoanButton');
const closeBankButton = document.querySelector('#closeBankButton');
const auctionPanelEl = document.querySelector('#auctionPanel');
const auctionAssetEl = document.querySelector('#auctionAsset');
const auctionAppraisalEl = document.querySelector('#auctionAppraisal');
const auctionMinimumEl = document.querySelector('#auctionMinimum');
const auctionRoundEl = document.querySelector('#auctionRound');
const auctionBidderEl = document.querySelector('#auctionBidder');
const auctionHighestEl = document.querySelector('#auctionHighest');
const auctionHintEl = document.querySelector('#auctionHint');
const auctionBidButtonsEl = document.querySelector('#auctionBidButtons');
const auctionPassButton = document.querySelector('#auctionPassButton');
const jobNameEl = document.querySelector('#jobName');
const annualIncomeEl = document.querySelector('#annualIncome');
const jobPanelEl = document.querySelector('#jobPanel');
const jobPanelTitleEl = document.querySelector('#jobPanelTitle');
const jobPanelHintEl = document.querySelector('#jobPanelHint');
const jobOfferListEl = document.querySelector('#jobOfferList');
const skipJobButton = document.querySelector('#skipJobButton');
const annualPanelEl = document.querySelector('#annualPanel');
const annualPanelAgeEl = document.querySelector('#annualPanelAge');
const annualGrossEl = document.querySelector('#annualGross');
const annualTaxEl = document.querySelector('#annualTax');
const annualPensionEl = document.querySelector('#annualPension');
const annualHealthEl = document.querySelector('#annualHealth');
const annualEmploymentEl = document.querySelector('#annualEmployment');
const annualNetEl = document.querySelector('#annualNet');
const annualPropertyTaxEl = document.querySelector('#annualPropertyTax');
const annualInterestEl = document.querySelector('#annualInterest');
const annualPolicyEl = document.querySelector('#annualPolicy');
const annualBusinessCashEl = document.querySelector('#annualBusinessCash');
const annualBusinessRevenueEl = document.querySelector('#annualBusinessRevenue');
const annualBusinessExpensesEl = document.querySelector('#annualBusinessExpenses');
const annualMaintenanceEl = document.querySelector('#annualMaintenance');
const annualLeaseStatusEl = document.querySelector('#annualLeaseStatus');
const annualBusinessTaxableEl = document.querySelector('#annualBusinessTaxable');
const annualRentalTaxableEl = document.querySelector('#annualRentalTaxable');
const annualExtraHealthEl = document.querySelector('#annualExtraHealth');
const annualRentPaidEl = document.querySelector('#annualRentPaid');
const annualBusinessVatEl = document.querySelector('#annualBusinessVat');
const annualRentalVatEl = document.querySelector('#annualRentalVat');
const businessPanelEl = document.querySelector('#businessPanel');
const businessPanelTitleEl = document.querySelector('#businessPanelTitle');
const businessOwnerEl = document.querySelector('#businessOwner');
const businessMonthlyRentEl = document.querySelector('#businessMonthlyRent');
const businessAnnualRentEl = document.querySelector('#businessAnnualRent');
const businessCashEl = document.querySelector('#businessCash');
const businessPanelHintEl = document.querySelector('#businessPanelHint');
const businessOfferListEl = document.querySelector('#businessOfferList');
const skipBusinessButton = document.querySelector('#skipBusinessButton');
const healthStatusEl = document.querySelector('#healthStatus');
const insurancePanelEl = document.querySelector('#insurancePanel');
const insurancePanelHintEl = document.querySelector('#insurancePanelHint');
const insuranceOfferListEl = document.querySelector('#insuranceOfferList');
const closeInsuranceButton = document.querySelector('#closeInsuranceButton');
const incidentPanelEl = document.querySelector('#incidentPanel');
const incidentPanelTitleEl = document.querySelector('#incidentPanelTitle');
const incidentSeverityEl = document.querySelector('#incidentSeverity');
const incidentCostEl = document.querySelector('#incidentCost');
const incidentPublicEl = document.querySelector('#incidentPublic');
const incidentPrivateEl = document.querySelector('#incidentPrivate');
const incidentRestEl = document.querySelector('#incidentRest');
const incidentNetEl = document.querySelector('#incidentNet');
const incidentNoteEl = document.querySelector('#incidentNote');
const closeIncidentButton = document.querySelector('#closeIncidentButton');
const annualPrivateInsuranceEl = document.querySelector('#annualPrivateInsurance');
const vehicleStatusEl = document.querySelector('#vehicleStatus');
const vehiclePanelEl = document.querySelector('#vehiclePanel');
const vehiclePanelTitleEl = document.querySelector('#vehiclePanelTitle');
const vehiclePanelHintEl = document.querySelector('#vehiclePanelHint');
const vehicleOfferListEl = document.querySelector('#vehicleOfferList');
const skipVehicleButton = document.querySelector('#skipVehicleButton');
const annualVehicleTaxEl = document.querySelector('#annualVehicleTax');
const annualVehicleCostEl = document.querySelector('#annualVehicleCost');
const familyStatusEl = document.querySelector('#familyStatus');
const housingStatusEl = document.querySelector('#housingStatus');
const familyPanelEl = document.querySelector('#familyPanel');
const familyPanelTitleEl = document.querySelector('#familyPanelTitle');
const familyPanelHintEl = document.querySelector('#familyPanelHint');
const familyOfferListEl = document.querySelector('#familyOfferList');
const skipFamilyButton = document.querySelector('#skipFamilyButton');
const annualSpouseNetEl = document.querySelector('#annualSpouseNet');
const annualParentalBenefitEl = document.querySelector('#annualParentalBenefit');
const annualChildCostEl = document.querySelector('#annualChildCost');
const housingPanelEl = document.querySelector('#housingPanel');
const housingPanelTitleEl = document.querySelector('#housingPanelTitle');
const housingPanelHintEl = document.querySelector('#housingPanelHint');
const housingOfferListEl = document.querySelector('#housingOfferList');
const skipHousingButton = document.querySelector('#skipHousingButton');
const annualHousingCostEl = document.querySelector('#annualHousingCost');
const annualMortgageEl = document.querySelector('#annualMortgage');
const annualHomeTaxEl = document.querySelector('#annualHomeTax');
const investmentPanelEl = document.querySelector('#investmentPanel');
const investmentPanelHintEl = document.querySelector('#investmentPanelHint');
const investmentOfferListEl = document.querySelector('#investmentOfferList');
const closeInvestmentButton = document.querySelector('#closeInvestmentButton');
const annualInvestmentReturnEl = document.querySelector('#annualInvestmentReturn');
const annualInvestmentTaxEl = document.querySelector('#annualInvestmentTax');

const SIZE = 11;
const BOARD_CELLS = 40;
const STARTING_CASH = 20_000_000;
const AI_CASH_RESERVE = 5_000_000;
const BANK_STEP = 5_000_000;
const LOAN_PRODUCTS = {
  bank1: { label: '제1금융권', annualRate: 0.045, limit: 20_000_000 },
  bank2: { label: '제2금융권', annualRate: 0.095, limit: 15_000_000 },
};

const INVESTMENT_STEP = 5_000_000;
// V26 투자수익률은 게임 밸런스값. 예금·채권형의 이자성 수익 원천징수만 2026 공식 세율 구조를 반영한다.
const INVESTMENT_PRODUCTS = [
  { id:'deposit', name:'정기예금형', risk:'낮음', taxableInterest:true, desc:'원금 변동이 거의 없는 보수적 상품', returns:{normal:0.025,boom:0.022,slowdown:0.030,recession:0.035,recovery:0.027} },
  { id:'bond', name:'채권형 투자', risk:'중간', taxableInterest:true, desc:'주식보다 변동이 작지만 손실 가능', returns:{normal:0.035,boom:0.025,slowdown:0.010,recession:0.045,recovery:0.030} },
  { id:'stock', name:'국내 상장주식 분산투자', risk:'높음', taxableInterest:false, desc:'일반 소액주주의 장내매매를 가정한 가격변동형 투자', returns:{normal:0.050,boom:0.120,slowdown:-0.030,recession:-0.120,recovery:0.090} },
];

// V32 복권 이벤트. 로또6/45 1게임 가격·공식 등위별 확률·4/5등 고정당첨금과 2026 원천징수 구조를 반영한다.
// 1~3등 당첨금은 실제 회차별 판매액/당첨자 수에 따라 달라지므로 게임에서는 대표 고정금액을 사용한다.
const LOTTERY_MODEL = {
  gamesPerBundle: 5,
  pricePerGame: 1_000,
  taxFreeMaxPrize: 2_000_000,
  midTaxMaxPrize: 300_000_000,
  prizes: [
    { rank:1, label:'1등', odds:8_145_060, prize:2_000_000_000, fixed:false },
    { rank:2, label:'2등', odds:1_357_510, prize:50_000_000, fixed:false },
    { rank:3, label:'3등', odds:35_724, prize:1_500_000, fixed:false },
    { rank:4, label:'4등', odds:733, prize:50_000, fixed:true },
    { rank:5, label:'5등', odds:45, prize:5_000, fixed:true },
  ],
};

// V27 고용·실업 시스템. 권고사직 발생확률은 게임 밸런스값이며, 구직급여 자격·상하한·급여일수는 2026 공식 기준을 반영한다.
const UNEMPLOYMENT_POLICY_2026 = {
  qualifyingInsuredMonths: 6,       // 이직 전 18개월 중 피보험단위기간 180일 이상을 게임 월 단위로 근사
  benefitRate: 0.60,
  dailyCap: 68_100,
  dailyFloor8h: 66_048,
  layoffChance: { normal:0.02, boom:0.01, slowdown:0.08, recession:0.18, recovery:0.04 },
};



// V18 민간보험의 보험료·정액보장액과 일반 질병/사고의 본인부담금은 게임 밸런스값이다.
// 공적 건강보험료는 기존 2026 공식 엔진을 유지하며, 업무상 재해의 휴업급여율 70%만 공식 법률 기준을 적용한다.
const PRIVATE_INSURANCE_PRODUCTS = [
  { id:'accidentFixed', name:'민간 상해 정액보장', annualPremium:360_000, desc:'중등·중증 상해 발생 시 정액 보험금 지급', payouts:{ moderate:800_000, severe:2_000_000 } },
  { id:'hospitalFixed', name:'민간 입원 정액보장', annualPremium:480_000, desc:'중등·중증 질병 입원 시 정액 보험금 지급', payouts:{ moderate:600_000, severe:1_500_000 } },
  { id:'autoComprehensive', name:'자동차 자기차량손해 특약', annualPremium:520_000, desc:'차량 보유자만 가입. 교통사고 차량수리비 80% 보전', payouts:{} },
];

const VEHICLES = [
  { id:'bicycle', kind:'bicycle', rank:1, name:'자전거', cc:0, price:650_000, acquisitionRate:0, annualFuelMaintenance:120_000, mandatoryInsurancePremium:0, annualTaxFixed:0 },
  { id:'motorcycle', kind:'motorcycle', rank:2, name:'125cc 오토바이', cc:125, price:4_500_000, acquisitionRate:0.02, annualFuelMaintenance:900_000, mandatoryInsurancePremium:360_000, annualTaxFixed:18_000 },
  { id:'compact', kind:'car', rank:3, name:'경차', cc:998, price:12_000_000, acquisitionRate:0.04, annualFuelMaintenance:1_800_000, mandatoryInsurancePremium:520_000 },
  { id:'sedan', kind:'car', rank:4, name:'준중형 승용차', cc:1598, price:22_000_000, acquisitionRate:0.07, annualFuelMaintenance:2_700_000, mandatoryInsurancePremium:720_000 },
  { id:'suv', kind:'car', rank:5, name:'중형 SUV', cc:1998, price:36_000_000, acquisitionRate:0.07, annualFuelMaintenance:3_800_000, mandatoryInsurancePremium:920_000 },
];

const HEALTH_EVENTS = [
  { id:'minorIllness', name:'감기·급성 장염', category:'illness', severity:'mild', severityLabel:'경증', baseWeight:4.4, outOfPocket:150_000, restTurns:0, note:'건강보험 적용 후의 게임용 본인부담금으로 단순화했습니다.' },
  { id:'hospitalIllness', name:'급성 질환 입원', category:'illness', severity:'moderate', severityLabel:'중등도', baseWeight:1.8, outOfPocket:750_000, restTurns:1, note:'입원 치료 후 다음 턴 1회 휴식합니다.' },
  { id:'surgeryIllness', name:'수술·입원 치료', category:'illness', severity:'severe', severityLabel:'중증', baseWeight:0.55, outOfPocket:2_000_000, restTurns:2, note:'수술·회복 기간을 게임 턴 휴식으로 표현합니다.' },
  { id:'dailyAccident', name:'보행·생활 사고', category:'injury', severity:'moderate', severityLabel:'중등도', baseWeight:1.2, outOfPocket:900_000, restTurns:1, note:'일상생활 중 발생한 사고입니다.' },
  { id:'trafficMinor', name:'자동차 접촉사고', category:'traffic', severity:'mild', severityLabel:'경미한 교통사고', baseWeight:1.8, outOfPocket:250_000, vehicleRepairCost:900_000, restTurns:0, requiresVehicle:true, transportKind:'car', note:'자동차 보유자에게만 발생. 자기차량손해 특약 가입 여부에 따라 수리비 부담이 달라집니다.' },
  { id:'trafficSevere', name:'자동차 충돌사고', category:'traffic', severity:'severe', severityLabel:'중증 교통사고', baseWeight:0.45, outOfPocket:1_200_000, vehicleRepairCost:4_000_000, restTurns:2, requiresVehicle:true, transportKind:'car', note:'자동차 보유자에게만 발생. 치료와 차량수리비가 함께 발생합니다.' },
  { id:'workMinor', name:'업무상 부상', category:'work', severity:'moderate', severityLabel:'산재·중등도', baseWeight:1.0, outOfPocket:0, restTurns:1, daysOff:14, note:'산재 승인 가정: 치료비는 요양급여 처리, 휴업급여는 평균임금 70% 기준을 게임에 반영합니다.' },
  { id:'workSevere', name:'현장 중대 부상', category:'work', severity:'severe', severityLabel:'산재·중증', baseWeight:0.28, outOfPocket:0, restTurns:2, daysOff:45, highRiskOnly:true, note:'고위험 현장직에서만 발생. 장기 회복과 산재 휴업급여를 함께 반영합니다.' },
];

// V16 대한민국 공식 제도 기준값. 한 판 동안 정책버전 KR-2026.09를 고정 적용.
// 소득·공적보험 + 부동산 취득/보유세 + 지역가입자 건강보험 + 부가가치세 기본 엔진까지 연결.
const POLICY_KR_2026 = {
  id: 'KR-2026.09',
  label: '대한민국 2026.09',
  pension: {
    totalRate: 0.095,
    employeeRate: 0.0475,
    selfRate: 0.095,
    monthlyMin: 410_000,
    monthlyMax: 6_590_000,
    mandatoryMaxAgeExclusive: 60,
  },
  publicPension: { employeeRate: 0.09 },
  health: {
    totalRate: 0.0719,
    employeeRate: 0.03595,
    totalMonthlyMin: 20_160,
    totalMonthlyMax: 9_183_480,
  },
  longTermCare: { rate: 0.009448 },
  employment: { employeeRate: 0.009 },
  basicPersonalDeduction: 1_500_000,
  localIncomeTaxRatio: 0.10,
  employeeNonWageHealthThreshold: 20_000_000,
  financial: { interestWithholdingIncomeRate:0.14, localIncomeTaxRatio:0.10, comprehensiveThreshold:20_000_000 },
  inheritanceGift: {
    directAncestorAdultDeduction: 50_000_000,
    marriageBirthSpecialDeduction: 100_000_000,
    inheritanceStandardDeduction: 500_000_000,
    brackets: [
      { upTo:100_000_000, rate:0.10, quick:0 },
      { upTo:500_000_000, rate:0.20, quick:10_000_000 },
      { upTo:1_000_000_000, rate:0.30, quick:60_000_000 },
      { upTo:3_000_000_000, rate:0.40, quick:160_000_000 },
      { upTo:Infinity, rate:0.50, quick:460_000_000 },
    ],
  },
  vat: {
    standardRate: 0.10,
    simplifiedThreshold: 104_000_000,
    simplifiedPaymentExemptionThreshold: 48_000_000,
    simplifiedPurchaseCreditRate: 0.005,
    commercialRentRate: 0.10,
  },
  vehicle: {
    acquisitionPassengerRate:0.07, compactAcquisitionRate:0.04, motorcycleAcquisitionRate:0.02, motorcycleAnnualTax:18_000,
    annualTaxPerCcUnder1000:80, annualTaxPerCcUnder1600:140, annualTaxPerCcOver1600:200,
    educationTaxRatio:0.30,
  },
  property: {
    acquisitionRate: 0.04,
    acquisitionEducationRate: 0.004,
    ruralSpecialRate: 0.002,
    fairMarketValueRatio: 0.70,
    buildingPropertyTaxRate: 0.0025,
    urbanAreaRate: 0.0014,
    propertyEducationRatio: 0.20,
    regionalHealthPropertyDeduction: 100_000_000,
    regionalHealthPointValueMonthly: 211.5,
    homeAcquisitionUnder600mRate: 0.01,
    firstHomeGeneralReliefCap: 2_000_000,
    firstHomeMaxPrice: 1_200_000_000,
    oneHomeFairRatioUnder300m: 0.43,
    oneHomeFairRatioUnder600m: 0.44,
    oneHomeFairRatioOver600m: 0.45,
    homeUrbanAreaRate: 0.0014,
    homeEducationRatio: 0.20,
  },
};

// 국민건강보험법 시행령 별표4 재산등급별 점수. 금액은 1억원 공제 후 재산세 과세표준.
const REGIONAL_HEALTH_PROPERTY_POINTS = [
  [4_500_000,22],[9_000_000,44],[13_500_000,66],[18_000_000,97],[22_500_000,122],[27_000_000,146],
  [31_500_000,171],[36_000_000,195],[40_500_000,219],[45_000_000,244],[50_200_000,268],[55_900_000,294],
  [62_200_000,320],[69_300_000,344],[77_100_000,365],[85_900_000,386],[95_700_000,412],[107_000_000,439],
  [119_000_000,465],[133_000_000,490],[148_000_000,516],[164_000_000,535],[183_000_000,559],[204_000_000,586],
  [227_000_000,611],[253_000_000,637],[281_000_000,659],[313_000_000,681],[349_000_000,706],[388_000_000,731],
  [432_000_000,757],[481_000_000,785],[536_000_000,812],[597_000_000,841],[665_000_000,881],[740_000_000,921],
  [824_000_000,961],[918_000_000,1001],[1_030_000_000,1041],[1_140_000_000,1091],[1_270_000_000,1141],
  [1_420_000_000,1191],[1_580_000_000,1241],[1_760_000_000,1291],[1_960_000_000,1341],[2_180_000_000,1391],
  [2_420_000_000,1451],[2_700_000_000,1511],[3_000_000_000,1571],[3_300_000_000,1641],[3_630_000_000,1711],
  [3_993_000_000,1781],[4_392_300_000,1851],[4_831_530_000,1921],[5_314_680_000,1991],[5_846_150_000,2061],
  [6_430_770_000,2131],[7_073_850_000,2201],[7_781_240_000,2271],[Infinity,2341]
];

// V18: 직업 급여·사업 매출·운영비·월세·유지관리비·이동수단 가격/유지비/보험료는 게임 밸런스값. 근로/공적보험·부동산 세율은 2026 공식 제도 기준.
const JOBS = [
  { id:'office1', group:'사무·기업', level:1, name:'중소기업 사원', annualIncome:16_000_000, risk:'낮음' },
  { id:'office2', group:'사무·기업', level:2, name:'대기업 사원', annualIncome:25_000_000, risk:'낮음' },
  { id:'office3', group:'사무·기업', level:3, name:'기업 관리자', annualIncome:36_000_000, risk:'낮음' },
  { id:'public1', group:'공공·안정', level:1, name:'공공기관 직원', annualIncome:15_000_000, risk:'낮음' },
  { id:'public2', group:'공공·안정', level:2, name:'공무원', annualIncome:22_000_000, risk:'낮음' },
  { id:'public3', group:'공공·안정', level:3, name:'교사·공공관리직', annualIncome:30_000_000, risk:'낮음' },
  { id:'professional1', group:'전문직', level:1, name:'전문직 수련·초급', annualIncome:18_000_000, risk:'낮음' },
  { id:'professional2', group:'전문직', level:2, name:'회계·법무 전문직', annualIncome:32_000_000, risk:'낮음' },
  { id:'professional3', group:'전문직', level:3, name:'의료·법률 전문직', annualIncome:48_000_000, risk:'중간' },
  { id:'field1', group:'기술·현장', level:1, name:'현장 기술직', annualIncome:19_000_000, risk:'높음' },
  { id:'field2', group:'기술·현장', level:2, name:'전기·설비 기사', annualIncome:27_000_000, risk:'높음' },
  { id:'field3', group:'기술·현장', level:3, name:'현장 기술관리자', annualIncome:36_000_000, risk:'높음' },
  { id:'service1', group:'서비스', level:1, name:'서비스 직원', annualIncome:14_000_000, risk:'중간' },
  { id:'service2', group:'서비스', level:2, name:'요리·뷰티 전문가', annualIncome:22_000_000, risk:'중간' },
  { id:'service3', group:'서비스', level:3, name:'서비스 매니저', annualIncome:30_000_000, risk:'중간' },
  { id:'it1', group:'IT·창작', level:1, name:'주니어 개발자·디자이너', annualIncome:18_000_000, risk:'낮음' },
  { id:'it2', group:'IT·창작', level:2, name:'개발자·콘텐츠 제작자', annualIncome:28_000_000, risk:'낮음' },
  { id:'it3', group:'IT·창작', level:3, name:'IT 리드·크리에이터', annualIncome:40_000_000, risk:'낮음' },
  { id:'transport1', group:'영업·운송', level:1, name:'영업·배송직', annualIncome:17_000_000, risk:'중간' },
  { id:'transport2', group:'영업·운송', level:2, name:'버스·택시기사', annualIncome:25_000_000, risk:'높음' },
  { id:'transport3', group:'영업·운송', level:3, name:'영업·운송 관리자', annualIncome:33_000_000, risk:'중간' },
  { id:'business1', group:'자영업·사업', level:1, name:'소규모 자영업자', annualIncome:16_000_000, risk:'중간' },
  { id:'business2', group:'자영업·사업', level:2, name:'매장 운영자', annualIncome:27_000_000, risk:'중간' },
  { id:'business3', group:'자영업·사업', level:3, name:'사업체 대표', annualIncome:45_000_000, risk:'중간' },

];

// V28 교육·자격·경력 성장 시스템.
// 아래 과정명·교육비·진입조건은 게임 밸런스용 추상화이며 실제 국가자격/면허 취득요건을 대체하지 않는다.
const CAREER_TRAININGS = [
  { id:'office', group:'사무·기업', label:'사무·회계 실무과정', credential:'office', cost:2_000_000, desc:'사무·기업 직군의 이직·승진 선택지를 넓힌다.' },
  { id:'public', group:'공공·안정', label:'공공직무 준비과정', credential:'public', cost:2_000_000, desc:'공공·안정 직군의 상위 진입 선택지를 넓힌다.' },
  { id:'professional', group:'전문직', label:'전문직 진입 자격 트랙', credential:'professional', cost:6_000_000, desc:'게임에서 전문직 진입을 표현하는 추상화 과정이다.' },
  { id:'field', group:'기술·현장', label:'기술 실무자격 과정', credential:'field', cost:3_000_000, desc:'기술·현장 직군의 상위 직무 진입을 돕는다.' },
  { id:'service', group:'서비스', label:'서비스 전문과정', credential:'service', cost:2_000_000, desc:'서비스 직군의 전문·관리 단계 진입을 돕는다.' },
  { id:'it', group:'IT·창작', label:'IT 실무 포트폴리오 과정', credential:'it', cost:3_000_000, desc:'IT·창작 직군의 상위 직무 진입을 돕는다.' },
  { id:'transport', group:'영업·운송', label:'영업·운송 전문과정', credential:'transport', cost:2_000_000, desc:'영업·운송 직군의 상위 직무 진입을 돕는다.' },
  { id:'business', group:'자영업·사업', label:'창업·경영 실무과정', credential:'business', cost:3_000_000, desc:'자영업·사업 직군의 운영·확장 선택지를 넓힌다.' },
];

const boardPath = buildBoardPath();
const cells = [];
const PLAYER_STYLES = [
  { name: 'PLAYER 1', short: 'P1', color: '#f43f5e', dark: '#be123c' },
  { name: 'PLAYER 2', short: 'P2', color: '#38bdf8', dark: '#0369a1' },
  { name: 'PLAYER 3', short: 'P3', color: '#fbbf24', dark: '#b45309' },
  { name: 'PLAYER 4', short: 'P4', color: '#a78bfa', dark: '#6d28d9' },
];

const GAME_MODES = {
  solo:   { label: '1인 인생모드', playerCount: 1, aiCount: 0 },
  ai1:    { label: '1인 VS AI 1명', playerCount: 2, aiCount: 1 },
  ai2:    { label: '1인 VS AI 2명', playerCount: 3, aiCount: 2 },
  ai3:    { label: '1인 VS AI 3명', playerCount: 4, aiCount: 3 },
  local2: { label: '로컬 2명', playerCount: 2, aiCount: 0 },
  local3: { label: '로컬 3명', playerCount: 3, aiCount: 0 },
  local4: { label: '로컬 4명', playerCount: 4, aiCount: 0 },
};


// V19 가족 시스템. 배우자 프로필의 소득·자산·부채와 자녀 양육비는 게임 밸런스값이다.
// 육아휴직 급여 구간/상하한은 2026년 현재 고용노동부 안내 기준을 사용한다.
const PARENTAL_LEAVE_POLICY = {
  minMonthly: 700_000,
  bands: [
    { months:3, rate:1.0, cap:2_500_000 },
    { months:3, rate:1.0, cap:2_000_000 },
    { months:6, rate:0.8, cap:1_600_000 },
  ],
};

const SPOUSE_PROFILES = [
  { id:'office', label:'사무직 배우자', jobId:'office1', annualIncome:19_000_000, liquidAssets:6_000_000, debt:2_000_000, debtServiceRate:0.18, tenureYears:3, parentalLeaveEligible:true, desc:'일반 직장인 · 육아휴직 가능' },
  { id:'corporate', label:'대기업 배우자', jobId:'office2', annualIncome:27_000_000, liquidAssets:11_000_000, debt:5_000_000, debtServiceRate:0.16, tenureYears:4, parentalLeaveEligible:true, desc:'소득 높음 · 육아휴직 가능' },
  { id:'field', label:'기술직 배우자', jobId:'field2', annualIncome:25_000_000, liquidAssets:8_000_000, debt:3_000_000, debtServiceRate:0.18, tenureYears:4, parentalLeaveEligible:true, desc:'현장기술직 · 소득 안정' },
  { id:'it', label:'IT 배우자', jobId:'it2', annualIncome:28_000_000, liquidAssets:7_000_000, debt:4_000_000, debtServiceRate:0.16, tenureYears:3, parentalLeaveEligible:true, desc:'IT 직장인 · 소득 성장형' },
  { id:'self', label:'자영업 배우자', jobId:'business1', annualIncome:18_000_000, liquidAssets:5_000_000, debt:6_000_000, debtServiceRate:0.20, tenureYears:0, parentalLeaveEligible:false, desc:'사업소득 · 일반 육아휴직급여 비대상' },
  { id:'home', label:'전업·구직 배우자', jobId:null, annualIncome:0, liquidAssets:3_000_000, debt:0, debtServiceRate:0, tenureYears:0, parentalLeaveEligible:false, desc:'현재 소득 없음 · 돌봄비 절감 가능' },
];

const CHILD_ANNUAL_COSTS = [
  { maxAge:0, label:'영아', amount:2_400_000 },
  { maxAge:2, label:'영유아', amount:3_200_000 },
  { maxAge:5, label:'유아', amount:4_800_000 },
  { maxAge:12, label:'초등', amount:5_600_000 },
  { maxAge:18, label:'중·고등', amount:7_200_000 },
  { maxAge:22, label:'대학·독립준비', amount:8_400_000 },
  { maxAge:Infinity, label:'성인', amount:0 },
];

// V29 이혼 시스템. 재산분할 비율·이혼 이벤트 간격·양육비 금액은 게임 밸런스용 단순화다.
// 실제 민법은 재산분할 시 혼인 중 쌍방의 협력으로 형성한 재산과 기타 사정을 참작하며,
// 자녀 양육자는 양육비용 부담 등을 협의하거나 법원이 자녀 복리·부모 재산상황 등을 고려해 정한다.
const DIVORCE_MODEL = {
  minimumMarriageYears: 5,
  offerIntervalYears: 7,
  minimumDivisionRatio: 0.25,
  maximumDivisionRatio: 0.45,
  annualSettlementDebtRate: 0.25,
  childSupportIncomeRate: 0.15,
  childSupportCostShare: 0.45,
  childSupportEndAge: 19,
};

// V30 재혼 시스템. 재혼 대기기간·이벤트 간격은 게임 밸런스값이며 법정 의무기간을 의미하지 않는다.
// 재혼해도 이전 혼인의 재산분할 미지급금과 미성년 자녀 양육비 흐름은 유지한다.
const REMARRIAGE_MODEL = {
  minimumYearsAfterDivorce: 3,
  offerIntervalYears: 5,
  maximumAge: 60,
};

// V31 상속·증여 시스템. 이벤트 금액·발생연령·상속지분은 게임 밸런스값이고,
// 증여재산공제·혼인/출산 추가공제·누진세율·상속 일괄공제는 2026 공식 제도 기준을 사용한다.
const FAMILY_TRANSFER_MODEL = {
  giftOfferAge: 30,
  parentGiftAmount: 80_000_000,
  inheritanceOfferAge: 55,
  parentEstateValue: 650_000_000,
  playerInheritanceShareRate: 0.50,
};

// V20 주거 시스템. 주거 가격·보증금·월세·관리비·주택담보대출 실제금리는 게임 밸런스값이다.
// 주택 취득세율/생애최초 감면, 1세대1주택 재산세 특례와 2026 공정시장가액비율은 공식 제도 기준을 사용한다.
const HOUSING_OPTIONS = [
  { id:'familyHome', kind:'family', name:'가족과 거주', deposit:0, annualRent:0, annualManagement:1_200_000, desc:'초기 자금 부담은 낮지만 매년 생활비 기여가 발생' },
  { id:'monthlyRent', kind:'rent', name:'원룸 월세', deposit:3_000_000, annualRent:4_800_000, annualManagement:600_000, desc:'보증금 300만 · 월세 40만 · 관리비 연 60만' },
  { id:'jeonse', kind:'jeonse', name:'소형 전세', deposit:14_000_000, annualRent:0, annualManagement:600_000, desc:'보증금 1,400만 · 월세 없음 · 관리비 연 60만' },
  { id:'starterHome', kind:'owned', name:'생애 첫 소형 아파트', price:35_000_000, area:59, annualMaintenanceRate:0.0045, desc:'전용 59㎡ · 생애최초 주택 구입 기회' },
  { id:'familyHomeOwned', kind:'owned', name:'가족형 아파트', price:50_000_000, area:84, annualMaintenanceRate:0.005, desc:'전용 84㎡ · 가족 확장형 자가' },
];

const HOME_MORTGAGE_MODEL = {
  annualRate:0.042,          // 게임용 실제 적용 금리
  termYears:20,
  dsrRatio:0.40,             // 은행권 차주단위 DSR 규제비율을 참고한 심사 상한
  stressRateAdd:0.03,        // 2026 수도권·규제지역 주담대 스트레스금리 하한을 심사에 반영
  gameLtvCap:0.70,           // 게임 밸런스용 담보한도. 지역별 실제 LTV 규제를 모사한다고 주장하지 않음
};

const REGION_PRICES = {
  '전주': 5_000_000,
  '경주': 6_000_000,
  '강릉': 7_000_000,
  '여수': 7_000_000,
  '대전 둔산': 8_000_000,
  '대구 동성로': 8_000_000,
  '광주 상무지구': 8_000_000,
  '수원 광교': 10_000_000,
  '부산 서면': 11_000_000,
  '제주': 12_000_000,
  '세종': 10_000_000,
  '인천 송도': 13_000_000,
  '홍대·연남': 14_000_000,
  '마포': 15_000_000,
  '판교': 18_000_000,
  '분당': 16_000_000,
  '부산 해운대': 20_000_000,
  '성수동': 22_000_000,
  '여의도': 24_000_000,
  '용산': 26_000_000,
  '잠실': 28_000_000,
  '강남': 35_000_000,
  '한남동': 40_000_000,
  '압구정·청담': 45_000_000,
};

// V16 게임 밸런스값: 부동산 연 유지관리비율. 세율이 아니라 건물 수선·관리·공용비 등 게임용 비용이다.
const PROPERTY_MAINTENANCE_RATE = 0.006;
const LEASE_DEFAULT_YEARS_TO_TERMINATE = 2;

// V24 경기 사이클: 세금/공적보험 공식 규칙은 건드리지 않고 게임 경제값만 움직인다.
const ECONOMY_PHASES = {
  normal:   { id:'normal', label:'정상', propertyMultiplier:1.00, businessMultiplier:1.00, loanSpread:0.000, mortgageSpread:0.000, desc:'물가·고용·자산시장이 비교적 안정적인 시기' },
  boom:     { id:'boom', label:'호황', propertyMultiplier:1.08, businessMultiplier:1.08, loanSpread:0.005, mortgageSpread:0.004, desc:'소비와 매출이 늘고 자산가격도 강한 시기' },
  slowdown: { id:'slowdown', label:'둔화', propertyMultiplier:1.02, businessMultiplier:0.96, loanSpread:0.010, mortgageSpread:0.008, desc:'매출이 둔화되고 금융비용이 높아지는 시기' },
  recession:{ id:'recession', label:'불황', propertyMultiplier:0.88, businessMultiplier:0.82, loanSpread:0.018, mortgageSpread:0.014, desc:'매출·자산가격이 약해지고 대출부담이 커지는 시기' },
  recovery: { id:'recovery', label:'회복', propertyMultiplier:0.96, businessMultiplier:1.03, loanSpread:0.006, mortgageSpread:0.005, desc:'경기가 저점에서 회복되며 매출이 먼저 살아나는 시기' },
};

function getEconomyPhase(){ return ECONOMY_PHASES[state.economyPhase] || ECONOMY_PHASES.normal; }
function getRegionMarketPrice(name){
  const base=Math.max(0, REGION_PRICES[name] || 0);
  return Math.round(base * getEconomyPhase().propertyMultiplier / 10_000) * 10_000;
}
function currentLoanRate(type){
  const base=LOAN_PRODUCTS[type]?.annualRate || 0;
  return Math.max(0, base + getEconomyPhase().loanSpread);
}

const RETIREMENT_MODEL = {
  retirementAge: 65,
  nationalPensionMinimumYears: 10,
  severanceMinimumYears: 1,
};

function allPlayersRetired() {
  return state.players.length > 0 && state.players.every((player) => player.retired);
}

function calculateGameSeverance(player) {
  const profile = getEmploymentProfile(player);
  const years = Math.max(0, Math.floor(player?.jobTenureYears || 0));
  if (!player || years < RETIREMENT_MODEL.severanceMinimumYears || !['employee','public'].includes(profile.type)) return 0;
  // 실제 퇴직금은 평균임금 30일분 × 계속근로연수. 게임에는 최근 3개월 임금 이력이 없어 월급×근속연수로 근사한다.
  return Math.max(0, Math.round((player.annualIncome || 0) / 12 * years));
}

function calculateNetWorth(player) {
  if (!player) return 0;
  const regionAssets = (player.properties || []).reduce((sum, idx) => sum + (getRegionMarketPrice(boardSpaces[idx]?.name) || 0), 0);
  const homeAsset = Math.max(0, player.housing?.ownedHome?.price || 0);
  const housingDeposit = Math.max(0, player.housing?.deposit || 0);
  const vehicleAsset = player.vehicle ? Math.max(0, Math.round((player.vehicle.price || 0) * 0.45)) : 0;
  return Math.round((player.cash || 0) + regionAssets + homeAsset + housingDeposit + vehicleAsset - totalDebt(player));
}

function finalizeRetirement(player) {
  if (!player || player.retired) return player?.retirementSummary || null;
  const severance = calculateGameSeverance(player);
  if (severance > 0) player.cash += severance;
  const nationalYears = Math.max(0, Math.floor(player.nationalPensionYears || 0));
  const pensionEligible = nationalYears >= RETIREMENT_MODEL.nationalPensionMinimumYears;
  player.retired = true;
  player.retirementAge = RETIREMENT_MODEL.retirementAge;
  player.lastSeverance = severance;
  player.jobTenureYears = 0;
  player.annualIncome = 0;
  player.jobId = null;
  player.retirementSummary = {
    age: RETIREMENT_MODEL.retirementAge,
    severance,
    nationalPensionYears: nationalYears,
    occupationalPensionYears: Math.max(0, Math.floor(player.occupationalPensionYears || 0)),
    nationalPensionEligible: pensionEligible,
    netWorth: calculateNetWorth(player),
  };
  return player.retirementSummary;
}

function retirementStatusText(player) {
  if (!player?.retired) return '';
  const r = player.retirementSummary || {};
  const pension = r.nationalPensionEligible ? `국민연금 수급권 확보(${r.nationalPensionYears || 0}년)` : `국민연금 가입 ${r.nationalPensionYears || 0}년`;
  return `은퇴 · ${pension} · 순자산 ${formatMoneyCompact(r.netWorth || calculateNetWorth(player))}`;
}

function showGameEndSummary() {
  const ranking = [...state.players].sort((a,b) => calculateNetWorth(b) - calculateNetWorth(a));
  const text = ranking.map((p,i) => `${i+1}위 ${p.name} ${formatMoneyCompact(calculateNetWorth(p))}`).join(' · ');
  statusPill.textContent = `65세 인생 완료 · ${text}`;
  updateTurnControls();
}

function currentMortgageRate(){ return Math.max(0, HOME_MORTGAGE_MODEL.annualRate + getEconomyPhase().mortgageSpread); }
function weightedPick(rows){
  const total=rows.reduce((a,r)=>a+r[1],0); let n=Math.random()*total;
  for(const [id,w] of rows){ n-=w; if(n<=0)return id; }
  return rows[rows.length-1][0];
}
function nextEconomyPhase(current){
  const table={
    normal:[['normal',45],['boom',30],['slowdown',20],['recession',5]],
    boom:[['boom',45],['slowdown',35],['normal',15],['recession',5]],
    slowdown:[['slowdown',40],['recession',35],['normal',15],['recovery',10]],
    recession:[['recession',45],['recovery',45],['slowdown',10]],
    recovery:[['recovery',40],['normal',40],['boom',20]],
  };
  return weightedPick(table[current] || table.normal);
}
function markEconomyYearComplete(playerIndex){
  state.economyCompleted.add(playerIndex);
  if(state.economyCompleted.size < state.players.length) return false;
  state.economyCompleted.clear();
  state.economyYear += 1;
  state.economyPhase = nextEconomyPhase(state.economyPhase);
  refreshRegionPriceVisuals();
  updateHud();
  return true;
}
function refreshRegionPriceVisuals(){
  boardSpaces.forEach((space,index)=>{
    if(space.kind!=='region')return;
    const el=cells[index]?.querySelector('.price');
    if(el)el.textContent=formatMoneyCompact(getRegionMarketPrice(space.name));
  });
}

const BUSINESS_TYPES = [
  // 매출·운영비는 게임 밸런스값. VAT 세율/과세판정만 공식 기준을 사용한다.
  // 영업이익(임대료·소득세 전) = 매출 - 인건비 - 재료/매입 - 공과금 - 기타 운영비.
  { id:'cafe', name:'카페', icon:'☕', startupCost:4_000_000, annualSales:46_000_000, laborCost:14_000_000, materialsCost:15_000_000, utilitiesCost:2_600_000, otherOperatingCost:6_000_000, annualVatSalesEx:46_000_000, annualVatPurchasesGross:28_000_000, simplifiedVatRate:0.15, simplifiedEligible:true },
  { id:'restaurant', name:'외식 매장', icon:'🍽', startupCost:6_000_000, annualSales:65_000_000, laborCost:21_000_000, materialsCost:23_000_000, utilitiesCost:3_600_000, otherOperatingCost:6_000_000, annualVatSalesEx:65_000_000, annualVatPurchasesGross:42_000_000, simplifiedVatRate:0.15, simplifiedEligible:true },
  { id:'retail', name:'소매·편집숍', icon:'🛍', startupCost:5_000_000, annualSales:56_000_000, laborCost:15_000_000, materialsCost:21_000_000, utilitiesCost:2_000_000, otherOperatingCost:8_400_000, annualVatSalesEx:56_000_000, annualVatPurchasesGross:36_000_000, simplifiedVatRate:0.15, simplifiedEligible:true },
  { id:'office', name:'서비스 사무실', icon:'💼', startupCost:4_500_000, annualSales:50_000_000, laborCost:24_000_000, materialsCost:4_000_000, utilitiesCost:2_200_000, otherOperatingCost:11_000_000, annualVatSalesEx:50_000_000, annualVatPurchasesGross:18_000_000, simplifiedVatRate:0.30, simplifiedEligible:true },
  { id:'startup', name:'스타트업', icon:'💻', startupCost:7_000_000, annualSales:82_000_000, laborCost:41_000_000, materialsCost:5_000_000, utilitiesCost:3_000_000, otherOperatingCost:19_000_000, annualVatSalesEx:82_000_000, annualVatPurchasesGross:30_000_000, simplifiedVatRate:0.30, simplifiedEligible:true },
  { id:'lodging', name:'숙박업', icon:'🏨', startupCost:8_000_000, annualSales:86_000_000, laborCost:30_000_000, materialsCost:16_000_000, utilitiesCost:8_000_000, otherOperatingCost:17_000_000, annualVatSalesEx:86_000_000, annualVatPurchasesGross:44_000_000, simplifiedVatRate:0.25, simplifiedEligible:true },
  { id:'beauty', name:'뷰티 매장', icon:'✂', startupCost:4_000_000, annualSales:49_000_000, laborCost:20_000_000, materialsCost:8_000_000, utilitiesCost:2_000_000, otherOperatingCost:10_800_000, annualVatSalesEx:49_000_000, annualVatPurchasesGross:20_000_000, simplifiedVatRate:0.30, simplifiedEligible:true },
  { id:'popup', name:'팝업스토어', icon:'◈', startupCost:3_000_000, annualSales:40_000_000, laborCost:9_000_000, materialsCost:14_000_000, utilitiesCost:1_400_000, otherOperatingCost:9_000_000, annualVatSalesEx:40_000_000, annualVatPurchasesGross:18_000_000, simplifiedVatRate:0.15, simplifiedEligible:true },
];

const propertyOwners = Array(BOARD_CELLS).fill(null);
const propertyLeases = Array(BOARD_CELLS).fill(null); // V16: 지역당 임차 사업장 1개 + 상가 임대 VAT + 연체 기반 계약해지/공실
let purchaseResolver = null;
let bankResolver = null;
let jobResolver = null;
let businessResolver = null;
let familyResolver = null;
let housingResolver = null;
let investmentResolver = null;

const SAVE_SCHEMA_VERSION = 1;
const SAVE_KEY = 'korea-life-board:v33:autosave';
const PREFERENCES_KEY = 'korea-life-board:v38:preferences';
let preferences = { sound:true, haptics:true };
let gameMenuOpen = false;
let saveEnabled = false;
let saveTimer = 0;

const state = {
  players: [],
  activePlayer: 0,
  playerCount: 1,
  mode: 'solo',
  economyPhase: 'normal',
  economyYear: 0,
  economyCompleted: new Set(),
  rolling: false,
  rollStarting: false,
  moving: false,
  started: false,
  lastRollTotal: 0,
  get current() { return this.players[this.activePlayer] ?? null; },
  get position() { return this.current?.position ?? 0; },
  set position(value) { if (this.current) this.current.position = value; },
  get age() { return this.current?.age ?? 20; },
  set age(value) { if (this.current) this.current.age = value; },
  get lap() { return this.current?.lap ?? 0; },
  set lap(value) { if (this.current) this.current.lap = value; },
};

let tokenEl = null;
const tokenEls = [];
let pendingAuction = null;
let auctionDecisionResolver = null;

const boardSpaces = [
  { name: 'START', kind: 'start', family: 'start', typeLabel: '새로운 한 해', desc: '한 바퀴를 완료하면 나이 +1. 소득·보험·부동산 보유세·대출이자를 연간정산합니다.' },
  { name: '전주', kind: 'region', family: 'region', typeLabel: '지역 · 관광/숙박', desc: '관광·숙박·상가형 지역' },
  { name: '인생 이벤트', kind: 'life', family: 'event', typeLabel: '인생 이벤트', desc: '관계·생활·가족 관련 사건이 발생하는 칸' },
  { name: '경주', kind: 'region', family: 'region', typeLabel: '지역 · 관광/숙박', desc: '관광·숙박형 지역' },
  { name: '강릉', kind: 'region', family: 'region', typeLabel: '지역 · 카페/관광', desc: '카페·관광·숙박형 지역' },
  { name: '은행', kind: 'bank', family: 'finance', typeLabel: '은행', desc: '제1·제2금융권 대출과 상환을 다루는 칸' },
  { name: '여수', kind: 'region', family: 'region', typeLabel: '지역 · 관광/외식', desc: '관광·숙박·외식형 지역' },
  { name: '대전 둔산', kind: 'region', family: 'region', typeLabel: '지역 · 오피스/상가', desc: '오피스·상가형 지역' },
  { name: '직업', kind: 'job', family: 'job', typeLabel: '직업', desc: '입사·이직·승진·퇴사와 연결되는 칸' },
  { name: '대구 동성로', kind: 'region', family: 'region', typeLabel: '지역 · 상권/외식', desc: '상권·외식형 지역' },
  { name: '광주 상무지구', kind: 'region', family: 'region', typeLabel: '지역 · 오피스/상가', desc: '오피스·상가형 지역' },
  { name: '세금·정부', kind: 'tax', family: 'finance', typeLabel: '세금·정부', desc: '공식 제도 기반 세금·공과금과 연결되는 칸' },
  { name: '수원 광교', kind: 'region', family: 'region', typeLabel: '지역 · 주거/상가', desc: '주거·상가형 지역' },
  { name: '부산 서면', kind: 'region', family: 'region', typeLabel: '지역 · 상권/외식', desc: '상권·외식형 지역' },
  { name: '인생 이벤트', kind: 'life', family: 'event', typeLabel: '인생 이벤트', desc: '결혼·출산·이혼·재혼 등 삶의 변화가 생기는 칸' },
  { name: '제주', kind: 'region', family: 'region', typeLabel: '지역 · 관광/숙박', desc: '관광·숙박·렌터카형 지역' },
  { name: '세종', kind: 'region', family: 'region', typeLabel: '지역 · 주거/오피스', desc: '주거·오피스형 지역' },
  { name: '은행', kind: 'bank', family: 'finance', typeLabel: '은행', desc: '대출·상환·금리 변동과 연결되는 칸' },
  { name: '인천 송도', kind: 'region', family: 'region', typeLabel: '지역 · 주거/오피스', desc: '주거·오피스·투자형 지역' },
  { name: '홍대·연남', kind: 'region', family: 'region', typeLabel: '지역 · 카페/상권', desc: '카페·외식·상권형 지역' },
  { name: '마포', kind: 'region', family: 'region', typeLabel: '지역 · 주거/오피스', desc: '주거·오피스형 지역' },
  { name: '투자', kind: 'investment', family: 'finance', typeLabel: '투자', desc: '주식·사업·부동산 투자 기회와 연결되는 칸' },
  { name: '판교', kind: 'region', family: 'region', typeLabel: '지역 · IT/스타트업', desc: 'IT·오피스·스타트업형 지역' },
  { name: '분당', kind: 'region', family: 'region', typeLabel: '지역 · 주거/상가', desc: '주거·상가형 지역' },
  { name: '인생 이벤트', kind: 'life', family: 'event', typeLabel: '인생 이벤트', desc: '사건·사고·기회 등 조건형 이벤트가 발생하는 칸' },
  { name: '부산 해운대', kind: 'region', family: 'region', typeLabel: '지역 · 호텔/주거', desc: '고급주거·호텔·상가형 지역' },
  { name: '성수동', kind: 'region', family: 'region', typeLabel: '지역 · 건물/카페', desc: '건물·카페·편집숍·팝업형 지역' },
  { name: '직업', kind: 'job', family: 'job', typeLabel: '직업', desc: '승진·이직·퇴사·재취업과 연결되는 칸' },
  { name: '여의도', kind: 'region', family: 'region', typeLabel: '지역 · 금융/오피스', desc: '금융·오피스·고급주거형 지역' },
  { name: '용산', kind: 'region', family: 'region', typeLabel: '지역 · 개발/주거', desc: '개발·주거·상업형 지역' },
  { name: '병원·사고', kind: 'health', family: 'health', typeLabel: '병원·사고', desc: '질병·교통사고·산재·치료와 휴식 턴에 연결되는 칸' },
  { name: '잠실', kind: 'region', family: 'region', typeLabel: '지역 · 상권/주거', desc: '대형상권·주거형 지역' },
  { name: '강남', kind: 'region', family: 'region', typeLabel: '지역 · 오피스/상가', desc: '오피스·상가·고급주거형 지역' },
  { name: '인생 이벤트', kind: 'life', family: 'event', typeLabel: '인생 이벤트', desc: '가족·직업·재무 상태에 맞춘 조건형 사건 칸' },
  { name: '한남동', kind: 'region', family: 'region', typeLabel: '지역 · 고급주거/건물', desc: '고급주택·건물형 지역' },
  { name: '압구정·청담', kind: 'region', family: 'region', typeLabel: '지역 · 고급상권/주거', desc: '최고급 상권·주거형 지역' },
  { name: '보험', kind: 'insurance', family: 'finance', typeLabel: '보험', desc: '건강·상해·자동차·재산 보험 가입과 보상을 다루는 칸' },
  { name: '투자', kind: 'investment', family: 'finance', typeLabel: '투자', desc: '현재 자산과 경기 상황에 맞는 투자 기회를 다루는 칸' },
  { name: '인생 이벤트', kind: 'life', family: 'event', typeLabel: '인생 이벤트', desc: '후반 인생의 상속·증여와 가족·자산 상태에 맞춘 사건 칸' },
  { name: '특별 기회', kind: 'special', family: 'event', typeLabel: '특별 기회', desc: '이동수단 구입·업그레이드 또는 복권처럼 선택형 기회가 열리는 칸' },
];

const labels = boardSpaces.map((space) => [space.name, space.family]);

let scene, camera, renderer, world;
let RAPIER = null;
let diceFallbackMode = false;
let diceEngineInitPromise = null;
let diceEngineRetryTimer = 0;
let diceEngineRetryCount = 0;
const DICE_ENGINE_MAX_RETRIES = 3;
let dice = [];
let groundBody;
let animationId = 0;
let lastTime = performance.now();
let settleSince = 0;
let rollStartedAt = 0;
let resizeObserver;
let audioContext = null;
let rollSoundTimer = 0;
let lastImpactAt = [0, 0];
let previousVerticalVelocity = [0, 0];
let diceCameraMode = 'idle';
let cameraShakeStrength = 0;
let diceCameraTarget = null;
let diceCameraDesiredPos = null;

window.__KLB_BOOT_STAGE__ = 'BEFORE_RENDER_BOARD';
renderBoard();
window.__KLB_BOOT_STAGE__ = 'AFTER_RENDER_BOARD';
configureGame('solo', false);
window.__KLB_BOOT_STAGE__ = 'AFTER_CONFIGURE_GAME';
saveEnabled = false;
const launchSaveSummary = getSavedGameSummary();
showStartScreen(launchSaveSummary);
requestAnimationFrame(() => {
  positionAllTokens(false);
  setBoardCamera('overview', state.position, false);
});

window.__KLB_BOOT_STAGE__ = 'BEFORE_DICE_ENGINE';
ensureDiceEngine();
window.__KLB_BOOT_STAGE__ = 'AFTER_DICE_ENGINE_CALL';

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(PREFERENCES_KEY) || '{}');
    preferences = { ...preferences, ...saved };
  } catch (_) {}
  if (soundToggle) soundToggle.checked = preferences.sound !== false;
  if (hapticToggle) hapticToggle.checked = preferences.haptics !== false;
}

function savePreferences() {
  try { localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences)); } catch (_) {}
}

function triggerHaptic(pattern) {
  if (preferences.haptics !== false && navigator.vibrate) navigator.vibrate(pattern);
}

function canOpenGameMenu() {
  return saveEnabled && !state.rollStarting && !state.rolling && !state.moving && !hasBlockingDecision() && !state.current?.isAI;
}

function openGameMenu() {
  if (!gameMenuEl || gameMenuOpen) return;
  if (!canOpenGameMenu()) {
    statusPill.textContent = '현재 동작이나 선택이 끝나면 게임 메뉴를 열 수 있습니다.';
    return;
  }
  persistGameState('자동저장');
  gameMenuOpen = true;
  gameMenuEl.hidden = false;
  gameMenuEl.classList.add('visible');
  gameMenuEl.setAttribute('aria-hidden', 'false');
  if (menuStatusEl) menuStatusEl.textContent = '게임이 안전한 턴 상태에서 일시정지되었습니다.';
  updateTurnControls();
}

function closeGameMenu() {
  if (!gameMenuEl) return;
  gameMenuOpen = false;
  gameMenuEl.classList.remove('visible');
  gameMenuEl.setAttribute('aria-hidden', 'true');
  window.setTimeout(() => { if (!gameMenuOpen) gameMenuEl.hidden = true; }, 180);
  updateTurnControls();
}

function returnToStartScreen() {
  persistGameState('자동저장');
  closeGameMenu();
  saveEnabled = false;
  const summary = getSavedGameSummary();
  showStartScreen(summary);
  if (startScreenNoteEl) startScreenNoteEl.textContent = '현재 게임을 저장했습니다. 이어하기 또는 새 게임을 선택하세요.';
}

async function startFreshGameFromMenu() {
  if (!window.confirm('현재 진행을 지우고 같은 모드로 새 게임을 시작할까요?')) return;
  closeGameMenu();
  await resetGame();
  saveEnabled = true;
}

loadPreferences();

function readSavedPayload() {
  let raw = null;
  try { raw = localStorage.getItem(SAVE_KEY); } catch (_) { return null; }
  if (!raw) return null;
  try {
    const payload = JSON.parse(raw);
    if (!payload || payload.schema !== SAVE_SCHEMA_VERSION || !Array.isArray(payload.players) || payload.players.length < 1) return null;
    return payload;
  } catch (_) {
    return null;
  }
}

function getSavedGameSummary() {
  const payload = readSavedPayload();
  if (!payload) return null;
  const modeKey = GAME_MODES[payload.mode] ? payload.mode : 'solo';
  const activeIndex = clamp(Number(payload.activePlayer) || 0, 0, Math.max(0, payload.players.length - 1));
  const player = payload.players[activeIndex] || payload.players[0] || {};
  return {
    modeKey,
    modeLabel: GAME_MODES[modeKey].label,
    playerName: player.name || `PLAYER ${activeIndex + 1}`,
    age: Math.max(20, Number(player.age) || 20),
    lap: Math.max(0, Number(player.lap) || 0),
    cash: Math.max(0, Number(player.cash) || 0),
    savedAt: Number(payload.savedAt) || 0,
  };
}

function showStartScreen(summary = null) {
  if (!startScreenEl) return;
  startScreenEl.classList.remove('is-hidden');
  startScreenEl.setAttribute('aria-hidden', 'false');
  if (savedGameCardEl) savedGameCardEl.hidden = !summary;
  if (summary) {
    if (savedGameModeEl) savedGameModeEl.textContent = summary.modeLabel;
    if (savedGamePlayerEl) savedGamePlayerEl.textContent = `${summary.playerName} · ${summary.age}세 · ${summary.lap}년차`;
    if (savedGameMetaEl) {
      const stamp = summary.savedAt ? new Date(summary.savedAt).toLocaleString('ko-KR', { month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit' }) : '저장 시각 없음';
      savedGameMetaEl.textContent = `${stamp} 저장 · 현금 ${formatMoneyCompact(summary.cash)}`;
    }
    if (startScreenNoteEl) startScreenNoteEl.textContent = '이어하기를 누르기 전까지 기존 저장본은 변경되지 않습니다.';
  } else if (startScreenNoteEl) {
    startScreenNoteEl.textContent = '게임은 턴과 선택이 끝날 때 자동저장됩니다.';
  }
}

function hideStartScreen() {
  if (!startScreenEl) return;
  startScreenEl.classList.add('is-hidden');
  startScreenEl.setAttribute('aria-hidden', 'true');
}

function requestLandscapeForGame() {
  try { window.KLB_REQUEST_LANDSCAPE?.(); } catch (_) {}
}

async function continueSavedGame() {
  requestLandscapeForGame();
  if (!restoreGameFromStorage()) {
    showStartScreen(null);
    if (startScreenNoteEl) startScreenNoteEl.textContent = '저장 데이터를 읽지 못했습니다. 새 게임을 시작해주세요.';
    return;
  }
  saveEnabled = true;
  hideStartScreen();
  updateTurnControls();
  statusPill.textContent = `이어하기 · ${state.current?.name ?? 'PLAYER 1'} ${state.age}세 · ${turnPrompt()}`;
  setSaveStatus('복원 완료');
  requestAnimationFrame(() => {
    positionAllTokens(false);
    setBoardCamera(idleCameraMode(), state.position, false, 6);
  });
}

async function startNewGameFromLaunch() {
  requestLandscapeForGame();
  const existing = getSavedGameSummary();
  if (existing && !window.confirm('저장된 게임을 지우고 새 게임을 시작할까요?')) return;
  const modeKey = GAME_MODES[startModeSelect?.value] ? startModeSelect.value : 'solo';
  clearSavedGame();
  configureGame(modeKey, false);
  saveEnabled = true;
  gameModeSelect.value = modeKey;
  persistGameState('새 게임', true);
  hideStartScreen();
  updateTurnControls();
  statusPill.textContent = `${GAME_MODES[modeKey].label} · ${turnPrompt()}`;
  await setBoardCamera(idleCameraMode(), state.position, true, 6);
}

function setSaveStatus(text) {
  if (!saveStatusEl) return;
  saveStatusEl.textContent = text;
}

function mergeSavedState(base, saved) {
  if (saved === undefined) return base;
  if (saved === null || typeof saved !== 'object') return saved;
  if (Array.isArray(saved)) return saved.map((value) => mergeSavedState(undefined, value));
  const out = (base && typeof base === 'object' && !Array.isArray(base)) ? { ...base } : {};
  Object.entries(saved).forEach(([key, value]) => {
    out[key] = mergeSavedState(out[key], value);
  });
  return out;
}

function hasBlockingDecision() {
  return Boolean(
    purchaseResolver || bankResolver || jobResolver || businessResolver || familyResolver ||
    housingResolver || investmentResolver || auctionDecisionResolver || pendingAuction
  );
}

function canPersistGame() {
  return !state.rollStarting && !state.rolling && !state.moving && !hasBlockingDecision();
}

function buildSavePayload() {
  return {
    schema: SAVE_SCHEMA_VERSION,
    appVersion: 43,
    savedAt: Date.now(),
    policyVersion: POLICY_KR_2026.id,
    mode: state.mode,
    activePlayer: state.activePlayer,
    playerCount: state.playerCount,
    started: state.started,
    lastRollTotal: state.lastRollTotal,
    economyPhase: state.economyPhase,
    economyYear: state.economyYear,
    economyCompleted: [...state.economyCompleted],
    players: state.players,
    propertyOwners: [...propertyOwners],
    propertyLeases: propertyLeases.map((lease) => lease ? { ...lease } : null),
  };
}

function persistGameState(reason = '자동저장', force = false) {
  if (!saveEnabled && !force) return false;
  if (!force && !canPersistGame()) {
    if (reason === '수동저장') setSaveStatus('선택 완료 후 저장');
    return false;
  }
  try {
    const payload = buildSavePayload();
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    const stamp = new Date(payload.savedAt).toLocaleTimeString('ko-KR', { hour:'2-digit', minute:'2-digit' });
    setSaveStatus(`${reason} ${stamp}`);
    return true;
  } catch (error) {
    console.warn('게임 저장 실패', error);
    setSaveStatus('저장 실패');
    return false;
  }
}

function queueAutoSave() {
  if (!saveEnabled) return;
  clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => persistGameState('자동저장'), 260);
}

function restoreGameFromStorage() {
  const payload = readSavedPayload();
  if (!payload) return false;
  try {
    const modeKey = GAME_MODES[payload.mode] ? payload.mode : 'solo';
    configureGame(modeKey, false);
    const defaults = state.players;
    state.players = defaults.map((base, index) => mergeSavedState(base, payload.players[index] || {}));
    state.playerCount = state.players.length;
    state.activePlayer = clamp(Number(payload.activePlayer) || 0, 0, Math.max(0, state.playerCount - 1));
    state.started = Boolean(payload.started);
    state.lastRollTotal = Number(payload.lastRollTotal) || 0;
    state.economyPhase = ECONOMY_PHASES[payload.economyPhase] ? payload.economyPhase : 'normal';
    state.economyYear = Math.max(0, Number(payload.economyYear) || 0);
    state.economyCompleted = new Set(Array.isArray(payload.economyCompleted) ? payload.economyCompleted : []);
    propertyOwners.fill(null);
    (payload.propertyOwners || []).slice(0, BOARD_CELLS).forEach((value, index) => { propertyOwners[index] = value; });
    propertyLeases.fill(null);
    (payload.propertyLeases || []).slice(0, BOARD_CELLS).forEach((value, index) => { propertyLeases[index] = value ? { ...value } : null; });
    pendingAuction = null;
    state.rollStarting = false;
    state.rolling = false;
    state.moving = false;
    tokenEl = tokenEls[state.activePlayer] ?? tokenEls[0] ?? null;
    gameModeSelect.value = state.mode;
    gameModeSelect.disabled = state.started;
    refreshTokenTransportVisuals();
    updateActiveTokenStyles();
    updateHud();
    renderRoster();
    positionAllTokens(false);    refreshAllOwnershipVisuals();
    refreshRegionPriceVisuals();
    setResultDisplay(null, null);
    updateTurnControls();
    return true;
  } catch (error) {
    console.warn('저장 데이터 복원 실패', error);
    try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
    return false;
  }
}

function clearSavedGame() {
  try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
  setSaveStatus('새 게임');
}

function buildBoardPath() {
  const path = [];
  for (let c = 0; c < SIZE; c++) path.push({ row: SIZE - 1, col: c });
  for (let r = SIZE - 2; r >= 0; r--) path.push({ row: r, col: SIZE - 1 });
  for (let c = SIZE - 2; c >= 0; c--) path.push({ row: 0, col: c });
  for (let r = 1; r <= SIZE - 2; r++) path.push({ row: r, col: 0 });
  return path;
}

function renderBoard() {
  boardPath.forEach(({ row, col }, index) => {
    const space = boardSpaces[index] ?? { name: `칸 ${index}`, family: 'event', typeLabel: '특수칸' };
    const cell = document.createElement('div');
    cell.className = `cell ${space.family}`;
    cell.style.gridRow = String(row + 1);
    cell.style.gridColumn = String(col + 1);
    cell.dataset.index = String(index);
    cell.dataset.kind = space.kind;
    const shortType = space.kind === 'region' ? '지역' : space.typeLabel;
    const price = space.kind === 'region' ? getRegionMarketPrice(space.name) : 0;
    cell.innerHTML = `<span class="num">${index}</span><span class="label">${space.name}</span><span class="sub">${shortType}</span>${price ? `<span class="price">${formatMoneyCompact(price)}</span>` : ''}`;
    boardEl.appendChild(cell);
    cells[index] = cell;
  });
}

function configureGame(modeKey, announce = true) {
  const mode = GAME_MODES[modeKey] ?? GAME_MODES.solo;
  state.mode = GAME_MODES[modeKey] ? modeKey : 'solo';
  state.playerCount = mode.playerCount;
  state.activePlayer = 0;
  state.started = false;
  state.rollStarting = false;
  state.lastRollTotal = 0;
  state.economyPhase = 'normal';
  state.economyYear = 0;
  state.economyCompleted = new Set();
  pendingAuction = null;
  propertyOwners.fill(null);
  propertyLeases.fill(null);
  state.players = Array.from({ length: mode.playerCount }, (_, index) => {
    const isAI = mode.aiCount > 0 && index > 0;
    return {
      id: index,
      name: isAI ? `AI ${index}` : PLAYER_STYLES[index].name,
      short: isAI ? `A${index}` : PLAYER_STYLES[index].short,
      isAI,
      position: 0,
      age: 20,
      lap: 0,
      cash: STARTING_CASH,
      properties: [],
      businesses: [],
      rentArrears: 0,
      pendingRentalIncome: 0,
      pendingRentalVatCollected: 0,
      debts: { bank1: 0, bank2: 0 },
      arrears: 0,
      creditScore: 850,
      creditStatus: '양호',
      delinquencyYears: 0,
      debtCrisis: { stage:'정상', lastAction:'', enforcementCount:0, auctionFailures:{} },
      lastAnnualFinance: null,
      jobId: null,
      annualIncome: 0,
      careerLevel: 0,
      employmentState: 'searching',
      lastSeparation: null,
      lastUnemploymentBenefit: 0,
      lastStatutoryDeductions: null,
      healthStatus: '정상',
      restTurns: 0,
      privateInsurance: { accidentFixed:false, hospitalFixed:false, autoComprehensive:false },
      vehicle: null,
      lastIncident: null,
      lastInsurancePremium: null,
      family: { married:false, spouse:null, children:[], childcareMode:'none', marriageStartAge:null, marriageStartNetWorth:0, marriageSerial:0, remarriageCount:0, lastRemarriageOfferAge:null, divorced:false, divorceCount:0, divorceAge:null, lastDivorceOfferAge:null, exSpouse:null, exSpouses:[], divorceObligations:[], divorceSettlementDebt:0 },
      housing: { kind:'family', optionId:'familyHome', name:'가족과 거주', deposit:0, firstHomeAcquired:false, lastOfferAge:null, ownedHome:null, mortgage:null },
      parentalLeaveYearsRemaining: 0,
      insuredEmploymentMonths: 0,
      policyVersion: POLICY_KR_2026.id,
      nationalPensionYears: 0,
      occupationalPensionYears: 0,
      jobTenureYears: 0,
      careerCredentials: [],
      careerTrainingCount: 0,
      careerTrainingHistory: [],
      retired: false,
      retirementAge: null,
      retirementSummary: null,
      lastSeverance: 0,
      investments: { deposit:0, bond:0, stock:0 },
      lastInvestmentFinance: null,
      familyTransfer: { giftResolved:false, inheritanceResolved:false, giftHistory:[], specialDeductionUsed:0, totalGiftNet:0, totalInheritanceNet:0, lastTransfer:null },
      lottery: { spent:0, grossWon:0, taxPaid:0, netWon:0, bestPrize:0, bestRank:null, plays:0, lastResult:null },
    };
  });

  tokenLayer.replaceChildren();
  tokenEls.length = 0;
  state.players.forEach((player, index) => {
    const style = PLAYER_STYLES[index];
    const token = document.createElement('div');
    token.className = `token${player.isAI ? ' ai' : ''}`;
    token.dataset.player = String(index);
    token.setAttribute('aria-label', `${player.name} 말`);
    token.style.setProperty('--player-color', style.color);
    token.style.setProperty('--player-color-dark', style.dark);
    token.innerHTML = '<div class="token-shadow"></div><div class="transport-sprite"><i class="wheel wheel-a"></i><i class="wheel wheel-b"></i><i class="transport-frame"></i><i class="transport-cabin"></i></div><div class="token-head"></div><div class="token-body"></div><span></span>';
    token.querySelector('span').textContent = player.short;
    tokenLayer.appendChild(token);
    tokenEls[index] = token;
  });

  tokenEl = tokenEls[0] ?? null;
  refreshTokenTransportVisuals();
  gameModeSelect.value = state.mode;
  gameModeSelect.disabled = false;
  updateActiveTokenStyles();
  updateHud();
  renderRoster();
  positionAllTokens(false);
  refreshAllOwnershipVisuals();
  refreshRegionPriceVisuals();
  setResultDisplay(null, null);
  updateTurnControls();
  if (announce) statusPill.textContent = `${mode.label} 준비 · ${turnPrompt()}`;
}

function isPortraitViewport() {
  return false;
}

function idleCameraMode() {
  if (isPortraitViewport()) return 'overview';
  return state.current?.isAI ? 'overview' : 'follow';
}

function turnPrompt() {
  if (!state.current) return '주사위를 던져보세요';
  if (state.current.isAI) return `${state.current.name} 차례`;
  if (state.mode === 'solo') return '주사위를 던져보세요';
  return `${state.current.name} 차례 · 주사위를 던지세요`;
}

function updateTurnControls() {
  const label = rollButton.querySelector('span:last-child');
  const isAI = Boolean(state.current?.isAI);
  const retired = Boolean(state.current?.retired);
  if (label) label.textContent = allPlayersRetired() ? '인생 완료' : retired ? '은퇴 완료' : isAI ? 'AI 턴 진행 중' : '주사위 던지기 · V58';
  rollButton.disabled = state.rollStarting || state.rolling || state.moving || isAI || retired || allPlayersRetired() || gameMenuOpen;
  if (gameMenuButton) gameMenuButton.disabled = !saveEnabled || state.rollStarting || state.rolling || state.moving || isAI || hasBlockingDecision();
}

function getTransportMode(player) {
  return player?.vehicle?.kind ?? 'walk';
}

function getTransportLabel(player) {
  return player?.vehicle?.name ?? '도보';
}

function transportStepDelay(player) {
  const mode = getTransportMode(player);
  return mode === 'car' ? 150 : mode === 'motorcycle' ? 165 : mode === 'bicycle' ? 185 : 220;
}

function applyTokenTransportClass(playerIndex) {
  const token = tokenEls[playerIndex];
  const player = state.players[playerIndex];
  if (!token || !player) return;
  token.classList.remove('mode-walk','mode-bicycle','mode-motorcycle','mode-car');
  token.classList.add(`mode-${getTransportMode(player)}`);
  token.dataset.transport = getTransportMode(player);
  token.setAttribute('aria-label', `${player.name} · ${getTransportLabel(player)}`);
}

function refreshTokenTransportVisuals() {
  state.players.forEach((_, index) => applyTokenTransportClass(index));
}

function updateActiveTokenStyles() {
  tokenEls.forEach((token, index) => token?.classList.toggle('active', index === state.activePlayer));
  tokenEl = tokenEls[state.activePlayer] ?? null;
}

function renderRoster() {
  if (!turnRosterEl) return;
  turnRosterEl.replaceChildren();
  state.players.forEach((player, index) => {
    const style = PLAYER_STYLES[index];
    const chip = document.createElement('div');
    chip.className = `player-chip${index === state.activePlayer ? ' active' : ''}${player.isAI ? ' ai' : ''}`;
    chip.style.setProperty('--chip-color', style.color);
    const place = labels[player.position]?.[0] ?? `칸 ${player.position}`;
    const job = getJob(player);
    const credentialCount = (player.careerCredentials || []).length;
    const lifeLabel = player.retired ? retirementStatusText(player) : `${player.employmentState === 'unemployed' ? '구직 중' : (job?.name ?? '진로 탐색')} · 자격 ${credentialCount} · ${getTransportLabel(player)} · ${getHousingStatusLabel(player)} · ${getFamilyStatusLabel(player)} · ${player.healthStatus ?? '정상'}${player.restTurns ? `(${player.restTurns}턴)` : ''} · 사업 ${player.businesses?.length ?? 0}`;
    chip.innerHTML = `<i class="chip-dot"></i><strong>${player.short}</strong><span>${player.age}세 · ${place}</span><em>${lifeLabel} · 현금 ${formatMoneyCompact(player.cash)} · 부채 ${formatMoneyCompact(totalDebt(player))}${debtCrisisLabel(player) !== '정상' ? ` · ${debtCrisisLabel(player)}` : ''}</em>`;
    turnRosterEl.appendChild(chip);
  });
}

async function advanceTurn() {
  // 치료/회복으로 쉬어야 하는 플레이어는 실제 턴 기회를 소모하고 다음 플레이어로 넘어간다.
  // 1인 모드에서는 남은 휴식 턴을 화면에 하나씩 보여준 뒤 다시 플레이 가능 상태가 된다.
  if (allPlayersRetired()) {
    showGameEndSummary();
    return;
  }
  const maxChecks = Math.max(8, state.playerCount * 6);
  let checks = 0;
  while (checks < maxChecks) {
    state.activePlayer = (state.activePlayer + 1) % state.playerCount;
    state.lastRollTotal = 0;
    updateActiveTokenStyles();
    updateHud();
    renderRoster();
    setResultDisplay(null, null);
    setDiceIdlePose();
    await setBoardCamera('overview', state.position, true);
    updateTurnControls();

    const player = state.current;
    if (player?.retired) {
      checks += 1;
      continue;
    }
    if ((player?.restTurns || 0) > 0) {
      const before = player.restTurns;
      player.restTurns = Math.max(0, player.restTurns - 1);
      player.healthStatus = player.restTurns > 0 ? '회복중' : '회복 완료';
      updateHud();
      renderRoster();
      statusPill.textContent = `${player.name} · 치료/회복으로 이번 턴 휴식 · ${before}→${player.restTurns}턴 남음`;
      triggerHaptic([8, 45, 8]);
      await sleep(player.isAI ? 520 : 820);
      if (player.restTurns === 0) player.healthStatus = '정상';
      checks += 1;
      continue;
    }

    if (player?.isAI) {
      persistGameState('자동저장');
      statusPill.textContent = `${player.name} 차례 · 생각 중…`;
      await sleep(720);
      if (!state.rolling && !state.moving && state.current?.isAI) await rollDice(true);
      return;
    }

    persistGameState('자동저장');
    statusPill.textContent = state.mode === 'solo'
      ? `새로운 턴 · ${state.age}세 · 주사위를 던지세요`
      : `${state.current.name} 차례 · 주사위를 던지세요`;
    await setBoardCamera('follow', state.position, true, 6);
    return;
  }
  statusPill.textContent = '모든 플레이어가 회복 중입니다 · 다음 턴을 준비합니다.';
  updateTurnControls();
}

function ensureDiceEngine() {
  if (world) {
    updateTurnControls();
    return Promise.resolve(true);
  }
  if (diceEngineInitPromise) return diceEngineInitPromise;

  updateTurnControls();
  statusPill.textContent = diceEngineRetryCount > 0
    ? `3D 주사위 엔진 재연결 중… (${diceEngineRetryCount}/${DICE_ENGINE_MAX_RETRIES})`
    : '3D 주사위 엔진 준비 중…';

  diceEngineInitPromise = init3D()
    .then(() => {
      diceEngineRetryCount = 0;
      diceFallbackMode = false;
      clearTimeout(diceEngineRetryTimer);
      statusPill.textContent = `${turnPrompt()}`;
      updateTurnControls();
      return true;
    })
    .catch((error) => {
      console.error('3D 엔진 초기화 오류', error);
      diceEngineInitPromise = null;
      world = undefined;
      diceEngineRetryCount += 1;
      diceFallbackMode = true;
      updateTurnControls();

      if (diceEngineRetryCount <= DICE_ENGINE_MAX_RETRIES) {
        statusPill.textContent = '3D 주사위 연결 재시도 중 · 주사위 버튼은 안전모드로 사용 가능';
        clearTimeout(diceEngineRetryTimer);
        diceEngineRetryTimer = window.setTimeout(() => ensureDiceEngine(), 900 * diceEngineRetryCount);
      } else {
        statusPill.textContent = '3D 주사위 준비 실패 · 2D 안전모드로 계속 플레이할 수 있습니다.';
      }
      return false;
    });
  return diceEngineInitPromise;
}

async function init3D() {
  if (!THREE || !RoundedBoxGeometry || !RAPIER) {
    const [threeModule, roundedModule, rapierModule] = await Promise.all([
      import('https://esm.sh/three@0.186.0'),
      import('https://esm.sh/three@0.186.0/examples/jsm/geometries/RoundedBoxGeometry.js'),
      import('https://esm.sh/@dimforge/rapier3d-compat@0.20.0'),
    ]);
    THREE = threeModule;
    RoundedBoxGeometry = roundedModule.RoundedBoxGeometry;
    RAPIER = rapierModule.default || rapierModule;
  }
  diceCameraTarget ||= new THREE.Vector3(0, 0.35, 0);
  diceCameraDesiredPos ||= new THREE.Vector3(0, 8.2, 11.5);
  await RAPIER.init();
  world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
  world.timestep = 1 / 60;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x09111d, 0.045);

  camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.copy(diceCameraDesiredPos);
  camera.lookAt(diceCameraTarget);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  diceHost.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x0a1020, 2.0));

  const key = new THREE.DirectionalLight(0xffffff, 4.8);
  key.position.set(-4, 9, 6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -10;
  key.shadow.camera.right = 10;
  key.shadow.camera.top = 10;
  key.shadow.camera.bottom = -10;
  scene.add(key);

  const rim = new THREE.PointLight(0x4cc9f0, 19, 30, 2);
  rim.position.set(5, 5, -4);
  scene.add(rim);

  const warmFill = new THREE.PointLight(0xffd6a5, 8, 20, 2);
  warmFill.position.set(-4, 3.5, 3);
  scene.add(warmFill);

  const floorMat = new THREE.MeshPhysicalMaterial({
    color: 0x15243a,
    roughness: 0.38,
    metalness: 0.04,
    clearcoat: 0.34,
    clearcoatRoughness: 0.38,
  });
  const floor = new THREE.Mesh(new THREE.BoxGeometry(15, 0.28, 11), floorMat);
  floor.position.y = -0.22;
  floor.receiveShadow = true;
  scene.add(floor);

  const groundDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.22, 0);
  groundBody = world.createRigidBody(groundDesc);
  world.createCollider(
    RAPIER.ColliderDesc.cuboid(7.5, 0.14, 5.5).setFriction(0.7).setRestitution(0.24),
    groundBody
  );

  addPhysicsWalls();
  dice = [createDie(-1.5), createDie(1.5)];
  setDiceIdlePose();

  resizeObserver = new ResizeObserver(resize3D);
  resizeObserver.observe(diceHost);
  resize3D();
  lastTime = performance.now();
  animate(lastTime);
  updateTurnControls();
}

function addPhysicsWalls() {
  const walls = [
    { x: -7.5, z: 0, hx: 0.12, hz: 5.5 },
    { x: 7.5, z: 0, hx: 0.12, hz: 5.5 },
    { x: 0, z: -5.5, hx: 7.5, hz: 0.12 },
    { x: 0, z: 5.5, hx: 7.5, hz: 0.12 },
  ];
  walls.forEach((wall) => {
    const rb = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(wall.x, 5.0, wall.z));
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(wall.hx, 5.5, wall.hz).setRestitution(0.18).setFriction(0.72),
      rb
    );
  });
}

function keepDiceInArena() {
  dice.forEach((die, index) => {
    const p = die.body.translation();
    if (Math.abs(p.x) <= 6.55 && Math.abs(p.z) <= 4.55 && p.y >= -0.8 && p.y <= 8.2) return;

    die.body.setTranslation({ x: index === 0 ? -1.35 : 1.35, y: 2.8, z: 0.15 }, true);
    die.body.setLinvel({ x: index === 0 ? 0.8 : -0.8, y: -0.7, z: 0.35 }, true);
    die.body.setAngvel({ x: index === 0 ? 3.4 : -3.4, y: 4.2, z: 2.6 }, true);
  });
}

function createDie(x) {
  const materials = [1, 6, 2, 5, 3, 4].map((value) => createFaceMaterial(value));
  const geometry = new RoundedBoxGeometry(1.55, 1.55, 1.55, 7, 0.2);
  const mesh = new THREE.Mesh(geometry, materials);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);

  const body = world.createRigidBody(
    RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(x, 1.0, 0)
      .setLinearDamping(0.15)
      .setAngularDamping(0.13)
      .setCanSleep(true)
      .setCcdEnabled(true)
  );
  const collider = RAPIER.ColliderDesc.cuboid(0.72, 0.72, 0.72)
    .setMass(1.55)
    .setFriction(0.76)
    .setRestitution(0.26);
  world.createCollider(collider, body);
  return { mesh, body, value: null };
}

function createFaceMaterial(value) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 256, 256);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(0.55, '#f8fafc');
  gradient.addColorStop(1, '#d8e0ea');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  const pipMap = {
    1: [[.5,.5]],
    2: [[.28,.28],[.72,.72]],
    3: [[.28,.28],[.5,.5],[.72,.72]],
    4: [[.28,.28],[.72,.28],[.28,.72],[.72,.72]],
    5: [[.28,.28],[.72,.28],[.5,.5],[.28,.72],[.72,.72]],
    6: [[.28,.24],[.28,.5],[.28,.76],[.72,.24],[.72,.5],[.72,.76]],
  };
  ctx.fillStyle = '#111827';
  ctx.shadowColor = 'rgba(0,0,0,.24)';
  ctx.shadowBlur = 5;
  for (const [px, py] of pipMap[value]) {
    ctx.beginPath();
    ctx.arc(px * 256, py * 256, 19, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(4, renderer?.capabilities?.getMaxAnisotropy?.() || 1);
  return new THREE.MeshPhysicalMaterial({
    map: texture,
    roughness: 0.22,
    metalness: 0.015,
    clearcoat: 0.72,
    clearcoatRoughness: 0.18,
  });
}

function setDiceIdlePose() {
  dice.forEach((die, index) => {
    const x = index === 0 ? -1.35 : 1.35;
    die.body.setTranslation({ x, y: 0.95, z: 0.3 }, true);
    die.body.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
    die.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    die.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
  });
  diceCameraMode = 'idle';
}

function resize3D() {
  if (!renderer || !camera) return;
  const width = Math.max(1, diceHost.clientWidth);
  const height = Math.max(1, diceHost.clientHeight);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate(now) {
  animationId = requestAnimationFrame(animate);
  const elapsed = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;

  if (world) {
    const substeps = Math.max(1, Math.round(elapsed / (1 / 60)));
    for (let i = 0; i < substeps; i++) world.step();
    if (state.rolling) keepDiceInArena();

    dice.forEach((die, index) => {
      const translation = die.body.translation();
      const rotation = die.body.rotation();
      die.mesh.position.set(translation.x, translation.y, translation.z);
      die.mesh.quaternion.set(rotation.x, rotation.y, rotation.z, rotation.w);
      if (state.rolling) detectDiceImpact(die, index, now);
    });

    updateDiceCamera(elapsed);
    if (state.rolling) checkSettled(now);
  }

  renderer?.render(scene, camera);
}

function updateDiceCamera(elapsed) {
  if (!camera || !dice.length) return;
  if (diceCameraMode === 'rolling') {
    const center = new THREE.Vector3();
    dice.forEach((die) => center.add(die.mesh.position));
    center.multiplyScalar(0.5);
    const spread = dice[0].mesh.position.distanceTo(dice[1].mesh.position);
    diceCameraTarget.lerp(new THREE.Vector3(center.x * 0.18, 0.42, center.z * 0.12), Math.min(1, elapsed * 4.2));
    diceCameraDesiredPos.set(
      center.x * 0.12,
      clamp(6.15 + spread * 0.12, 6.15, 7.1),
      clamp(8.7 + spread * 0.28, 8.7, 10.4)
    );
  } else if (diceCameraMode === 'settled') {
    diceCameraTarget.lerp(new THREE.Vector3(0, 0.4, 0), Math.min(1, elapsed * 3.5));
    diceCameraDesiredPos.set(0, 6.75, 9.4);
  } else {
    diceCameraTarget.lerp(new THREE.Vector3(0, 0.35, 0), Math.min(1, elapsed * 3));
    diceCameraDesiredPos.set(0, 8.2, 11.5);
  }

  const shake = cameraShakeStrength;
  const targetPos = diceCameraDesiredPos.clone();
  if (shake > 0.001) {
    targetPos.x += (Math.random() - 0.5) * shake;
    targetPos.y += (Math.random() - 0.5) * shake * 0.55;
    targetPos.z += (Math.random() - 0.5) * shake * 0.7;
    cameraShakeStrength *= Math.exp(-elapsed * 11.5);
  } else {
    cameraShakeStrength = 0;
  }

  camera.position.lerp(targetPos, Math.min(1, elapsed * 4.8));
  camera.lookAt(diceCameraTarget);
}

function detectDiceImpact(die, index, now) {
  const velocity = die.body.linvel();
  const y = die.body.translation().y;
  const previous = previousVerticalVelocity[index];
  const impact = y < 0.92 && previous < -0.8 && velocity.y > previous * 0.35;
  if (impact && now - lastImpactAt[index] > 90) {
    const strength = Math.min(1, Math.abs(previous) / 7);
    cameraShakeStrength = Math.max(cameraShakeStrength, 0.08 + strength * 0.26);
    playImpactSound(strength);
    if (strength > 0.34) triggerHaptic(5);
    lastImpactAt[index] = now;
  }
  previousVerticalVelocity[index] = velocity.y;
}

function checkSettled(now) {
  const quiet = dice.every((die) => {
    const lv = die.body.linvel();
    const av = die.body.angvel();
    const linearSpeed = Math.hypot(lv.x, lv.y, lv.z);
    const angularSpeed = Math.hypot(av.x, av.y, av.z);
    return linearSpeed < 0.18 && angularSpeed < 0.24 && die.body.translation().y < 1.12;
  });

  if (quiet) {
    if (!settleSince) settleSince = now;
    if (now - settleSince > 260) finishRoll();
  } else {
    settleSince = 0;
  }

  if (now - rollStartedAt > 2800) finishRoll();
}

function recoverPlayLoop(error, stage = '턴 처리') {
  console.error(`${stage} 오류`, error);
  state.rollStarting = false;
  state.rolling = false;
  state.moving = false;
  boardCamera.classList.remove('following');
  tokenEl?.classList.remove('in-motion', 'hop', 'landing-bounce');
  clearRoutePreview();
  hideMoveProgress();
  diceCameraMode = 'idle';
  setDiceIdlePose();
  updateHud();
  updateTurnControls();
  statusPill.textContent = `${stage} 중 오류가 발생했습니다. 다시 진행해주세요.`;
  if (canPersistGame()) persistGameState('자동저장');
}

async function rollDice(fromAI = false) {
  if (state.rollStarting || state.rolling || state.moving) return;
  if (!world) {
    await rollDiceFallback(fromAI);
    return;
  }
  if (state.current?.isAI && !fromAI) return;
  if (!state.current?.isAI && fromAI) return;

  state.rollStarting = true;
  state.started = true;
  gameModeSelect.disabled = true;
  updateTurnControls();

  try {
    await ensureAudio();
    await setBoardCamera('overview', state.position, true);

    state.rollStarting = false;
    state.rolling = true;
    settleSince = 0;
    rollStartedAt = performance.now();
    updateTurnControls();
    statusPill.textContent = `${state.current.name} · 주사위가 굴러갑니다…`;
    setResultDisplay(null, null);
    diceCameraMode = 'rolling';
    cameraShakeStrength = 0.08;
    previousVerticalVelocity = [0, 0];
    playThrowSound();

    const throws = [
      {
        pos: { x: -2.35, y: 3.9, z: -0.9 },
        impulse: { x: 3.55 + Math.random()*0.7, y: 1.15 + Math.random()*.22, z: 2.05 + Math.random()*0.7 },
        torque: { x: 10+Math.random()*5, y: 14+Math.random()*6, z: 9+Math.random()*5 },
      },
      {
        pos: { x: 2.35, y: 4.0, z: -0.35 },
        impulse: { x: -3.55-Math.random()*0.7, y: 1.12+Math.random()*.22, z: 1.95+Math.random()*0.75 },
        torque: { x: -10-Math.random()*5, y: 13+Math.random()*6, z: -9-Math.random()*5 },
      },
    ];

    dice.forEach((die, index) => {
      const toss = throws[index];
      die.body.setTranslation(toss.pos, true);
      die.body.setRotation(randomQuaternion(), true);
      die.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
      die.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
      die.body.applyImpulse(toss.impulse, true);
      die.body.applyTorqueImpulse(toss.torque, true);
    });

    triggerHaptic(18);
  } catch (error) {
    recoverPlayLoop(error, '주사위 준비');
  }
}

async function rollDiceFallback(fromAI = false) {
  if (state.current?.isAI && !fromAI) return;
  if (!state.current?.isAI && fromAI) return;

  state.rollStarting = true;
  state.started = true;
  gameModeSelect.disabled = true;
  updateTurnControls();

  try {
    const values = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    const total = values[0] + values[1];
    state.lastRollTotal = total;
    setResultDisplay(values[0], values[1]);
    statusPill.textContent = `${values[0]} + ${values[1]} = ${total}칸 이동 · 2D 안전모드`;
    triggerHaptic([18, 30, 18]);
    state.rollStarting = false;
    state.moving = true;
    updateTurnControls();

    showRoutePreview(total);
    await sleep(420);
    await setBoardCamera('follow', state.position, true, total);
    await sleep(160);
    await moveToken(total);
  } catch (error) {
    recoverPlayLoop(error, '안전모드 이동·이벤트 처리');
  }
}

function randomQuaternion() {
  const euler = new THREE.Euler(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
  const quaternion = new THREE.Quaternion().setFromEuler(euler);
  return { x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w };
}

async function finishRoll() {
  if (!state.rolling) return;
  state.rolling = false;
  rollButton.disabled = true;
  diceCameraMode = 'settled';

  try {
    const values = dice.map((die) => getTopFace(die.mesh.quaternion));
    const total = values[0] + values[1];
    state.lastRollTotal = total;
    dice[0].value = values[0];
    dice[1].value = values[1];
    setResultDisplay(values[0], values[1]);
    statusPill.textContent = `${values[0]} + ${values[1]} = ${total}칸 이동`;
    playSettleSound();
    triggerHaptic([18, 30, 18]);

    showRoutePreview(total);
    await sleep(620);
    await setBoardCamera('follow', state.position, true, total);
    await sleep(220);
    await moveToken(total);
  } catch (error) {
    recoverPlayLoop(error, '이동·이벤트 처리');
  }
}

function getTopFace(quaternion) {
  const localFaces = [
    { value: 1, v: new THREE.Vector3(1,0,0) },
    { value: 6, v: new THREE.Vector3(-1,0,0) },
    { value: 2, v: new THREE.Vector3(0,1,0) },
    { value: 5, v: new THREE.Vector3(0,-1,0) },
    { value: 3, v: new THREE.Vector3(0,0,1) },
    { value: 4, v: new THREE.Vector3(0,0,-1) },
  ];
  let best = localFaces[0];
  let bestY = -Infinity;
  for (const face of localFaces) {
    const worldVector = face.v.clone().applyQuaternion(quaternion);
    if (worldVector.y > bestY) {
      bestY = worldVector.y;
      best = face;
    }
  }
  return best.value;
}

function setResultDisplay(a, b) {
  const parts = diceResult.querySelectorAll('.mini-die');
  parts[0].textContent = a ?? '–';
  parts[1].textContent = b ?? '–';
  diceResult.querySelector('strong').textContent = a && b ? String(a + b) : '–';
}

async function moveToken(steps) {
  state.moving = true;
  statusPill.textContent = `${state.current.name} · ${getTransportLabel(state.current)} 이동 중 · ${steps}칸`;
  applyTokenTransportClass(state.activePlayer);
  tokenEl?.classList.add('in-motion');
  boardCamera.classList.add('following');
  showMoveProgress(0, steps);
  let retiredThisMove = false;

  for (let n = 0; n < steps; n++) {
    cells[state.position]?.classList.remove('pulse');
    const nextRaw = state.position + 1;
    if (nextRaw >= BOARD_CELLS) {
      const completedAge = state.age;
      state.position = 0;
      state.lap += 1;
      applyAnnualSettlement(state.current, completedAge);
      state.age += 1;
      if (state.age >= RETIREMENT_MODEL.retirementAge) {
        state.age = RETIREMENT_MODEL.retirementAge;
        const retirement = finalizeRetirement(state.current);
        retiredThisMove = true;
        updateHud();
        positionAllTokens(true);
        await flashNewYear();
        statusPill.textContent = `${state.current.name} · 65세 은퇴 · ${retirement?.nationalPensionEligible ? '국민연금 수급권 확보' : `국민연금 가입 ${retirement?.nationalPensionYears || 0}년`} · 순자산 ${formatMoneyCompact(retirement?.netWorth || 0)}`;
        await sleep(state.current?.isAI ? 550 : 950);
        break;
      }
      updateHud();
      positionAllTokens(true);
      await flashNewYear();
      const changed = markEconomyYearComplete(state.activePlayer);
      if (changed) {
        const eco=getEconomyPhase();
        statusPill.textContent = `경제환경 변경 · ${eco.label} · ${eco.desc}`;
        await sleep(state.current?.isAI ? 420 : 700);
      }
    } else {
      state.position = nextRaw;
    }

    cells[state.position]?.classList.remove('route-preview');
    cells[state.position]?.classList.add('pulse');
    tokenEl.classList.add('hop');
    positionAllTokens(true);
    setBoardCamera('follow', state.position, true, steps);
    showMoveProgress(n + 1, steps);
    playStepSound(n, steps);
    triggerHaptic(7);
    await sleep(transportStepDelay(state.current));
    tokenEl.classList.remove('hop');
    await sleep(getTransportMode(state.current) === 'walk' ? 45 : 24);
  }

  tokenEl?.classList.remove('in-motion');
  boardCamera.classList.remove('following');
  hideMoveProgress();
  clearRoutePreview();
  updateHud();
  positionAllTokens(true);
  if (retiredThisMove || state.current?.retired) {
    state.moving = false;
    await setBoardCamera('overview', state.position, true, steps);
    await sleep(350);
    await advanceTurn();
    return;
  }
  const space = boardSpaces[state.position] ?? { name: `칸 ${state.position}`, typeLabel: '특수칸', desc: '' };
  const name = space.name;
  statusPill.textContent = `${name} 도착 · ${space.typeLabel}`;
  cells[state.position]?.classList.remove('pulse');
  cells[state.position]?.classList.add('landed');
  tokenEl.classList.add('landing-bounce');
  showArrivalToast(name);
  showArrivalDetailForState(space, state.position);
  playLandingSound();
  triggerHaptic([10, 25, 22]);

  await setBoardCamera('landing', state.position, true, steps);
  await sleep(520);
  await handleLandingAction(space, state.position);
  if (pendingAuction) await resolveAuctionEvent(pendingAuction);
  await sleep(430);
  tokenEl.classList.remove('landing-bounce');
  cells[state.position]?.classList.remove('landed');
  hideArrivalToast();
  hideArrivalDetail();
  hidePurchasePanel(true);
  hideBusinessPanel(true);
  hideBankPanel(true);
  hideAuctionPanel(true);
  hideJobPanel(true);
  hideVehiclePanel(true);
  hideFamilyPanel(true);
  hideHousingPanel(true);
  hideInvestmentPanel(true);
  hideInsurancePanel(true);
  hideIncidentPanel(true);
  hideAnnualPanel(true);
  await setBoardCamera('overview', state.position, true, steps);
  await sleep(420);
  state.moving = false;
  await advanceTurn();
}

async function flashNewYear() {
  const finance = state.current?.lastAnnualFinance;
  const netText = finance?.grossIncome > 0 ? ` · 직업소득 +${formatMoneyCompact(finance.grossIncome)}` : '';
  const taxText = finance?.statutoryTotal > 0 ? ` · 세금·보험 ${formatMoneyCompact(finance.statutoryTotal)}` : '';
  const interestText = finance?.interestPaid > 0
    ? ` · 대출이자 ${formatMoneyCompact(finance.interestPaid)}${finance.arrearsAdded > 0 ? ` · 연체 ${formatMoneyCompact(finance.arrearsAdded)}` : ''}`
    : '';
  const businessText = finance?.businessFinance?.businessOperatingCash > 0 ? ` · 사업 +${formatMoneyCompact(finance.businessFinance.businessOperatingCash)} · 임대료 -${formatMoneyCompact(finance.businessFinance.rentPaid || 0)}` : '';
  const maintenanceText = finance?.maintenancePaid > 0 ? ` · 유지비 -${formatMoneyCompact(finance.maintenancePaid)}` : '';
  const vacancyText = finance?.businessFinance?.leasesTerminated > 0 ? ` · 공실 ${finance.businessFinance.leasesTerminated}건` : '';
  const rentalText = finance?.rentalTaxableIncome > 0 ? ` · 임대소득 ${formatMoneyCompact(finance.rentalTaxableIncome)}` : '';
  const vatTotal = (finance?.businessFinance?.businessVatPaid || 0) + (finance?.rentalVatPaid || 0);
  const vatText = vatTotal > 0 ? ` · VAT ${formatMoneyCompact(vatTotal)}` : '';
  const vehicleText = finance?.vehicleFinance?.due > 0 ? ` · 자동차 ${formatMoneyCompact(finance.vehicleFinance.due)}` : '';
  const privateInsuranceText = finance?.privateInsurance?.due > 0 ? ` · 민간보험 ${formatMoneyCompact(finance.privateInsurance.paid || 0)}${finance.privateInsurance.lapsed ? '(실효)' : ''}` : '';
  const housingText = finance?.housingFinance?.totalDue > 0 ? ` · 주거 -${formatMoneyCompact(finance.housingFinance.totalPaid || 0)}${finance.housingFinance.mortgageArrears>0?` · 주담대연체 ${formatMoneyCompact(finance.housingFinance.mortgageArrears)}`:''}` : '';
  const creditText = finance?.creditUpdate ? ` · 신용 ${finance.creditUpdate.after}(${finance.creditUpdate.status})${finance.creditUpdate.delinquent ? ' ↓' : ' ↑'}` : '';
  const crisisText = finance?.debtCrisis?.stage && finance.debtCrisis.stage !== '정상' ? ` · 채무위기 ${finance.debtCrisis.stage}` : '';
  const familyText = finance?.familyFinance?.spouseNetIncome > 0 || finance?.familyFinance?.parentalLeaveBenefitTotal > 0 || finance?.familyFinance?.childCostPaid > 0 || finance?.familyFinance?.childSupportReceived > 0 || finance?.familyFinance?.divorceSettlementPaid > 0
    ? ` · 가족 ${finance.familyFinance.spouseNetIncome > 0 ? `+${formatMoneyCompact(finance.familyFinance.spouseNetIncome)}` : ''}${finance.familyFinance.parentalLeaveBenefitTotal > 0 ? ` · 육아급여 +${formatMoneyCompact(finance.familyFinance.parentalLeaveBenefitTotal)}` : ''}${finance.familyFinance.childSupportReceived > 0 ? ` · 양육비지원 +${formatMoneyCompact(finance.familyFinance.childSupportReceived)}` : ''}${finance.familyFinance.divorceSettlementPaid > 0 ? ` · 재산분할 -${formatMoneyCompact(finance.familyFinance.divorceSettlementPaid)}` : ''}${finance.familyFinance.childCostPaid > 0 ? ` · 양육 -${formatMoneyCompact(finance.familyFinance.childCostPaid)}` : ''}`
    : '';
  const economyText = finance?.economy ? ` · 경기 ${finance.economy.label}` : '';
  statusPill.textContent = `새로운 한 해 · ${state.age}세${economyText}${netText}${businessText}${maintenanceText}${vacancyText}${rentalText}${vatText}${vehicleText}${privateInsuranceText}${familyText}${housingText}${taxText}${interestText}${creditText}${crisisText}`;

  showAnnualPanel(finance, state.age);
  boardEl.animate([
    { boxShadow: '0 28px 70px rgba(0,0,0,.34), 0 0 0 rgba(122,229,130,0)' },
    { boxShadow: '0 28px 70px rgba(0,0,0,.34), 0 0 55px rgba(122,229,130,.55)' },
    { boxShadow: '0 28px 70px rgba(0,0,0,.34), 0 0 0 rgba(122,229,130,0)' },
  ], { duration: 650, easing: 'ease-out' });
  playNewYearSound();
  await sleep(state.current?.isAI ? 900 : 1450);
  hideAnnualPanel();
}

function positionToken(animate = true, playerIndex = state.activePlayer) {
  const player = state.players[playerIndex];
  const token = tokenEls[playerIndex];
  const cell = cells[player?.position ?? 0];
  if (!player || !token || !cell) return;
  if (!animate) token.style.transition = 'none';

  const sameCellPlayers = state.players
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.position === player.position)
    .map(({ index }) => index);
  const stackIndex = Math.max(0, sameCellPlayers.indexOf(playerIndex));
  const offset = getTokenStackOffset(stackIndex, sameCellPlayers.length, cell.offsetWidth);
  const x = cell.offsetLeft + (cell.offsetWidth - token.offsetWidth) / 2 + offset.x;
  const y = cell.offsetTop + (cell.offsetHeight - token.offsetHeight) / 2 - 3 + offset.y;
  token.style.left = `${x}px`;
  token.style.top = `${y}px`;
  if (!animate) requestAnimationFrame(() => token.style.transition = '');
}

function positionAllTokens(animate = true) {
  state.players.forEach((_, index) => positionToken(animate, index));
}

function getTokenStackOffset(index, count, cellSize) {
  const unit = cellSize * 0.18;
  const layouts = {
    1: [[0, 0]],
    2: [[-1, 0], [1, 0]],
    3: [[-1, -0.65], [1, -0.65], [0, 0.95]],
    4: [[-1, -0.75], [1, -0.75], [-1, 0.75], [1, 0.75]],
  };
  const [ox, oy] = (layouts[count] ?? layouts[4])[index] ?? [0, 0];
  return { x: ox * unit, y: oy * unit };
}

function getCameraScale(mode, rollSteps = state.lastRollTotal || 8) {
  const viewportWidth = boardViewport.clientWidth;
  const viewportHeight = boardViewport.clientHeight;
  const boardWidth = boardEl.offsetWidth;
  const boardHeight = boardEl.offsetHeight;
  const fitScale = Math.min(viewportWidth / boardWidth, viewportHeight / boardHeight, 1);
  if (mode === 'overview') return fitScale * 0.97;

  const isPhone = Math.min(window.innerWidth, window.innerHeight) < 600;
  if (mode === 'landing') {
    return Math.min(fitScale * (isPhone ? 1.95 : 2.08), 2.22);
  }

  const longMove = rollSteps >= 9;
  const multiplier = longMove ? (isPhone ? 1.42 : 1.5) : (isPhone ? 1.62 : 1.72);
  return Math.min(fitScale * multiplier, longMove ? 1.62 : 1.86);
}

async function setBoardCamera(mode, position = state.position, animate = true, rollSteps = state.lastRollTotal || 8) {
  if (!boardEl.offsetWidth || !boardViewport.clientWidth) return;
  if (isPortraitViewport()) mode = 'overview';
  const cell = cells[position];
  if (!cell) return;

  boardCamera.classList.toggle('landing', mode === 'landing');
  if (!animate) boardCamera.style.transition = 'none';

  const scale = getCameraScale(mode, rollSteps);
  let dx = 0;
  let dy = 0;

  if (mode !== 'overview') {
    const boardCenterX = boardEl.offsetWidth / 2;
    const boardCenterY = boardEl.offsetHeight / 2;
    const cellCenterX = cell.offsetLeft + cell.offsetWidth / 2;
    const cellCenterY = cell.offsetTop + cell.offsetHeight / 2;
    const forwardBias = mode === 'follow' ? getForwardCameraBias(position) : { x: 0, y: 0 };
    dx = -scale * (cellCenterX - boardCenterX) + forwardBias.x;
    dy = -scale * (cellCenterY - boardCenterY) + forwardBias.y;
    const maxX = Math.max(0, (boardEl.offsetWidth * scale - boardViewport.clientWidth) / 2 + 34);
    const maxY = Math.max(0, (boardEl.offsetHeight * scale - boardViewport.clientHeight) / 2 + 34);
    dx = clamp(dx, -maxX, maxX);
    dy = clamp(dy, -maxY, maxY);
  }

  boardCamera.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
  if (!animate) requestAnimationFrame(() => boardCamera.style.transition = '');
  if (animate) await sleep(mode === 'follow' ? 260 : mode === 'landing' ? 430 : 560);
}

function getForwardCameraBias(position) {
  const current = boardPath[position];
  const next = boardPath[(position + 1) % BOARD_CELLS];
  const cellSize = cells[position]?.offsetWidth || 50;
  const bias = cellSize * 1.35;
  const colDelta = next.col - current.col;
  const rowDelta = next.row - current.row;
  return { x: -colDelta * bias, y: -rowDelta * bias };
}

function showRoutePreview(steps) {
  clearRoutePreview();
  for (let i = 1; i <= steps; i++) {
    const index = (state.position + i) % BOARD_CELLS;
    cells[index]?.classList.add('route-preview');
  }
}

function clearRoutePreview() {
  cells.forEach((cell) => cell?.classList.remove('route-preview'));
}

function showMoveProgress(current, total) {
  if (!moveProgressEl) return;
  moveProgressEl.hidden = false;
  const strong = moveProgressEl.querySelector('strong');
  if (strong) strong.textContent = `${current} / ${total}`;
}

function hideMoveProgress() {
  if (moveProgressEl) moveProgressEl.hidden = true;
}

function showArrivalToast(name) {
  if (!arrivalToastEl) return;
  const strong = arrivalToastEl.querySelector('strong');
  if (strong) strong.textContent = name;
  arrivalToastEl.hidden = false;
  requestAnimationFrame(() => arrivalToastEl.classList.add('visible'));
}

function hideArrivalToast(immediate = false) {
  if (!arrivalToastEl) return;
  arrivalToastEl.classList.remove('visible');
  if (immediate) {
    arrivalToastEl.hidden = true;
    return;
  }
  setTimeout(() => {
    if (!arrivalToastEl.classList.contains('visible')) arrivalToastEl.hidden = true;
  }, 240);
}

function showArrivalDetail(space) {
  if (!arrivalDetailEl || !space) return;
  arrivalTypeEl.textContent = space.typeLabel ?? '도착';
  arrivalNameEl.textContent = space.name ?? '';
  arrivalDescEl.textContent = space.desc ?? '';
  arrivalDetailEl.hidden = false;
  requestAnimationFrame(() => arrivalDetailEl.classList.add('visible'));
}

function showArrivalDetailForState(space, cellIndex) {
  if (!space) return;
  if (space.kind !== 'region') {
    showArrivalDetail(space);
    return;
  }
  const ownerIndex = propertyOwners[cellIndex];
  const price = getRegionMarketPrice(space.name);
  let desc = `${space.desc} · 게임 매입가 ${formatMoney(price)}`;
  const lease = propertyLeases[cellIndex];
  if (ownerIndex === state.activePlayer) desc += ' · 내가 보유한 지역';
  else if (ownerIndex !== null) desc += ` · ${state.players[ownerIndex]?.name ?? `P${ownerIndex + 1}`} 소유`;
  else desc += ' · 현재 매입 가능';
  if (lease) {
    const biz = getBusinessType(lease.businessId);
    const tenant = state.players[lease.tenantIndex];
    desc += ` · ${tenant?.name ?? '임차인'} ${biz?.name ?? '사업장'} 입점 · 월세 ${formatMoneyCompact(lease.monthlyRent)}`;
  }
  showArrivalDetail({ ...space, desc });
}

function getInvestmentProduct(id) { return INVESTMENT_PRODUCTS.find((item) => item.id === id) ?? null; }
function totalInvestmentValue(player) {
  const inv = player?.investments || {};
  return INVESTMENT_PRODUCTS.reduce((sum,p)=>sum + Math.max(0, Math.round(inv[p.id] || 0)), 0);
}
function investmentReturnRate(product) {
  const phase = state.economyPhase || 'normal';
  return Number(product?.returns?.[phase] ?? 0);
}
function renderInvestmentChoices(player) {
  if (!investmentOfferListEl) return;
  investmentOfferListEl.replaceChildren();
  INVESTMENT_PRODUCTS.forEach((product)=>{
    const holding = Math.max(0, Math.round(player?.investments?.[product.id] || 0));
    const rate = investmentReturnRate(product);
    const card = document.createElement('div'); card.className='investment-offer';
    const info = document.createElement('div'); info.className='investment-copy';
    info.innerHTML=`<span>${product.risk} 위험</span><strong>${product.name}</strong><em>현재 ${formatMoneyCompact(holding)} · 이번 경기 기대변동 ${(rate*100).toFixed(1)}% · ${product.desc}</em>`;
    const actions=document.createElement('div'); actions.className='investment-actions';
    const buy=document.createElement('button'); buy.type='button'; buy.dataset.investmentAction='buy'; buy.dataset.investmentId=product.id; buy.textContent='+500만 투자'; buy.disabled=(player?.cash||0)<INVESTMENT_STEP;
    const sell=document.createElement('button'); sell.type='button'; sell.dataset.investmentAction='sell'; sell.dataset.investmentId=product.id; sell.textContent='전액 매도'; sell.disabled=holding<=0;
    actions.append(buy,sell); card.append(info,actions); investmentOfferListEl.appendChild(card);
  });
}
function showInvestmentPanel(player) {
  if (!investmentPanelEl) return Promise.resolve(null);
  investmentPanelHintEl.textContent=`현재 현금 ${formatMoneyCompact(player.cash)} · 투자자산 ${formatMoneyCompact(totalInvestmentValue(player))} · 경기 ${getEconomyPhase().label}`;
  renderInvestmentChoices(player); investmentPanelEl.hidden=false; requestAnimationFrame(()=>investmentPanelEl.classList.add('visible'));
  return new Promise((resolve)=>{investmentResolver=resolve;});
}
function hideInvestmentPanel(immediate=false){ if(!investmentPanelEl)return; investmentPanelEl.classList.remove('visible'); if(immediate){investmentPanelEl.hidden=true;return;} setTimeout(()=>{if(!investmentPanelEl.classList.contains('visible'))investmentPanelEl.hidden=true;},220); }
function resolveInvestmentPanel(){ if(!investmentResolver)return; const r=investmentResolver; investmentResolver=null; hideInvestmentPanel(); r(true); }
function applyInvestmentAction(player, action, productId) {
  const product=getInvestmentProduct(productId); if(!player||!product)return {ok:false,note:'투자 선택 실패'};
  player.investments ||= {deposit:0,bond:0,stock:0};
  if(action==='buy'){
    if(player.cash<INVESTMENT_STEP)return {ok:false,note:'현금이 부족합니다.'};
    player.cash-=INVESTMENT_STEP; player.investments[productId]=(player.investments[productId]||0)+INVESTMENT_STEP;
    return {ok:true,note:`${product.name} ${formatMoneyCompact(INVESTMENT_STEP)} 투자`};
  }
  if(action==='sell'){
    const value=Math.max(0,Math.round(player.investments[productId]||0)); if(value<=0)return {ok:false,note:'매도할 투자자산이 없습니다.'};
    player.cash+=value; player.investments[productId]=0; return {ok:true,note:`${product.name} 매도 · ${formatMoneyCompact(value)} 현금화`};
  }
  return {ok:false,note:'투자 선택 실패'};
}
async function handleInvestmentLanding(){
  const player=state.current; if(!player)return;
  player.investments ||= {deposit:0,bond:0,stock:0};
  if(player.isAI){
    const phase=state.economyPhase; const id=(phase==='boom'||phase==='recovery')?'stock':(phase==='recession'||phase==='slowdown')?'deposit':'bond';
    if(player.cash>=INVESTMENT_STEP+AI_CASH_RESERVE){ const r=applyInvestmentAction(player,'buy',id); statusPill.textContent=`${player.name} · ${r.note}`; }
    else statusPill.textContent=`${player.name} · 투자 보류`;
    await sleep(420); return;
  }
  await showInvestmentPanel(player); updateHud();
}function settleInvestmentsAnnual(player){
  player.investments ||= {deposit:0,bond:0,stock:0};
  let grossReturn=0, withholding=0, netReturn=0;
  const rows=[];
  for(const product of INVESTMENT_PRODUCTS){
    const before=Math.max(0,Math.round(player.investments[product.id]||0)); if(before<=0)continue;
    const rate=investmentReturnRate(product); const gross=Math.round(before*rate);
    let tax=0;
    if(gross>0 && product.taxableInterest){
      const incomeTax=Math.round(gross*POLICY_KR_2026.financial.interestWithholdingIncomeRate);
      tax=incomeTax+Math.round(incomeTax*POLICY_KR_2026.financial.localIncomeTaxRatio);
    }
    const net=gross-tax; player.investments[product.id]=Math.max(0,before+net);
    grossReturn+=gross; withholding+=tax; netReturn+=net; rows.push({id:product.id,name:product.name,before,rate,gross,tax,net,after:player.investments[product.id]});
  }
  const result={grossReturn,withholding,netReturn,totalValue:totalInvestmentValue(player),rows}; player.lastInvestmentFinance=result; return result;
}

async function handleLandingAction(space, cellIndex) {
  if (!space) return;
  if (space.kind === 'bank') {
    await handleBankLanding();
    return;
  }
  if (space.kind === 'job') {
    await handleJobLanding();
    return;
  }
  if (space.kind === 'insurance') {
    await handleInsuranceLanding();
    return;
  }
  if (space.kind === 'health') {
    await handleHealthLanding();
    return;
  }
  if (space.kind === 'life') {
    await handleLifeLanding();
    return;
  }
  if (space.kind === 'investment') {
    await handleInvestmentLanding();
    return;
  }
  if (space.kind === 'special') {
    await handleSpecialOpportunity();
    return;
  }
  if (space.kind === 'tax') {
    const last = state.current?.lastAnnualFinance;
    statusPill.textContent = last
      ? `세금·정부 · ${POLICY_KR_2026.label} · 소득세/보험 ${formatMoneyCompact(last.statutoryTotal || 0)} · 보유세 ${formatMoneyCompact(last.propertyTaxes?.total || 0)}`
      : `세금·정부 · ${POLICY_KR_2026.label} 공식 제도 기준`;
    await sleep(520);
    return;
  }
  if (space.kind !== 'region') return;
  const price = getRegionMarketPrice(space.name);
  const acquisition = calculateAcquisitionTaxes(price);
  const totalCost = price + acquisition.total;
  const ownerIndex = propertyOwners[cellIndex];
  const player = state.current;
  if (!player || !price) return;

  if (ownerIndex === state.activePlayer) {
    const lease = propertyLeases[cellIndex];
    if (lease) {
      const tenant = state.players[lease.tenantIndex];
      const biz = getBusinessType(lease.businessId);
      statusPill.textContent = `${space.name} · 내 건물 · ${tenant?.name ?? '임차인'} ${biz?.name ?? '사업장'} 입점 · 월세 ${formatMoneyCompact(lease.monthlyRent)}`;
    } else {
      statusPill.textContent = `${space.name} · 내가 보유한 지역 · 현재 공실`;
    }
    return;
  }
  if (ownerIndex !== null) {
    await handleTenantOpportunity(space, cellIndex, ownerIndex);
    return;
  }

  if (player.isAI) {
    await sleep(520);
    const cashOnly = player.cash >= totalCost + AI_CASH_RESERVE;
    if (cashOnly) {
      purchaseRegion(cellIndex, state.activePlayer);
      statusPill.textContent = `${player.name} · ${space.name} 현금 매입 완료`;
      await sleep(520);
      return;
    }
    const loanNeeded = Math.max(0, totalCost - Math.max(0, player.cash - AI_CASH_RESERVE));
    if (loanNeeded > 0 && canBorrow(player, 'bank1', loanNeeded)) {
      takeLoan(player, 'bank1', loanNeeded);
      purchaseRegion(cellIndex, state.activePlayer);
      statusPill.textContent = `${player.name} · 제1금융 대출로 ${space.name} 매입`;
      await sleep(520);
      return;
    }
    statusPill.textContent = `${player.name} · ${space.name} 매입 포기`;
    await sleep(380);
    return;
  }

  const decision = await askPurchaseDecision(space, price);
  if (decision === 'buy') {
    purchaseRegion(cellIndex, state.activePlayer);
    statusPill.textContent = `${space.name} 현금 매입 완료 · ${formatMoneyCompact(player.cash)} 남음`;
  } else if (decision === 'bank1' || decision === 'bank2') {
    const type = decision;
    const shortage = Math.max(0, totalCost - player.cash);
    if (shortage > 0 && takeLoan(player, type, shortage) && purchaseRegion(cellIndex, state.activePlayer)) {
      statusPill.textContent = `${LOAN_PRODUCTS[type].label} 대출로 ${space.name} 매입 완료 · 부채 ${formatMoneyCompact(totalDebt(player))}`;
    } else {
      statusPill.textContent = `${space.name} · 대출 한도 부족`;
    }
  } else {
    statusPill.textContent = `${space.name} 매입 포기`;
  }
}

function getBusinessType(id) {
  return BUSINESS_TYPES.find((item) => item.id === id) ?? null;
}

function getBusinessOperatingProfile(biz) {
  if (!biz) return { revenue:0, labor:0, materials:0, utilities:0, other:0, operatingExpenses:0, operatingProfit:0 };
  const revenue = Math.max(0, Math.round((biz.annualSales || 0) * getEconomyPhase().businessMultiplier));
  const labor = Math.max(0, Math.round(biz.laborCost || 0));
  const materials = Math.max(0, Math.round(biz.materialsCost || 0));
  const utilities = Math.max(0, Math.round(biz.utilitiesCost || 0));
  const other = Math.max(0, Math.round(biz.otherOperatingCost || 0));
  const operatingExpenses = labor + materials + utilities + other;
  const operatingProfit = revenue - operatingExpenses;
  return { revenue, labor, materials, utilities, other, operatingExpenses, operatingProfit };
}

function calculatePropertyMaintenanceForCell(cellIndex) {
  const space = boardSpaces[cellIndex];
  if (!space || space.kind !== 'region') return 0;
  const price = Math.max(0, getRegionMarketPrice(space.name));
  return Math.max(0, Math.round(price * PROPERTY_MAINTENANCE_RATE));
}

function calculatePlayerAnnualMaintenance(playerIndex) {
  if (playerIndex < 0) return { total:0, rows:[] };
  const rows = [];
  let total = 0;
  for (let i = 0; i < propertyOwners.length; i++) {
    if (propertyOwners[i] !== playerIndex) continue;
    const amount = calculatePropertyMaintenanceForCell(i);
    if (amount <= 0) continue;
    rows.push({ cellIndex:i, amount, occupied:Boolean(propertyLeases[i]) });
    total += amount;
  }
  return { total, rows };
}

function getRegionRentYield(space) {
  const text = `${space?.name ?? ''} ${space?.typeLabel ?? ''} ${space?.desc ?? ''}`;
  if (/상권|카페|외식|편집숍|팝업/.test(text)) return 0.12;
  if (/오피스|금융|IT|스타트업/.test(text)) return 0.10;
  if (/관광|숙박|호텔/.test(text)) return 0.09;
  if (/주거|고급주택/.test(text)) return 0.08;
  return 0.10;
}

function calculateLeaseTerms(space, cellIndex) {
  const price = getRegionMarketPrice(space?.name);
  const annualYield = getRegionRentYield(space);
  const rawMonthly = price * annualYield / 12;
  const monthlyRent = Math.max(50_000, Math.round(rawMonthly / 10_000) * 10_000);
  const annualRent = monthlyRent * 12;
  const monthlyRentVat = Math.round(monthlyRent * POLICY_KR_2026.vat.commercialRentRate);
  const annualRentVat = Math.round(annualRent * POLICY_KR_2026.vat.commercialRentRate);
  return { monthlyRent, annualRent, monthlyRentVat, annualRentVat, annualRentGross: annualRent + annualRentVat, annualYield };
}

function getBusinessOffersForRegion(space) {
  const text = `${space?.name ?? ''} ${space?.typeLabel ?? ''} ${space?.desc ?? ''}`;
  let ids;
  if (/IT|스타트업/.test(text)) ids = ['startup','office','cafe'];
  else if (/호텔|숙박/.test(text)) ids = ['lodging','restaurant','cafe'];
  else if (/외식/.test(text)) ids = ['restaurant','cafe','retail'];
  else if (/카페/.test(text)) ids = ['cafe','popup','retail'];
  else if (/오피스|금융/.test(text)) ids = ['office','startup','cafe'];
  else if (/주거|상가/.test(text)) ids = ['retail','beauty','cafe'];
  else if (/고급/.test(text)) ids = ['retail','office','beauty'];
  else ids = ['retail','cafe','office'];
  return ids.map(getBusinessType).filter(Boolean);
}


function getBusinessVatPreview(biz, annualRentGross = 0) {
  if (!biz) return { type:'none', label:'해당 없음', payable:0, salesConsideration:0 };
  const salesEx = Math.max(0, Math.round((biz.annualVatSalesEx || biz.annualSales || 0) * getEconomyPhase().businessMultiplier));
  const salesConsideration = Math.round(salesEx * (1 + POLICY_KR_2026.vat.standardRate));
  const simplified = biz.simplifiedEligible !== false && salesConsideration < POLICY_KR_2026.vat.simplifiedThreshold;
  if (simplified && salesConsideration < POLICY_KR_2026.vat.simplifiedPaymentExemptionThreshold) {
    return { type:'simplified-exempt', label:'간이과세 · 납부면제', payable:0, salesConsideration };
  }
  if (simplified) {
    const output = Math.round(salesConsideration * (biz.simplifiedVatRate || 0.30) * POLICY_KR_2026.vat.standardRate);
    const purchaseBase = Math.max(0, (biz.annualVatPurchasesGross || 0) + annualRentGross);
    const inputCredit = Math.round(purchaseBase * POLICY_KR_2026.vat.simplifiedPurchaseCreditRate);
    return { type:'simplified', label:'간이과세', payable:Math.max(0, output - inputCredit), output, inputCredit, salesConsideration };
  }
  const output = Math.round(salesEx * POLICY_KR_2026.vat.standardRate);
  const inputOperating = Math.round((biz.annualVatPurchasesGross || 0) * POLICY_KR_2026.vat.standardRate / (1 + POLICY_KR_2026.vat.standardRate));
  const inputRent = Math.round(annualRentGross * POLICY_KR_2026.vat.standardRate / (1 + POLICY_KR_2026.vat.standardRate));
  return { type:'general', label:'일반과세', payable:Math.max(0, output - inputOperating - inputRent), output, inputCredit:inputOperating + inputRent, salesConsideration };
}

async function handleTenantOpportunity(space, cellIndex, ownerIndex) {
  const player = state.current;
  const owner = state.players[ownerIndex];
  const lease = propertyLeases[cellIndex];
  if (!player || !owner) return;

  if (lease) {
    const biz = getBusinessType(lease.businessId);
    const tenant = state.players[lease.tenantIndex];
    if (lease.tenantIndex === state.activePlayer) {
      statusPill.textContent = `${space.name} · 내가 운영 중인 ${biz?.name ?? '사업장'} · 월세 ${formatMoneyCompact(lease.monthlyRent)}`;
    } else {
      statusPill.textContent = `${space.name} · ${owner.name} 소유 · ${tenant?.name ?? '임차인'} ${biz?.name ?? '사업장'} 입점 중`;
    }
    await sleep(420);
    return;
  }

  const offers = getBusinessOffersForRegion(space);
  const terms = calculateLeaseTerms(space, cellIndex);
  if (player.isAI) {
    await sleep(420);
    const viable = offers
      .filter((biz) => player.cash >= biz.startupCost + AI_CASH_RESERVE)
      .sort((a,b) => (getBusinessOperatingProfile(b).operatingProfit - terms.annualRent - b.startupCost * 0.12) - (getBusinessOperatingProfile(a).operatingProfit - terms.annualRent - a.startupCost * 0.12));
    if (viable.length && startBusinessLease(cellIndex, state.activePlayer, viable[0].id)) {
      statusPill.textContent = `${player.name} · ${space.name} ${viable[0].name} 입점 · 월세 ${formatMoneyCompact(terms.monthlyRent)} + VAT 10%`;
      await sleep(520);
    } else {
      statusPill.textContent = `${player.name} · ${space.name} 입점 포기`;
      await sleep(320);
    }
    return;
  }

  const businessId = await askBusinessDecision(space, cellIndex, ownerIndex, offers, terms);
  if (businessId && startBusinessLease(cellIndex, state.activePlayer, businessId)) {
    const biz = getBusinessType(businessId);
    statusPill.textContent = `${space.name} · ${biz?.name ?? '사업장'} 입점 완료 · ${owner.name}에게 월세 ${formatMoneyCompact(terms.monthlyRent)} + VAT 10%`;
  } else {
    statusPill.textContent = `${space.name} · 이번에는 입점하지 않았습니다`;
  }
}

function askBusinessDecision(space, cellIndex, ownerIndex, offers, terms) {
  if (!businessPanelEl) return Promise.resolve(null);
  hideArrivalDetail();
  const player = state.current;
  const owner = state.players[ownerIndex];
  businessPanelTitleEl.textContent = `${space.name}에 사업장을 열까요?`;
  businessOwnerEl.textContent = owner?.name ?? `P${ownerIndex + 1}`;
  businessMonthlyRentEl.textContent = formatMoney(terms.monthlyRent);
  businessAnnualRentEl.textContent = formatMoney(terms.annualRent);
  businessCashEl.textContent = formatMoney(player?.cash ?? 0);
  businessPanelHintEl.textContent = '영업현금·월세·매출 규모는 게임 밸런스값입니다. V16는 매출·인건비·재료비·공과금·기타 운영비를 분리하고, 2026 공식 VAT 기준과 상가 임대 VAT 10%를 연간정산에 반영합니다.';
  businessOfferListEl.replaceChildren();
  offers.forEach((biz) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'business-offer';
    button.dataset.businessId = biz.id;
    button.disabled = (player?.cash ?? 0) < biz.startupCost;
    const op = getBusinessOperatingProfile(biz);
    const afterRent = op.operatingProfit - terms.annualRent;
    const vatPreview = getBusinessVatPreview(biz, terms.annualRentGross);
    button.innerHTML = `<span>${biz.icon} 창업비 ${formatMoneyCompact(biz.startupCost)}</span><strong>${biz.name}</strong><em>매출 ${formatMoneyCompact(op.revenue)} · 운영비 ${formatMoneyCompact(op.operatingExpenses)} · 임대료 후 ${formatMoneyCompact(Math.max(0,afterRent))} · ${vatPreview.label} 예상 VAT ${formatMoneyCompact(vatPreview.payable)}</em>`;
    businessOfferListEl.appendChild(button);
  });
  businessPanelEl.hidden = false;
  requestAnimationFrame(() => businessPanelEl.classList.add('visible'));
  return new Promise((resolve) => { businessResolver = resolve; });
}

function resolveBusinessDecision(businessId = null) {
  if (!businessResolver) return;
  const resolve = businessResolver;
  businessResolver = null;
  hideBusinessPanel();
  resolve(businessId);
}

function hideBusinessPanel(immediate = false) {
  if (!businessPanelEl) return;
  businessPanelEl.classList.remove('visible');
  if (immediate) { businessPanelEl.hidden = true; return; }
  setTimeout(() => { if (!businessPanelEl.classList.contains('visible')) businessPanelEl.hidden = true; }, 240);
}

function startBusinessLease(cellIndex, tenantIndex, businessId) {
  const space = boardSpaces[cellIndex];
  const tenant = state.players[tenantIndex];
  const ownerIndex = propertyOwners[cellIndex];
  const owner = state.players[ownerIndex];
  const biz = getBusinessType(businessId);
  if (!space || space.kind !== 'region' || !tenant || !owner || ownerIndex === tenantIndex || !biz || propertyLeases[cellIndex]) return false;
  if (tenant.cash < biz.startupCost) return false;
  const terms = calculateLeaseTerms(space, cellIndex);
  tenant.cash -= biz.startupCost;
  propertyLeases[cellIndex] = {
    cellIndex,
    ownerIndex,
    tenantIndex,
    businessId: biz.id,
    monthlyRent: terms.monthlyRent,
    annualRent: terms.annualRent,
    monthlyRentVat: terms.monthlyRentVat,
    annualRentVat: terms.annualRentVat,
    annualRentGross: terms.annualRentGross,
    annualSales: biz.annualSales,
    laborCost: biz.laborCost,
    materialsCost: biz.materialsCost,
    utilitiesCost: biz.utilitiesCost,
    otherOperatingCost: biz.otherOperatingCost,
    annualVatSalesEx: biz.annualVatSalesEx,
    annualVatPurchasesGross: biz.annualVatPurchasesGross,
    startupCost: biz.startupCost,
    rentArrears: 0,
    rentArrearsBase: 0,
    rentArrearsVat: 0,
    defaultYears: 0,
    startedAge: tenant.age,
  };
  if (!tenant.businesses.includes(cellIndex)) tenant.businesses.push(cellIndex);
  refreshOwnershipVisual(cellIndex);
  updateHud();
  return true;
}

function terminateLeaseForDefault(cellIndex, lease) {
  const tenant = state.players[lease?.tenantIndex];
  if (tenant) tenant.businesses = (tenant.businesses || []).filter((idx) => idx !== cellIndex);
  propertyLeases[cellIndex] = null;
  refreshOwnershipVisual(cellIndex);
}

function settlePlayerBusinesses(playerIndex, player) {
  const leases = propertyLeases.filter((lease) => lease && lease.tenantIndex === playerIndex);
  let businessRevenue = 0;
  let operatingExpenses = 0;
  let laborCost = 0;
  let materialsCost = 0;
  let utilitiesCost = 0;
  let otherOperatingCost = 0;
  let businessOperatingCash = 0;
  let operatingExpenseArrears = 0;
  let rentDue = 0;
  let rentPaid = 0;
  let rentBasePaid = 0;
  let rentVatPaid = 0;
  let rentArrearsAdded = 0;
  let businessVatPayable = 0;
  let leasesTerminated = 0;
  const transfers = [];
  const vatRows = [];

  for (const lease of [...leases]) {
    const biz = getBusinessType(lease.businessId);
    const profile = getBusinessOperatingProfile(biz);

    // 매출 유입 후 실제 운영비를 지출한다. 운영비 부족분은 연체로 남긴다.
    player.cash += profile.revenue;
    businessRevenue += profile.revenue;
    const opPaid = Math.min(player.cash, profile.operatingExpenses);
    player.cash -= opPaid;
    const opUnpaid = Math.max(0, profile.operatingExpenses - opPaid);
    if (opUnpaid > 0) player.arrears += opUnpaid;
    operatingExpenseArrears += opUnpaid;
    operatingExpenses += profile.operatingExpenses;
    laborCost += profile.labor;
    materialsCost += profile.materials;
    utilitiesCost += profile.utilities;
    otherOperatingCost += profile.other;
    businessOperatingCash += Math.max(0, profile.revenue - profile.operatingExpenses);

    const currentBase = Math.max(0, lease.annualRent || 0);
    const currentVat = Math.max(0, lease.annualRentVat ?? Math.round(currentBase * POLICY_KR_2026.vat.commercialRentRate));
    const priorBase = Math.max(0, lease.rentArrearsBase || 0);
    const priorVat = Math.max(0, lease.rentArrearsVat || 0);
    const baseDue = currentBase + priorBase;
    const vatDue = currentVat + priorVat;
    const due = baseDue + vatDue;
    rentDue += due;

    const paid = Math.min(player.cash, due);
    player.cash -= paid;
    rentPaid += paid;

    const baseRatio = due > 0 ? baseDue / due : 0;
    const paidBase = Math.min(baseDue, Math.round(paid * baseRatio));
    const paidVat = Math.min(vatDue, Math.max(0, paid - paidBase));
    rentBasePaid += paidBase;
    rentVatPaid += paidVat;

    const owner = state.players[lease.ownerIndex];
    if (owner) {
      owner.cash += paid;
      owner.pendingRentalIncome = Math.max(0, owner.pendingRentalIncome || 0) + paidBase;
      owner.pendingRentalVatCollected = Math.max(0, owner.pendingRentalVatCollected || 0) + paidVat;
    }

    const unpaidBase = Math.max(0, baseDue - paidBase);
    const unpaidVat = Math.max(0, vatDue - paidVat);
    const unpaid = unpaidBase + unpaidVat;
    const priorTotal = priorBase + priorVat;
    rentArrearsAdded += Math.max(0, unpaid - priorTotal);
    lease.rentArrearsBase = unpaidBase;
    lease.rentArrearsVat = unpaidVat;
    lease.rentArrears = unpaid;
    lease.defaultYears = unpaid > 0 ? (lease.defaultYears || 0) + 1 : 0;

    const vatInfo = getBusinessVatPreview(biz, paid);
    businessVatPayable += vatInfo.payable || 0;
    vatRows.push({ cellIndex: lease.cellIndex, businessId: lease.businessId, ...vatInfo });
    transfers.push({ cellIndex: lease.cellIndex, ownerIndex: lease.ownerIndex, revenue:profile.revenue, operatingExpenses:profile.operatingExpenses, operatingProfit:profile.operatingProfit, currentBase, currentVat, priorBase, priorVat, due, paid, paidBase, paidVat, unpaid, defaultYears:lease.defaultYears });

    // 임대료 연체가 2년 연속이면 계약이 종료되어 건물은 공실이 된다.
    if (lease.defaultYears >= LEASE_DEFAULT_YEARS_TO_TERMINATE) {
      // 계약은 종료되지만 미지급 임대료는 일반 연체채무로 남긴다. 추후 압류/회생 시스템에서 처리한다.
      player.arrears += unpaid;
      terminateLeaseForDefault(lease.cellIndex, lease);
      leasesTerminated += 1;
    }
  }

  player.rentArrears = propertyLeases
    .filter((item) => item && item.tenantIndex === playerIndex)
    .reduce((sum, item) => sum + Math.max(0, item.rentArrears || 0), 0);

  // 사업소득금액 = 매출 - 실제 게임상 운영비 - 계약상 기본 임대료. VAT는 별도 처리한다.
  const annualContractRent = leases.reduce((sum, lease) => sum + Math.max(0, lease.annualRent || 0), 0);
  const taxableBusinessIncome = Math.max(0, businessRevenue - operatingExpenses - annualContractRent);

  const businessVatPaid = Math.min(player.cash, businessVatPayable);
  player.cash -= businessVatPaid;
  const businessVatArrears = Math.max(0, businessVatPayable - businessVatPaid);
  if (businessVatArrears > 0) player.arrears += businessVatArrears;

  return {
    businessRevenue, operatingExpenses, laborCost, materialsCost, utilitiesCost, otherOperatingCost,
    businessOperatingCash, operatingExpenseArrears, rentDue, rentPaid, rentBasePaid, rentVatPaid, rentArrearsAdded,
    rentArrears: player.rentArrears || 0, annualContractRent, taxableBusinessIncome,
    businessVatPayable, businessVatPaid, businessVatArrears, leasesTerminated, vatRows, transfers,
  };
}

function askPurchaseDecision(space, price) {
  if (!purchasePanelEl) return Promise.resolve('skip');
  hideArrivalDetail();
  const player = state.current;
  const cash = player?.cash ?? 0;
  const acquisition = calculateAcquisitionTaxes(price);
  const totalCost = price + acquisition.total;
  const shortage = Math.max(0, totalCost - cash);
  purchaseNameEl.textContent = space.name;
  purchasePriceEl.textContent = formatMoney(price);
  if (purchaseTaxEl) purchaseTaxEl.textContent = formatMoney(acquisition.total);
  if (purchaseTotalEl) purchaseTotalEl.textContent = formatMoney(totalCost);
  purchaseCashEl.textContent = formatMoney(cash);
  buyButton.disabled = cash < totalCost;
  loanBuyBank1Button.disabled = shortage <= 0 || !canBorrow(player, 'bank1', shortage);
  loanBuyBank2Button.disabled = shortage <= 0 || !canBorrow(player, 'bank2', shortage);
  if (shortage <= 0) {
    purchaseHintEl.textContent = '취득세 4% + 지방교육세 0.4% + 농어촌특별세 0.2%를 포함한 총비용입니다.';
  } else {
    purchaseHintEl.textContent = `부족자금 ${formatMoney(shortage)} · 제1금융 연 ${(currentLoanRate('bank1')*100).toFixed(1)}% / 제2금융 연 ${(currentLoanRate('bank2')*100).toFixed(1)}% (V24 경기연동 게임금리 · 취득 관련 세금 포함 부족자금)`;
  }
  purchasePanelEl.hidden = false;
  requestAnimationFrame(() => purchasePanelEl.classList.add('visible'));
  return new Promise((resolve) => { purchaseResolver = resolve; });
}

function resolvePurchaseDecision(decision) {
  if (!purchaseResolver) return;
  const resolve = purchaseResolver;
  purchaseResolver = null;
  hidePurchasePanel();
  resolve(decision);
}

function hidePurchasePanel(immediate = false) {
  if (!purchasePanelEl) return;
  purchasePanelEl.classList.remove('visible');
  if (immediate) { purchasePanelEl.hidden = true; return; }
  setTimeout(() => {
    if (!purchasePanelEl.classList.contains('visible')) purchasePanelEl.hidden = true;
  }, 240);
}

function totalDebt(player) {
  if (!player?.debts) return 0;
  const familySettlementDebt = Array.isArray(player.family?.divorceObligations)
    ? player.family.divorceObligations.reduce((sum, item) => sum + Math.max(0, item?.settlementDebt || 0), 0)
    : Math.max(0, player.family?.divorceSettlementDebt || 0);
  return Math.max(0, player.debts.bank1 || 0) + Math.max(0, player.debts.bank2 || 0) + Math.max(0, player.housing?.mortgage?.principal || 0) + Math.max(0, player.arrears || 0) + Math.max(0, player.family?.spouse?.debt || 0) + familySettlementDebt;
}

function creditStatusFromScore(score) {
  const value = Math.max(0, Math.min(1000, Math.round(score || 0)));
  if (value >= 900) return '우수';
  if (value >= 800) return '양호';
  if (value >= 700) return '보통';
  if (value >= 600) return '주의';
  return '위험';
}

function creditLimitFactor(player) {
  const score = player?.creditScore ?? 850;
  if (score >= 900) return 1.15;
  if (score >= 800) return 1.0;
  if (score >= 700) return 0.8;
  if (score >= 600) return 0.55;
  return 0.25;
}

function updateAnnualCredit(player) {
  if (!player) return { before:850, after:850, status:'양호', delinquent:false };
  const before = player.creditScore ?? 850;
  const hasArrears = (player.arrears || 0) > 0 || (player.rentArrears || 0) > 0 || (player.housing?.mortgage?.arrears || 0) > 0;
  if (hasArrears) {
    player.delinquencyYears = (player.delinquencyYears || 0) + 1;
    const overdue = (player.arrears || 0) + (player.rentArrears || 0) + (player.housing?.mortgage?.arrears || 0);
    const penalty = overdue >= 10_000_000 ? 100 : overdue >= 3_000_000 ? 70 : 45;
    player.creditScore = Math.max(300, before - penalty - Math.min(40, (player.delinquencyYears - 1) * 10));
  } else {
    player.delinquencyYears = 0;
    const cleanBonus = totalDebt(player) > 0 ? 10 : 15;
    player.creditScore = Math.min(950, before + cleanBonus);
  }
  player.creditStatus = creditStatusFromScore(player.creditScore);
  return { before, after:player.creditScore, status:player.creditStatus, delinquent:hasArrears, delinquencyYears:player.delinquencyYears || 0 };
}


const DEBT_CRISIS_MODEL = {
  enforcementYears: 3,          // 게임 진행용 단계 기준. 실제 법정 기한이 아님
  auctionFirstRoundFactor: 0.80,// 1차 최저가 = 자동평가액의 80% (게임 밸런스값)
  auctionFailFactor: 0.85,      // 유찰될 때마다 다음 최저가 15% 하락 (게임 밸런스값)
  maxAuctionFailures: 3,
};

function debtCrisisLabel(player) {
  return player?.debtCrisis?.stage || '정상';
}

function totalPastDue(player) {
  return Math.max(0, player?.arrears || 0) + Math.max(0, player?.rentArrears || 0) + Math.max(0, player?.housing?.mortgage?.arrears || 0);
}

function applyCrisisSaleProceeds(player, proceeds) {
  let remaining = Math.max(0, Math.round(proceeds || 0));
  let applied = 0;
  const pay = (getValue, setValue) => {
    if (remaining <= 0) return;
    const current = Math.max(0, getValue());
    const amount = Math.min(current, remaining);
    if (amount > 0) { setValue(current - amount); remaining -= amount; applied += amount; }
  };
  pay(() => player.arrears || 0, v => { player.arrears = v; });
  pay(() => player.rentArrears || 0, v => { player.rentArrears = v; });
  pay(() => player.debts?.bank2 || 0, v => { player.debts.bank2 = v; });
  pay(() => player.debts?.bank1 || 0, v => { player.debts.bank1 = v; });
  if (remaining > 0) player.cash += remaining;
  return { applied, surplus:remaining };
}

function getAuctionFailureKey(asset) {
  return asset?.type === 'home' ? `home:${asset.name}` : `region:${asset.cellIndex}`;
}

function selectAuctionAsset(player, playerIndex) {
  const home = player?.housing?.ownedHome;
  const mortgage = player?.housing?.mortgage;
  if (home && mortgage?.principal > 0) {
    return { type:'home', name:home.name, appraisedValue:Math.max(0,home.price||0), sellerIndex:playerIndex };
  }
  const owned = (player?.properties || [])
    .filter(i => propertyOwners[i] === playerIndex)
    .map(i => ({ cellIndex:i, price:getRegionMarketPrice(boardSpaces[i]?.name) }))
    .sort((a,b) => b.price - a.price);
  const target = owned[0];
  if (!target || target.price <= 0) return null;
  const lease = propertyLeases[target.cellIndex];
  const annualRent = Math.max(0, lease?.annualRent || 0);
  const incomeBonus = Math.min(target.price * 0.05, annualRent * 1.5);
  return {
    type:'region',
    cellIndex:target.cellIndex,
    name:boardSpaces[target.cellIndex]?.name || '보유 부동산',
    appraisedValue:Math.round(target.price + incomeBonus),
    baseGameValue:target.price,
    annualRent,
    sellerIndex:playerIndex,
  };
}

function createAuctionNotice(player, playerIndex) {
  const asset = selectAuctionAsset(player, playerIndex);
  if (!asset) return null;
  player.debtCrisis ??= { stage:'정상', lastAction:'', enforcementCount:0, auctionFailures:{} };
  player.debtCrisis.auctionFailures ??= {};
  const key = getAuctionFailureKey(asset);
  const failures = Math.max(0, player.debtCrisis.auctionFailures[key] || 0);
  const roundFactor = DEBT_CRISIS_MODEL.auctionFirstRoundFactor * Math.pow(DEBT_CRISIS_MODEL.auctionFailFactor, failures);
  const minimumBid = Math.max(1_000_000, Math.round(asset.appraisedValue * roundFactor / 100_000) * 100_000);
  return {
    ...asset,
    key,
    failures,
    round:failures+1,
    minimumBid,
    currentBid:0,
    currentBidderIndex:null,
    status:'공고',
  };
}

function calculateAuctionBuyerTax(auction, bidder) {
  if (!auction || !bidder) return 0;
  const bid = Math.max(0, auction.currentBid || auction.minimumBid || 0);
  if (auction.type === 'home') return calculateHomeAcquisitionTax({price:bid}, bidder).total;
  return calculateAcquisitionTaxes(bid).total;
}

function canBidAuction(playerIndex, auction, bidAmount) {
  const bidder = state.players[playerIndex];
  if (!bidder || playerIndex === auction.sellerIndex) return false;
  if (auction.type === 'home' && bidder.housing?.kind === 'owned') return false;
  const tax = auction.type === 'home'
    ? calculateHomeAcquisitionTax({price:bidAmount}, bidder).total
    : calculateAcquisitionTaxes(bidAmount).total;
  return bidder.cash >= bidAmount + tax;
}

function auctionBidSteps(auction) {
  const base = Math.max(auction.minimumBid, auction.currentBid ? auction.currentBid + Math.max(100_000, Math.round(auction.appraisedValue*0.05/100_000)*100_000) : auction.minimumBid);
  return [base, Math.round(base*1.10/100_000)*100_000, Math.round(base*1.20/100_000)*100_000];
}

function hideAuctionPanel(immediate=false) {
  if (!auctionPanelEl) return;
  auctionPanelEl.classList.remove('visible');
  if (immediate) { auctionPanelEl.hidden = true; return; }
  setTimeout(()=>{ if (!auctionPanelEl.classList.contains('visible')) auctionPanelEl.hidden = true; },220);
}

function askAuctionDecision(auction, bidderIndex) {
  const bidder = state.players[bidderIndex];
  if (!auctionPanelEl || !bidder) return Promise.resolve(null);
  const steps = auctionBidSteps(auction);
  auctionAssetEl.textContent = auction.name;
  auctionAppraisalEl.textContent = formatMoneyCompact(auction.appraisedValue);
  auctionMinimumEl.textContent = formatMoneyCompact(auction.minimumBid);
  auctionRoundEl.textContent = `${auction.round}차`;
  auctionBidderEl.textContent = `${bidder.name} · 현금 ${formatMoneyCompact(bidder.cash)}`;
  auctionHighestEl.textContent = auction.currentBid > 0
    ? `${formatMoneyCompact(auction.currentBid)} · ${state.players[auction.currentBidderIndex]?.name ?? '입찰자'}`
    : '아직 없음';
  auctionHintEl.textContent = '입찰가는 게임 자동평가식으로 산정됩니다. 낙찰 시 취득 관련 세금도 자동 납부됩니다.';
  auctionBidButtonsEl.replaceChildren();
  steps.forEach((amount, idx)=>{
    const b=document.createElement('button'); b.type='button'; b.className='auction-bid'; b.dataset.bid=String(amount);
    const tax = auction.type === 'home' ? calculateHomeAcquisitionTax({price:amount},bidder).total : calculateAcquisitionTaxes(amount).total;
    b.disabled=!canBidAuction(bidderIndex,auction,amount);
    b.innerHTML=`<strong>${idx===0?'입찰':`+${idx*10}%`}</strong><span>${formatMoneyCompact(amount)} · 세금 ${formatMoneyCompact(tax)}</span>`;
    auctionBidButtonsEl.appendChild(b);
  });
  auctionPanelEl.hidden=false;
  requestAnimationFrame(()=>auctionPanelEl.classList.add('visible'));
  return new Promise(resolve=>{ auctionDecisionResolver=resolve; });
}

function resolveAuctionDecision(amount=null) {
  if (!auctionDecisionResolver) return;
  const r=auctionDecisionResolver; auctionDecisionResolver=null; hideAuctionPanel(); r(amount ? Number(amount) : null);
}

function aiAuctionBid(auction, bidderIndex) {
  const bidder=state.players[bidderIndex];
  if (!bidder) return null;
  const steps=auctionBidSteps(auction).filter(v=>canBidAuction(bidderIndex,auction,v));
  if (!steps.length) return null;
  const affordable=steps.filter(v=>v <= bidder.cash*0.65);
  if (!affordable.length) return null;
  const ownedCount=(bidder.properties||[]).length;
  return affordable[Math.min(affordable.length-1, ownedCount>2?0:1)] ?? affordable[0];
}

function transferAuctionAsset(auction, winnerIndex, bid) {
  const seller=state.players[auction.sellerIndex];
  const winner=state.players[winnerIndex];
  if (!seller || !winner) return null;
  const tax = auction.type === 'home'
    ? calculateHomeAcquisitionTax({price:bid}, winner).total
    : calculateAcquisitionTaxes(bid).total;
  if (winner.cash < bid + tax) return null;
  winner.cash -= (bid + tax);
  let mortgagePaid=0;
  let proceedsForDebt=bid;

  if (auction.type === 'home') {
    const oldHome=seller.housing?.ownedHome;
    const mortgage=seller.housing?.mortgage;
    const mortgageArrears=Math.max(0,mortgage?.arrears||0);
    const arrearsPaid=Math.min(proceedsForDebt,mortgageArrears);
    proceedsForDebt-=arrearsPaid;
    if (mortgage) mortgage.arrears=Math.max(0,mortgageArrears-arrearsPaid);
    mortgagePaid=Math.min(proceedsForDebt,Math.max(0,mortgage?.principal||0));
    proceedsForDebt-=mortgagePaid;
    const mortgageShortfall=Math.max(0,(mortgage?.principal||0)-mortgagePaid)+(mortgage?.arrears||0);
    if (mortgageShortfall>0) seller.debts.bank1=Math.max(0,seller.debts?.bank1||0)+mortgageShortfall;
    if (mortgage) mortgage.principal=0;
    seller.housing={...seller.housing,kind:'family',optionId:'familyHome',name:'가족과 거주',deposit:0,ownedHome:null,mortgage:null};
    releaseCurrentHousingDeposit(winner);
    winner.housing={...winner.housing,kind:'owned',optionId:'auctionHome',name:auction.name,deposit:0,firstHomeAcquired:true,lastOfferAge:winner.age,
      ownedHome:{id:'auctionHome',name:auction.name,price:bid,area:oldHome?.area||59,annualMaintenanceRate:oldHome?.annualMaintenanceRate||0.0045,purchasedAge:winner.age,acquisitionTax:{total:tax,auction:true}},mortgage:null};
  } else {
    seller.properties=(seller.properties||[]).filter(i=>i!==auction.cellIndex);
    if (!winner.properties.includes(auction.cellIndex)) winner.properties.push(auction.cellIndex);
    propertyOwners[auction.cellIndex]=winnerIndex;
    const lease=propertyLeases[auction.cellIndex];
    if (lease) lease.ownerIndex=winnerIndex; // 게임 간소화: 기존 임대차는 새 소유자에게 승계
    refreshOwnershipVisual(auction.cellIndex);
  }

  const debtResult=applyCrisisSaleProceeds(seller,proceedsForDebt);
  seller.debtCrisis.auctionFailures[auction.key]=0;
  seller.debtCrisis.enforcementCount=(seller.debtCrisis.enforcementCount||0)+1;
  seller.debtCrisis.stage='경매 낙찰·변제';
  seller.debtCrisis.lastAction=`${auction.name} ${formatMoneyCompact(bid)} 낙찰 · 채무변제 ${formatMoneyCompact(mortgagePaid+debtResult.applied)}`;
  updateHud(); renderRoster();
  return { tax, mortgagePaid, debtApplied:debtResult.applied, surplus:debtResult.surplus };
}

async function resolveAuctionEvent(auction) {
  if (!auction) return null;
  pendingAuction=null;
  const seller=state.players[auction.sellerIndex];
  if (!seller) return null;
  const participants=state.players.map((p,i)=>i).filter(i=>i!==auction.sellerIndex);
  if (!participants.length) {
    seller.debtCrisis.auctionFailures[auction.key]=(seller.debtCrisis.auctionFailures[auction.key]||0)+1;
    seller.debtCrisis.stage='경매 유찰·재공고';
    seller.debtCrisis.lastAction=`${auction.name} 유찰 · 다음 공고 최저가 하향`;
    statusPill.textContent=`${auction.name} 경매 유찰 · 다음 해 재공고`;
    await sleep(650); return {status:'failed'};
  }
  for (const bidderIndex of participants) {
    const bidder=state.players[bidderIndex];
    let amount=null;
    if (bidder.isAI) { await sleep(360); amount=aiAuctionBid(auction,bidderIndex); }
    else amount=await askAuctionDecision(auction,bidderIndex);
    if (amount && amount>=auction.minimumBid && amount>auction.currentBid && canBidAuction(bidderIndex,auction,amount)) {
      auction.currentBid=amount; auction.currentBidderIndex=bidderIndex;
      statusPill.textContent=`${bidder.name} · ${auction.name} ${formatMoneyCompact(amount)} 입찰`;
      await sleep(260);
    }
  }
  hideAuctionPanel(true);
  if (auction.currentBidderIndex===null) {
    seller.debtCrisis.auctionFailures[auction.key]=(seller.debtCrisis.auctionFailures[auction.key]||0)+1;
    seller.debtCrisis.stage='경매 유찰·재공고';
    seller.debtCrisis.lastAction=`${auction.name} ${auction.round}차 유찰 · 다음 최저가 하향`;
    statusPill.textContent=`${auction.name} 경매 유찰 · 다음 해 재공고`;
    await sleep(650); return {status:'failed'};
  }
  const winner=state.players[auction.currentBidderIndex];
  const result=transferAuctionAsset(auction,auction.currentBidderIndex,auction.currentBid);
  if (!result) return {status:'failed'};
  statusPill.textContent=`낙찰 · ${winner.name} ${formatMoneyCompact(auction.currentBid)} · 소유권 이전 완료`;
  triggerHaptic([12,35,18]);
  await sleep(800);
  return {status:'sold',winnerIndex:auction.currentBidderIndex,bid:auction.currentBid,...result};
}

function updateDebtCrisis(player, playerIndex) {
  if (!player) return { stage:'정상', action:null, note:'' };
  player.debtCrisis ??= { stage:'정상', lastAction:'', enforcementCount:0, auctionFailures:{} };
  player.debtCrisis.auctionFailures ??= {};
  const years = player.delinquencyYears || 0;
  const pastDue = totalPastDue(player);
  let stage='정상', note='', auction=null;
  if (pastDue<=0 && years===0) stage='정상';
  else if (years<=1) { stage='독촉·추심'; note='연체가 지속되면 강제집행 또는 담보권 실행 위험이 커집니다.'; }
  else if (years<DEBT_CRISIS_MODEL.enforcementYears) { stage='강제집행 위험'; note='게임상 장기연체 단계입니다. 실제 법정 집행 시점은 채권·담보·절차에 따라 다릅니다.'; }
  else {
    auction=createAuctionNotice(player,playerIndex);
    if (auction) {
      stage='경매공고';
      note=`${auction.name} ${auction.round}차 경매공고 · 최저 ${formatMoneyCompact(auction.minimumBid)}`;
      pendingAuction=auction;
    } else {
      stage='개인회생·파산 검토';
      note='처분 가능한 주요 자산이 부족하여 개인회생 또는 파산·면책 절차를 검토하는 단계입니다.';
    }
  }
  player.debtCrisis.stage=stage; player.debtCrisis.lastAction=note;
  return { stage, auction, action:null, note, pastDue:totalPastDue(player), delinquencyYears:years };
}

function dynamicLoanLimit(player, type) {
  const product = LOAN_PRODUCTS[type];
  if (!player || !product) return 0;
  const income = Math.max(0, player.annualIncome || 0);
  // V14 테스트용 소득연동식. 실제 DSR/예외·담보규칙은 후속 대출정책 엔진에서 교체.
  const incomeAdd = type === 'bank1' ? income * 0.6 : income * 0.3;
  const cap = type === 'bank1' ? 50_000_000 : 30_000_000;
  return Math.floor(Math.min(cap, product.limit + incomeAdd) * creditLimitFactor(player));
}

function remainingLoanLimit(player, type) {
  const product = LOAN_PRODUCTS[type];
  if (!player || !product) return 0;
  return Math.max(0, dynamicLoanLimit(player, type) - Math.max(0, player.debts?.[type] || 0));
}

function canBorrow(player, type, amount) {
  const value = Math.ceil(Math.max(0, Number(amount) || 0));
  if (!player || !LOAN_PRODUCTS[type] || value <= 0) return false;
  if (['담보권 실행·강제매각','개인회생·파산 검토'].includes(debtCrisisLabel(player))) return false;
  if (type === 'bank1' && ((player.arrears || 0) > 0 || (player.creditScore ?? 850) < 700)) return false;
  if (type === 'bank2' && (player.creditScore ?? 850) < 550) return false;
  return value <= remainingLoanLimit(player, type);
}

function takeLoan(player, type, amount) {
  const value = Math.ceil(Math.max(0, Number(amount) || 0));
  if (!canBorrow(player, type, value)) return false;
  player.debts[type] += value;
  player.cash += value;
  updateHud();
  return true;
}

function repayLoan(player, amount = BANK_STEP) {
  if (!player || player.cash <= 0 || totalDebt(player) <= 0) return 0;
  let budget = Math.min(Math.max(0, amount), player.cash);
  let paid = 0;
  if (player.arrears > 0 && budget > 0) {
    const v = Math.min(budget, player.arrears);
    player.arrears -= v; budget -= v; paid += v;
  }
  if (player.debts.bank2 > 0 && budget > 0) {
    const v = Math.min(budget, player.debts.bank2);
    player.debts.bank2 -= v; budget -= v; paid += v;
  }
  if (player.debts.bank1 > 0 && budget > 0) {
    const v = Math.min(budget, player.debts.bank1);
    player.debts.bank1 -= v; budget -= v; paid += v;
  }
  player.cash -= paid;
  updateHud();
  return paid;
}

function getJob(player) {
  return JOBS.find((job) => job.id === player?.jobId) ?? null;
}

function getEmploymentProfile(player) {
  const job = getJob(player);
  if (!job) return { type: 'none', job: null, label: '무직' };
  if (job.id === 'public2' || job.id === 'public3') return { type: 'public', job, label: '직역연금 직장인' };
  if (job.group === '자영업·사업') return { type: 'self', job, label: '자영업·사업자' };
  return { type: 'employee', job, label: '일반 직장인' };
}

function unemploymentBenefitDays(age, insuredMonths) {
  const months = Math.max(0, insuredMonths || 0);
  const older = (age || 0) >= 50;
  if (months < 12) return 120;
  if (months < 36) return older ? 180 : 150;
  if (months < 60) return older ? 210 : 180;
  if (months < 120) return older ? 240 : 210;
  return older ? 270 : 240;
}

function calculateUnemploymentBenefit(player, reason = 'involuntary') {
  const profile = getEmploymentProfile(player);
  const insuredMonths = Math.max(0, player?.insuredEmploymentMonths || 0);
  const eligible = reason === 'involuntary' && profile.type === 'employee' && insuredMonths >= UNEMPLOYMENT_POLICY_2026.qualifyingInsuredMonths;
  if (!eligible) return { eligible:false, daily:0, days:0, total:0, insuredMonths };
  // 실제 구직급여는 이직 전 평균임금을 기초로 한다. 게임에는 일별 임금이력이 없어 현재 연소득/365를 근사값으로 쓴다.
  const estimatedDailyWage = Math.max(0, (player.annualIncome || 0) / 365);
  const daily = Math.round(clamp(estimatedDailyWage * UNEMPLOYMENT_POLICY_2026.benefitRate, UNEMPLOYMENT_POLICY_2026.dailyFloor8h, UNEMPLOYMENT_POLICY_2026.dailyCap));
  const days = unemploymentBenefitDays(player.age, insuredMonths);
  return { eligible:true, daily, days, total:daily * days, insuredMonths };
}

function layoffRiskMultiplier(job) {
  if (!job) return 0;
  if (job.group === '공공·안정') return 0.25;
  if (job.group === '전문직') return 0.55;
  if (job.group === '서비스') return 1.15;
  if (job.group === '사무·기업') return 1.05;
  if (job.group === 'IT·창작') return 0.9;
  return 0.8;
}

function shouldInvoluntaryLayoff(player) {
  const profile = getEmploymentProfile(player);
  if (!player || profile.type !== 'employee' || !profile.job) return false;
  const base = UNEMPLOYMENT_POLICY_2026.layoffChance[state.economyPhase] ?? UNEMPLOYMENT_POLICY_2026.layoffChance.normal;
  const chance = clamp(base * layoffRiskMultiplier(profile.job), 0, 0.28);
  return Math.random() < chance;
}

function separateFromJob(player, reason = 'voluntary') {
  const job = getJob(player);
  if (!player || !job) return { ok:false, severance:0, benefit:{eligible:false,total:0}, job:null };
  const severance = calculateGameSeverance(player);
  if (severance > 0) {
    player.cash += severance;
    player.lastSeverance = severance;
  }
  const benefit = calculateUnemploymentBenefit(player, reason);
  // 게임은 1턴=1년이라 법정 지급기간의 구직급여를 실직 이벤트 시 한 번에 정산한다.
  if (benefit.total > 0) player.cash += benefit.total;
  player.lastUnemploymentBenefit = benefit.total || 0;
  player.lastSeparation = { reason, age:player.age, jobId:job.id, jobName:job.name, severance, benefit };
  player.jobId = null;
  player.annualIncome = 0;
  player.careerLevel = 0;
  player.jobTenureYears = 0;
  player.employmentState = 'unemployed';
  updateHud();
  return { ok:true, severance, benefit, job };
}

function calculateEarnedIncomeDeduction(gross) {
  const g = Math.max(0, gross);
  let deduction = 0;
  if (g <= 5_000_000) deduction = g * 0.70;
  else if (g <= 15_000_000) deduction = 3_500_000 + (g - 5_000_000) * 0.40;
  else if (g <= 45_000_000) deduction = 7_500_000 + (g - 15_000_000) * 0.15;
  else if (g <= 100_000_000) deduction = 12_000_000 + (g - 45_000_000) * 0.05;
  else deduction = 14_750_000 + (g - 100_000_000) * 0.02;
  return Math.min(20_000_000, Math.round(deduction));
}

function calculateAcquisitionTaxes(price) {
  const value = Math.max(0, Math.round(price || 0));
  const acquisitionTax = Math.round(value * POLICY_KR_2026.property.acquisitionRate);
  const localEducationTax = Math.round(value * POLICY_KR_2026.property.acquisitionEducationRate);
  const ruralSpecialTax = Math.round(value * POLICY_KR_2026.property.ruralSpecialRate);
  return { acquisitionTax, localEducationTax, ruralSpecialTax, total: acquisitionTax + localEducationTax + ruralSpecialTax };
}

function calculateFireResourceTax(standardValue) {
  const v = Math.max(0, Math.round(standardValue || 0));
  if (v <= 6_000_000) return Math.round(v * 0.0004);
  if (v <= 13_000_000) return Math.round(2_400 + (v - 6_000_000) * 0.0005);
  if (v <= 26_000_000) return Math.round(5_900 + (v - 13_000_000) * 0.0006);
  if (v <= 39_000_000) return Math.round(13_700 + (v - 26_000_000) * 0.0008);
  if (v <= 64_000_000) return Math.round(24_100 + (v - 39_000_000) * 0.0010);
  return Math.round(49_100 + (v - 64_000_000) * 0.0012);
}

function calculateAnnualPropertyTaxesForCell(cellIndex) {
  const space = boardSpaces[cellIndex];
  const standardValue = Math.max(0, getRegionMarketPrice(space?.name));
  if (!standardValue) return { standardValue:0, taxBase:0, propertyTax:0, urbanAreaTax:0, educationTax:0, fireResourceTax:0, total:0 };
  // 게임 내 지역가격을 일반 건축물의 '시가표준액'으로 사용. 가격 자체는 게임 밸런스값이며 세율/공정시장가액비율은 공식값.
  const taxBase = Math.round(standardValue * POLICY_KR_2026.property.fairMarketValueRatio);
  const propertyTax = Math.round(taxBase * POLICY_KR_2026.property.buildingPropertyTaxRate);
  const urbanAreaTax = Math.round(taxBase * POLICY_KR_2026.property.urbanAreaRate);
  const educationTax = Math.round(propertyTax * POLICY_KR_2026.property.propertyEducationRatio);
  const fireResourceTax = calculateFireResourceTax(standardValue);
  return { standardValue, taxBase, propertyTax, urbanAreaTax, educationTax, fireResourceTax, total: propertyTax + urbanAreaTax + educationTax + fireResourceTax };
}

function calculatePlayerAnnualPropertyTaxes(player) {
  const rows = (player?.properties || []).map(calculateAnnualPropertyTaxesForCell);
  return rows.reduce((acc,row) => {
    for (const key of ['standardValue','taxBase','propertyTax','urbanAreaTax','educationTax','fireResourceTax','total']) acc[key] += row[key] || 0;
    return acc;
  }, { standardValue:0, taxBase:0, propertyTax:0, urbanAreaTax:0, educationTax:0, fireResourceTax:0, total:0 });
}

function getRegionalHealthPropertyPoints(afterDeductionValue) {
  const value = Math.max(0, Math.round(afterDeductionValue || 0));
  if (value <= 0) return 0;
  for (const [max, points] of REGIONAL_HEALTH_PROPERTY_POINTS) if (value <= max) return points;
  return 2341;
}

function calculateRegionalHealthPropertyPremium(player) {
  const prop = calculatePlayerAnnualPropertyTaxes(player);
  const chargeable = Math.max(0, prop.taxBase - POLICY_KR_2026.property.regionalHealthPropertyDeduction);
  const points = getRegionalHealthPropertyPoints(chargeable);  const annualPremium = Math.round(points * POLICY_KR_2026.property.regionalHealthPointValueMonthly * 12);
  return { propertyTaxBase: prop.taxBase, chargeable, points, annualPremium };
}

function calculateProgressiveIncomeTax(taxBase) {
  const base = Math.max(0, Math.round(taxBase));
  if (base <= 14_000_000) return Math.round(base * 0.06);
  if (base <= 50_000_000) return Math.round(840_000 + (base - 14_000_000) * 0.15);
  if (base <= 88_000_000) return Math.round(6_240_000 + (base - 50_000_000) * 0.24);
  if (base <= 150_000_000) return Math.round(15_360_000 + (base - 88_000_000) * 0.35);
  if (base <= 300_000_000) return Math.round(37_060_000 + (base - 150_000_000) * 0.38);
  if (base <= 500_000_000) return Math.round(94_060_000 + (base - 300_000_000) * 0.40);
  if (base <= 1_000_000_000) return Math.round(174_060_000 + (base - 500_000_000) * 0.42);
  return Math.round(384_060_000 + (base - 1_000_000_000) * 0.45);
}

function calculateEarnedIncomeTaxCredit(calculatedTax, gross) {
  if (calculatedTax <= 0) return 0;
  const raw = calculatedTax <= 1_300_000
    ? calculatedTax * 0.55
    : 715_000 + (calculatedTax - 1_300_000) * 0.30;
  let cap = 740_000;
  if (gross > 33_000_000 && gross <= 70_000_000) cap = Math.max(660_000, 740_000 - (gross - 33_000_000) * 0.008);
  else if (gross > 70_000_000 && gross <= 120_000_000) cap = Math.max(500_000, 660_000 - (gross - 70_000_000) * 0.5);
  else if (gross > 120_000_000) cap = Math.max(200_000, 500_000 - (gross - 120_000_000) * 0.5);
  return Math.max(0, Math.round(Math.min(raw, cap)));
}

function calculateRentedPropertyNecessaryExpense(playerIndex, maintenanceInfo = null) {
  if (playerIndex < 0) return 0;
  let total = 0;
  for (let i = 0; i < propertyOwners.length; i++) {
    if (propertyOwners[i] !== playerIndex) continue;
    const lease = propertyLeases[i];
    if (!lease || lease.ownerIndex !== playerIndex) continue;
    total += calculateAnnualPropertyTaxesForCell(i).total || 0;
    total += calculatePropertyMaintenanceForCell(i);
  }
  return Math.max(0, Math.round(total));
}

function calculateAnnualStatutorySettlement(player, completedAge, incomeParts = {}) {
  const profile = getEmploymentProfile(player);
  const jobIncome = Math.max(0, Math.round(incomeParts.jobIncomeOverride ?? player?.annualIncome ?? 0));
  const sideBusinessIncome = Math.max(0, Math.round(incomeParts.businessTaxableIncome || 0));
  const rentalGrossIncome = Math.max(0, Math.round(incomeParts.rentalGrossIncome || 0));
  const rentalNecessaryExpense = Math.min(rentalGrossIncome, Math.max(0, Math.round(incomeParts.rentalNecessaryExpense || 0)));
  const rentalTaxableIncome = Math.max(0, rentalGrossIncome - rentalNecessaryExpense);

  const wageGross = (profile.type === 'employee' || profile.type === 'public') ? jobIncome : 0;
  const selfJobIncome = profile.type === 'self' ? jobIncome : 0;
  const otherIncome = sideBusinessIncome + rentalTaxableIncome;
  const regionalIncome = selfJobIncome + otherIncome;
  const nonWageIncome = otherIncome;

  let pension = 0;
  let healthBase = 0;
  let extraHealth = 0;
  let longTermCare = 0;
  let employment = 0;
  let healthPropertyPremium = 0;

  if (profile.type === 'employee' || profile.type === 'public') {
    const monthlyWage = wageGross / 12;
    if (profile.type === 'public') {
      // 공무원·교사 계열은 재직 중 직역연금 기여금 구조를 적용한다.
      pension = Math.round(wageGross * POLICY_KR_2026.publicPension.employeeRate);
    } else if (completedAge < POLICY_KR_2026.pension.mandatoryMaxAgeExclusive) {
      const pensionBase = clamp(monthlyWage, POLICY_KR_2026.pension.monthlyMin, POLICY_KR_2026.pension.monthlyMax);
      pension = Math.round(pensionBase * POLICY_KR_2026.pension.employeeRate * 12);
    }
    if (wageGross > 0) {
      const totalHealthMonthly = clamp(monthlyWage * POLICY_KR_2026.health.totalRate, POLICY_KR_2026.health.totalMonthlyMin, POLICY_KR_2026.health.totalMonthlyMax);
      healthBase = Math.round(totalHealthMonthly * 0.5 * 12);
    }
    // 직장가입자의 보수 외 소득이 연 2,000만원을 초과하면 초과분에 소득월액보험료를 본인이 전액 부담한다.
    const extraHealthBase = Math.max(0, nonWageIncome - POLICY_KR_2026.employeeNonWageHealthThreshold);
    extraHealth = Math.round(extraHealthBase * POLICY_KR_2026.health.totalRate);
    const healthTotal = healthBase + extraHealth;
    longTermCare = Math.round(healthTotal * (POLICY_KR_2026.longTermCare.rate / POLICY_KR_2026.health.totalRate));
    employment = profile.type === 'employee' ? Math.round(wageGross * POLICY_KR_2026.employment.employeeRate) : 0;
  } else {
    // 무직이더라도 사업·임대소득이 있으면 지역가입자 방식으로 소득·재산 보험료를 계산한다.
    const regionalBaseIncome = Math.max(0, regionalIncome);
    if (completedAge < POLICY_KR_2026.pension.mandatoryMaxAgeExclusive && regionalBaseIncome > 0) {
      const pensionMonthlyIncome = regionalBaseIncome / 12;
      const pensionBase = clamp(pensionMonthlyIncome, POLICY_KR_2026.pension.monthlyMin, POLICY_KR_2026.pension.monthlyMax);
      pension = Math.round(pensionBase * POLICY_KR_2026.pension.selfRate * 12);
    }
    const propertyHealthInfo = calculateRegionalHealthPropertyPremium(player);
    healthPropertyPremium = propertyHealthInfo.annualPremium;
    healthBase = Math.round(regionalBaseIncome * POLICY_KR_2026.health.totalRate) + healthPropertyPremium;
    longTermCare = Math.round(healthBase * (POLICY_KR_2026.longTermCare.rate / POLICY_KR_2026.health.totalRate));
  }

  const health = healthBase + extraHealth;
  const deductibleSocial = pension + health + longTermCare + employment;

  let earnedIncomeAmount = 0;
  if (wageGross > 0) {
    const earnedDeduction = calculateEarnedIncomeDeduction(wageGross);
    earnedIncomeAmount = Math.max(0, wageGross - earnedDeduction);
  }

  const businessIncomeAmount = selfJobIncome + sideBusinessIncome;
  const comprehensiveIncomeAmount = earnedIncomeAmount + businessIncomeAmount + rentalTaxableIncome;
  const taxBase = Math.max(0, comprehensiveIncomeAmount - POLICY_KR_2026.basicPersonalDeduction - deductibleSocial);
  const calculatedTax = calculateProgressiveIncomeTax(taxBase);

  // 근로소득이 함께 있는 경우 근로소득분에 해당하는 세액공제를 보수적으로 적용한다.
  let earnedIncomeTaxCredit = 0;
  if (wageGross > 0) {
    const wageOnlyTaxBase = Math.max(0, earnedIncomeAmount - POLICY_KR_2026.basicPersonalDeduction - deductibleSocial);
    const wageOnlyCalculatedTax = calculateProgressiveIncomeTax(wageOnlyTaxBase);
    earnedIncomeTaxCredit = Math.min(calculatedTax, calculateEarnedIncomeTaxCredit(wageOnlyCalculatedTax, wageGross));
  }

  const incomeTax = Math.max(0, Math.round(calculatedTax - earnedIncomeTaxCredit));
  const localIncomeTax = Math.round(incomeTax * POLICY_KR_2026.localIncomeTaxRatio);
  const statutoryTotal = incomeTax + localIncomeTax + pension + health + longTermCare + employment;

  return {
    grossIncome: jobIncome,
    wageGross,
    selfJobIncome,
    businessTaxableIncome: sideBusinessIncome,
    rentalGrossIncome,
    rentalNecessaryExpense,
    rentalTaxableIncome,
    comprehensiveIncomeAmount,
    profileType: profile.type,
    profileLabel: profile.label,
    incomeTax,
    localIncomeTax,
    earnedIncomeTaxCredit,
    pension,
    health,
    healthBase,
    extraHealth,
    healthPropertyPremium,
    longTermCare,
    employment,
    statutoryTotal,
    taxBase: Math.round(taxBase),
    policyVersion: POLICY_KR_2026.id,
  };
}


function getVehicleById(id){ return VEHICLES.find(v=>v.id===id) ?? null; }
function calculateVehicleAnnualTax(vehicle){
  if(!vehicle || vehicle.kind === 'bicycle') return {base:0, education:0, total:0, ageYears:0, reduction:0};
  if(vehicle.kind === 'motorcycle') {
    const base = Math.round(vehicle.annualTaxFixed || 18_000);
    return {base,education:0,total:base,ageYears:Math.max(1,(vehicle.yearsOwned||0)+1),reduction:0};
  }
  const cc=vehicle.cc||0;
  const rate=cc<=1000?80:cc<=1600?140:200;
  const full=cc*rate;
  const ageYears=Math.max(1, (vehicle.yearsOwned||0)+1);
  const reduction=ageYears>=3?Math.min(0.50,0.05*(ageYears-2)):0;
  const base=Math.round(full*(1-reduction));
  const education=Math.round(base*0.30);
  return {base,education,total:base+education,ageYears,reduction};
}
function settleVehicleAnnualCosts(player){
  if(!player?.vehicle) return {tax:{base:0,education:0,total:0},maintenance:0,mandatoryInsurance:0,due:0,paid:0,arrears:0};
  const tax=calculateVehicleAnnualTax(player.vehicle);
  const maintenance=player.vehicle.annualFuelMaintenance||0;
  const mandatoryInsurance=player.vehicle.mandatoryInsurancePremium||0;
  const due=tax.total+maintenance+mandatoryInsurance;
  const paid=Math.min(player.cash,due); player.cash-=paid;
  const arrears=Math.max(0,due-paid); if(arrears>0) player.arrears+=arrears;
  player.vehicle.yearsOwned=(player.vehicle.yearsOwned||0)+1;
  return {tax,maintenance,mandatoryInsurance,due,paid,arrears};
}
let vehicleResolver=null;
function currentTransportRank(player){ return player?.vehicle?.rank ?? 0; }
function transportTradeInValue(player){ return player?.vehicle ? Math.round((player.vehicle.price || 0) * 0.45) : 0; }
function renderVehicleOffers(player){
  vehicleOfferListEl?.replaceChildren();
  const currentRank=currentTransportRank(player);
  const tradeIn=transportTradeInValue(player);
  VEHICLES.forEach(v=>{
    const tax=Math.round(v.price*v.acquisitionRate); const total=v.price+tax-Math.min(tradeIn,v.price+tax);
    const b=document.createElement('button'); b.type='button'; b.className='vehicle-offer'; b.dataset.vehicleId=v.id;
    const isUpgrade=v.rank>currentRank; b.disabled=!isUpgrade || (player?.cash||0)<total;
    const taxLabel=v.kind==='bicycle'?'취득세 없음':`취득세 ${Math.round(v.acquisitionRate*100)}%`;
    const kindLabel=v.kind==='car'?'자동차':v.kind==='motorcycle'?'이륜자동차':'자전거';
    b.innerHTML=`<span>${kindLabel} · ${taxLabel}</span><strong>${v.name}</strong><em>구입 ${formatMoneyCompact(v.price)}${tradeIn?` · 기존 이동수단 처분가 -${formatMoneyCompact(tradeIn)}`:''} · 연 유지 ${formatMoneyCompact(v.annualFuelMaintenance)}</em>`;
    vehicleOfferListEl?.appendChild(b);
  });
}
function showVehiclePanel(player){
  if(!vehiclePanelEl) return Promise.resolve(null);
  renderVehicleOffers(player);
  const current=getTransportLabel(player);
  vehiclePanelTitleEl.textContent=player.vehicle?`${current}에서 이동수단 업그레이드`:'첫 이동수단 구입 기회';
  vehiclePanelHintEl.textContent='자전거·오토바이·자동차는 이동 칸 수를 늘리지 않고 이동 연출과 유지비·보험·사고 조건만 바꿉니다. 오토바이 취득세·자동차세와 자동차 세금은 2026 공식 기준입니다.';
  vehiclePanelEl.hidden=false; requestAnimationFrame(()=>vehiclePanelEl.classList.add('visible'));
  return new Promise(r=>vehicleResolver=r);
}
function resolveVehicleDecision(id=null){ if(!vehicleResolver)return; const r=vehicleResolver; vehicleResolver=null; hideVehiclePanel(); r(id); }
function hideVehiclePanel(immediate=false){ if(!vehiclePanelEl)return; vehiclePanelEl.classList.remove('visible'); if(immediate){vehiclePanelEl.hidden=true;return;} setTimeout(()=>{if(!vehiclePanelEl.classList.contains('visible')) vehiclePanelEl.hidden=true;},220); }
function buyVehicle(player,id){
  const v=getVehicleById(id); if(!player||!v)return false;
  const oldRank=currentTransportRank(player); if(v.rank<=oldRank)return false;
  const acquisitionTax=Math.round(v.price*v.acquisitionRate);
  const tradeIn=Math.min(transportTradeInValue(player),v.price+acquisitionTax);
  const total=v.price+acquisitionTax-tradeIn; if(player.cash<total)return false;
  player.cash-=total; player.vehicle={...v,yearsOwned:0,acquisitionTax,tradeIn};
  refreshTokenTransportVisuals(); updateHud(); positionAllTokens(false); return true;
}
async function handleVehicleOpportunity(){
  const player=state.current; if(!player)return;
  const higher=VEHICLES.filter(v=>v.rank>currentTransportRank(player));
  if(!higher.length){statusPill.textContent=`${player.name} · ${getTransportLabel(player)} 보유 · 이동수단 업그레이드 완료 단계`; await sleep(450); return;}
  if(player.isAI){
    const tradeIn=transportTradeInValue(player);
    const choices=higher.filter(v=>player.cash>=v.price+Math.round(v.price*v.acquisitionRate)-Math.min(tradeIn,v.price)+AI_CASH_RESERVE);
    if(choices.length){const pick=choices[0]; buyVehicle(player,pick.id); statusPill.textContent=`${player.name} · ${pick.name} 구입`;} else statusPill.textContent=`${player.name} · 이동수단 구입 보류`;
    await sleep(500); return;
  }
  const id=await showVehiclePanel(player); if(id&&buyVehicle(player,id)){statusPill.textContent=`이동수단 · ${player.vehicle.name} 구입 완료`;} else statusPill.textContent='이동수단 구입을 보류했습니다';
}


function ensureLotteryStats(player) {
  if (!player) return null;
  player.lottery ||= { spent:0, grossWon:0, taxPaid:0, netWon:0, bestPrize:0, bestRank:null, plays:0, lastResult:null };
  return player.lottery;
}

function calculateLotteryWithholding(prize) {
  const gross = Math.max(0, Math.round(prize || 0));
  if (gross <= LOTTERY_MODEL.taxFreeMaxPrize) return { incomeTax:0, localTax:0, total:0, net:gross, rate:0 };
  const incomeRate = gross <= LOTTERY_MODEL.midTaxMaxPrize ? 0.20 : 0.30;
  const incomeTax = Math.round(gross * incomeRate);
  const localTax = Math.round(incomeTax * 0.10);
  return { incomeTax, localTax, total:incomeTax + localTax, net:gross - incomeTax - localTax, rate:incomeRate * 1.10 };
}

function drawOneLotteryGame() {
  const r = Math.random();
  let cumulative = 0;
  for (const tier of LOTTERY_MODEL.prizes) {
    cumulative += 1 / tier.odds;
    if (r < cumulative) return tier;
  }
  return null;
}

function playLotteryBundle(player) {
  if (!player) return { ok:false, note:'플레이어 없음' };
  const cost = LOTTERY_MODEL.gamesPerBundle * LOTTERY_MODEL.pricePerGame;
  if ((player.cash || 0) < cost) return { ok:false, note:`복권 구입비 ${formatMoneyCompact(cost)}이 부족합니다.` };
  player.cash -= cost;
  const stats = ensureLotteryStats(player);
  stats.spent += cost;
  stats.plays += LOTTERY_MODEL.gamesPerBundle;

  const wins = [];
  let gross = 0, tax = 0, net = 0;
  for (let i = 0; i < LOTTERY_MODEL.gamesPerBundle; i += 1) {
    const tier = drawOneLotteryGame();
    if (!tier) continue;
    const withholding = calculateLotteryWithholding(tier.prize);
    wins.push({ ...tier, tax:withholding.total, net:withholding.net });
    gross += tier.prize;
    tax += withholding.total;
    net += withholding.net;
    if (tier.prize > (stats.bestPrize || 0)) {
      stats.bestPrize = tier.prize;
      stats.bestRank = tier.label;
    }
  }
  player.cash += net;
  stats.grossWon += gross;
  stats.taxPaid += tax;
  stats.netWon += net;
  const result = { ok:true, cost, gross, tax, net, wins, netCashChange:net - cost };
  stats.lastResult = { age:player.age, cost, gross, tax, net, wins:wins.map((w)=>({rank:w.rank,label:w.label,prize:w.prize,tax:w.tax,net:w.net})) };
  updateHud();
  updateBankPanel();
  return result;
}

function lotteryResultText(result) {
  if (!result?.ok) return result?.note || '복권 결과 없음';
  if (!result.wins.length) return `로또 ${LOTTERY_MODEL.gamesPerBundle}게임 · 낙첨 · 구입비 -${formatMoneyCompact(result.cost)}`;
  const counts = new Map();
  result.wins.forEach((win) => counts.set(win.label, (counts.get(win.label) || 0) + 1));
  const rankText = [...counts.entries()].map(([label,count]) => `${label}${count>1?`×${count}`:''}`).join(' · ');
  return `로또 ${LOTTERY_MODEL.gamesPerBundle}게임 · ${rankText} · 당첨 ${formatMoneyCompact(result.gross)}${result.tax>0?` · 세금 -${formatMoneyCompact(result.tax)}`:''} · 실수령 ${formatMoneyCompact(result.net)}`;
}

async function handleSpecialOpportunity() {
  const player = state.current;
  if (!player) return;
  const bundleCost = LOTTERY_MODEL.gamesPerBundle * LOTTERY_MODEL.pricePerGame;
  const higher = VEHICLES.filter((v) => v.rank > currentTransportRank(player));

  if (player.isAI) {
    const tradeIn = transportTradeInValue(player);
    const affordable = higher.filter((v) => player.cash >= v.price + Math.round(v.price * v.acquisitionRate) - Math.min(tradeIn, v.price) + AI_CASH_RESERVE);
    if (affordable.length) {
      const pick = affordable[0];
      buyVehicle(player, pick.id);
      statusPill.textContent = `${player.name} · 특별 기회 · ${pick.name} 구입`;
    } else if ((player.cash || 0) >= bundleCost + AI_CASH_RESERVE && Math.random() < 0.30) {
      const result = playLotteryBundle(player);
      statusPill.textContent = `${player.name} · ${lotteryResultText(result)}`;
    } else {
      statusPill.textContent = `${player.name} · 특별 기회를 넘겼습니다.`;
    }
    await sleep(520);
    return;
  }

  const items = [
    { action:'specialVehicle', kicker:'이동수단', title:higher.length ? '이동수단 구입·업그레이드' : '이동수단 업그레이드 완료', desc:higher.length ? '자전거·오토바이·자동차 중 현재보다 높은 단계만 선택할 수 있습니다.' : '현재 더 높은 단계의 이동수단이 없습니다.', disabled:!higher.length },
    { action:'specialLottery', kicker:'복권', title:`로또6/45 ${LOTTERY_MODEL.gamesPerBundle}게임 · ${formatMoneyCompact(bundleCost)}`, desc:'실제 등위별 당첨확률을 사용합니다. 1~3등 당첨금은 게임 대표값이며 4·5등은 고정당첨금을 반영합니다.', disabled:(player.cash || 0) < bundleCost },
    { action:'specialSkip', kicker:'보류', title:'이번 기회 넘기기', desc:'현금을 사용하지 않고 턴을 마칩니다.' },
  ];
  const decision = await showFamilyPanel('특별 기회', `현재 현금 ${formatMoneyCompact(player.cash)} · 복권은 1게임 ${formatMoneyCompact(LOTTERY_MODEL.pricePerGame)} 기준`, items);
  if (decision.action === 'specialVehicle') {
    await handleVehicleOpportunity();
    return;
  }
  if (decision.action === 'specialLottery') {
    const result = playLotteryBundle(player);
    statusPill.textContent = lotteryResultText(result);
    await sleep(result.wins?.some((w)=>w.rank<=2) ? 1100 : 620);
    return;
  }
  statusPill.textContent = '특별 기회를 넘겼습니다.';
}


function getSpouseProfile(profileId) {
  return SPOUSE_PROFILES.find((item) => item.id === profileId) ?? null;
}

function ensureFamilyModel(player) {
  if (!player) return null;
  player.family = player.family || { married:false, spouse:null, children:[], childcareMode:'none' };
  const family = player.family;
  family.children = Array.isArray(family.children) ? family.children : [];
  family.marriageSerial = Math.max(0, family.marriageSerial || (family.married || family.divorced ? 1 : 0));
  family.remarriageCount = Math.max(0, family.remarriageCount || 0);
  family.exSpouses = Array.isArray(family.exSpouses) ? family.exSpouses : [];
  if (!family.exSpouses.length && family.exSpouse) {
    family.exSpouses.push({ ...family.exSpouse, marriageSerial:family.exSpouse.marriageSerial || 1 });
  }
  family.divorceObligations = Array.isArray(family.divorceObligations) ? family.divorceObligations : [];
  if (!family.divorceObligations.length && (family.divorceSettlementDebt || 0) > 0) {
    family.divorceObligations.push({ marriageSerial:family.marriageSerial || 1, label:family.exSpouse?.label || '전 배우자', settlementDebt:Math.max(0, family.divorceSettlementDebt || 0) });
  }
  family.children.forEach((child) => { if (!child.marriageSerial) child.marriageSerial = 1; });
  family.divorceSettlementDebt = family.divorceObligations.reduce((sum, item) => sum + Math.max(0, item?.settlementDebt || 0), 0);
  return family;
}

function getFamilyStatusLabel(player) {
  const family = ensureFamilyModel(player);
  const childCount = family?.children?.length ?? 0;
  if (family?.divorced && !family?.married) return childCount ? `이혼 · 자녀 ${childCount}` : '이혼';
  if (!family?.married || !family.spouse) return '미혼';
  const spouse = family.spouse;
  const spouseState = spouse.status === 'parentalLeave' ? '육아휴직' : spouse.status === 'homemaker' ? '전업' : '맞벌이';
  const marriageLabel = (family.remarriageCount || 0) > 0 ? '재혼' : '기혼';
  return childCount ? `${marriageLabel} · 자녀 ${childCount} · ${spouseState}` : `${marriageLabel} · ${spouseState}`;
}

function calculateParentalLeaveAnnualBenefit(annualIncome) {
  const monthlyOrdinary = Math.max(0, Math.round((annualIncome || 0) / 12));
  if (monthlyOrdinary <= 0) return 0;
  let total = 0;
  for (const band of PARENTAL_LEAVE_POLICY.bands) {
    const raw = monthlyOrdinary * band.rate;
    const monthly = clamp(raw, PARENTAL_LEAVE_POLICY.minMonthly, band.cap);
    total += Math.round(monthly * band.months);
  }
  return Math.round(total);
}

function childAnnualCostRow(age) {
  const value = Math.max(0, Math.floor(age || 0));
  return CHILD_ANNUAL_COSTS.find((row) => value <= row.maxAge) ?? CHILD_ANNUAL_COSTS[CHILD_ANNUAL_COSTS.length - 1];
}

function playerCanUseGeneralParentalLeave(player) {
  const profile = getEmploymentProfile(player);
  return profile.type === 'employee' && (player?.annualIncome || 0) > 0 && (player?.insuredEmploymentMonths || 0) >= 6;
}

function spouseCanUseGeneralParentalLeave(spouse) {
  return Boolean(spouse?.parentalLeaveEligible && spouse?.status === 'working' && (spouse?.annualIncome || 0) > 0);
}

function createSpouseFromProfile(profile, playerAge, marriageSerial = 1) {
  if (!profile) return null;
  return {
    profileId: profile.id,
    label: profile.label,
    age: Math.max(20, playerAge + (profile.id === 'corporate' ? 1 : 0)),
    jobId: profile.jobId,
    annualIncome: profile.annualIncome,
    originalAnnualIncome: profile.annualIncome,
    liquidAssets: profile.liquidAssets,
    debt: profile.debt,
    debtServiceRate: profile.debtServiceRate,
    tenureYears: profile.tenureYears,
    parentalLeaveEligible: profile.parentalLeaveEligible,
    status: profile.jobId ? 'working' : 'homemaker',
    parentalLeaveYearsRemaining: 0,
    marriageSerial,
  };
}

function applyMarriage(player, profileId, options = {}) {
  const profile = getSpouseProfile(profileId);
  if (!player || !profile) return false;
  const family = ensureFamilyModel(player);
  if (family?.married) return false;
  const isRemarriage = Boolean(options.remarriage || family.divorced || (family.divorceCount || 0) > 0);
  family.marriageSerial = Math.max(0, family.marriageSerial || 0) + 1;
  const spouse = createSpouseFromProfile(profile, player.age, family.marriageSerial);
  family.married = true;
  family.divorced = false;
  family.spouse = spouse;
  family.children = family.children || [];
  family.childcareMode = spouse.status === 'homemaker' ? 'spouseHome' : 'dual';
  family.marriageStartAge = player.age;
  family.lastDivorceOfferAge = null;
  if (isRemarriage) {
    family.remarriageCount = (family.remarriageCount || 0) + 1;
    family.lastRemarriageOfferAge = player.age;
  }
  // V30: 이전 전 배우자/재산분할 의무는 재혼으로 지우지 않는다.
  // 새 배우자의 유동자산만 새 가계현금에 편입하고 기존 부채는 배우자 개인부채로 유지한다.
  player.cash += spouse.liquidAssets || 0;
  family.marriageStartNetWorth = calculateNetWorth(player);
  updateHud();
  return true;
}

function addChild(player) {
  const family = ensureFamilyModel(player);
  if (!family?.married || (family.children?.length || 0) >= 2) return false;
  family.children = family.children || [];
  family.children.push({ age:0, bornAtPlayerAge:player.age, marriageSerial:family.marriageSerial || 1 });
  updateHud();
  return true;
}

function estimatedSpouseSeverance(spouse) {
  if (!spouse || spouse.status !== 'working' || !spouse.annualIncome || !spouse.tenureYears) return 0;
  // 실제 퇴직금은 평균임금×30일×계속근로연수. V19는 평균임금 상세자료가 없어 월급×근속연수로 근사한다.
  return Math.round((spouse.annualIncome / 12) * spouse.tenureYears);
}

function applyChildcareChoice(player, action) {
  const family = player?.family;
  const spouse = family?.spouse;
  if (!family || !spouse) return { ok:false, note:'배우자 없음' };
  if (action === 'spouseLeave') {
    if (!spouseCanUseGeneralParentalLeave(spouse)) return { ok:false, note:'배우자는 일반 육아휴직급여 적용 대상이 아닙니다.' };
    spouse.status = 'parentalLeave';
    spouse.parentalLeaveYearsRemaining = 1;
    family.childcareMode = 'spouseLeave';
    return { ok:true, note:'배우자 1년 육아휴직 선택' };
  }
  if (action === 'playerLeave') {
    if (!playerCanUseGeneralParentalLeave(player)) return { ok:false, note:'현재 플레이어 직업은 일반 육아휴직급여 대상이 아닙니다.' };
    player.parentalLeaveYearsRemaining = 1;
    family.childcareMode = 'playerLeave';
    return { ok:true, note:'플레이어 1년 육아휴직 선택' };
  }
  if (action === 'spouseHome') {
    const severance = estimatedSpouseSeverance(spouse);
    if (severance > 0) player.cash += severance;
    spouse.status = 'homemaker';
    spouse.parentalLeaveYearsRemaining = 0;
    spouse.jobId = null;
    spouse.annualIncome = 0;
    family.childcareMode = 'spouseHome';
    return { ok:true, note:`배우자 퇴사·전업 선택${severance ? ` · 퇴직금(근사) +${formatMoneyCompact(severance)}` : ''}` };
  }
  if (action === 'dual') {
    if (spouse.status !== 'homemaker') spouse.status = 'working';
    spouse.parentalLeaveYearsRemaining = 0;
    family.childcareMode = spouse.status === 'homemaker' ? 'spouseHome' : 'dual';
    return { ok:true, note:spouse.status === 'homemaker' ? '현재 배우자는 전업 상태입니다.' : '맞벌이 + 외부 돌봄 선택' };
  }
  return { ok:false, note:'선택 없음' };
}


function marriageYears(player) {
  const start = player?.family?.marriageStartAge;
  return start == null ? 0 : Math.max(0, Math.floor((player.age || 0) - start));
}

function divorceContributionRatio(player) {
  const years = marriageYears(player);
  return clamp(DIVORCE_MODEL.minimumDivisionRatio + Math.max(0, years - DIVORCE_MODEL.minimumMarriageYears) * 0.02, DIVORCE_MODEL.minimumDivisionRatio, DIVORCE_MODEL.maximumDivisionRatio);
}

function estimateDivorceDivision(player) {
  const family = player?.family;
  if (!player || !family?.married || !family.spouse) return { years:0, ratio:0, maritalGrowth:0, claim:0 };
  const current = calculateNetWorth(player);
  const start = Math.max(0, family.marriageStartNetWorth || 0);
  const maritalGrowth = Math.max(0, current - start);
  const ratio = divorceContributionRatio(player);
  return { years:marriageYears(player), ratio, maritalGrowth, claim:Math.max(0, Math.round(maritalGrowth * ratio)) };
}

function calculateExSpouseAnnualSupport(family) {
  if (!family) return 0;
  const exList = Array.isArray(family.exSpouses) && family.exSpouses.length ? family.exSpouses : (family.exSpouse ? [family.exSpouse] : []);
  if (!exList.length) return 0;
  let total = 0;
  exList.forEach((ex) => {
    const marriageSerial = ex.marriageSerial || 1;
    const minors = (family.children || []).filter((child) => (child.age || 0) < DIVORCE_MODEL.childSupportEndAge && (child.marriageSerial || 1) === marriageSerial);
    if (!minors.length) return;
    const annualChildCost = minors.reduce((sum, child) => sum + childAnnualCostRow(child.age).amount, 0);
    const incomeBased = Math.max(0, Math.round((ex.annualIncome || 0) * DIVORCE_MODEL.childSupportIncomeRate));
    const costBased = Math.max(0, Math.round(annualChildCost * DIVORCE_MODEL.childSupportCostShare));
    total += Math.min(incomeBased, costBased);
  });
  return Math.round(total);
}

function shouldOfferDivorce(player) {
  const family = player?.family;
  if (!family?.married || !family.spouse) return false;
  if (marriageYears(player) < DIVORCE_MODEL.minimumMarriageYears || (player.age || 0) > 60) return false;
  const last = family.lastDivorceOfferAge;
  return last == null || (player.age - last) >= DIVORCE_MODEL.offerIntervalYears;
}

function applyDivorce(player) {
  const family = ensureFamilyModel(player);
  const spouse = family?.spouse;
  if (!player || !family?.married || !spouse) return { ok:false, note:'이혼 적용 대상이 아닙니다.' };
  const division = estimateDivorceDivision(player);
  const paid = Math.min(Math.max(0, player.cash || 0), division.claim);
  player.cash -= paid;
  const settlementDebt = Math.max(0, division.claim - paid);
  const marriageSerial = spouse.marriageSerial || family.marriageSerial || 1;
  const exRecord = {
    label:spouse.label,
    annualIncome:Math.max(0, spouse.annualIncome || spouse.originalAnnualIncome || 0),
    divorcedAtAge:player.age,
    marriageSerial,
  };
  family.exSpouse = exRecord;
  family.exSpouses = Array.isArray(family.exSpouses) ? family.exSpouses : [];
  family.exSpouses.push(exRecord);
  family.divorceObligations = Array.isArray(family.divorceObligations) ? family.divorceObligations : [];
  if (settlementDebt > 0) family.divorceObligations.push({ marriageSerial, label:spouse.label, settlementDebt });
  family.married = false;
  family.divorced = true;
  family.divorceCount = (family.divorceCount || 0) + 1;
  family.divorceAge = player.age;
  family.lastDivorceOfferAge = player.age;
  family.lastRemarriageOfferAge = null;
  family.childcareMode = 'singleParent';
  family.divorceSettlementDebt = family.divorceObligations.reduce((sum, item) => sum + Math.max(0, item?.settlementDebt || 0), 0);
  family.spouse = null;
  player.parentalLeaveYearsRemaining = 0;
  const support = calculateExSpouseAnnualSupport(family);
  updateHud();
  return { ok:true, division, paid, settlementDebt, support, note:`협의이혼 · 재산분할 ${formatMoneyCompact(division.claim)}${settlementDebt ? ` · 미지급분 ${formatMoneyCompact(settlementDebt)}` : ''}${support ? ` · 연 양육비 지원 ${formatMoneyCompact(support)}` : ''}` };
}

function settleDivorceSettlementDebt(player) {
  const family = ensureFamilyModel(player);
  if (!family) return { due:0, paid:0, remaining:0 };
  family.divorceObligations = Array.isArray(family.divorceObligations) ? family.divorceObligations : [];
  let due = 0;
  let paid = 0;
  for (const obligation of family.divorceObligations) {
    const debt = Math.max(0, obligation?.settlementDebt || 0);
    if (!debt) continue;
    const itemDue = Math.max(1, Math.round(debt * DIVORCE_MODEL.annualSettlementDebtRate));
    const itemPaid = Math.min(Math.max(0, player.cash || 0), itemDue);
    player.cash -= itemPaid;
    obligation.settlementDebt = Math.max(0, debt - itemPaid);
    due += itemDue;
    paid += itemPaid;
  }
  family.divorceObligations = family.divorceObligations.filter((item) => Math.max(0, item?.settlementDebt || 0) > 0);
  family.divorceSettlementDebt = family.divorceObligations.reduce((sum, item) => sum + Math.max(0, item?.settlementDebt || 0), 0);
  return { due, paid, remaining:family.divorceSettlementDebt };
}


function getHousingOption(id) { return HOUSING_OPTIONS.find((item) => item.id === id) ?? null; }
function getHousingStatusLabel(player) {
  const h = player?.housing;
  if (!h) return '가족과 거주';
  if (h.kind === 'owned' && h.ownedHome) return `자가 · ${h.ownedHome.name}`;
  return h.name || getHousingOption(h.optionId)?.name || '가족과 거주';
}
function householdGrossIncome(player) {
  const spouse = player?.family?.spouse;
  const spouseIncome = spouse?.status === 'working' ? Math.max(0, spouse.annualIncome || 0) : 0;
  return Math.max(0, player?.annualIncome || 0) + spouseIncome;
}
function mortgageMonthlyPayment(principal, annualRate, termYears) {
  const p=Math.max(0, principal||0); if(!p) return 0;
  const r=Math.max(0, annualRate||0)/12, n=Math.max(1, Math.round((termYears||20)*12));
  if(!r) return p/n;
  return p * r / (1-Math.pow(1+r,-n));
}
function estimateExistingAnnualDebtService(player) {
  return Math.round((player?.debts?.bank1||0)*currentLoanRate('bank1') + (player?.debts?.bank2||0)*currentLoanRate('bank2'));
}
function maxMortgageByGameDsr(player, homePrice) {
  const income=householdGrossIncome(player);
  if(income<=0) return 0;
  const annualRoom=Math.max(0, income*HOME_MORTGAGE_MODEL.dsrRatio-estimateExistingAnnualDebtService(player));
  if(annualRoom<=0) return 0;
  const stressAnnualRate=currentMortgageRate()+HOME_MORTGAGE_MODEL.stressRateAdd;
  const unitAnnual=mortgageMonthlyPayment(1,stressAnnualRate,HOME_MORTGAGE_MODEL.termYears)*12;
  const dsrPrincipal=unitAnnual>0?annualRoom/unitAnnual:0;
  const ltvPrincipal=Math.max(0,(homePrice||0)*HOME_MORTGAGE_MODEL.gameLtvCap);
  return Math.max(0,Math.floor(Math.min(dsrPrincipal,ltvPrincipal)));
}
function calculateHomeAcquisitionTax(home, player) {
  const price=Math.max(0,home?.price||0);
  let rate=price<=600_000_000?POLICY_KR_2026.property.homeAcquisitionUnder600mRate:
    price<=900_000_000?((price*(2/300_000_000)-3)/100):0.03;
  rate=Math.max(0,rate);
  const gross=Math.round(price*rate);
  const firstHomeEligible=!player?.housing?.firstHomeAcquired && price<=POLICY_KR_2026.property.firstHomeMaxPrice;
  const relief=firstHomeEligible?Math.min(gross,POLICY_KR_2026.property.firstHomeGeneralReliefCap):0;
  return {gross,relief,total:Math.max(0,gross-relief),rate,firstHomeEligible};
}
function homeFairMarketRatio(standardValue) {
  if(standardValue<=300_000_000) return POLICY_KR_2026.property.oneHomeFairRatioUnder300m;
  if(standardValue<=600_000_000) return POLICY_KR_2026.property.oneHomeFairRatioUnder600m;
  return POLICY_KR_2026.property.oneHomeFairRatioOver600m;
}
function oneHomePropertyTaxByBase(base) {
  const b=Math.max(0,Math.round(base||0));
  if(b<=60_000_000) return Math.round(b*0.0005);
  if(b<=150_000_000) return Math.round(30_000+(b-60_000_000)*0.001);
  if(b<=300_000_000) return Math.round(120_000+(b-150_000_000)*0.002);
  return Math.round(420_000+(b-300_000_000)*0.0035);
}
function calculateOwnedHomeAnnualTax(player) {
  const home=player?.housing?.ownedHome;
  if(!home) return {standardValue:0,taxBase:0,propertyTax:0,urbanAreaTax:0,educationTax:0,fireResourceTax:0,total:0};
  const standardValue=Math.max(0,home.price||0);
  const fairRatio=homeFairMarketRatio(standardValue);
  const taxBase=Math.round(standardValue*fairRatio);
  const propertyTax=oneHomePropertyTaxByBase(taxBase);
  const urbanAreaTax=Math.round(taxBase*POLICY_KR_2026.property.homeUrbanAreaRate);
  const educationTax=Math.round(propertyTax*POLICY_KR_2026.property.homeEducationRatio);
  const fireResourceTax=calculateFireResourceTax(Math.round(standardValue*0.60));
  return {standardValue,fairRatio,taxBase,propertyTax,urbanAreaTax,educationTax,fireResourceTax,total:propertyTax+urbanAreaTax+educationTax+fireResourceTax};
}
function releaseCurrentHousingDeposit(player) {
  const deposit=Math.max(0,player?.housing?.deposit||0);
  if(deposit>0) player.cash+=deposit;
  if(player?.housing) player.housing.deposit=0;
  return deposit;
}
function canChooseHousing(player, option) {
  if(!player||!option) return {ok:false,reason:'선택 불가'};
  if(player.housing?.kind==='owned') return {ok:false,reason:'자가 보유 중'};
  const refundable=Math.max(0,player.housing?.deposit||0);
  const available=Math.max(0,player.cash+refundable);
  if(option.kind==='family') return {ok:true,reason:''};
  if(option.kind==='rent'||option.kind==='jeonse') return {ok:available>=option.deposit,reason:available>=option.deposit?'':'보증금 부족'};
  if(option.kind==='owned') {
    const tax=calculateHomeAcquisitionTax(option,player);
    const total=option.price+tax.total;
    const needed=Math.max(0,total-available);
    const maxMortgage=maxMortgageByGameDsr(player,option.price);
    return {ok:needed<=maxMortgage,reason:needed<=maxMortgage?'':`주담대 심사한도 부족 · 필요 ${formatMoneyCompact(needed)} / 한도 ${formatMoneyCompact(maxMortgage)}`,needed,maxMortgage,tax,total};
  }
  return {ok:false,reason:'선택 불가'};
}
function applyHousingChoice(player, optionId) {
  const option=getHousingOption(optionId); if(!player||!option) return {ok:false,note:'주거 선택 실패'};
  const check=canChooseHousing(player,option); if(!check.ok) return {ok:false,note:check.reason};
  releaseCurrentHousingDeposit(player);
  if(option.kind==='family') {
    player.housing={...player.housing,kind:'family',optionId:option.id,name:option.name,deposit:0,ownedHome:null,mortgage:null,lastOfferAge:player.age};
    return {ok:true,note:`주거 · ${option.name}`};
  }
  if(option.kind==='rent'||option.kind==='jeonse') {
    player.cash-=option.deposit;
    player.housing={...player.housing,kind:option.kind,optionId:option.id,name:option.name,deposit:option.deposit,ownedHome:null,mortgage:null,lastOfferAge:player.age};
    return {ok:true,note:`주거 · ${option.name} · 보증금 ${formatMoneyCompact(option.deposit)}`};
  }
  const tax=calculateHomeAcquisitionTax(option,player);
  const total=option.price+tax.total;
  const cashUse=Math.min(player.cash,total);
  const mortgageNeeded=Math.max(0,total-cashUse);
  player.cash-=cashUse;
  player.housing={
    ...player.housing,kind:'owned',optionId:option.id,name:option.name,deposit:0,firstHomeAcquired:true,lastOfferAge:player.age,
    ownedHome:{id:option.id,name:option.name,price:option.price,area:option.area,annualMaintenanceRate:option.annualMaintenanceRate,purchasedAge:player.age,acquisitionTax:tax},
    mortgage:mortgageNeeded>0?{principal:mortgageNeeded,originalPrincipal:mortgageNeeded,annualRate:currentMortgageRate(),termYears:HOME_MORTGAGE_MODEL.termYears,remainingMonths:HOME_MORTGAGE_MODEL.termYears*12}:null,
  };
  return {ok:true,note:`내 집 마련 · ${option.name}${tax.relief>0?` · 생애최초 취득세 감면 ${formatMoneyCompact(tax.relief)}`:''}${mortgageNeeded>0?` · 주담대 ${formatMoneyCompact(mortgageNeeded)}`:''}`};
}
function renderHousingChoices(player) {
  if(!housingOfferListEl) return;
  housingOfferListEl.replaceChildren();
  HOUSING_OPTIONS.forEach((option)=>{
    if(player?.housing?.kind==='owned' && option.kind!=='owned') return;
    const check=canChooseHousing(player,option);
    const btn=document.createElement('button'); btn.type='button'; btn.className='housing-offer'; btn.dataset.housingId=option.id; btn.disabled=!check.ok;
    let finance='';
    if(option.kind==='rent') finance=`보증금 ${formatMoneyCompact(option.deposit)} · 연 월세 ${formatMoneyCompact(option.annualRent)}`;
    else if(option.kind==='jeonse') finance=`보증금 ${formatMoneyCompact(option.deposit)} · 월세 없음`;
    else if(option.kind==='owned') { const t=calculateHomeAcquisitionTax(option,player); finance=`매입 ${formatMoneyCompact(option.price)} · 취득세 ${formatMoneyCompact(t.total)}${t.relief>0?'(감면 반영)':''}`; }
    else finance=`연 생활비 기여 ${formatMoneyCompact(option.annualManagement)}`;
    btn.innerHTML=`<span>${option.kind==='owned'?'자가':option.kind==='jeonse'?'전세':option.kind==='rent'?'월세':'동거'}</span><strong>${option.name}</strong><em>${finance} · ${check.ok?option.desc:check.reason}</em>`;
    housingOfferListEl.appendChild(btn);
  });
}
function showHousingPanel(player,title='주거 선택') {
  if(!housingPanelEl) return Promise.resolve(null);
  housingPanelTitleEl.textContent=title;
  housingPanelHintEl.textContent=`현재 ${getHousingStatusLabel(player)} · 주택 가격·월세는 게임값, 취득세·1주택 재산세는 ${POLICY_KR_2026.label} 공식 기준`;
  renderHousingChoices(player);
  housingPanelEl.hidden=false; requestAnimationFrame(()=>housingPanelEl.classList.add('visible'));
  return new Promise((resolve)=>{housingResolver=resolve;});
}
function resolveHousingDecision(optionId) { if(!housingResolver)return; const r=housingResolver; housingResolver=null; hideHousingPanel(); r(optionId||null); }
function hideHousingPanel(immediate=false){ if(!housingPanelEl)return; housingPanelEl.classList.remove('visible'); if(immediate){housingPanelEl.hidden=true;return;} setTimeout(()=>{if(!housingPanelEl.classList.contains('visible'))housingPanelEl.hidden=true;},220); }
function shouldOfferHousingOpportunity(player) {
  if(!player||player.age<22||player.housing?.kind==='owned') return false;
  const last=player.housing?.lastOfferAge;
  return last==null || player.age-last>=3 || (player.family?.married && player.housing?.kind==='family');
}
async function handleHousingOpportunity(player) {
  if(!player)return;
  if(player.isAI){
    const ownedChoice=(player.family?.married||player.age>=28)?getHousingOption(player.family?.children?.length?'familyHomeOwned':'starterHome'):null;
    if(ownedChoice&&canChooseHousing(player,ownedChoice).ok){ const result=applyHousingChoice(player,ownedChoice.id); statusPill.textContent=`${player.name} · ${result.note}`; await sleep(520); return; }
    const choice=(player.cash+(player.housing?.deposit||0)>=14_000_000&&player.age>=25)?'jeonse':'monthlyRent';
    const result=applyHousingChoice(player,choice); player.housing.lastOfferAge=player.age; statusPill.textContent=`${player.name} · ${result.note}`; await sleep(520); return;
  }
  const choice=await showHousingPanel(player,player.family?.married?'가족 주거 선택':'독립 · 주거 선택');
  if(!choice){ player.housing.lastOfferAge=player.age; statusPill.textContent='현재 주거를 유지합니다.'; return; }
  const result=applyHousingChoice(player,choice); player.housing.lastOfferAge=player.age; statusPill.textContent=result.note; updateHud();
}
function amortizeMortgageYear(mortgage) {
  if(!mortgage?.principal||mortgage.principal<=0) return {due:0,interest:0,principalPaid:0,scheduledPrincipal:0};
  let principal=mortgage.principal, interest=0, scheduledPrincipal=0, due=0;
  const monthlyPayment=mortgageMonthlyPayment(principal,mortgage.annualRate,Math.max(1,mortgage.remainingMonths/12));
  const months=Math.min(12,mortgage.remainingMonths||0);
  for(let i=0;i<months;i++){
    const monthInterest=principal*(mortgage.annualRate/12);
    const monthPrincipal=Math.min(principal,Math.max(0,monthlyPayment-monthInterest));
    interest+=monthInterest; scheduledPrincipal+=monthPrincipal; due+=monthInterest+monthPrincipal; principal-=monthPrincipal;
  }
  return {due:Math.round(due),interest:Math.round(interest),scheduledPrincipal:Math.round(scheduledPrincipal),months};
}
function settleHousingAnnual(player) {
  const h=player?.housing||{kind:'family',optionId:'familyHome'};
  const option=getHousingOption(h.optionId)||getHousingOption('familyHome');
  let rent=0,management=0,maintenance=0,homeTax={total:0},mortgageDue=0,mortgageInterest=0,mortgagePrincipalPaid=0,mortgageArrears=0;
  if(h.kind==='family') management=option?.annualManagement||0;
  if(h.kind==='rent'){rent=option?.annualRent||0;management=option?.annualManagement||0;}
  if(h.kind==='jeonse') management=option?.annualManagement||0;
  if(h.kind==='owned'&&h.ownedHome){
    maintenance=Math.round((h.ownedHome.price||0)*(h.ownedHome.annualMaintenanceRate||0));
    homeTax=calculateOwnedHomeAnnualTax(player);
    if(h.mortgage?.principal>0){
      const schedule=amortizeMortgageYear(h.mortgage); mortgageDue=schedule.due; mortgageInterest=schedule.interest;
      const paid=Math.min(player.cash,mortgageDue); player.cash-=paid;
      const interestPaid=Math.min(paid,mortgageInterest); const principalPaid=Math.max(0,paid-interestPaid);
      mortgagePrincipalPaid=Math.min(h.mortgage.principal,principalPaid); h.mortgage.principal-=mortgagePrincipalPaid; h.mortgage.remainingMonths=Math.max(0,(h.mortgage.remainingMonths||0)-schedule.months);
      mortgageArrears=Math.max(0,mortgageDue-paid); if(mortgageArrears>0)player.arrears+=mortgageArrears;
      if(h.mortgage.principal<=1||h.mortgage.remainingMonths<=0)h.mortgage=null;
    }
  }
  const nonMortgageDue=rent+management+maintenance+(homeTax.total||0);
  const nonMortgagePaid=Math.min(player.cash,nonMortgageDue); player.cash-=nonMortgagePaid;
  const arrears=Math.max(0,nonMortgageDue-nonMortgagePaid); if(arrears>0)player.arrears+=arrears;
  return {kind:h.kind,label:getHousingStatusLabel(player),rent,management,maintenance,homeTax,mortgageDue,mortgageInterest,mortgagePrincipalPaid,mortgageArrears,nonMortgageDue,nonMortgagePaid,arrears,totalDue:nonMortgageDue+mortgageDue,totalPaid:nonMortgagePaid+(mortgageDue-mortgageArrears)};
}

function renderFamilyChoices(items) {
  if (!familyOfferListEl) return;
  familyOfferListEl.replaceChildren();
  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'family-offer';
    button.dataset.familyAction = item.action;
    if (item.profileId) button.dataset.profileId = item.profileId;
    button.disabled = Boolean(item.disabled);
    button.innerHTML = `<span>${item.kicker || '선택'}</span><strong>${item.title}</strong><em>${item.desc || ''}</em>`;
    familyOfferListEl.appendChild(button);
  });
}

function showFamilyPanel(title, hint, items) {
  if (!familyPanelEl) return Promise.resolve({ action:'skip', profileId:null });
  familyPanelTitleEl.textContent = title;
  familyPanelHintEl.textContent = hint;
  renderFamilyChoices(items);
  familyPanelEl.hidden = false;
  requestAnimationFrame(() => familyPanelEl.classList.add('visible'));
  return new Promise((resolve) => { familyResolver = resolve; });
}

function resolveFamilyDecision(action, profileId) {
  if (!familyResolver) return;
  const resolve = familyResolver;
  familyResolver = null;
  hideFamilyPanel();
  resolve({ action, profileId });
}

function hideFamilyPanel(immediate = false) {
  if (!familyPanelEl) return;
  familyPanelEl.classList.remove('visible');
  if (immediate) { familyPanelEl.hidden = true; return; }
  setTimeout(() => { if (!familyPanelEl.classList.contains('visible')) familyPanelEl.hidden = true; }, 220);
}

async function chooseMarriageForHuman(player) {
  const profiles = SPOUSE_PROFILES.slice(0, 6);
  const items = profiles.map((profile) => ({
    action:'marry', profileId:profile.id, kicker:profile.desc,
    title:profile.label,
    desc:`연소득 ${formatMoneyCompact(profile.annualIncome)} · 유동자산 ${formatMoneyCompact(profile.liquidAssets)} · 부채 ${formatMoneyCompact(profile.debt)}`,
  }));
  const decision = await showFamilyPanel('결혼 인연', '배우자의 직업·소득·유동자산·부채가 이후 가계경제에 실제로 반영됩니다.', items);
  if (decision.action === 'marry' && applyMarriage(player, decision.profileId)) {
    statusPill.textContent = `결혼 · ${player.family.spouse.label} · 가계현금 +${formatMoneyCompact(player.family.spouse.liquidAssets)}`;
  } else statusPill.textContent = '결혼을 선택하지 않았습니다.';
}


function shouldOfferRemarriage(player) {
  const family = ensureFamilyModel(player);
  if (!family || family.married || !family.divorced || family.divorceAge == null) return false;
  if ((player.age || 0) > REMARRIAGE_MODEL.maximumAge) return false;
  if ((player.age - family.divorceAge) < REMARRIAGE_MODEL.minimumYearsAfterDivorce) return false;
  const last = family.lastRemarriageOfferAge;
  return last == null || (player.age - last) >= REMARRIAGE_MODEL.offerIntervalYears;
}

async function chooseRemarriageForHuman(player) {
  const family = ensureFamilyModel(player);
  const profiles = SPOUSE_PROFILES.slice(0, 6);
  const items = profiles.map((profile) => ({
    action:'remarry', profileId:profile.id, kicker:profile.desc,
    title:profile.label,
    desc:`연소득 ${formatMoneyCompact(profile.annualIncome)} · 유동자산 ${formatMoneyCompact(profile.liquidAssets)} · 부채 ${formatMoneyCompact(profile.debt)}`,
  }));
  family.lastRemarriageOfferAge = player.age;
  const obligationText = (family.divorceSettlementDebt || 0) > 0 ? ` · 기존 재산분할 미지급 ${formatMoneyCompact(family.divorceSettlementDebt)}` : '';
  const support = calculateExSpouseAnnualSupport(family);
  const supportText = support > 0 ? ` · 기존 연 양육비 수령 ${formatMoneyCompact(support)}` : '';
  const decision = await showFamilyPanel('재혼 인연', `기존 자녀와 이혼 관련 의무는 재혼 후에도 유지됩니다${obligationText}${supportText}.`, items);
  if (decision.action === 'remarry' && applyMarriage(player, decision.profileId, { remarriage:true })) {
    statusPill.textContent = `재혼 · ${player.family.spouse.label} · 기존 가족 의무 유지`;
  } else statusPill.textContent = '재혼을 보류했습니다.';
}

function childcareChoices(player) {
  const spouse = player?.family?.spouse;
  return [
    { action:'spouseLeave', kicker:'1년 휴직', title:'배우자 육아휴직', desc:'공식 육아휴직급여 적용 후 다음 해 복직', disabled:!spouseCanUseGeneralParentalLeave(spouse) },
    { action:'playerLeave', kicker:'1년 휴직', title:'플레이어 육아휴직', desc:'고용보험 피보험기간 180일 이상일 때 공식 육아휴직급여 수령', disabled:!playerCanUseGeneralParentalLeave(player) },
    { action:'dual', kicker:'맞벌이', title:'맞벌이 + 돌봄', desc:'부부 소득 유지 · 영유아 외부돌봄 비용 증가', disabled:spouse?.status === 'homemaker' },
    { action:'spouseHome', kicker:'퇴사·전업', title:'배우자 전업 선택', desc:'소득 중단 · 퇴직금(근사) 수령 · 영유아 돌봄비 절감', disabled:spouse?.status === 'homemaker' },
  ];
}

async function askChildcareChoice(player) {
  const decision = await showFamilyPanel('출산 후 육아 선택', '성별에 고정하지 않고 플레이어 또는 배우자가 휴직할 수 있습니다. 일반 육아휴직급여는 고용보험 적용 근로자만 사용합니다.', childcareChoices(player));
  if (decision.action === 'skip') { statusPill.textContent = '기존 가계·돌봄 상태를 유지합니다.'; return; }
  const result = applyChildcareChoice(player, decision.action);
  statusPill.textContent = result.ok ? result.note : result.note;
  updateHud();
}

function ensureFamilyTransferModel(player) {
  if (!player) return null;
  player.familyTransfer ||= { giftResolved:false, inheritanceResolved:false, giftHistory:[], specialDeductionUsed:0, totalGiftNet:0, totalInheritanceNet:0, lastTransfer:null };
  player.familyTransfer.giftHistory = Array.isArray(player.familyTransfer.giftHistory) ? player.familyTransfer.giftHistory : [];
  player.familyTransfer.specialDeductionUsed = Math.max(0, player.familyTransfer.specialDeductionUsed || 0);
  return player.familyTransfer;
}

function inheritanceGiftTaxFromBase(taxBase) {
  const base = Math.max(0, Math.round(taxBase || 0));
  if (base < 500_000) return 0;
  const row = POLICY_KR_2026.inheritanceGift.brackets.find((item) => base <= item.upTo) || POLICY_KR_2026.inheritanceGift.brackets.at(-1);
  return Math.max(0, Math.round(base * row.rate - row.quick));
}

function marriageBirthSpecialGiftEligible(player) {
  const family = ensureFamilyModel(player);
  const age = player?.age || 0;
  const marriageAge = family?.marriageStartAge;
  const nearMarriage = marriageAge != null && Math.abs(age - marriageAge) <= 2;
  const nearBirth = (family?.children || []).some((child) => child?.bornAtPlayerAge != null && age >= child.bornAtPlayerAge && age - child.bornAtPlayerAge <= 2);
  return nearMarriage || nearBirth;
}

function calculateParentGift(player, amount = FAMILY_TRANSFER_MODEL.parentGiftAmount) {
  const transfer = ensureFamilyTransferModel(player);
  const gift = Math.max(0, Math.round(amount || 0));
  const recentRegularUsed = transfer.giftHistory
    .filter((row) => (player.age || 0) - (row.age || 0) < 10)
    .reduce((sum, row) => sum + Math.max(0, row.regularDeduction || 0), 0);
  const regularRemaining = Math.max(0, POLICY_KR_2026.inheritanceGift.directAncestorAdultDeduction - recentRegularUsed);
  const regularDeduction = Math.min(gift, regularRemaining);
  const specialRemaining = Math.max(0, POLICY_KR_2026.inheritanceGift.marriageBirthSpecialDeduction - transfer.specialDeductionUsed);
  const specialEligible = marriageBirthSpecialGiftEligible(player);
  const specialDeduction = specialEligible ? Math.min(Math.max(0, gift - regularDeduction), specialRemaining) : 0;
  const taxBase = Math.max(0, gift - regularDeduction - specialDeduction);
  const tax = inheritanceGiftTaxFromBase(taxBase);
  return { gift, regularDeduction, specialDeduction, specialEligible, taxBase, tax, net:Math.max(0, gift - tax) };
}

function calculateParentInheritance() {
  const estate = FAMILY_TRANSFER_MODEL.parentEstateValue;
  const deduction = Math.min(estate, POLICY_KR_2026.inheritanceGift.inheritanceStandardDeduction);
  const taxBase = Math.max(0, estate - deduction);
  const estateTax = inheritanceGiftTaxFromBase(taxBase);
  const shareRate = FAMILY_TRANSFER_MODEL.playerInheritanceShareRate;
  const grossShare = Math.round(estate * shareRate);
  const allocatedTax = Math.round(estateTax * shareRate);
  return { estate, deduction, taxBase, estateTax, shareRate, grossShare, allocatedTax, net:Math.max(0, grossShare - allocatedTax) };
}

function shouldOfferFamilyTransfer(player) {
  const transfer = ensureFamilyTransferModel(player);
  if (!transfer) return false;
  if (!transfer.giftResolved && (player.age || 0) >= FAMILY_TRANSFER_MODEL.giftOfferAge) return true;
  if (!transfer.inheritanceResolved && (player.age || 0) >= FAMILY_TRANSFER_MODEL.inheritanceOfferAge) return true;
  return false;
}

function applyParentGift(player, result) {
  const transfer = ensureFamilyTransferModel(player);
  player.cash += result.net;
  transfer.giftResolved = true;
  transfer.specialDeductionUsed += result.specialDeduction;
  transfer.totalGiftNet += result.net;
  transfer.giftHistory.push({ age:player.age, gross:result.gift, regularDeduction:result.regularDeduction, specialDeduction:result.specialDeduction, tax:result.tax, net:result.net });
  transfer.lastTransfer = { type:'gift', age:player.age, gross:result.gift, tax:result.tax, net:result.net };
}

function applyParentInheritance(player, result) {
  const transfer = ensureFamilyTransferModel(player);
  player.cash += result.net;
  transfer.inheritanceResolved = true;
  transfer.totalInheritanceNet += result.net;
  transfer.lastTransfer = { type:'inheritance', age:player.age, gross:result.grossShare, tax:result.allocatedTax, net:result.net };
}

async function handleFamilyTransferOpportunity(player) {
  const transfer = ensureFamilyTransferModel(player);
  if (!transfer.giftResolved && (player.age || 0) >= FAMILY_TRANSFER_MODEL.giftOfferAge) {
    const result = calculateParentGift(player);
    if (player.isAI) {
      applyParentGift(player, result);
      statusPill.textContent = `${player.name} · 부모 증여 실수령 ${formatMoneyCompact(result.net)} · 증여세 ${formatMoneyCompact(result.tax)}`;
      await sleep(520);
      return true;
    }
    const specialText = result.specialDeduction > 0 ? ` · 혼인·출산 추가공제 ${formatMoneyCompact(result.specialDeduction)}` : '';
    const decision = await showFamilyPanel('부모 증여', `직계존속 증여 ${formatMoneyCompact(result.gift)} · 기본공제 ${formatMoneyCompact(result.regularDeduction)}${specialText} · 예상 증여세 ${formatMoneyCompact(result.tax)}`, [
      { action:'acceptGift', kicker:'가족 자산 이전', title:`증여받기 · 실수령 ${formatMoneyCompact(result.net)}`, desc:'증여세를 차감한 현금이 가계에 들어옵니다.' },
      { action:'declineGift', kicker:'보류', title:'증여받지 않기', desc:'이번 게임에서는 부모 증여 기회를 사용하지 않습니다.' },
    ]);
    transfer.giftResolved = true;
    if (decision.action === 'acceptGift') {
      // applyParentGift가 resolved를 다시 true로 두는 것은 의도된 멱등 처리다.
      transfer.giftResolved = false;
      applyParentGift(player, result);
      statusPill.textContent = `부모 증여 · 실수령 +${formatMoneyCompact(result.net)} · 증여세 ${formatMoneyCompact(result.tax)}`;
    } else {
      transfer.lastTransfer = { type:'giftDeclined', age:player.age, gross:result.gift, tax:0, net:0 };
      statusPill.textContent = '부모 증여를 받지 않았습니다.';
    }
    updateHud();
    return true;
  }

  if (!transfer.inheritanceResolved && (player.age || 0) >= FAMILY_TRANSFER_MODEL.inheritanceOfferAge) {    const result = calculateParentInheritance();
    if (player.isAI) {
      applyParentInheritance(player, result);
      statusPill.textContent = `${player.name} · 상속 실수령 ${formatMoneyCompact(result.net)}`;
      await sleep(520);
      return true;
    }
    const decision = await showFamilyPanel('상속 정산', `부모 순상속재산을 게임에서 ${formatMoneyCompact(result.estate)}로 가정합니다. 일괄공제 ${formatMoneyCompact(result.deduction)} 후 산출한 상속세를 지분 ${Math.round(result.shareRate*100)}%로 배분한 단순 모델입니다.`, [
      { action:'acceptInheritance', kicker:'상속', title:`상속받기 · 실수령 ${formatMoneyCompact(result.net)}`, desc:`내 상속지분 ${formatMoneyCompact(result.grossShare)} · 배분 상속세 ${formatMoneyCompact(result.allocatedTax)}` },
      { action:'declineInheritance', kicker:'상속 포기', title:'상속받지 않기', desc:'이 게임에서는 이후 같은 상속 이벤트가 다시 발생하지 않습니다.' },
    ]);
    transfer.inheritanceResolved = true;
    if (decision.action === 'acceptInheritance') {
      transfer.inheritanceResolved = false;
      applyParentInheritance(player, result);
      statusPill.textContent = `상속 · 실수령 +${formatMoneyCompact(result.net)} · 배분 상속세 ${formatMoneyCompact(result.allocatedTax)}`;
    } else {
      transfer.lastTransfer = { type:'inheritanceDeclined', age:player.age, gross:result.grossShare, tax:0, net:0 };
      statusPill.textContent = '상속을 받지 않았습니다.';
    }
    updateHud();
    return true;
  }
  return false;
}

async function handleLifeLanding() {
  const player = state.current;
  if (!player) return;
  player.family = player.family || { married:false, spouse:null, children:[], childcareMode:'none' };
  player.housing = player.housing || { kind:'family', optionId:'familyHome', name:'가족과 거주', deposit:0, firstHomeAcquired:false, lastOfferAge:null, ownedHome:null, mortgage:null };

  if (shouldOfferFamilyTransfer(player)) {
    const handled = await handleFamilyTransferOpportunity(player);
    if (handled) return;
  }

  if (shouldOfferHousingOpportunity(player)) {
    await handleHousingOpportunity(player);
    return;
  }

  if (!player.family.married) {
    if (player.family.divorced) {
      if (!shouldOfferRemarriage(player)) {
        const remain = Math.max(0, REMARRIAGE_MODEL.minimumYearsAfterDivorce - ((player.age || 0) - (player.family.divorceAge || player.age)));
        statusPill.textContent = remain > 0 ? `인생 이벤트 · ${getFamilyStatusLabel(player)} · 재혼 기회까지 ${remain}년` : `인생 이벤트 · ${getFamilyStatusLabel(player)} · 현재 생활을 유지합니다.`;
        await sleep(500); return;
      }
      player.family.lastRemarriageOfferAge = player.age;
      if (player.isAI) {
        const profile = SPOUSE_PROFILES[(player.age + player.id + (player.family.remarriageCount || 0)) % Math.min(5, SPOUSE_PROFILES.length)];
        const remarryChance = (player.cash || 0) >= 3_000_000 ? 0.62 : 0.42;
        if (Math.random() < remarryChance) applyMarriage(player, profile.id, { remarriage:true });
        statusPill.textContent = player.family.married ? `${player.name} · ${player.family.spouse.label}와 재혼` : `${player.name} · 재혼 보류`;
        await sleep(520); return;
      }
      await chooseRemarriageForHuman(player);
      return;
    }
    if (player.age < 24) { statusPill.textContent = '인생 이벤트 · 사회관계가 넓어졌지만 결혼 선택은 아직 열리지 않았습니다.'; await sleep(480); return; }
    if (player.isAI) {
      const profile = SPOUSE_PROFILES[(player.age + player.id) % Math.min(5, SPOUSE_PROFILES.length)];
      if (player.age >= 26 || Math.random() > 0.35) applyMarriage(player, profile.id);
      statusPill.textContent = player.family.married ? `${player.name} · ${player.family.spouse.label}와 결혼` : `${player.name} · 결혼 보류`;
      await sleep(520); return;
    }
    await chooseMarriageForHuman(player);
    return;
  }

  const childCount = player.family.children?.length || 0;
  if (childCount < 2 && player.age <= 44) {
    if (player.isAI) {
      if (player.cash >= 4_000_000 || childCount === 0) {
        addChild(player);
        const action = spouseCanUseGeneralParentalLeave(player.family.spouse) ? 'spouseLeave' : (player.family.spouse.status === 'homemaker' ? 'spouseHome' : 'dual');
        applyChildcareChoice(player, action);
        statusPill.textContent = `${player.name} · 자녀 출산 · ${getFamilyStatusLabel(player)}`;
      } else statusPill.textContent = `${player.name} · 자녀 계획 보류`;
      await sleep(620); return;
    }
    const decision = await showFamilyPanel('자녀 계획', `현재 자녀 ${childCount}명 · 출산 후 육아휴직·맞벌이·전업을 다시 선택할 수 있습니다.`, [
      { action:'birth', kicker:'가족', title:childCount ? '둘째 출산' : '첫 자녀 출산', desc:'자녀가 생기면 연령별 양육비가 매년 발생합니다.' },
    ]);
    if (decision.action === 'birth' && addChild(player)) {
      statusPill.textContent = `출산 · 자녀 ${player.family.children.length}명`;
      await askChildcareChoice(player);
    } else statusPill.textContent = '자녀 계획을 보류했습니다.';
    return;
  }

  const youngChild = (player.family.children || []).some((child) => child.age <= 5);
  if (youngChild && !player.isAI) {
    await askChildcareChoice(player);
    return;
  }

  if (shouldOfferDivorce(player)) {
    player.family.lastDivorceOfferAge = player.age;
    if (player.isAI) {
      const stressed = (player.arrears || 0) > 0 || (player.debtCrisis?.stage && player.debtCrisis.stage !== '정상');
      const chance = stressed ? 0.16 : 0.06;
      if (Math.random() < chance) {
        const result = applyDivorce(player);
        statusPill.textContent = `${player.name} · ${result.note}`;
      } else statusPill.textContent = `${player.name} · 혼인 유지`;
      await sleep(600); return;
    }
    const preview = estimateDivorceDivision(player);
    const currentMarriageSerial = player.family.spouse?.marriageSerial || player.family.marriageSerial || 1;
    const supportPreview = Math.min(
      Math.round((player.family.spouse?.annualIncome || 0) * DIVORCE_MODEL.childSupportIncomeRate),
      Math.round((player.family.children || []).filter((child)=>child.age < DIVORCE_MODEL.childSupportEndAge && (child.marriageSerial || 1) === currentMarriageSerial).reduce((sum,child)=>sum+childAnnualCostRow(child.age).amount,0) * DIVORCE_MODEL.childSupportCostShare)
    );
    const decision = await showFamilyPanel('부부 관계 선택', `혼인 ${preview.years}년 · 실제 재산분할은 기여도와 여러 사정을 따지지만 게임에서는 혼인 중 순자산 증가분으로 단순 계산합니다.`, [
      { action:'keepMarriage', kicker:'가족 유지', title:'혼인 유지', desc:'현재 배우자·가계·육아 상태를 그대로 유지합니다.' },
      { action:'divorce', kicker:'협의이혼', title:'이혼 선택', desc:`예상 재산분할 ${formatMoneyCompact(preview.claim)}${supportPreview>0?` · 연 양육비 지원 약 ${formatMoneyCompact(supportPreview)}`:''}` },
    ]);
    if (decision.action === 'divorce') {
      const result = applyDivorce(player);
      statusPill.textContent = result.note;
    } else statusPill.textContent = '혼인 관계를 유지합니다.';
    return;
  }

  statusPill.textContent = `인생 이벤트 · ${getFamilyStatusLabel(player)} · 가족의 한 해가 지나갑니다.`;
  await sleep(500);
}

function settleSpouseAnnual(player, completedAge) {
  const spouse = player?.family?.spouse;
  if (!spouse) return { grossIncome:0, statutory:0, netIncome:0, parentalBenefit:0, debtPaid:0 };
  let grossIncome = 0, statutory = 0, netIncome = 0, parentalBenefit = 0;
  if (spouse.status === 'parentalLeave' && spouse.parentalLeaveYearsRemaining > 0) {
    parentalBenefit = calculateParentalLeaveAnnualBenefit(spouse.originalAnnualIncome || spouse.annualIncome || 0);
    player.cash += parentalBenefit;
    spouse.parentalLeaveYearsRemaining = Math.max(0, spouse.parentalLeaveYearsRemaining - 1);
    if (spouse.parentalLeaveYearsRemaining === 0) spouse.status = 'working';
  } else if (spouse.status === 'working' && spouse.jobId && spouse.annualIncome > 0) {
    const synthetic = { jobId:spouse.jobId, annualIncome:spouse.annualIncome, properties:[], businesses:[], privateInsurance:{}, debts:{bank1:0,bank2:0}, arrears:0 };
    const result = calculateAnnualStatutorySettlement(synthetic, spouse.age || completedAge, {});
    grossIncome = result.grossIncome || 0;
    statutory = result.statutoryTotal || 0;
    netIncome = Math.max(0, grossIncome - statutory);
    player.cash += netIncome;
  }
  let debtPaid = 0;
  if ((spouse.debt || 0) > 0 && player.cash > 0) {
    const due = Math.min(spouse.debt, Math.round(spouse.debt * (spouse.debtServiceRate || 0.15)));
    debtPaid = Math.min(player.cash, due);
    player.cash -= debtPaid;
    spouse.debt = Math.max(0, spouse.debt - debtPaid);
  }
  spouse.age = (spouse.age || completedAge) + 1;
  return { grossIncome, statutory, netIncome, parentalBenefit, debtPaid };
}

function settleChildrenAnnual(player, leaveActive) {
  const children = player?.family?.children || [];
  let due = 0;
  const rows = [];
  for (const child of children) {
    const row = childAnnualCostRow(child.age);
    let amount = row.amount;
    if (child.age <= 5) {
      if (player.family.childcareMode === 'dual') amount += 1_200_000;
      if (player.family.childcareMode === 'spouseHome') amount = Math.round(amount * 0.65);
      if (leaveActive) amount = Math.round(amount * 0.75);
    }
    rows.push({ age:child.age, stage:row.label, amount });
    due += amount;
  }
  const paid = Math.min(player.cash, due);
  player.cash -= paid;
  const arrears = Math.max(0, due - paid);
  if (arrears > 0) player.arrears += arrears;
  children.forEach((child) => { child.age += 1; });
  return { due, paid, arrears, rows };
}

function settleFamilyAnnual(player, completedAge, playerLeaveBenefit = 0, playerLeaveActive = false) {
  const family = ensureFamilyModel(player);
  if (!family) return { spouseNetIncome:0, spouseParentalBenefit:0, playerParentalBenefit:playerLeaveBenefit, parentalLeaveBenefitTotal:playerLeaveBenefit, childCostDue:0, childCostPaid:0, childCostArrears:0, spouseDebtPaid:0, childSupportReceived:0, divorceSettlementPaid:0 };

  // V30: 재혼 여부와 관계없이 이전 혼인의 양육비 수령과 재산분할 미지급금 상환은 계속된다.
  const childSupportReceived = calculateExSpouseAnnualSupport(family);
  if (childSupportReceived > 0) player.cash += childSupportReceived;
  const settlement = settleDivorceSettlementDebt(player);
  const divorceSettlementPaid = settlement.paid;

  if (!family.married) {
    const childFinance = settleChildrenAnnual(player, false);
    return {
      spouseNetIncome:0, spouseGrossIncome:0, spouseStatutory:0, spouseParentalBenefit:0,
      playerParentalBenefit:playerLeaveBenefit, parentalLeaveBenefitTotal:playerLeaveBenefit, spouseDebtPaid:0,
      childSupportReceived, divorceSettlementPaid, divorceSettlementRemaining:family.divorceSettlementDebt || 0,
      childCostDue:childFinance.due, childCostPaid:childFinance.paid, childCostArrears:childFinance.arrears, childRows:childFinance.rows,
    };
  }

  const spouseFinance = settleSpouseAnnual(player, completedAge);
  const spouseLeaveWasActive = spouseFinance.parentalBenefit > 0;
  const childFinance = settleChildrenAnnual(player, playerLeaveActive || spouseLeaveWasActive);
  return {
    spouseNetIncome:spouseFinance.netIncome,
    spouseGrossIncome:spouseFinance.grossIncome,
    spouseStatutory:spouseFinance.statutory,
    spouseParentalBenefit:spouseFinance.parentalBenefit,
    playerParentalBenefit:playerLeaveBenefit,
    parentalLeaveBenefitTotal:playerLeaveBenefit + spouseFinance.parentalBenefit,
    spouseDebtPaid:spouseFinance.debtPaid,
    childSupportReceived, divorceSettlementPaid, divorceSettlementRemaining:family.divorceSettlementDebt || 0,
    childCostDue:childFinance.due,
    childCostPaid:childFinance.paid,
    childCostArrears:childFinance.arrears,
    childRows:childFinance.rows,
  };
}

function applyAnnualSettlement(player, completedAge) {
  if (!player) return null;
  const playerIndex = Math.max(0, state.players.indexOf(player));

  // 1) 사업 영업현금 유입 및 임대료 지급. 임대료를 받은 건물주의 pendingRentalIncome에 실제 수령액이 누적된다.
  const businessFinance = settlePlayerBusinesses(playerIndex, player);

  // 2) 이번 플레이어의 직전 연간정산 이후 실제로 수령한 임대료를 이번 종합소득에 포함한다.
  const rentalGrossIncome = Math.max(0, Math.round(player.pendingRentalIncome || 0));
  const rentalVatCollected = Math.max(0, Math.round(player.pendingRentalVatCollected || 0));

  // V16: 건물 보유자는 임차 여부와 무관하게 매년 유지관리비를 부담한다.
  const maintenance = calculatePlayerAnnualMaintenance(playerIndex);
  const maintenancePaid = Math.min(player.cash, maintenance.total);
  player.cash -= maintenancePaid;
  const maintenanceArrears = Math.max(0, maintenance.total - maintenancePaid);
  if (maintenanceArrears > 0) player.arrears += maintenanceArrears;

  // 임대 중인 건물의 실제 유지관리비와 보유세를 임대소득 필요경비에 반영한다.
  const rentalNecessaryExpense = calculateRentedPropertyNecessaryExpense(playerIndex, maintenance);

  // V14: 상가 임대용역은 10% VAT를 임차인에게 징수하고 임대인이 납부하는 일반과세 임대 모델로 단순화한다.
  const rentalVatPaid = Math.min(player.cash, rentalVatCollected);
  player.cash -= rentalVatPaid;
  const rentalVatArrears = Math.max(0, rentalVatCollected - rentalVatPaid);
  if (rentalVatArrears > 0) player.arrears += rentalVatArrears;

  // V26 금융투자자산은 연말에 경기상태에 따라 평가가 변동된다. 예금·채권형 양(+)수익의 이자성 부분은 15.4% 원천징수 모델.
  const investmentFinance = settleInvestmentsAnnual(player);

  // 3) 육아휴직 중이면 해당 1년은 근로소득 대신 고용보험 육아휴직급여를 받는다.
  const playerLeaveActive = (player.parentalLeaveYearsRemaining || 0) > 0 && playerCanUseGeneralParentalLeave(player);
  const playerParentalLeaveBenefit = playerLeaveActive ? calculateParentalLeaveAnnualBenefit(player.annualIncome || 0) : 0;

  // 근로/사업/임대소득을 합산해 종합소득세와 공적보험료를 계산한다. 육아휴직급여는 근로소득으로 합산하지 않는다.
  const statutory = calculateAnnualStatutorySettlement(player, completedAge, {
    businessTaxableIncome: businessFinance.taxableBusinessIncome,
    rentalGrossIncome,
    rentalNecessaryExpense,
    jobIncomeOverride: playerLeaveActive ? 0 : player.annualIncome,
  });
  player.lastStatutoryDeductions = statutory;

  // V25: 실제 연금보험료가 발생한 해만 가입기간으로 누적한다. 직역연금은 별도로 추적한다.
  const employmentProfile = getEmploymentProfile(player);
  if ((statutory.pension || 0) > 0) {
    if (employmentProfile.type === 'public') player.occupationalPensionYears = (player.occupationalPensionYears || 0) + 1;
    else player.nationalPensionYears = (player.nationalPensionYears || 0) + 1;
  }
  if (['employee','public'].includes(employmentProfile.type) && (player.annualIncome || 0) > 0) {
    player.jobTenureYears = (player.jobTenureYears || 0) + 1;
  }

  // 직업소득 또는 육아휴직급여가 매년 START에서 현금으로 유입된다.
  player.cash += statutory.grossIncome + playerParentalLeaveBenefit;
  if (playerLeaveActive) player.parentalLeaveYearsRemaining = Math.max(0, player.parentalLeaveYearsRemaining - 1);
  const statutoryPaid = Math.min(player.cash, statutory.statutoryTotal);
  player.cash -= statutoryPaid;
  const statutoryArrears = Math.max(0, statutory.statutoryTotal - statutoryPaid);
  if (statutoryArrears > 0) player.arrears += statutoryArrears;
  player.pendingRentalIncome = 0;
  player.pendingRentalVatCollected = 0;

  // 4) 배우자 소득/육아휴직급여/자녀 양육비/배우자 부채상환을 가계 현금흐름에 반영한다.
  const familyFinance = settleFamilyAnnual(player, completedAge, playerParentalLeaveBenefit, playerLeaveActive);
  if (getEmploymentProfile(player).type === 'employee' && !playerLeaveActive) player.insuredEmploymentMonths = Math.min(600, (player.insuredEmploymentMonths || 0) + 12);

  // V20 주거비·주택담보대출·자가 재산세 정산. 주거 가격/금리는 게임값, 주택 지방세율은 공식 기준.
  const housingFinance = settleHousingAnnual(player);

  // 5) 자동차 보유자는 공식 자동차세/지방교육세와 게임용 유지비·의무보험료를 납부한다.
  const vehicleFinance = settleVehicleAnnualCosts(player);

  // 5) 선택한 민간 정액보험의 연 보험료 납부. 보험료·보장액은 게임 밸런스값이며 공식 세율 엔진과 분리한다.
  const privateInsurance = settlePrivateInsurancePremiums(player);
  player.lastInsurancePremium = privateInsurance;

  // 6) 부동산 보유세 납부.
  const propertyTaxes = calculatePlayerAnnualPropertyTaxes(player);
  const propertyTaxPaid = Math.min(player.cash, propertyTaxes.total);
  player.cash -= propertyTaxPaid;
  const propertyTaxArrears = Math.max(0, propertyTaxes.total - propertyTaxPaid);
  if (propertyTaxArrears > 0) player.arrears += propertyTaxArrears;

  // 7) 대출이자 납부.
  const interest1 = Math.round((player.debts.bank1 || 0) * currentLoanRate('bank1'));
  const interest2 = Math.round((player.debts.bank2 || 0) * currentLoanRate('bank2'));
  const totalInterest = interest1 + interest2;
  const interestPaid = Math.min(player.cash, totalInterest);
  player.cash -= interestPaid;
  const arrearsAdded = Math.max(0, totalInterest - interestPaid);
  if (arrearsAdded > 0) player.arrears += arrearsAdded;

  const creditUpdate = updateAnnualCredit(player);
  const debtCrisis = updateDebtCrisis(player, playerIndex);

  player.lastAnnualFinance = {
    ...statutory,
    statutoryPaid,
    statutoryArrears,
    businessFinance,
    investmentFinance,
    rentalVatCollected,
    rentalVatPaid,
    rentalVatArrears,
    maintenance,
    maintenancePaid,
    maintenanceArrears,
    privateInsurance,
    vehicleFinance,
    familyFinance,
    housingFinance,
    propertyTaxes,
    propertyTaxPaid,
    propertyTaxArrears,
    interestPaid,
    arrearsAdded,
    totalInterest,
    creditUpdate,
    debtCrisis,
    endingCash: player.cash,
    completedAge,
    policyVersion: POLICY_KR_2026.id,
    economy: { ...getEconomyPhase(), year: state.economyYear },
    pensionRecord: { nationalYears: player.nationalPensionYears || 0, occupationalYears: player.occupationalPensionYears || 0 },
  };
  return player.lastAnnualFinance;
}

function showAnnualPanel(finance, newAge) {
  if (!annualPanelEl || !finance) return;
  annualPanelAgeEl.textContent = `${newAge}세 연간정산`;
  annualGrossEl.textContent = `+${formatMoney(finance.grossIncome || 0)}`;
  annualTaxEl.textContent = `-${formatMoney((finance.incomeTax || 0) + (finance.localIncomeTax || 0))}`;
  annualPensionEl.textContent = `-${formatMoney(finance.pension || 0)}`;
  annualHealthEl.textContent = `-${formatMoney((finance.health || 0) + (finance.longTermCare || 0))}`;
  annualEmploymentEl.textContent = finance.employment > 0 ? `-${formatMoney(finance.employment)}` : '해당 없음';
  annualNetEl.textContent = formatMoney(finance.endingCash || 0);
  if (annualPropertyTaxEl) annualPropertyTaxEl.textContent = finance.propertyTaxes?.total > 0 ? `-${formatMoney(finance.propertyTaxPaid || 0)}` : '0원';
  if (annualBusinessRevenueEl) annualBusinessRevenueEl.textContent = finance.businessFinance?.businessRevenue > 0 ? `+${formatMoney(finance.businessFinance.businessRevenue)}` : '0원';
  if (annualBusinessExpensesEl) annualBusinessExpensesEl.textContent = finance.businessFinance?.operatingExpenses > 0 ? `-${formatMoney(finance.businessFinance.operatingExpenses)}` : '0원';
  if (annualBusinessCashEl) annualBusinessCashEl.textContent = finance.businessFinance?.businessOperatingCash > 0 ? `+${formatMoney(finance.businessFinance.businessOperatingCash)}` : '0원';
  if (annualMaintenanceEl) annualMaintenanceEl.textContent = finance.maintenance?.total > 0 ? `-${formatMoney(finance.maintenancePaid || 0)}` : '0원';
  if (annualLeaseStatusEl) annualLeaseStatusEl.textContent = finance.businessFinance?.leasesTerminated > 0 ? `${finance.businessFinance.leasesTerminated}건 계약해지·공실` : '변동 없음';
  if (annualBusinessTaxableEl) annualBusinessTaxableEl.textContent = finance.businessTaxableIncome > 0 ? formatMoney(finance.businessTaxableIncome) : '0원';
  if (annualRentalTaxableEl) annualRentalTaxableEl.textContent = finance.rentalTaxableIncome > 0 ? formatMoney(finance.rentalTaxableIncome) : '0원';
  if (annualExtraHealthEl) annualExtraHealthEl.textContent = finance.extraHealth > 0 ? `-${formatMoney(finance.extraHealth)}` : '0원';
  if (annualRentPaidEl) annualRentPaidEl.textContent = finance.businessFinance?.rentPaid > 0 ? `-${formatMoney(finance.businessFinance.rentPaid)}` : '0원';
  if (annualBusinessVatEl) annualBusinessVatEl.textContent = finance.businessFinance?.businessVatPaid > 0 ? `-${formatMoney(finance.businessFinance.businessVatPaid)}` : '0원';
  if (annualRentalVatEl) annualRentalVatEl.textContent = finance.rentalVatPaid > 0 ? `-${formatMoney(finance.rentalVatPaid)}` : '0원';
  if (annualVehicleTaxEl) annualVehicleTaxEl.textContent = finance.vehicleFinance?.tax?.total > 0 ? `-${formatMoney(finance.vehicleFinance.tax.total)}` : '0원';
  if (annualVehicleCostEl) annualVehicleCostEl.textContent = finance.vehicleFinance?.due > 0 ? `-${formatMoney((finance.vehicleFinance.maintenance||0)+(finance.vehicleFinance.mandatoryInsurance||0))}` : '0원';
  if (annualPrivateInsuranceEl) annualPrivateInsuranceEl.textContent = finance.privateInsurance?.due > 0 ? `-${formatMoney(finance.privateInsurance.paid || 0)}${finance.privateInsurance.lapsed ? ' · 실효' : ''}` : '0원';
  if (annualSpouseNetEl) annualSpouseNetEl.textContent = finance.familyFinance?.spouseNetIncome > 0 ? `+${formatMoney(finance.familyFinance.spouseNetIncome)}` : '0원';
  if (annualParentalBenefitEl) annualParentalBenefitEl.textContent = finance.familyFinance?.parentalLeaveBenefitTotal > 0 ? `+${formatMoney(finance.familyFinance.parentalLeaveBenefitTotal)}` : '0원';
  if (annualChildCostEl) annualChildCostEl.textContent = finance.familyFinance?.childCostPaid > 0 ? `-${formatMoney(finance.familyFinance.childCostPaid)}` : '0원';
  if (annualHousingCostEl) annualHousingCostEl.textContent = finance.housingFinance?.nonMortgagePaid > 0 ? `-${formatMoney(finance.housingFinance.nonMortgagePaid)}` : '0원';
  if (annualMortgageEl) annualMortgageEl.textContent = finance.housingFinance?.mortgageDue > 0 ? `-${formatMoney(finance.housingFinance.mortgageDue - (finance.housingFinance.mortgageArrears||0))}${finance.housingFinance.mortgageArrears>0?` · 연체 ${formatMoney(finance.housingFinance.mortgageArrears)}`:''}` : '0원';
  if (annualHomeTaxEl) annualHomeTaxEl.textContent = finance.housingFinance?.homeTax?.total > 0 ? `-${formatMoney(finance.housingFinance.homeTax.total)}` : '0원';
  if (annualInvestmentReturnEl) annualInvestmentReturnEl.textContent = finance.investmentFinance?.netReturn ? `${finance.investmentFinance.netReturn>0?'+':''}${formatMoney(finance.investmentFinance.netReturn)}` : '0원';
  if (annualInvestmentTaxEl) annualInvestmentTaxEl.textContent = finance.investmentFinance?.withholding > 0 ? `-${formatMoney(finance.investmentFinance.withholding)}` : '0원';
  annualInterestEl.textContent = finance.totalInterest > 0 ? `-${formatMoney(finance.interestPaid || 0)}` : '0원';
  annualPolicyEl.textContent = `${POLICY_KR_2026.label} · 경기 ${finance.economy?.label ?? getEconomyPhase().label} · V24 경기순환 반영`;

  annualPanelEl.hidden = false;
  requestAnimationFrame(() => annualPanelEl.classList.add('visible'));
}

function hideAnnualPanel(immediate = false) {
  if (!annualPanelEl) return;
  annualPanelEl.classList.remove('visible');
  if (immediate) { annualPanelEl.hidden = true; return; }
  setTimeout(() => { if (!annualPanelEl.classList.contains('visible')) annualPanelEl.hidden = true; }, 220);
}


function getPrivateInsuranceProduct(id) {
  return PRIVATE_INSURANCE_PRODUCTS.find((item) => item.id === id) ?? null;
}

function annualPrivateInsurancePremium(player) {
  if (!player?.privateInsurance) return 0;
  return PRIVATE_INSURANCE_PRODUCTS.reduce((sum, item) => sum + (player.privateInsurance[item.id] ? item.annualPremium : 0), 0);
}

function settlePrivateInsurancePremiums(player) {
  const due = annualPrivateInsurancePremium(player);
  if (!due) return { due:0, paid:0, lapsed:false, products:[] };
  const active = PRIVATE_INSURANCE_PRODUCTS.filter((item) => player.privateInsurance?.[item.id]).map((item) => item.name);
  if (player.cash >= due) {
    player.cash -= due;
    return { due, paid:due, lapsed:false, products:active };
  }
  const paid = Math.max(0, player.cash);
  player.cash = 0;
  PRIVATE_INSURANCE_PRODUCTS.forEach((item) => { if (player.privateInsurance) player.privateInsurance[item.id] = false; });
  return { due, paid, lapsed:true, products:active };
}

function privateInsurancePayout(player, event) {
  let payout = 0;
  const rows = [];
  if (!player?.privateInsurance || !event) return { total:0, rows };
  if ((event.category === 'injury' || event.category === 'work' || event.category === 'traffic') && player.privateInsurance.accidentFixed) {
    const p = getPrivateInsuranceProduct('accidentFixed');
    const amount = p?.payouts?.[event.severity] || 0;
    if (amount > 0) { payout += amount; rows.push(`${p.name} +${formatMoneyCompact(amount)}`); }
  }
  if (event.category === 'illness' && player.privateInsurance.hospitalFixed) {
    const p = getPrivateInsuranceProduct('hospitalFixed');
    const amount = p?.payouts?.[event.severity] || 0;
    if (amount > 0) { payout += amount; rows.push(`${p.name} +${formatMoneyCompact(amount)}`); }
  }
  return { total:payout, rows };
}

function isWorkersCompEligible(player) {
  const profile = getEmploymentProfile(player);
  const job = getJob(player);
  return Boolean(job && profile.type === 'employee');
}

function healthEventWeight(event, player) {
  const job = getJob(player);
  const risk = job?.risk ?? '낮음';
  const age = player?.age ?? 20;
  let weight = event.baseWeight || 0;
  if (event.requiresVehicle && !player?.vehicle) return 0;
  if (event.transportKind && player?.vehicle?.kind !== event.transportKind) return 0;
  if (event.category === 'work') {
    if (!isWorkersCompEligible(player)) return 0;
    if (event.highRiskOnly && risk !== '높음') return 0;
    weight *= risk === '높음' ? 3.1 : risk === '중간' ? 1.45 : 0.35;
  }
  if (event.category === 'illness') {
    if (age >= 50) weight *= event.severity === 'severe' ? 1.8 : 1.35;
    else if (age >= 40) weight *= event.severity === 'severe' ? 1.35 : 1.15;
  }
  return Math.max(0, weight);
}

function chooseWeightedHealthEvent(player) {
  const weighted = HEALTH_EVENTS.map((event) => ({ event, weight:healthEventWeight(event, player) })).filter((row) => row.weight > 0);
  const total = weighted.reduce((sum, row) => sum + row.weight, 0);
  let cursor = Math.random() * total;
  for (const row of weighted) {
    cursor -= row.weight;
    if (cursor <= 0) return row.event;
  }
  return weighted.at(-1)?.event ?? HEALTH_EVENTS[0];
}

function workersCompBenefit(player, event) {
  if (event?.category !== 'work' || !isWorkersCompEligible(player)) return { amount:0, daysOff:0 };
  const daysOff = Math.max(0, event.daysOff || 0);
  if (daysOff <= 3) return { amount:0, daysOff };
  // 법의 '평균임금' 계산은 더 복잡하므로 게임에서는 연소득/365를 1일 평균임금의 근사치로 사용한다.
  const estimatedDailyAverageWage = Math.max(0, player.annualIncome || 0) / 365;
  return { amount:Math.round(estimatedDailyAverageWage * daysOff * 0.70), daysOff };
}

let incidentResolver = null;
function showIncidentPanel(result) {
  if (!incidentPanelEl || !result) return Promise.resolve();
  incidentPanelTitleEl.textContent = result.event.name;
  incidentSeverityEl.textContent = result.event.severityLabel;
  incidentCostEl.textContent = (result.medicalCost + (result.vehicleRepairCost||0)) > 0 ? `-${formatMoney(result.medicalCost + (result.vehicleRepairCost||0))}` : '본인부담 0원';
  incidentPublicEl.textContent = result.workersComp.amount > 0 ? `산재 휴업급여 +${formatMoney(result.workersComp.amount)}` : (result.event.category === 'work' ? '산재 요양급여 적용 가정' : '건강보험 적용 후 본인부담 모델');
  incidentPrivateEl.textContent = result.privatePayout.total > 0 ? `+${formatMoney(result.privatePayout.total)}` : '가입 보장 없음';
  incidentRestEl.textContent = result.event.restTurns > 0 ? `${result.event.restTurns}턴 휴식` : '턴 휴식 없음';
  incidentNetEl.textContent = result.netCashImpact >= 0 ? `+${formatMoney(result.netCashImpact)}` : `-${formatMoney(Math.abs(result.netCashImpact))}`;
  incidentNoteEl.textContent = `${result.event.note}${result.autoCovered ? ` · 자차특약 수리비 보전 ${formatMoneyCompact(result.autoCovered)}` : ''} ${result.privatePayout.rows.join(' · ')}`.trim();
  incidentPanelEl.hidden = false;
  requestAnimationFrame(() => incidentPanelEl.classList.add('visible'));
  return new Promise((resolve) => { incidentResolver = resolve; });
}
function resolveIncidentPanel() { if (incidentResolver) { const r=incidentResolver; incidentResolver=null; r(); } }
function hideIncidentPanel(immediate=false) {
  if (!incidentPanelEl) return;
  incidentPanelEl.classList.remove('visible');
  if (immediate) { incidentPanelEl.hidden=true; return; }
  setTimeout(() => { if (!incidentPanelEl.classList.contains('visible')) incidentPanelEl.hidden=true; }, 220);
}

function applyHealthEvent(player, event) {
  const medicalCost = Math.max(0, event.outOfPocket || 0);
  const rawRepairCost = event.category === 'traffic' ? Math.max(0, event.vehicleRepairCost || 0) : 0;
  const autoCovered = rawRepairCost > 0 && player?.vehicle && player.privateInsurance?.autoComprehensive ? Math.round(rawRepairCost * 0.80) : 0;
  const vehicleRepairCost = Math.max(0, rawRepairCost - autoCovered);
  const workersComp = workersCompBenefit(player, event);
  const privatePayout = privateInsurancePayout(player, event);
  if (workersComp.amount > 0) player.cash += workersComp.amount;
  if (privatePayout.total > 0) player.cash += privatePayout.total;
  const totalDirectCost = medicalCost + vehicleRepairCost;
  const paidMedical = Math.min(player.cash, totalDirectCost);
  player.cash -= paidMedical;
  const medicalArrears = Math.max(0, totalDirectCost - paidMedical);
  if (medicalArrears > 0) player.arrears += medicalArrears;
  player.restTurns = Math.max(player.restTurns || 0, event.restTurns || 0);
  player.healthStatus = player.restTurns > 0 ? '치료·회복중' : '정상';
  const result = {
    event, medicalCost, vehicleRepairCost, autoCovered, paidMedical, medicalArrears, workersComp, privatePayout,
    netCashImpact:workersComp.amount + privatePayout.total - medicalCost - vehicleRepairCost,
  };
  player.lastIncident = result;
  updateHud();
  return result;
}

async function handleHealthLanding() {
  const player = state.current;
  if (!player) return;
  const event = chooseWeightedHealthEvent(player);
  const result = applyHealthEvent(player, event);
  statusPill.textContent = `${event.name} · ${event.severityLabel}${event.restTurns ? ` · ${event.restTurns}턴 회복` : ''}`;
  triggerHaptic(event.severity === 'severe' ? [18,45,28,45,18] : [12,35,12]);
  if (player.isAI) { await sleep(900); return; }
  await showIncidentPanel(result);
  hideIncidentPanel();
}

let insuranceResolver = null;
function renderInsuranceOffers(player) {
  if (!insuranceOfferListEl) return;
  insuranceOfferListEl.replaceChildren();
  PRIVATE_INSURANCE_PRODUCTS.forEach((product) => {
    const active = Boolean(player.privateInsurance?.[product.id]);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `insurance-offer${active ? ' active' : ''}`;
    button.dataset.insuranceId = product.id;
    if (product.id === 'autoComprehensive' && player.vehicle?.kind !== 'car') button.disabled = true;
    button.innerHTML = `<span>${active ? '가입중' : '미가입'}</span><strong>${product.name}</strong><em>연 ${formatMoneyCompact(product.annualPremium)} · ${product.desc}</em>`;
    insuranceOfferListEl.appendChild(button);
  });
}
function showInsurancePanel(player) {
  if (!insurancePanelEl) return Promise.resolve();
  renderInsuranceOffers(player);
  insurancePanelHintEl.textContent = '민간보험 보험료·정액보장액은 게임 밸런스값입니다. 국민건강보험·산재보험은 별도의 공적 제도 엔진으로 처리합니다.';
  insurancePanelEl.hidden = false;
  requestAnimationFrame(() => insurancePanelEl.classList.add('visible'));
  return new Promise((resolve) => { insuranceResolver = resolve; });
}
function resolveInsurancePanel() { if (insuranceResolver) { const r=insuranceResolver; insuranceResolver=null; r(); } }
function hideInsurancePanel(immediate=false) {
  if (!insurancePanelEl) return;
  insurancePanelEl.classList.remove('visible');
  if (immediate) { insurancePanelEl.hidden=true; return; }
  setTimeout(() => { if (!insurancePanelEl.classList.contains('visible')) insurancePanelEl.hidden=true; }, 220);
}
function togglePrivateInsurance(id) {
  const player = state.current;
  const product = getPrivateInsuranceProduct(id);
  if (!player || !product) return;
  if (id === 'autoComprehensive' && player.vehicle?.kind !== 'car') return;
  player.privateInsurance ??= { accidentFixed:false, hospitalFixed:false, autoComprehensive:false };
  player.privateInsurance[id] = !player.privateInsurance[id];
  renderInsuranceOffers(player);
  updateHud();
}
async function handleInsuranceLanding() {
  const player = state.current;
  if (!player) return;
  if (player.isAI) {
    player.privateInsurance ??= { accidentFixed:false, hospitalFixed:false, autoComprehensive:false };
    if (!player.privateInsurance.accidentFixed && player.cash >= AI_CASH_RESERVE + 2_000_000) player.privateInsurance.accidentFixed = true;
    if (!player.privateInsurance.hospitalFixed && player.age >= 35 && player.cash >= AI_CASH_RESERVE + 3_000_000) player.privateInsurance.hospitalFixed = true;
    if (player.vehicle?.kind === 'car' && !player.privateInsurance.autoComprehensive && player.cash >= AI_CASH_RESERVE + 3_000_000) player.privateInsurance.autoComprehensive = true;
    statusPill.textContent = `${player.name} · 보험 점검 완료`;
    await sleep(500);
    return;
  }
  await showInsurancePanel(player);
  hideInsurancePanel();
}

async function handleBankLanding() {
  const player = state.current;
  if (!player) return;
  if (player.isAI) {
    await sleep(420);
    if (totalDebt(player) > 0 && player.cash >= AI_CASH_RESERVE + BANK_STEP) {
      const paid = repayLoan(player, BANK_STEP);
      statusPill.textContent = `${player.name} · 대출 ${formatMoneyCompact(paid)} 상환`;
      await sleep(420);
    } else {
      statusPill.textContent = `${player.name} · 은행 업무 없음`;
      await sleep(280);
    }
    return;
  }
  await askBankDecision();
}

function askBankDecision() {
  if (!bankPanelEl) return Promise.resolve('close');
  hideArrivalDetail();
  updateBankPanel();
  bankPanelEl.hidden = false;
  requestAnimationFrame(() => bankPanelEl.classList.add('visible'));
  return new Promise((resolve) => { bankResolver = resolve; });
}

function updateBankPanel() {
  const player = state.current;
  if (!player) return;
  bankCashEl.textContent = formatMoney(player.cash);
  bank1DebtEl.textContent = formatMoney(player.debts.bank1 || 0);
  bank2DebtEl.textContent = formatMoney(player.debts.bank2 || 0);
  borrowBank1Button.disabled = !canBorrow(player, 'bank1', Math.min(BANK_STEP, remainingLoanLimit(player, 'bank1')) || BANK_STEP);
  borrowBank2Button.disabled = !canBorrow(player, 'bank2', Math.min(BANK_STEP, remainingLoanLimit(player, 'bank2')) || BANK_STEP);
  repayLoanButton.disabled = totalDebt(player) <= 0 || player.cash <= 0;
  bankHintEl.textContent = `신용 ${player.creditScore ?? 850}(${player.creditStatus ?? '양호'}) · 채무상태 ${debtCrisisLabel(player)} · 현재 소득 ${formatMoneyCompact(player.annualIncome)} · 제1금융 시험한도 ${formatMoneyCompact(dynamicLoanLimit(player,'bank1'))} / 제2금융 시험한도 ${formatMoneyCompact(dynamicLoanLimit(player,'bank2'))} · 현재 경기 ${getEconomyPhase().label} · 제1금융 ${(currentLoanRate('bank1')*100).toFixed(1)}% / 제2금융 ${(currentLoanRate('bank2')*100).toFixed(1)}% · V24 게임용 경기·신용 모델`;
}

function bankBorrow(type) {
  const player = state.current;
  if (!player) return;
  const amount = Math.min(BANK_STEP, remainingLoanLimit(player, type));
  if (amount <= 0 || !takeLoan(player, type, amount)) return;
  statusPill.textContent = `${LOAN_PRODUCTS[type].label} ${formatMoneyCompact(amount)} 대출 실행`;
  updateBankPanel();
}

function bankRepay() {
  const paid = repayLoan(state.current, BANK_STEP);
  if (paid > 0) statusPill.textContent = `대출 ${formatMoneyCompact(paid)} 상환 완료`;
  updateBankPanel();
}

function resolveBankDecision() {
  if (!bankResolver) return;
  const resolve = bankResolver;
  bankResolver = null;
  hideBankPanel();
  resolve('close');
}

function hideBankPanel(immediate = false) {
  if (!bankPanelEl) return;
  bankPanelEl.classList.remove('visible');
  if (immediate) { bankPanelEl.hidden = true; return; }
  setTimeout(() => {
    if (!bankPanelEl.classList.contains('visible')) bankPanelEl.hidden = true;
  }, 240);
}


function trainingForGroup(group) {
  return CAREER_TRAININGS.find((item) => item.group === group) ?? null;
}

function hasCareerCredential(player, group) {
  const training = trainingForGroup(group);
  return Boolean(training && (player?.careerCredentials || []).includes(training.credential));
}

function jobAccessInfo(player, job) {
  if (!player || !job) return { ok:false, reason:'직업 정보 없음' };
  if (job.level <= 1) return { ok:true, reason:'초급 진입 가능' };
  const current = getJob(player);
  const sameGroup = current?.group === job.group;
  const tenure = Math.max(0, player.jobTenureYears || 0);
  const credential = hasCareerCredential(player, job.group);

  // 전문직은 실제 면허·학위제도를 그대로 재현하지 않고, 게임용 자격 트랙 보유를 필수로 둔다.
  if (job.group === '전문직') {
    if (!credential) return { ok:false, reason:'전문직 진입 자격 트랙 필요' };
    if (job.level >= 3 && (!sameGroup || tenure < 4)) return { ok:false, reason:'동일 직군 경력 4년 필요' };
    return { ok:true, reason:'자격 트랙 충족' };
  }

  if (job.level === 2) {
    if (credential || (sameGroup && tenure >= 2)) return { ok:true, reason:credential ? '직무자격 충족' : '동일 직군 경력 충족' };
    return { ok:false, reason:'직무자격 또는 동일 직군 경력 2년 필요' };
  }
  if (job.level >= 3) {
    if (credential && sameGroup && tenure >= 4) return { ok:true, reason:'직무자격 + 동일 직군 경력 4년 충족' };
    return { ok:false, reason:'직무자격 + 동일 직군 경력 4년 필요' };
  }
  return { ok:true, reason:'진입 가능' };
}

function getCareerTrainingOffers(player, limit = 3) {
  const owned = new Set(player?.careerCredentials || []);
  const current = getJob(player);
  const available = CAREER_TRAININGS.filter((item) => !owned.has(item.credential));
  if (!available.length) return [];
  const ordered = [];
  if (current) {
    const same = available.find((item) => item.group === current.group);
    if (same) ordered.push(same);
  }
  const rest = available.filter((item) => !ordered.includes(item));
  const offset = ((player?.id || 0) + (player?.lap || 0)) % Math.max(1, rest.length);
  for (let i=0; i<rest.length && ordered.length<limit; i+=1) ordered.push(rest[(offset+i)%rest.length]);
  return ordered.slice(0, limit);
}

function applyCareerTraining(player, trainingId) {
  const training = CAREER_TRAININGS.find((item) => item.id === trainingId);
  if (!player || !training) return { ok:false, note:'교육과정을 찾을 수 없습니다.' };
  player.careerCredentials = Array.isArray(player.careerCredentials) ? player.careerCredentials : [];
  player.careerTrainingHistory = Array.isArray(player.careerTrainingHistory) ? player.careerTrainingHistory : [];
  if (player.careerCredentials.includes(training.credential)) return { ok:false, note:`${training.label}은 이미 이수했습니다.` };
  if ((player.cash || 0) < training.cost) return { ok:false, note:`교육비 ${formatMoneyCompact(training.cost)}이 부족합니다.` };
  player.cash -= training.cost;
  player.careerCredentials.push(training.credential);
  player.careerTrainingCount = (player.careerTrainingCount || 0) + 1;
  player.careerTrainingHistory.push({ id:training.id, label:training.label, group:training.group, age:player.age, cost:training.cost });
  updateHud();
  updateBankPanel();
  return { ok:true, note:`${training.label} 이수 · 교육비 ${formatMoneyCompact(training.cost)}` };
}

function getJobOffers(player) {
  const current = getJob(player);
  if (!current) {
    const entry = JOBS.filter((job) => job.level === 1);
    const offset = (player.id * 2 + player.lap) % entry.length;
    return Array.from({length:4}, (_,i) => entry[(offset + i*2) % entry.length]);
  }
  const sameGroup = JOBS.filter((job) => job.group === current.group && job.level > current.level && jobAccessInfo(player, job).ok);
  const cross = JOBS.filter((job) => job.group !== current.group && job.level <= Math.max(1, current.level) && jobAccessInfo(player, job).ok);
  return [...sameGroup, ...cross].slice(0,4);
}

async function handleJobLanding() {
  const player = state.current;
  if (!player) return;
  const current = getJob(player);

  // 경기둔화·불황에서는 민간 임금근로자에게만 조건부 권고사직 이벤트가 발생한다.
  if (current && shouldInvoluntaryLayoff(player)) {
    const result = separateFromJob(player, 'involuntary');
    const benefitText = result.benefit?.eligible ? ` · 구직급여 ${formatMoneyCompact(result.benefit.total)}` : ' · 구직급여 비대상';
    statusPill.textContent = `권고사직 · ${result.job.name} 퇴직 · 퇴직금 ${formatMoneyCompact(result.severance)}${benefitText}`;
    await sleep(780);
    return;
  }

  const offers = getJobOffers(player);
  if (!offers.length && !current) {
    statusPill.textContent = `${player.name} · 현재 채용 기회 없음`;
    return;
  }
  if (player.isAI) {
    await sleep(420);
    const ownTraining = current ? trainingForGroup(current.group) : null;
    if (current && current.level < 3 && ownTraining && !hasCareerCredential(player, current.group) && (player.jobTenureYears || 0) >= 1 && player.cash >= ownTraining.cost + 8_000_000) {
      const trained = applyCareerTraining(player, ownTraining.id);
      statusPill.textContent = `${player.name} · ${trained.note}`;
      await sleep(420);
      return;
    }
    if (!offers.length) { statusPill.textContent = `${player.name} · 현재 직업 유지`; await sleep(320); return; }
    const choice = [...offers].sort((a,b) => b.annualIncome - a.annualIncome)[0];
    assignJob(player, choice.id);
    statusPill.textContent = `${player.name} · ${choice.name} 선택`;
    await sleep(420);
    return;
  }
  const decision = await askJobDecision(offers);
  if (decision === '__quit__' && current) {
    const result = separateFromJob(player, 'voluntary');
    statusPill.textContent = `자진퇴사 · ${result.job.name} · 퇴직금 ${formatMoneyCompact(result.severance)} · 구직급여 없음`;
  } else if (decision?.startsWith('__train__:')) {
    const result = applyCareerTraining(player, decision.split(':')[1]);
    statusPill.textContent = result.note;
  } else if (decision) {
    const job = assignJob(player, decision);
    statusPill.textContent = `${job.name} 취업 · 세전 연소득 ${formatMoneyCompact(job.annualIncome)}`;
  } else {
    statusPill.textContent = current ? '현재 직업을 유지합니다' : '이번 취업 기회는 넘겼습니다';
  }
}

function assignJob(player, jobId) {
  const job = JOBS.find((item) => item.id === jobId);
  if (!player || !job || player.retired) return null;
  if (!jobAccessInfo(player, job).ok) return null;
  if (player.jobId && player.jobId !== job.id) {
    const severance = calculateGameSeverance(player);
    if (severance > 0) {
      player.cash += severance;
      player.lastSeverance = severance;
    }
    player.jobTenureYears = 0;
  }
  player.jobId = job.id;
  player.annualIncome = job.annualIncome;
  player.careerLevel = job.level;
  player.employmentState = 'employed';
  updateHud();
  updateBankPanel();
  return job;
}

function askJobDecision(offers) {
  if (!jobPanelEl) return Promise.resolve(null);
  hideArrivalDetail();
  const current = getJob(state.current);
  jobPanelTitleEl.textContent = current ? `${current.name} · 이직/성장 기회` : '첫 직업을 선택하세요';
  jobPanelHintEl.textContent = current
    ? '이직·승진 또는 교육을 선택할 수 있습니다. 2단계는 직무자격 또는 같은 직군 경력 2년, 3단계는 직무자격과 같은 직군 경력 4년을 기본 게임조건으로 사용합니다.'
    : '첫 취업 또는 교육을 선택할 수 있습니다. 교육·자격 과정은 게임용 추상화이며 실제 국가자격·면허를 대신하지 않습니다.';
  jobOfferListEl.replaceChildren();
  const trainings = getCareerTrainingOffers(state.current, 3);
  trainings.forEach((training) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'job-offer';
    button.dataset.trainingId = training.id;
    button.disabled = (state.current?.cash || 0) < training.cost;
    button.innerHTML = `<span>교육·자격 · ${training.group}</span><strong>${training.label}</strong><em>교육비 ${formatMoneyCompact(training.cost)} · ${training.desc}${button.disabled ? ' · 현금 부족' : ''}</em>`;
    jobOfferListEl.appendChild(button);
  });
  offers.forEach((job) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'job-offer';
    button.dataset.jobId = job.id;
    const access = jobAccessInfo(state.current, job);
    button.innerHTML = `<span>${job.group} · ${job.level}단계</span><strong>${job.name}</strong><em>세전 ${formatMoneyCompact(job.annualIncome)}/년 · 위험 ${job.risk} · ${access.reason}</em>`;
    jobOfferListEl.appendChild(button);
  });
  if (current) {
    const quitButton = document.createElement('button');
    quitButton.type = 'button';
    quitButton.className = 'job-offer';
    quitButton.dataset.jobId = '__quit__';
    quitButton.innerHTML = `<span>고용 선택</span><strong>자진퇴사</strong><em>퇴직금 요건 충족 시 지급 · 원칙적으로 구직급여 비대상</em>`;
    jobOfferListEl.appendChild(quitButton);
  }
  jobPanelEl.hidden = false;
  requestAnimationFrame(() => jobPanelEl.classList.add('visible'));
  return new Promise((resolve) => { jobResolver = resolve; });
}

function resolveJobDecision(jobId = null) {
  if (!jobResolver) return;
  const resolve = jobResolver;
  jobResolver = null;
  hideJobPanel();
  resolve(jobId);
}

function hideJobPanel(immediate = false) {
  if (!jobPanelEl) return;
  jobPanelEl.classList.remove('visible');
  if (immediate) { jobPanelEl.hidden = true; return; }
  setTimeout(() => { if (!jobPanelEl.classList.contains('visible')) jobPanelEl.hidden = true; }, 240);
}

function purchaseRegion(cellIndex, playerIndex) {
  const space = boardSpaces[cellIndex];
  const player = state.players[playerIndex];
  const price = getRegionMarketPrice(space?.name);
  const acquisition = calculateAcquisitionTaxes(price);
  const totalCost = price + acquisition.total;
  if (!player || !price || propertyOwners[cellIndex] !== null || player.cash < totalCost) return false;
  player.cash -= totalCost;
  player.lastAcquisitionTax = { cellIndex, price, ...acquisition, totalCost };
  propertyOwners[cellIndex] = playerIndex;
  if (!player.properties.includes(cellIndex)) player.properties.push(cellIndex);
  refreshOwnershipVisual(cellIndex);
  updateHud();
  return true;
}

function refreshOwnershipVisual(cellIndex) {
  const cell = cells[cellIndex];
  if (!cell) return;
  cell.querySelector('.owner-badge')?.remove();
  cell.querySelector('.tenant-badge')?.remove();
  cell.classList.remove('owned','leased');
  cell.style.removeProperty('--owner-color');
  const ownerIndex = propertyOwners[cellIndex];
  if (ownerIndex === null || ownerIndex === undefined) return;
  const style = PLAYER_STYLES[ownerIndex];
  const owner = state.players[ownerIndex];
  cell.classList.add('owned');
  cell.style.setProperty('--owner-color', style?.color ?? '#fff');
  const badge = document.createElement('span');
  badge.className = 'owner-badge';
  badge.textContent = owner?.short ?? `P${ownerIndex + 1}`;
  cell.appendChild(badge);
  const lease = propertyLeases[cellIndex];
  if (lease) {
    const biz = getBusinessType(lease.businessId);
    const tenant = state.players[lease.tenantIndex];
    const tenantBadge = document.createElement('span');
    tenantBadge.className = 'tenant-badge';
    tenantBadge.textContent = `${biz?.icon ?? '▣'} ${tenant?.short ?? '임차'} ${biz?.name ?? '사업'}`;
    cell.appendChild(tenantBadge);
    cell.classList.add('leased');
  }
}

function refreshAllOwnershipVisuals() {
  propertyOwners.forEach((_, index) => refreshOwnershipVisual(index));
}

function hideArrivalDetail(immediate = false) {
  if (!arrivalDetailEl) return;
  arrivalDetailEl.classList.remove('visible');
  if (immediate) {
    arrivalDetailEl.hidden = true;
    return;
  }
  setTimeout(() => {
    if (!arrivalDetailEl.classList.contains('visible')) arrivalDetailEl.hidden = true;
  }, 240);
}

function updateHud() {
  playerNameEl.textContent = state.current?.name ?? 'PLAYER 1';
  ageEl.textContent = String(state.age);
  lapEl.textContent = String(state.lap);
  if (economyStateEl) { const eco=getEconomyPhase(); economyStateEl.textContent=`${eco.label} · 금리 +${(eco.loanSpread*100).toFixed(1)}%p`; economyStateEl.title=eco.desc; }
  currentCellEl.textContent = labels[state.position]?.[0] ?? String(state.position);
  if (cashEl) cashEl.textContent = formatMoneyCompact(state.current?.cash ?? 0);
  if (debtEl) debtEl.textContent = formatMoneyCompact(totalDebt(state.current));
  const job = getJob(state.current);
  if (jobNameEl) jobNameEl.textContent = state.current?.retired ? '은퇴' : (state.current?.employmentState === 'unemployed' ? '구직 중' : (job?.name ?? '진로 탐색'));
  if (annualIncomeEl) annualIncomeEl.textContent = formatMoneyCompact(state.current?.annualIncome ?? 0);
  if (vehicleStatusEl) vehicleStatusEl.textContent = getTransportLabel(state.current);
  if (familyStatusEl) familyStatusEl.textContent = getFamilyStatusLabel(state.current);
  if (housingStatusEl) housingStatusEl.textContent = getHousingStatusLabel(state.current);
  refreshTokenTransportVisuals();
  if (healthStatusEl) healthStatusEl.textContent = `${state.current?.healthStatus ?? '정상'}${state.current?.restTurns ? ` · ${state.current.restTurns}턴` : ''}`;
  renderRoster();
  queueAutoSave();
}

async function resetGame() {
  if (state.rollStarting || state.rolling || state.moving) return;
  state.activePlayer = 0;
  state.started = false;
  state.rollStarting = false;
  state.lastRollTotal = 0;
  state.economyPhase = 'normal';
  state.economyYear = 0;
  state.economyCompleted = new Set();
  state.players.forEach((player) => {
    player.position = 0;
    player.age = 20;
    player.lap = 0;
    player.cash = STARTING_CASH;
    player.properties = [];
    player.businesses = [];
    player.rentArrears = 0;
    player.pendingRentalIncome = 0;
    player.pendingRentalVatCollected = 0;
    player.debts = { bank1: 0, bank2: 0 };
    player.arrears = 0;
    player.creditScore = 850;
    player.creditStatus = '양호';
    player.delinquencyYears = 0;
    player.debtCrisis = { stage:'정상', lastAction:'', enforcementCount:0, auctionFailures:{} };
    player.lastAnnualFinance = null;
    player.jobId = null;
    player.annualIncome = 0;
    player.careerLevel = 0;
    player.employmentState = 'searching';
    player.lastSeparation = null;
    player.lastUnemploymentBenefit = 0;
    player.lastStatutoryDeductions = null;
    player.healthStatus = '정상';
    player.restTurns = 0;
    player.privateInsurance = { accidentFixed:false, hospitalFixed:false, autoComprehensive:false };
    player.vehicle = null;
    player.lastIncident = null;
    player.lastInsurancePremium = null;
    player.family = { married:false, spouse:null, children:[], childcareMode:'none', marriageStartAge:null, marriageStartNetWorth:0, marriageSerial:0, remarriageCount:0, lastRemarriageOfferAge:null, divorced:false, divorceCount:0, divorceAge:null, lastDivorceOfferAge:null, exSpouse:null, exSpouses:[], divorceObligations:[], divorceSettlementDebt:0 };
    player.housing = { kind:'family', optionId:'familyHome', name:'가족과 거주', deposit:0, firstHomeAcquired:false, lastOfferAge:null, ownedHome:null, mortgage:null };
    player.parentalLeaveYearsRemaining = 0;
    player.insuredEmploymentMonths = 0;
    player.policyVersion = POLICY_KR_2026.id;
    player.nationalPensionYears = 0;    player.occupationalPensionYears = 0;
    player.jobTenureYears = 0;
    player.careerCredentials = [];
    player.careerTrainingCount = 0;
    player.careerTrainingHistory = [];
    player.retired = false;
    player.retirementAge = null;
    player.retirementSummary = null;
    player.lastSeverance = 0;
    player.investments = { deposit:0, bond:0, stock:0 };
    player.lastInvestmentFinance = null;
    player.familyTransfer = { giftResolved:false, inheritanceResolved:false, giftHistory:[], specialDeductionUsed:0, totalGiftNet:0, totalInheritanceNet:0, lastTransfer:null };
    player.lottery = { spent:0, grossWon:0, taxPaid:0, netWon:0, bestPrize:0, bestRank:null, plays:0, lastResult:null };
  });
  propertyOwners.fill(null);
  propertyLeases.fill(null);
  refreshAllOwnershipVisuals();
  refreshRegionPriceVisuals();
  gameModeSelect.disabled = false;
  clearRoutePreview();
  hideMoveProgress();
  hideArrivalToast(true);
  hideArrivalDetail(true);
  hidePurchasePanel(true);
  hideBusinessPanel(true);
  hideBankPanel(true);
  hideAuctionPanel(true);
  hideJobPanel(true);
  hideVehiclePanel(true);
  hideFamilyPanel(true);
  hideHousingPanel(true);
  hideInvestmentPanel(true);
  hideInsurancePanel(true);
  hideIncidentPanel(true);
  hideAnnualPanel(true);
  setResultDisplay(null, null);
  setDiceIdlePose();
  updateActiveTokenStyles();
  updateHud();
  positionAllTokens(true);
  updateTurnControls();
  statusPill.textContent = `${GAME_MODES[state.mode].label} · ${turnPrompt()}`;
  clearSavedGame();
  persistGameState('새 게임', true);
  await setBoardCamera(idleCameraMode(), state.position, true, 6);
}

async function ensureAudio() {
  if (preferences.sound === false) return;
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext = new AudioContextClass();
  }
  if (audioContext.state === 'suspended') await audioContext.resume();
}

function playImpactSound(strength = 0.5) {
  if (preferences.sound === false || !audioContext) return;
  const now = audioContext.currentTime;

  const bodyOsc = audioContext.createOscillator();
  const bodyGain = audioContext.createGain();
  const bodyFilter = audioContext.createBiquadFilter();
  bodyOsc.type = 'triangle';
  bodyOsc.frequency.setValueAtTime(135 + strength * 95, now);
  bodyOsc.frequency.exponentialRampToValueAtTime(68, now + 0.06);
  bodyFilter.type = 'lowpass';
  bodyFilter.frequency.value = 850;
  bodyGain.gain.setValueAtTime(0.0001, now);
  bodyGain.gain.exponentialRampToValueAtTime(0.042 + strength * 0.062, now + 0.003);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
  bodyOsc.connect(bodyFilter).connect(bodyGain).connect(audioContext.destination);

  const clickOsc = audioContext.createOscillator();
  const clickGain = audioContext.createGain();
  clickOsc.type = 'square';
  clickOsc.frequency.setValueAtTime(980 + Math.random() * 260, now);
  clickOsc.frequency.exponentialRampToValueAtTime(360, now + 0.018);
  clickGain.gain.setValueAtTime(0.012 + strength * 0.018, now);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
  clickOsc.connect(clickGain).connect(audioContext.destination);

  bodyOsc.start(now);
  bodyOsc.stop(now + 0.09);
  clickOsc.start(now);
  clickOsc.stop(now + 0.03);
}

function playThrowSound() {
  if (preferences.sound === false || !audioContext) return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(90, now);
  oscillator.frequency.exponentialRampToValueAtTime(170, now + 0.11);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.035, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.15);
}

function playSettleSound() { playTone(420, 0.05, 0.035); }
function playLandingSound() { playTone(560, 0.07, 0.045); }
function playNewYearSound() { playTone(720, 0.12, 0.038); }
function playStepSound(index, total) { playTone(250 + Math.min(index, total) * 9, 0.025, 0.018); }

function playTone(frequency, duration, volume) {
  if (preferences.sound === false || !audioContext) return;
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.01);
}

function formatMoney(value) {
  const amount = Math.max(0, Math.round(Number(value) || 0));
  if (amount >= 100_000_000) {
    const eok = amount / 100_000_000;
    return `${Number.isInteger(eok) ? eok : eok.toFixed(1)}억 원`;
  }
  if (amount >= 10_000) return `${Math.round(amount / 10_000).toLocaleString('ko-KR')}만 원`;
  return `${amount.toLocaleString('ko-KR')}원`;
}

function formatMoneyCompact(value) {
  const amount = Math.max(0, Math.round(Number(value) || 0));
  if (amount >= 100_000_000) {
    const eok = amount / 100_000_000;
    return `${Number.isInteger(eok) ? eok : eok.toFixed(1)}억`;
  }
  if (amount >= 10_000) return `${Math.round(amount / 10_000).toLocaleString('ko-KR')}만`;
  return amount.toLocaleString('ko-KR');
}

function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

gameMenuButton?.addEventListener('click', openGameMenu);
menuCloseButton?.addEventListener('click', closeGameMenu);
menuContinueButton?.addEventListener('click', closeGameMenu);
menuSaveButton?.addEventListener('click', () => {
  const saved = persistGameState('수동저장');
  if (menuStatusEl) menuStatusEl.textContent = saved ? '현재 진행상황을 저장했습니다.' : '현재 상태에서는 저장할 수 없습니다.';
});
menuHomeButton?.addEventListener('click', returnToStartScreen);
menuNewGameButton?.addEventListener('click', startFreshGameFromMenu);
soundToggle?.addEventListener('change', () => {
  preferences.sound = Boolean(soundToggle.checked);
  savePreferences();
  if (menuStatusEl) menuStatusEl.textContent = preferences.sound ? '효과음을 켰습니다.' : '효과음을 껐습니다.';
});
hapticToggle?.addEventListener('change', () => {
  preferences.haptics = Boolean(hapticToggle.checked);
  savePreferences();
  if (preferences.haptics) triggerHaptic(8);
  if (menuStatusEl) menuStatusEl.textContent = preferences.haptics ? '진동 피드백을 켰습니다.' : '진동 피드백을 껐습니다.';
});

window.__KLB_BOOT_STAGE__ = 'EVENT_BINDING';
window.__KLB_APP_READY__ = true;
window.__KLB_BOOT_STAGE__ = 'APP_READY';
window.KLB_ROLL_NOW = () => rollDice(false);
continueGameButton?.addEventListener('click', continueSavedGame);
newGameButton?.addEventListener('click', startNewGameFromLaunch);

// V57: iOS touch probe + direct fallback.
// Run the logic-only dice path first so rolling never depends on WebGL/Rapier.
rollButton.removeAttribute('onclick');
// V58: inline HTML owns the click so we can isolate iOS input from module execution.
window.KLB_V58_MOVE = (steps) => {
  if (state.rollStarting || state.rolling || state.moving) return;
  state.started = true;
  state.lastRollTotal = Number(steps) || 0;
  moveToken(state.lastRollTotal);
};
resetButton.addEventListener('click', async () => {
  if ((state.started || state.players.some((player) => (player.lap || 0) > 0 || (player.cash || 0) !== STARTING_CASH)) && !window.confirm('현재 진행을 지우고 처음부터 시작할까요?')) return;
  await resetGame();
});
saveButton?.addEventListener('click', () => {
  if (persistGameState('수동저장')) statusPill.textContent = '현재 게임을 저장했습니다.';
});
buyButton?.addEventListener('click', () => resolvePurchaseDecision('buy'));
skipBuyButton?.addEventListener('click', () => resolvePurchaseDecision('skip'));
loanBuyBank1Button?.addEventListener('click', () => resolvePurchaseDecision('bank1'));
loanBuyBank2Button?.addEventListener('click', () => resolvePurchaseDecision('bank2'));
auctionBidButtonsEl?.addEventListener('click',(event)=>{ const b=event.target.closest('button[data-bid]'); if(b&&!b.disabled) resolveAuctionDecision(b.dataset.bid); });
auctionPassButton?.addEventListener('click',()=>resolveAuctionDecision(null));
borrowBank1Button?.addEventListener('click', () => bankBorrow('bank1'));
borrowBank2Button?.addEventListener('click', () => bankBorrow('bank2'));
repayLoanButton?.addEventListener('click', bankRepay);
closeBankButton?.addEventListener('click', resolveBankDecision);
jobOfferListEl?.addEventListener('click', (event) => {
  const trainingButton = event.target.closest('button[data-training-id]');
  if (trainingButton && !trainingButton.disabled) {
    resolveJobDecision(`__train__:${trainingButton.dataset.trainingId}`);
    return;
  }
  const button = event.target.closest('button[data-job-id]');
  if (button && !button.disabled) resolveJobDecision(button.dataset.jobId);
});
skipJobButton?.addEventListener('click', () => resolveJobDecision(null));
businessOfferListEl?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-business-id]');
  if (button && !button.disabled) resolveBusinessDecision(button.dataset.businessId);
});
skipBusinessButton?.addEventListener('click', () => resolveBusinessDecision(null));
familyOfferListEl?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-family-action]');
  if (button && !button.disabled) resolveFamilyDecision(button.dataset.familyAction, button.dataset.profileId || null);
});
skipFamilyButton?.addEventListener('click', () => resolveFamilyDecision('skip', null));
housingOfferListEl?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-housing-id]');
  if (button && !button.disabled) resolveHousingDecision(button.dataset.housingId);
});
skipHousingButton?.addEventListener('click', () => resolveHousingDecision(null));
investmentOfferListEl?.addEventListener('click',(event)=>{ const b=event.target.closest('button[data-investment-action]'); if(!b||b.disabled)return; const r=applyInvestmentAction(state.current,b.dataset.investmentAction,b.dataset.investmentId); statusPill.textContent=r.note; renderInvestmentChoices(state.current); updateHud(); });
closeInvestmentButton?.addEventListener('click', resolveInvestmentPanel);
insuranceOfferListEl?.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-insurance-id]');
  if (button) togglePrivateInsurance(button.dataset.insuranceId);
});
closeInsuranceButton?.addEventListener('click', resolveInsurancePanel);
closeIncidentButton?.addEventListener('click', resolveIncidentPanel);
vehicleOfferListEl?.addEventListener('click',(event)=>{const b=event.target.closest('button[data-vehicle-id]'); if(b&&!b.disabled) resolveVehicleDecision(b.dataset.vehicleId);});
skipVehicleButton?.addEventListener('click',()=>resolveVehicleDecision(null));
gameModeSelect.addEventListener('change', () => {
  if (state.started || state.rolling || state.moving) {
    gameModeSelect.value = state.mode;
    return;
  }
  configureGame(gameModeSelect.value);
  requestAnimationFrame(() => setBoardCamera(idleCameraMode(), state.position, false, 6));
});
window.addEventListener('resize', () => {
  positionAllTokens(false);
  setBoardCamera(idleCameraMode(), state.position, false, 6);
}, { passive: true });
window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    positionAllTokens(false);
    setBoardCamera(idleCameraMode(), state.position, false, 6);
  }, 280);
}, { passive: true });

window.addEventListener('klb:pwaresume', () => {
  if (!world) {
    diceEngineRetryCount = 0;
    ensureDiceEngine();
  }
  requestAnimationFrame(() => {
    resize3D();
    positionAllTokens(false);
    updateHud();
    renderRoster();
    setBoardCamera(idleCameraMode(), state.position, false, 6);
  });
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') persistGameState('자동저장');
});
window.addEventListener('pagehide', () => persistGameState('자동저장'));
