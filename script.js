const sources = {
  openai55: {
    label: "OpenAI: Introducing GPT-5.5",
    url: "https://openai.com/index/introducing-gpt-5-5/",
    note: "Premiera, dostepnosc, ceny API i benchmarki GPT-5.5.",
  },
  openaiPricing: {
    label: "OpenAI API Pricing",
    url: "https://openai.com/api/pricing/",
    note: "Cennik tokenowy GPT-5.5 i GPT-5.4.",
  },
  openaiImages: {
    label: "OpenAI: ChatGPT Images 2.0",
    url: "https://openai.com/index/introducing-chatgpt-images-2-0/",
    note: "Premiera modelu obrazowego i opis mozliwosci.",
  },
  anthropicOpus: {
    label: "Anthropic: Claude Opus 4.7",
    url: "https://www.anthropic.com/claude/opus",
    note: "Dostepnosc, kontekst, pricing i zastosowania Claude Opus 4.7.",
  },
  googleGemma: {
    label: "Google: Gemma 4",
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/",
    note: "Rodzina Gemma 4, otwarte wagi i pozycje na leaderboardach open models.",
  },
  metaMuse: {
    label: "Meta AI: Muse Spark",
    url: "https://ai.meta.com/blog/introducing-muse-spark-msl",
    note: "Premiera Muse Spark i dystrybucja w ekosystemie Meta.",
  },
  openRouterQwenPlus: {
    label: "OpenRouter: Qwen3.6 Plus",
    url: "https://openrouter.ai/qwen/qwen3.6-plus",
    note: "Cena, kontekst i opis modelu Qwen3.6 Plus.",
  },
  openRouterQwenMax: {
    label: "OpenRouter: Qwen3.6 Max Preview",
    url: "https://openrouter.ai/qwen/qwen3.6-max-preview",
    note: "Cena, kontekst i opis modelu Qwen3.6 Max Preview.",
  },
  openRouterQwen27: {
    label: "OpenRouter: Qwen3.6 27B",
    url: "https://openrouter.ai/qwen/qwen3.6-27b-20260422",
    note: "Cena, kontekst, licencja i multimodalnosc Qwen3.6 27B.",
  },
  openRouterGlm: {
    label: "OpenRouter: GLM 5.1",
    url: "https://openrouter.ai/z-ai/glm-5.1",
    note: "Cena, kontekst i opis dlugich zadan agentowych.",
  },
  openRouterMiniMax: {
    label: "OpenRouter: MiniMax M2.7",
    url: "https://openrouter.ai/minimax/minimax-m2.7",
    note: "Cena i benchmarki SWE-Pro, Terminal Bench 2 oraz GDPval-AA.",
  },
  openRouterKimi: {
    label: "OpenRouter: Kimi K2.6",
    url: "https://openrouter.ai/moonshotai/kimi-k2.6",
    note: "Cena, kontekst i opis zastosowan coding / multi-agent.",
  },
  arena: {
    label: "Arena AI Leaderboard",
    url: "https://arena.ai/leaderboard",
    note: "Rankingi ELO dla kodu, tekstu i modeli obrazowych.",
  },
  artificial: {
    label: "Artificial Analysis Intelligence Index",
    url: "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
    note: "Indeks inteligencji i porownania frontier/open models.",
  },
  deepseekPricing: {
    label: "DeepSeek API Docs: Models & Pricing",
    url: "https://api-docs.deepseek.com/quick_start/pricing",
    note: "Oficjalne ceny, kontekst, cache hit/miss i nazwy modeli V4 Pro oraz V4 Flash.",
  },
  heygenAvatar: {
    label: "HeyGen: Avatar V",
    url: "https://www.heygen.com/blog/announcing-avatar-v",
    note: "Opis modelu Avatar V, data premiery i workflow z 15-sekundowego nagrania.",
  },
  hyperframes: {
    label: "HyperFrames by HeyGen",
    url: "https://hyperframes.heygen.com/",
    note: "Oficjalna strona frameworka HTML-to-video dla agentow AI.",
  },
};

