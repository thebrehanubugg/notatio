/*
	list of words
	a notatio file
*/


LEXICON = [
	// verbs
	{
		word: "walk",
		pos: "verb",
		plural: "walks",
		present_progressive: "walking",
		past: "walked"
	},
	{
		word: "eat",
		pos: "verb",
		plural: "eat",
		present_progressive: "eating",
		past: "ate"
	},

	// noun
	{
		word: "man",
		pos: "noun",
		isPerson: true,
		plural: "men"
	},
	{
		word: "woman",
		pos: "noun",
		isPerson: true,
		plural: "women"
	},
	{
		word: "banker",
		pos: "noun",
		isPerson: true,
		plural: "bankers"
	},

	// prepositions
	{
		word: "of",
		pos: "preposition"
	},
	{
		word: "in",
		pos: "preposition"
	},
	{
		word: "to",
		pos: "preposition"
	},
	{
		word: "for",
		pos: "preposition"
	},
	{
		word: "with",
		pos: "preposition"
	},
	{
		word: "on",
		pos: "preposition"
	},
	{
		word: "at",
		pos: "preposition"
	},
	{
		word: "from",
		pos: "preposition"
	},
	{
		word: "by",
		pos: "preposition"
	},
	{
		word: "about",
		pos: "preposition"
	},
	{
		word: "as",
		pos: "preposition"
	},
	{
		word: "into",
		pos: "preposition"
	},
	{
		word: "like",
		pos: "preposition"
	},
	{
		word: "through",
		pos: "preposition"
	},
	{
		word: "after",
		pos: "preposition"
	},
	{
		word: "over",
		pos: "preposition"
	},
	{
		word: "between",
		pos: "preposition"
	},
	{
		word: "out",
		pos: "preposition"
	},
	{
		word: "against",
		pos: "preposition"
	},
	{
		word: "during",
		pos: "preposition"
	},
	{
		word: "without",
		pos: "preposition"
	},
	{
		word: "before",
		pos: "preposition"
	},
	{
		word: "under",
		pos: "preposition"
	},
	{
		word: "around",
		pos: "preposition"
	},
	{
		word: "among",
		pos: "preposition"
	},

	// articles
	{
		word: "a",
		pos: "article"
	},
	{
		word: "an",
		pos: "article"
	},
	{
		word: "the",
		pos: "article"
	},

	// curses
	{
		word: "fuck",
		pos: "curse",
		one_word: true
	},
	{
		word: "shit",
		pos: "curse",
		one_word: true
	},
	{
		word: "damn",
		pos: "curse",
		one_word: true
	},
	{
		word: "son of a bitch",
		pos: "curse"
	},
	{
		word: "bastard",
		pos: "curse"
	},
	{
		word: "bloody hell",
		pos: "curse"
	},
	{
		word: "what the hell",
		pos: "curse"
	},
	{
		word: "fuck this shit",
		pos: "curse"
	},

	// adjectives
	{
		word: "happy",
		pos: "adjective",
		descriptive: "happily"
	},
	{
		word: "sad",
		pos: "adjective",
		descriptive: "sadly"
	},
	{
		word: "depressing",
		pos: "adjective",
		descriptive: "depressingly"
	}
]

// ACTIONS = [
// 	["walk", "walked", "walking"],
// 	["eat", "ate", "eating"],
// 	["swim", "swam", "swimming"],
// 	["drink", "drank", "drinking"],
// 	["run", "ran", "running"],
// 	["dive", "dove", "diving"],
// 	["climb", "climbed", "climbing"],
// 	["stumble", "stumbled", "stumbling"],
// 	["cry", "cried", "crying"],
// 	["hit", "hit", "hitting"],
// 	["kill", "killed", "killing"],
// 	["ride", "rode", "riding"],
// 	["stand up", "stood up", "standing up"],
// 	["sit down", "sat down", "sitting down"],
// 	["fight", "fought", "fighting"],
// 	["laugh", "laughed", "laughing"],
// 	["read", "read", "reading"],
// 	["play", "played", "playing"],
// 	["listen", "listened", "listened"],
// 	["think", "thinked", "thinking"],
// 	["sing", "sang", "singing"],
// 	["watch tv", "watched tv", "watching tv"],
// 	["dance", "danced", "dancing"],
// 	["fly", "flyed", "flying"],
// 	["cut", "cut", "cutting"],
// 	["sleep", "slept", "sleeping"],
// 	["close", "closed", "closing"],
// 	["open", "opened", "opening"],
// 	["write", "wrote", "writing"],
// 	["give", "gave", "giving"],
// 	["jump", "jumped", "jumping"],
// 	["cook", "cooked", "cooking"],
// 	["wash", "washed", "washing"],
// 	["wait", "waiting", "waited"],
// 	["dig", "digged", "digging"],
// 	["clap", "clapped", "clapping"],
// 	["knit", "knitted", "knitting"],
// 	["smell", "smelled", "smelling"],
// 	["kiss", "kissed", "kissing"],
// 	["hug", "hugged", "hugging"],
// 	["bathe", "bathed", "bathing"],
// 	["snore", "snored", "snoring"],
// 	["paint", "painted", "painting"],
// 	["ski", "skied", "skiing"],
// 	["stack", "stacked", "stacking"]
// ]