const models = [
  {
    name: "GPT-5.5",
    provider: "OpenAI",
    type: "Frontier",
    release: "2026-04-23",
    context: 1000000,
    input: 5,
    output: 30,
    license: "Closed",
    availability: "ChatGPT, Codex, API soon",
    bestFor: "agentowe kodowanie, narzedzia, analiza danych, wiedza zawodowa",
    summary:
      "Najwyzszy ogolny wynik w zestawie, mocny Terminal-Bench i bardzo dobre zadania agentowe. Drogi output, ale OpenAI deklaruje lepsza token efficiency niz GPT-5.4.",
    metrics: [
      ["AA Index", 60],
      ["Terminal-Bench 2.0", 82.7],
      ["SWE-Bench Pro", 58.6],
      ["OSWorld", 78.7],
    ],
    sources: ["openai55", "openaiPricing", "artificial"],
  },
  {
    name: "GPT-5.5 Pro",
    provider: "OpenAI",
    type: "Frontier",
    release: "2026-04-23",
    context: 1000000,
    input: 30,
    output: 180,
    license: "Closed",
    availability: "ChatGPT Pro/Business/Enterprise, API planned",
    bestFor: "najtrudniejsze pytania, research, praca o wysokiej dokladnosci",
    summary:
      "Wariant premium. Publiczny cennik API jest bardzo wysoki, wiec sensowny raczej tam, gdzie jakosc ma wieksza wage niz koszt pojedynczego przebiegu.",
    metrics: [["AA Index", null]],
    sources: ["openai55", "openaiPricing"],
  },
  {
    name: "ChatGPT Images 2.0 / gpt-image-2",
    provider: "OpenAI",
    type: "Image",
    release: "2026-04-21",
    context: null,
    input: null,
    output: null,
    license: "Closed",
    availability: "ChatGPT all tiers, API",
    bestFor: "grafiki marketingowe, tekst w obrazie, warianty kreacji, edycja obrazow",
    summary:
      "Najwiekszy skok po stronie obrazow: lepszy tekst, spojnosc, proporcje i wiele wariantow. Cena zalezy od trybu obrazowego, nie od tokenow tekstowych.",
    metrics: [["Arena text-to-image", 1507]],
    sources: ["openaiImages", "arena"],
  },
  {
    name: "Claude Opus 4.7",
    provider: "Anthropic",
    type: "Frontier",
    release: "2026-04-16",
    context: 1000000,
    input: 5,
    output: 25,
    license: "Closed",
    availability: "Claude, Anthropic API, Bedrock, Vertex AI, Foundry",
    bestFor: "software engineering, dlugie zadania, workflow agentowe, analiza wizualna",
    summary:
      "Najmocniejszy Claude w tym zestawie. Bardzo dobry w kodowaniu i zadaniach zlozonych, choc realny koszt moze zalezec od tokenizacji i poziomu effort.",
    metrics: [
      ["AA Index", 57],
      ["Arena Code", 1572],
      ["SWE-Bench Pro", 64.3],
      ["Terminal-Bench 2.0", 69.4],
    ],
    sources: ["anthropicOpus", "arena", "artificial"],
  },
  {
    name: "Gemma 4 31B",
    provider: "Google",
    type: "Open weight",
    release: "2026-04-02",
    context: 256000,
    input: 0.13,
    output: 0.38,
    license: "Apache 2.0",
    availability: "local, Google AI Studio / Vertex, OpenRouter providers",
    bestFor: "lokalne AI, prywatnosc, multimodalne zadania przy niskim koszcie",
    summary:
      "Najciekawszy lokalny model miesiaca: otwarte wagi, dobra jakosc jak na rozmiar i sensowny koszt hostowanego inference.",
    metrics: [
      ["Arena text", 1452],
      ["Open model rank", 3],
    ],
    sources: ["googleGemma", "arena"],
  },
  {
    name: "Muse Spark",
    provider: "Meta",
    type: "Frontier",
    release: "2026-04-08",
    context: null,
    input: null,
    output: null,
    license: "Closed",
    availability: "Meta AI, planowane FB / IG / WhatsApp",
    bestFor: "consumer AI w ekosystemie Meta, multimodalne Q&A, zdrowie/ogolne query",
    summary:
      "Model nie jest pozycjonowany jako absolutne SOTA, ale ma ogromna przewage dystrybucyjna: miliardy uzytkownikow aplikacji Meta.",
    metrics: [
      ["AA Index", 52],
      ["Arena Code", 1512],
    ],
    sources: ["metaMuse", "arena", "artificial"],
  },
  {
    name: "Qwen3.6 Plus",
    provider: "Alibaba Qwen",
    type: "Frontier",
    release: "2026-04-02",
    context: 1000000,
    input: 0.325,
    output: 1.95,
    license: "Closed API",
    availability: "OpenRouter / Alibaba routes",
    bestFor: "repo-level coding, front-end, reasoning, dlugi kontekst",
    summary:
      "Bardzo tani model o duzym kontekscie. Ciekawy jako codzienny agent roboczy, zwlaszcza gdy koszt ma znaczenie.",
    metrics: [
      ["SWE-Bench Verified", 78.8],
      ["Arena Code", 1471],
    ],
    sources: ["openRouterQwenPlus", "arena"],
  },
  {
    name: "Qwen3.6 Max Preview",
    provider: "Alibaba Qwen",
    type: "Frontier",
    release: "2026-04-27",
    context: 262144,
    input: 1.3,
    output: 7.8,
    license: "Closed API",
    availability: "Alibaba Cloud Model Studio, Qwen Studio, OpenRouter",
    bestFor: "agentic coding, tool use, long-context reasoning",
    summary:
      "Drozej niz Plus, ale z pozycjonowaniem jako model frontier Qwen. Warto testowac, jesli Plus zaczyna pekac na trudnych zadaniach.",
    metrics: [["Parametry lacznie", 1000]],
    sources: ["openRouterQwenMax"],
  },
  {
    name: "Qwen3.6 27B",
    provider: "Alibaba Qwen",
    type: "Open weight",
    release: "2026-04-27",
    context: 262144,
    input: 0.5,
    output: 2,
    license: "Apache 2.0",
    availability: "Open weights, OpenRouter",
    bestFor: "lokalniejsze wdrozenia, multimodalne inputy, coding agent",
    summary:
      "Mniejszy, otwarty wariant z obrazem i wideo na wejsciu. Dobry kandydat do porownan z Gemma 4 i GLM.",
    metrics: [["Parametry", 27]],
    sources: ["openRouterQwen27"],
  },
  {
    name: "GLM 5.1",
    provider: "Z.ai",
    type: "Open weight",
    release: "2026-04-07",
    context: 202752,
    input: 1,
    output: 3.2,
    license: "Open weights",
    availability: "OpenRouter providers, Z.ai ecosystem",
    bestFor: "dlugie zadania agentowe, coding, autonomiczne iteracje",
    summary:
      "Mocno promowany jako model do wielogodzinnych zadan. W kodowym Arena jest wysoko w stawce nowych modeli.",
    metrics: [["Arena Code", 1534]],
    sources: ["openRouterGlm", "arena"],
  },
  {
    name: "MiniMax M2.7",
    provider: "MiniMax",
    type: "Open weight",
    release: "2026-03-18",
    context: 196608,
    input: 0.3,
    output: 1.2,
    license: "Open weights",
    availability: "OpenRouter providers",
    bestFor: "produktywnosc, debugowanie, dokumenty, agentowe biuro",
    summary:
      "Tani model do real-work productivity. Ciekawe benchmarki biurowe i agentowe, choc premiera zahacza o poprzedni miesiac.",
    metrics: [
      ["SWE-Pro", 56.2],
      ["Terminal Bench 2", 57],
      ["GDPval-AA ELO", 1495],
    ],
    sources: ["openRouterMiniMax"],
  },
  {
    name: "Kimi K2.6",
    provider: "Moonshot AI",
    type: "Open weight",
    release: "2026-04-20",
    context: 262144,
    input: 0.95,
    output: 4,
    license: "Open weights",
    availability: "Kimi, OpenRouter, third-party providers",
    bestFor: "coding, UI generation, multi-agent orchestration, dlugie zadania",
    summary:
      "Mocny w coding-driven UI i agentowych scenariuszach. Nie najtanszy z open-weightow, ale dobry kandydat do testow jakosciowych.",
    metrics: [["Arena Code", 1529]],
    sources: ["openRouterKimi", "arena"],
  },
  {
    name: "DeepSeek V4 Pro",
    provider: "DeepSeek",
    type: "Open weight",
    release: "2026-04-24",
    context: 1000000,
    input: 1.74,
    output: 3.48,
    license: "MIT",
    availability: "DeepSeek API / OpenRouter providers",
    bestFor: "tani frontier-like coding, dlugi kontekst, agentowe subtaski",
    summary:
      "Bardzo agresywna cena jak na model o ambicjach frontier. Wymaga praktycznych testow parserow reasoning i integracji agentowych.",
    metrics: [["Parametry lacznie", 1600]],
    sources: ["deepseekPricing"],
  },
  {
    name: "DeepSeek V4 Flash",
    provider: "DeepSeek",
    type: "Open weight",
    release: "2026-04-24",
    context: 1000000,
    input: 0.14,
    output: 0.28,
    license: "MIT",
    availability: "DeepSeek API / OpenRouter providers",
    bestFor: "tanie subagenty, szybkie przebiegi, masowe zadania",
    summary:
      "Najmocniejszy argument kosztowy w dashboardzie: 1M kontekstu i bardzo niski output. Idealny kandydat na worker model, jesli jakosc wystarczy.",
    metrics: [["Parametry lacznie", 284]],
    sources: ["deepseekPricing"],
  },
  {
    name: "HeyGen Avatar V",
    provider: "HeyGen",
    type: "App / agent",
    release: "2026-04-08",
    context: null,
    input: null,
    output: null,
    license: "Closed app",
    availability: "HeyGen",
    bestFor: "awatary wideo, marketing, lokalizacje, kreacje social",
    summary:
      "To bardziej produkt niz LLM do API. Warto pokazac w dashboardzie jako osobna kategoria kreatywna, bez porownywania tokenow do modeli tekstowych.",
    metrics: [],
    sources: ["heygenAvatar"],
  },
  {
    name: "HeyGen HyperFrames",
    provider: "HeyGen",
    type: "App / agent",
    release: "2026-04-17",
    context: null,
    input: null,
    output: null,
    license: "Closed app",
    availability: "HeyGen",
    bestFor: "generowanie i edycja video assets",
    summary:
      "Open-source framework do renderowania wideo z HTML/CSS/JS, zaprojektowany pod agentow. Brak sensownego porownania tokenowego, wiec zostaje w osobnej szufladzie.",
    metrics: [],
    sources: ["hyperframes"],
  },
];

const comparableModels = models.filter((model) => !["Image", "App / agent"].includes(model.type));

const newsItems = [
  {
    title: "Codex do prawie wszystkiego",
    category: "OpenAI",
    priority: "high",
    date: "2026-04-16",
    summary:
      "OpenAI mocno rozbudowalo Codexa: obsluga komputera, wbudowana przegladarka, generowanie obrazow i ponad 90 wtyczek.",
    details:
      "Najwazniejszy sygnal strategiczny: Codex przestaje byc tylko narzedziem do kodu i staje sie platforma do budowania agentowych workflow.",
    sourceKeys: [],
    links: [{ label: "OpenAI", url: "https://openai.com/pl-PL/index/codex-for-almost-everything/" }],
  },
  {
    title: "Nowy tier ChatGPT za 100 USD miesiecznie",
    category: "OpenAI",
    priority: "medium",
    date: "2026-04-16",
    summary:
      "Przy okazji ekspansji Codexa pojawil sie nowy, drozszy plan subskrypcyjny dla bardziej intensywnych uzytkownikow.",
    details:
      "Dla widzow istotne jest rozdzielenie: abonament w ChatGPT/Codex to nie to samo co koszt API liczony za tokeny.",
    sourceKeys: [],
    links: [{ label: "ChatGPT Pricing", url: "https://chatgpt.com/pl-PL/pricing/" }],
  },
  {
    title: "OpenAI porzuca sidequesty",
    category: "OpenAI",
    priority: "medium",
    date: "2026-04-17",
    summary:
      "Odejscia Kevina Weila i Billa Peeblesa wygladaja jak kolejny znak, ze firma przesuwa energie z pobocznych projektow w strone agentow i superaplikacji.",
    details:
      "W tle jest pytanie, czy badania naukowe i kreatywne eksperymenty nie przegrywaja z korporacyjnymi zastosowaniami agentow.",
    sourceKeys: [],
    links: [
      { label: "The Verge", url: "https://www.theverge.com/ai-artificial-intelligence/897778/openai-chatgpt-codex-atlas-browser-superapp" },
      { label: "TechCrunch", url: "https://techcrunch.com/2026/04/17/kevin-weil-and-bill-peebles-exit-openai-as-company-continues-to-shed-side-quests/" },
    ],
  },
  {
    title: "Starbucks w ChatGPT",
    category: "OpenAI",
    priority: "low",
    date: "2026-04-15",
    summary:
      "Starbucks uruchomil bete aplikacji w ChatGPT do odkrywania i zamawiania napojow.",
    details:
      "Dzisiaj wyglada to niezgrabnie, ale pokazuje, jak wazny dla firm moze byc App Store wewnatrz ChatGPT.",
    sourceKeys: [],
    links: [{ label: "CNBC", url: "https://www.cnbc.com/2026/04/15/starbucks-launches-beta-app-in-chatgpt-to-fuel-new-drink-discovery.html" }],
  },
  {
    title: "ChatGPT Images 2.0",
    category: "OpenAI",
    priority: "high",
    date: "2026-04-21",
    summary:
      "Nowy model obrazowy poprawia realizm, tekst w obrazie, prace na wielu proporcjach i generowanie wielu wariantow.",
    details:
      "To zostaje jako news kreatywny, a nie w kalkulatorze tokenow, bo koszt i benchmarki obrazow sa innego typu niz modele tekstowe.",
    sourceKeys: ["openaiImages", "arena"],
    links: [],
  },
  {
    title: "Workspace agents w ChatGPT",
    category: "OpenAI",
    priority: "high",
    date: "2026-04-22",
    summary:
      "Agent tworzony z poziomu chatu moze dostac narzedzia, dzialac na wezwanie lub wedlug harmonogramu i uczyc sie w pracy.",
    details:
      "Dostepnosc jest ograniczona do planow Business, Edu i Enterprise, wiec dla wielu osob to bardziej kierunek produktu niz funkcja na dzis.",
    sourceKeys: [],
    links: [{ label: "OpenAI", url: "https://openai.com/pl-PL/index/introducing-workspace-agents-in-chatgpt/" }],
  },
  {
    title: "GPT-5.5",
    category: "OpenAI",
    priority: "high",
    date: "2026-04-23",
    summary:
      "Nowy model OpenAI jest mocny w narzedziach, analizie danych, planowaniu i zadaniach agentowych.",
    details:
      "W porownywarce modeli jest juz pokazany liczbowo: cena, kontekst i benchmarki.",
    sourceKeys: ["openai55", "openaiPricing", "artificial"],
    links: [],
  },
  {
    title: "Claude Code i przypadkowy wyciek kodu",
    category: "Anthropic",
    priority: "medium",
    date: "2026-04-01",
    summary:
      "Wokol Claude Code pojawila sie historia przypadkowego ujawnienia pelnego kodu zrodlowego przez blad ludzki.",
    details:
      "To dobry kontrapunkt do narracji o firmach budujacych superbezpieczne, autonomiczne systemy agentowe.",
    sourceKeys: [],
    links: [{ label: "X thread", url: "https://x.com/Fried_rice/status/2038894956459290963" }],
  },
  {
    title: "Claude Code wykrywa frustracje uzytkownika",
    category: "Anthropic",
    priority: "low",
    date: "2026-04-03",
    summary:
      "Claude Code mial skanowac wiadomosci pod katem przeklenstw i sygnalow irytacji.",
    details:
      "Ciekawostka produktowa, ale tez temat o granicy miedzy pomocnym UX a monitorowaniem tonu uzytkownika.",
    sourceKeys: [],
    links: [{ label: "PCWorld", url: "https://www.pcworld.com/article/3104748/claude-code-is-scanning-your-messages-for-curse-words.html" }],
  },
  {
    title: "Open-source agenty: Hermes Agent",
    category: "Lokalne modele",
    priority: "medium",
    date: "2026-04-10",
    summary:
      "Po fali OpenClaw coraz wiecej uwagi zbiera Hermes Agent, szczegolnie przez nacisk na prace z pamiecia.",
    details:
      "Wniosek z odcinka: open-source agenty staja sie wazna alternatywa, gdy platformy zamkniete robia sie coraz bardziej strategiczne i kontrolowane.",
    sourceKeys: [],
    links: [{ label: "OpenRouter apps", url: "https://openrouter.ai/apps/hermes-agent" }],
  },
  {
    title: "Claude wraca do uzytkownikow Windowsa",
    category: "Anthropic",
    priority: "medium",
    date: "2026-04-05",
    summary:
      "Anthropic pokazalo Cowork na Windowsa oraz connector z Microsoft Office.",
    details:
      "To wazne, bo realne agentowe workflow w firmach bardzo czesto siedza w Office, plikach i desktopie, a nie w czystym chacie.",
    sourceKeys: [],
    links: [{ label: "Claude on X", url: "https://x.com/claudeai/status/2039836891508261106" }],
  },
  {
    title: "Project Glasswing",
    category: "Anthropic",
    priority: "medium",
    date: "2026-04-10",
    summary:
      "Anthropic opublikowalo raport dotyczacy Project Glasswing.",
    details:
      "To bardziej temat bezpieczenstwa i strategii niz porownanie modeli, wiec trafia do newsow.",
    sourceKeys: [],
    links: [{ label: "Anthropic", url: "https://www.anthropic.com/glasswing" }],
  },
  {
    title: "Claude Managed Agents",
    category: "Anthropic",
    priority: "high",
    date: "2026-04-15",
    summary:
      "Anthropic pokazuje pelniejszy sposob budowania, hostowania i utrzymywania produkcyjnych agentow.",
    details:
      "To bezposrednia odpowiedz na trend: firmy nie chca tylko modelu, chca infrastruktury do agentow w jednym miejscu.",
    sourceKeys: [],
    links: [{ label: "Claude blog", url: "https://claude.com/blog/claude-managed-agents" }],
  },
  {
    title: "Claude Desktop, Routines i Live Artifacts",
    category: "Anthropic",
    priority: "medium",
    date: "2026-04-20",
    summary:
      "Anthropic odswieza aplikacje desktopowa, dodaje Routines w Claude Code i Live Artifacts w Claude Cowork.",
    details:
      "Kierunek jest jasny: mniej jednorazowego czatu, wiecej powtarzalnych workflow i pracy na artefaktach.",
    sourceKeys: [],
    links: [{ label: "Claude on X", url: "https://x.com/claudeai/status/2044095086460309790" }],
  },
  {
    title: "Claude dla pracy kreatywnej",
    category: "Anthropic",
    priority: "medium",
    date: "2026-04-22",
    summary:
      "Anthropic pokazalo polaczenia z Adobe Creative Cloud i Blenderem.",
    details:
      "To element walki o tworcow: nie tylko pisanie tekstu i kodu, ale asysta w realnym pipeline kreatywnym.",
    sourceKeys: [],
    links: [{ label: "Anthropic", url: "https://www.anthropic.com/news/claude-for-creative-work" }],
  },
  {
    title: "Claude Opus 4.7 i Claude Design",
    category: "Anthropic",
    priority: "high",
    date: "2026-04-16",
    summary:
      "Opus 4.7 przyniosl wzrost w kodowaniu i zadaniach zlozonych, ale premiera nie obyła sie bez dyskusji i kontrowersji.",
    details:
      "W porownywarce modeli jest pokazany jako jeden z glownych punktow odniesienia dla GPT-5.5 i modeli open-weight.",
    sourceKeys: ["anthropicOpus", "arena", "artificial"],
    links: [{ label: "Claude Design thread", url: "https://x.com/minchoi/status/2045705871527653794" }],
  },
  {
    title: "Gemini czeka na Google I/O",
    category: "Gemini",
    priority: "low",
    date: "2026-04-30",
    summary:
      "W samym Gemini nie bylo w tym miesiacu wielkiej premiery frontier. Google trzyma amunicje na I/O zaplanowane na 19 maja.",
    details:
      "Dlatego w dashboardzie wiecej miejsca dostaje Gemma 4 i funkcje aplikacji Gemini niz nowy model Gemini Pro.",
    sourceKeys: [],
    links: [],
  },
  {
    title: "Gemma 4",
    category: "Gemini",
    priority: "high",
    date: "2026-04-02",
    summary:
      "Google wypuscilo rodzine otwartowagowych modeli Gemma 4, w tym warianty sensowne do lokalnego uzycia.",
    details:
      "To jedna z najwazniejszych premier miesiaca dla osob, ktore chca testowac modele poza zamknietymi platformami.",
    sourceKeys: ["googleGemma", "arena"],
    links: [],
  },
  {
    title: "AI Overviews i skala halucynacji",
    category: "Gemini",
    priority: "medium",
    date: "2026-04-18",
    summary:
      "Raport o AI Overviews pokazuje, ze nawet wysoka procentowa trafnosc na ogromnej skali oznacza masowo duzo blednych odpowiedzi.",
    details:
      "Dobry przyklad do odcinka: 90% prawdy brzmi dobrze, dopoki nie przeliczy sie tego na miliardy zapytan.",
    sourceKeys: [],
    links: [
      { label: "TechSpot", url: "https://www.techspot.com/news/111984-google-ai-overviews-might-hallucinate-tens-millions-times.html" },
      { label: "Hotdogs example", url: "https://tomgermain.com/hotdogs.html" },
    ],
  },
  {
    title: "Gemini desktop, wizualizacje i notatniki",
    category: "Gemini",
    priority: "medium",
    date: "2026-04-24",
    summary:
      "Google udostepnilo natywna aplikacje desktopowa Gemini oraz funkcje interaktywnych wizualizacji i notatnikow synchronizowanych z NotebookLM.",
    details:
      "To produktywne funkcje aplikacyjne, wiec sa opisane jako news, nie jako model w tabeli cen.",
    sourceKeys: [],
    links: [
      { label: "3D models/charts", url: "https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/" },
      { label: "Notebooks", url: "https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm" },
    ],
  },
  {
    title: "Meta Muse Spark",
    category: "Meta",
    priority: "high",
    date: "2026-04-08",
    summary:
      "Pierwszy model z nowego dzialu Superinteligencji prowadzonego przez Alexandra Wanga.",
    details:
      "Najwieksza przewaga Mety to dystrybucja: model moze trafic do miliardow uzytkownikow Facebooka, Instagrama i WhatsAppa.",
    sourceKeys: ["metaMuse", "arena", "artificial"],
    links: [],
  },
  {
    title: "Chiny blokuja przejecie Manusa przez Mete",
    category: "Meta",
    priority: "medium",
    date: "2026-04-27",
    summary:
      "Chinskie wladze zablokowaly ruch Mety wokol Manusa.",
    details:
      "To przypomnienie, ze wojna o agentow AI jest juz takze tematem regulacyjnym i geopolitycznym.",
    sourceKeys: [],
    links: [{ label: "CNN", url: "https://edition.cnn.com/2026/04/27/tech/china-blocks-meta-manus-intl-hnk" }],
  },
  {
    title: "Awatar Zuckerberga",
    category: "Meta",
    priority: "low",
    date: "2026-04-18",
    summary:
      "Meta pracuje nad awatarem CEO, ktory ma znac wartosci i maniery Zuckerberga.",
    details:
      "Ciekawa historia o tym, jak firmy beda probowaly kodowac osobowosc liderow w systemach AI.",
    sourceKeys: [],
    links: [{ label: "The Verge", url: "https://www.theverge.com/tech/910990/meta-ceo-mark-zuckerberg-ai-clone" }],
  },
  {
    title: "Monitoring pracownikow w Meta",
    category: "Meta",
    priority: "medium",
    date: "2026-04-20",
    summary:
      "Meta ma instalowac oprogramowanie sledzace aktywnosc pracownikow w USA, aby wspierac trening modeli.",
    details:
      "To dobry kontrast do opowiesci o awatarach i superinteligencji: dane do AI czesto pochodza z bardzo przyziemnego monitoringu pracy.",
    sourceKeys: [],
    links: [{ label: "Times of India", url: "https://timesofindia.indiatimes.com/technology/tech-news/mark-zuckerbergs-meta-to-all-employees-in-america-we-are-installing-tracking-software-in-your-machines-as-we-need-your-help-to-/articleshow/130424722.cms" }],
  },
  {
    title: "Qwen 3.6: Plus, Max i 27B",
    category: "Lokalne modele",
    priority: "high",
    date: "2026-04-27",
    summary:
      "Alibaba wypuscila kilka waznych wariantow Qwen 3.6: Plus, Max Preview i mniejszy 27B.",
    details:
      "W porownywarce modeli sa pokazane ceny, kontekst i zastosowania tych wariantow.",
    sourceKeys: ["openRouterQwenPlus", "openRouterQwenMax", "openRouterQwen27"],
    links: [],
  },
  {
    title: "GLM 5.1 od Z.ai",
    category: "Lokalne modele",
    priority: "high",
    date: "2026-04-07",
    summary:
      "GLM 5.1 jest jednym z mocniejszych otwartowagowych modeli miesiaca, szczegolnie pod dlugie zadania agentowe.",
    details:
      "Pozycjonowanie modelu jest jasne: nie minutowa rozmowa, tylko wielogodzinna praca nad zadaniem.",
    sourceKeys: ["openRouterGlm"],
    links: [{ label: "Z.ai blog", url: "https://z.ai/blog/glm-5.1" }],
  },
  {
    title: "MiniMax M2.7",
    category: "Lokalne modele",
    priority: "medium",
    date: "2026-04-14",
    summary:
      "MiniMax M2.7 trafia do zestawu przez nacisk na agentowa produktywnosc i prace z dokumentami.",
    details:
      "W modelach jest pokazany jako tani kandydat do workflow biurowych i debuggingu.",
    sourceKeys: ["openRouterMiniMax"],
    links: [{ label: "MiniMax on X", url: "https://x.com/MiniMax_AI/status/2043132047397659000" }],
  },
  {
    title: "Kimi K2.6",
    category: "Lokalne modele",
    priority: "high",
    date: "2026-04-20",
    summary:
      "Moonshot AI wypuscilo Kimi K2.6, model mocno pozycjonowany pod coding, UI i orkiestracje wielu agentow.",
    details:
      "To jeden z modeli, ktory warto zestawiac z GLM, Qwen i DeepSeek w praktycznych testach.",
    sourceKeys: ["openRouterKimi"],
    links: [{ label: "Kimi blog", url: "https://www.kimi.com/blog/kimi-k2-6" }],
  },
  {
    title: "DeepSeek V4 Pro i Flash",
    category: "Lokalne modele",
    priority: "high",
    date: "2026-04-24",
    summary:
      "DeepSeek pokazal V4 w dwoch wersjach: Pro i Flash, z 1M kontekstu i bardzo agresywnymi cenami.",
    details:
      "W dashboardzie Flash jest najmocniejszym argumentem kosztowym, a Pro najciekawszym frontier-like modelem open-weight.",
    sourceKeys: ["deepseekPricing"],
    links: [{ label: "TechCrunch", url: "https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models" }],
  },
  {
    title: "OpenRouter jako poligon testowy modeli",
    category: "Lokalne modele",
    priority: "medium",
    date: "2026-04-25",
    summary:
      "OpenRouter pozwala szybko porownywac ceny, odpowiedzi i popularnosc modeli w agentowych aplikacjach.",
    details:
      "Szczegolnie ciekawe jest podgladanie, ktore modele realnie wybieraja ludzie w narzedziach typu Hermes Agent.",
    sourceKeys: [],
    links: [{ label: "Hermes Agent apps", url: "https://openrouter.ai/apps/hermes-agent" }],
  },
  {
    title: "Personal Wiki Karpathy'ego",
    category: "Pozostale",
    priority: "medium",
    date: "2026-04-05",
    summary:
      "Andrej Karpathy pokazal podejscie do osobistej bazy wiedzy dla agentow AI.",
    details:
      "To laczy sie ze wzrostem popularnosci Obsidiana i pytaniem, jak karmic agentow wlasna pamiecia zamiast tylko kontekstem z prompta.",
    sourceKeys: [],
    links: [{ label: "Karpathy on X", url: "https://x.com/karpathy/status/2039805659525644595" }],
  },
  {
    title: "HeyGen Avatar V",
    category: "Pozostale",
    priority: "medium",
    date: "2026-04-08",
    summary:
      "HeyGen pokazal Avatar V, model awatarow tworzony z krotkiego nagrania referencyjnego.",
    details:
      "To zostaje jako bloczek newsowy, nie jako model w porownywarce cen tokenow.",
    sourceKeys: ["heygenAvatar"],
    links: [],
  },
  {
    title: "HeyGen HyperFrames",
    category: "Pozostale",
    priority: "medium",
    date: "2026-04-17",
    summary:
      "HyperFrames to open-source framework HTML-to-video zaprojektowany pod agentow AI.",
    details:
      "Dla tworcow i developerow to ciekawy most miedzy vibe-codingiem a produkcja wideo.",
    sourceKeys: ["hyperframes"],
    links: [],
  },
  {
    title: "Sklep w SF i kawiarnia w Sztokholmie",
    category: "Pozostale",
    priority: "low",
    date: "2026-04-28",
    summary:
      "Ciekawa historia o fizycznych miejscach budowanych wokol kultury AI.",
    details:
      "To nie jest news modelowy, ale dobrze domyka odcinek jako przyklad, jak AI wychodzi poza chaty i API.",
    sourceKeys: [],
    links: [{ label: "Andon Labs on X", url: "https://x.com/andonlabs/status/2046984201954799833" }],
  },
  {
    title: "Film o Bitcoinie z budzetem po cieciach",
    category: "Pozostale",
    priority: "low",
    date: "2026-04-20",
    summary:
      "Film o Satoshim mial zejsc z budzetu 300 mln do 70 mln dolarow, z nagraniami w 20 dni i premiera w Cannes.",
    details:
      "To ciekawy kontekst dla rozmowy o tym, jak AI i nowe procesy produkcyjne moga zmieniac koszty filmow.",
    sourceKeys: [],
    links: [{ label: "Yahoo Entertainment", url: "https://www.yahoo.com/entertainment/movies/articles/killing-satoshi-70m-bitcoin-film-201248303.html" }],
  },
  {
    title: "Viralowa reklama zrobiona z AI",
    category: "Pozostale",
    priority: "low",
    date: "2026-04-18",
    summary:
      "Przyklad reklamy, ktora poszla viralem i pokazuje, co pojedyncza osoba moze zrobic narzedziami AI.",
    details:
      "Dobry kontrast do wielkich premier modeli: wartosc czesto jest w dystrybucji i pomysle, nie tylko w leaderboardzie.",
    sourceKeys: [],
    links: [{ label: "X example", url: "https://x.com/minhsmind/status/2043763150672278016" }],
  },
  {
    title: "Medvi i jednoosobowy unicorn",
    category: "Pozostale",
    priority: "high",
    date: "2026-04-02",
    summary:
      "Medvi pokazuje ciemniejsza strone AI growth: agresywny marketing, fikcyjne profile i ogromne przychody w sprzedazy lekow na odchudzanie.",
    details:
      "Historia pasuje do tezy o solo-biznesach z AI, ale jednoczesnie pokazuje ryzyka etyczne i regulacyjne takiego wzrostu.",
    sourceKeys: [],
    links: [{ label: "New York Times", url: "https://www.nytimes.com/2026/04/02/technology/ai-billion-dollar-company-medvi.html" }],
  },
];