// PEOPLE = [
// 	"man",
// 	"woman",
// 	"mime",
// 	"band",
// 	"group",
// 	"mass",
// 	"banker",
// 	"salesperson",
// 	"cashier",
// 	"clerk",
// 	"judge",
// 	"juror",
// 	"lawyer",
// 	"housewife",
// 	"stay-at-home dad",
// 	"chef",
// 	"sous chef",
// 	"waiter",
// 	"actor",
// 	"manager",
// 	"celebrity",
// 	"nurse",
// 	"doctor",
// 	"mover",
// 	"janitor",
// 	"principal",
// 	"vice principle",
// 	"teacher",
// 	"substitute teacher",
// 	"president",
// 	"vice president",
// 	"governor",
// 	"secretary",
// 	"driver",
// 	"engineer",
// 	"architect",
// 	"student",
// 	"software developer",
// 	"police officer",
// 	"vetinarian",
// 	"plumber",
// 	"firefighter",
// 	"mechanic",
// 	"librarian",
// 	"psychologist",
// 	"surgeon",
// 	"artist",
// 	"designer",
// 	"hairdresser",
// 	"journalist",
// 	"dentist",
// 	"midwife",
// 	"consultant",
// 	"athlete",
// 	"bartender",
// 	"broker",
// 	"therapist",
// 	"mail carrier",
// 	"musician",
// 	"cleaner",
// 	"flight attendant"
// ]


// PREPOSITIONS = [
// 	"above",
// 	"across",
// 	"against",
// 	"along",
// 	"among",
// 	"around",
// 	"at",
// 	"before",
// 	"behind",
// 	"below",
// 	"beneath",
// 	"beside",
// 	"between",
// 	"by",
// 	"down",
// 	"from",
// 	"in",
// 	"into",
// 	"near",
// 	"of",
// 	"off",
// 	"on",
// 	"to",
// 	"toward",
// 	"under",
// 	"upon",
// 	"with",
// 	"within"
// ]


// ARTICLES = [
// 	"a",
// 	"the"
// ]


// NOUNS = [
// 	["people", "peoples"],
// 	["history", "histories"],
// 	["way", "ways"],
// 	["art", "art"],
// 	["world", "worlds"],
// 	["information", "information"],
// 	["map", "maps"],
// 	["two", "two"],
// 	["family", "families"],
// 	["government", "governments"],
// 	["health", "health"],
// 	["system", "systems"],
// 	["computer", "computers"],
// 	["meat", "meats"],
// 	["year", "years"],
// 	["thanks", "thanks"],
// 	["people", "people"],
// 	["music", "music"],
// 	["method", "methods"],
// 	["data", "datum"],
// 	["food", "food"],
// 	["understanding", "understanding"],
// 	["theory", "theories"],
// 	["law", "laws"],
// 	["bird", "birds"],
// 	["literature", "literature"],
// 	["problem", "problems"],
// 	["software", "software"],
// 	["control", "control"],
// 	["knowledge", "knowledge"],
// 	["power", "power"],
// 	["ability", "abilities"],
// 	["economics", "economics"],
// 	["love", "love"],
// 	["internet", "internet"],
// 	["television", "televisions"],
// 	["science", "science"],
// 	["library", "libraries"],
// 	["nature", "nature"],
// 	["fact", "facts"],
// 	["product", "products"],
// 	["idea", "ideas"],
// 	["temperature", "temperature"],
// 	["investment", "investments"],
// 	["area", "areas"],
// 	["society", "societies"],
// 	["activity", "activites"],
// 	["story", "stories"],
// 	["industry", "industries"],
// 	["media", "media"],
// 	["thing", "things"],
// 	["oven", "ovens"],
// 	["community", "communities"],
// 	["definition", "definition"],
// 	["safety", "safety"],
// 	["quality", "qualities"],
// 	["development", "developments"],
// 	["language", "languages"],
// 	["management", "management"],
// 	["player", "player"],
// 	["variety", "varieties"],
// 	["video", "videos"],
// 	["week", "weeks"],
// 	["security", "securities"],
// 	["country", "countries"],
// 	["exam", "exams"],
// 	["movie", "movies"],
// 	["organization", "organizations"],
// 	["equipment", "equipment"],
// 	["physics", "physics"],
// 	["analysis", "analysis"],
// 	["policy", "policies"],
// 	["series", "series"],
// 	["thoughts", "thoughts"],
// 	["basis", "basis"],
// 	["boyfriend", "boyfriends"],
// 	["direction", "directions"],
// 	["strategy", "strategies"],
// 	["technology", "technologies"],
// 	["army", "armys"],
// 	["camera", "cameras"],
// 	["freedom", "freedoms"],
// 	["paper", "paper"],
// 	["enviroment", "enviroment"],
// 	["child", "children"],
// 	["instance", "instances"],
// 	["moth", "moths"],
// 	["truth", "truths"],
// 	["marketing", "marketing"],
// 	["university", "universities"],
// 	["article", "articles"],
// 	["department", "departments"],
// 	["difference", "differences"],
// 	["goal", "goals"],
// 	["news", "news"],
// 	["audience", "audiences"],
// 	["fishing", "fishing"],
// 	["growth", "growth"],
// 	["income", "income"],
// 	["marriage", "marriages"],
// 	["user", "users"],
// 	["combination", "combinations"],
// 	["failure", "failure"],
// 	["meaning", "meanings"],
// 	["medicine", "medicines"],
// 	["philosphy", "philosphies"]
// ]


// CURSES = [
// 	"fuck off",
// 	"fuck it",
// 	"shit",
// 	"son of a bitch",
// 	"bastard",
// 	"damn",
// 	"bloody hell",
// 	"what the hell",
// 	"fuck this shit"
// ]


// ADJECTIVES = [
// 	"happily",
// 	"depressingly",
// 	"slowly",
// 	"quickly",
// 	"adorably"
// ]