const state = {
  query: "",
  provider: "all",
  type: "all",
  sort: "aa-desc",
  view: "cards",
  newsQuery: "",
  newsCategory: "all",
  newsPriority: "all",
};

const formatMoney = (value) => {
  if (value === null || value === undefined) return "n/d";
  if (value === 0) return "$0";
  return `$${value.toLocaleString("en-US", { maximumFractionDigits: 3 })}`;
};

const formatContext = (value) => {
  if (!value) return "n/d";
  if (value >= 1000000) return `${value / 1000000}M`;
  return `${Math.round(value / 1000)}K`;
};

const modelScore = (model, label) => {
  const metric = model.metrics.find(([name]) => name === label);
  return metric ? metric[1] : null;
};

const primaryMetric = (model) => {
  const aa = modelScore(model, "AA Index");
  if (aa !== null && aa !== undefined) return `AA ${aa}`;
  const first = model.metrics.find(([, value]) => value !== null && value !== undefined);
  return first ? `${first[0]} ${first[1]}` : "brak benchmarku";
};

function filteredModels() {
  const q = state.query.trim().toLowerCase();
  const filtered = comparableModels.filter((model) => {
    const blob = [
      model.name,
      model.provider,
      model.type,
      model.license,
      model.availability,
      model.bestFor,
      model.summary,
    ]
      .join(" ")
      .toLowerCase();
    return (
      (!q || blob.includes(q)) &&
      (state.provider === "all" || model.provider === state.provider) &&
      (state.type === "all" || model.type === state.type)
    );
  });

  return filtered.sort((a, b) => {
    if (state.sort === "output-asc") return (a.output ?? Infinity) - (b.output ?? Infinity);
    if (state.sort === "input-asc") return (a.input ?? Infinity) - (b.input ?? Infinity);
    if (state.sort === "context-desc") return (b.context ?? -1) - (a.context ?? -1);
    if (state.sort === "date-desc") return b.release.localeCompare(a.release);
    return (modelScore(b, "AA Index") ?? -1) - (modelScore(a, "AA Index") ?? -1);
  });
}

function metricBars(model) {
  if (!model.metrics.length) {
    return `<p>Brak publicznego benchmarku porownywalnego z modelami tokenowymi.</p>`;
  }

  return model.metrics
    .map(([label, value]) => {
      if (value === null || value === undefined) {
        return `<div class="bar-row"><span>${label}</span><div class="bar-track"></div><strong>n/d</strong></div>`;
      }
      const max = label.includes("Arena") || label.includes("ELO") ? 1600 : label.includes("Parametry") ? 1600 : 100;
      const width = Math.max(3, Math.min(100, (value / max) * 100));
      return `<div class="bar-row"><span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div><strong>${value}</strong></div>`;
    })
    .join("");
}

function sourceLinks(model) {
  if (!model.sources.length) return `<span class="pill red">do uzupelnienia</span>`;
  return model.sources
    .map((key) => `<a class="source-link" href="${sources[key].url}" target="_blank" rel="noreferrer">${sources[key].label}</a>`)
    .join("");
}

function cardTemplate(model) {
  const closed = model.license.toLowerCase().includes("closed");
  return `
    <article class="model-card">
      <div class="card-top">
        <div>
          <h3>${model.name}</h3>
          <p>${model.provider} · ${model.release}</p>
        </div>
        <span class="pill ${closed ? "red" : ""}">${model.type}</span>
      </div>
      <div class="metric-grid">
        <div class="metric"><span>Kontekst</span><strong>${formatContext(model.context)}</strong></div>
        <div class="metric"><span>Licencja</span><strong>${model.license}</strong></div>
        <div class="metric"><span>Input / 1M</span><strong>${formatMoney(model.input)}</strong></div>
        <div class="metric"><span>Output / 1M</span><strong>${formatMoney(model.output)}</strong></div>
      </div>
      <p>${model.summary}</p>
      <div class="benchmarks">${metricBars(model)}</div>
      <div class="card-actions">${sourceLinks(model)}</div>
    </article>`;
}

function tableRow(model) {
  return `
    <tr>
      <td><strong>${model.name}</strong><br><small>${model.bestFor}</small></td>
      <td>${model.provider}</td>
      <td>${model.type}</td>
      <td>${formatContext(model.context)}</td>
      <td>${formatMoney(model.input)}</td>
      <td>${formatMoney(model.output)}</td>
      <td>${modelScore(model, "AA Index") ?? "n/d"}</td>
      <td>${primaryMetric(model)}</td>
    </tr>`;
}

function renderModels() {
  const data = filteredModels();
  document.querySelector("#resultCount").textContent = `${data.length} z ${comparableModels.length} modeli`;
  document.querySelector("#cardsView").innerHTML = data.map(cardTemplate).join("");
  document.querySelector("#modelTableBody").innerHTML = data.map(tableRow).join("");
}

function renderCosts() {
  const inputTokens = Number(document.querySelector("#inputTokens").value || 0);
  const outputTokens = Number(document.querySelector("#outputTokens").value || 0);
  const requests = Number(document.querySelector("#requestsCount").value || 1);
  document.querySelector("#scenarioLabel").textContent = `${requests}x ${inputTokens.toLocaleString("pl-PL")} in / ${outputTokens.toLocaleString("pl-PL")} out`;

  const priced = comparableModels
    .filter((model) => model.input !== null && model.output !== null)
    .map((model) => ({
      ...model,
      cost: ((inputTokens * requests) / 1000000) * model.input + ((outputTokens * requests) / 1000000) * model.output,
    }))
    .sort((a, b) => a.cost - b.cost)
    .slice(0, 8);

  document.querySelector("#costList").innerHTML = priced
    .map(
      (model) => `
        <div class="cost-item">
          <div>
            <strong>${model.name}</strong>
            <br><small>${model.provider} · ${formatMoney(model.input)} in / ${formatMoney(model.output)} out</small>
          </div>
          <strong>$${model.cost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
        </div>`
    )
    .join("");
}

function filteredNews() {
  const q = state.newsQuery.trim().toLowerCase();
  return newsItems
    .filter((item) => {
      const blob = [item.title, item.category, item.summary, item.details].join(" ").toLowerCase();
      return (
        (!q || blob.includes(q)) &&
        (state.newsCategory === "all" || item.category === state.newsCategory) &&
        (state.newsPriority === "all" || item.priority === state.newsPriority)
      );
    })
    .sort((a, b) => {
      const rank = { high: 3, medium: 2, low: 1 };
      const priorityDiff = rank[b.priority] - rank[a.priority];
      return priorityDiff || b.date.localeCompare(a.date);
    });
}

function newsLinks(item) {
  const sourceLinks = item.sourceKeys
    .map((key) => sources[key])
    .filter(Boolean)
    .map((source) => ({ label: source.label, url: source.url }));
  const links = [...sourceLinks, ...item.links];
  if (!links.length) return "";
  return `<div class="news-links">${links
    .map((link) => `<a class="source-link" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("")}</div>`;
}

function newsCard(item) {
  return `
    <article class="news-card priority-${item.priority}">
      <div class="news-topline">
        <span class="pill">${item.category}</span>
        <time datetime="${item.date}">${item.date}</time>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <small>${item.details}</small>
      ${newsLinks(item)}
    </article>`;
}

function renderNews() {
  const data = filteredNews();
  document.querySelector("#newsCount").textContent = `${data.length} z ${newsItems.length} newsow`;
  document.querySelector("#newsGrid").innerHTML = data.map(newsCard).join("");
}

function renderSources() {
  document.querySelector("#sourceList").innerHTML = Object.values(sources)
    .map(
      (source) => `
        <article>
          <span>Zrodlo</span>
          <h3><a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></h3>
          <p>${source.note}</p>
        </article>`
    )
    .join("");
}

function initFilters() {
  const providers = [...new Set(comparableModels.map((model) => model.provider))].sort();
  document.querySelector("#providerFilter").insertAdjacentHTML(
    "beforeend",
    providers.map((provider) => `<option value="${provider}">${provider}</option>`).join("")
  );
  const categories = [...new Set(newsItems.map((item) => item.category))].sort();
  document.querySelector("#newsCategoryFilter").insertAdjacentHTML(
    "beforeend",
    categories.map((category) => `<option value="${category}">${category}</option>`).join("")
  );

  document.querySelector("#newsSearchInput").addEventListener("input", (event) => {
    state.newsQuery = event.target.value;
    renderNews();
  });
  document.querySelector("#newsCategoryFilter").addEventListener("change", (event) => {
    state.newsCategory = event.target.value;
    renderNews();
  });
  document.querySelector("#newsPriorityFilter").addEventListener("change", (event) => {
    state.newsPriority = event.target.value;
    renderNews();
  });
  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderModels();
  });
  document.querySelector("#providerFilter").addEventListener("change", (event) => {
    state.provider = event.target.value;
    renderModels();
  });
  document.querySelector("#typeFilter").addEventListener("change", (event) => {
    state.type = event.target.value;
    renderModels();
  });
  document.querySelector("#sortSelect").addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderModels();
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.querySelectorAll("[data-view]").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelector("#cardsView").classList.toggle("hidden", state.view !== "cards");
      document.querySelector("#tableView").classList.toggle("hidden", state.view !== "table");
    });
  });
  ["#inputTokens", "#outputTokens", "#requestsCount"].forEach((selector) => {
    document.querySelector(selector).addEventListener("input", renderCosts);
  });
}

document.querySelector("#statNewsCount").textContent = newsItems.length;
document.querySelector("#statModelCount").textContent = comparableModels.length;
initFilters();
renderNews();
renderModels();
renderCosts();
renderSources();
