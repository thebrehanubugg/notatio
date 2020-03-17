/*
	the idea generator
	a notatio file
*/


/**
 * @method random_item
 * @param {Array} |arr| the array of options
 * @return {Object} the randomly chosen item from the arr
 */
const random_item = arr => {
	const random_number = Math.random() * arr.length
	const random_index = Math.floor(random_number)
	
	return arr[random_index]
}


/**
 * @method find_word_by_pos
 * @param {String} |pos| the part-of-speech to filter by
 * @return {Object} the randomly chosen item from a filtered list based on the pos
 */
const find_word_by_pos = pos => {
	const words = LEXICON.filter(word => word.pos == pos)

	return random_item(words)
}


/**
 * @method find_word_by_key
 * @param {String} |key| the key to lookup
 * @param {String} |val| the value to replace
 * @return {Object} the randomly chosen item from a filtered list based on the pos
 * This function differs to the find_word_by_pos function by checking a key/value pair, not just the part-of-speech
 */
const find_word_by_key = (key, val) => {
	const words = LEXICON.filter(word => word[key] == val)

	return random_item(words)
}


/**
 * @method replace
 * @param {String} |current| the word to replace
 * @param {String} |val| the part-of-speech id in the template (__VERB__, __PERSON__, etc.)
 * @param {String} |word| the word to replace current
 * @return {String} the modified template with the replaced word
 */
const replace = (current, id, word) => {
	return current.replace(id, word)
}


/**
 * @method change_twitter_intent
 * @param {String} |phrase| the generated sentence
 * @return {String} the default text for the tweet box when the Twitter button gets clicked
 */
const change_twitter_intent = phrase => {
	const start_index = (phrase.charAt(0) == '"') ? 1 : 0
	const end_index = (start_index == 1) ? 2 : 1

	const beginning_token = (start_index == 1) ? '"' : ""

	const idea = beginning_token + phrase.charAt(start_index).toUpperCase() + phrase.slice(end_index)

	return idea + " | Created by Notatio"
}


/**
 * @method clean_up
 * @param {String} |text| the text to clean up
 * @return {String} the URL transferrable friendly text
 */
const clean_up = text => {
	const sans_space = text.replace(/ /g, "%20")
	const sans_comma = sans_space.replace(",", "%2C")
	const sans_quote = sans_comma.replace('"', "%22")
	const sans_pipes = sans_quote.replace("|", "%7C")
	const sans_colon = sans_pipes.replace(":", "%3A")
	const sans_slash = sans_colon.replace("/", "%2F")

	return sans_slash
}


/**
 * @method tweet
 * @param {String} |text| the default text for the tweet box
 * @return {Null}
 * Adds or replaces the Twitter button so it's updated for every generation
 */
const tweet = text => {
	const path = window.location
	const tweet_path = `https://twitter.com/share?url=${encodeURI(path)}&text=${clean_up(text)}`

	if($(".tweet_btn").length == 0) {
		$("#more").prepend(`<a class="tweet_btn" href=${tweet_path} target="_blank"><img src="images/twitter.png" /></a>`)
	} else {
		$(".tweet_btn").attr("href", tweet_path)
	}
}


/**
 * @method notate
 * @param {String} |template| the MadLib-esque template to populate with random words
 * @return {String} the generated text to display
 */
const notate = template => {
	const words = template.split(" ")

	for(let word in words) {
		let current = words[word]
		let next = words[word]

		if(current.includes("VERB"))
			next = replace(current, "__VERB__", find_word_by_pos("verb").word)
		if(current.includes("VERB_PLURAL"))
			next = replace(current, "__VERB__", find_word_by_pos("verb").plural)
		if(current.includes("VERB_PAST_TENSE"))
			next = replace(current, "__VERB_PAST_TENSE__", find_word_by_pos("verb").past)
		if(current.includes("VERB_PRESENT_PROGRESSIVE"))
			next = replace(current, "__VERB_PRESENT_PROGRESSIVE__", find_word_by_pos("verb").present_progressive)
		if(current.includes("VERB_PAST_PARTICIPLE"))
			next = replace(current, "__VERB_PAST_PARTICIPLE__", find_word_by_pos("verb").past_participle)

		if(current.includes("PERSON"))
			next = replace(current, "__PERSON__", find_word_by_key("isPerson", true).word)
		if(current.includes("PERSON_PLURAL"))
			next = replace(current, "__PERSON_PLURAL__", find_word_by_key("isPerson", true).plural)
		
		if(current.includes("PREPOSITION"))
			next = replace(current, "__PREPOSITION__", find_word_by_pos("preposition").word)
		
		if(current.includes("ARTICLE"))
			next = replace(current, "__ARTICLE__", find_word_by_pos("article").word)

		if(current.includes("NOUN"))
			next = replace(current, "__NOUN__", find_word_by_pos("noun").word)
		if(current.includes("NOUN_PLURAL"))
			next = replace(current, "__NOUN_PLURAL__", find_word_by_pos("noun").plural)

		if(current.includes("CURSE"))
			next = replace(current, "__CURSE__", find_word_by_pos("curse").word)
		if(current.includes("CURSE_ONE_WORD"))
			next = replace(current, "__CURSE_ONE_WORD__", find_word_by_key("one_word", true).word)

		if(current.includes("ADJECTIVE"))
			next = replace(current, "__ADJECTIVE__", find_word_by_pos("adjective").word)
		if(current.includes("ADJECTIVE_DESCRIPTIVE"))
			next = replace(current, "__ADJECTIVE_DESCRIPTIVE__", find_word_by_pos("adjective").descriptive)

		words[word] = next
	}

	return words.join(" ")
}


/**
 * @method generate
 * @return {String} the generated text to display
 * Choses a random template, fills it out, and displays it on the page
 */
const generate = () => {
	const chosen_template = random_item(OPTIONS)
	const result = notate(chosen_template)

	$(".idea").text(result.toUpperCase())

	return result
}


/**
 * @method notatio
 * @return {Null}
 * Generates the sentence, updates the Twitter button, and fixes the alignment
 */
const notatio = () => {
	const result = generate()
	tweet(change_twitter_intent(result))
	fix_header_alignment()
}


// once the window loads, generate!
$(window).on("ready", notatio())


// once the generate button is clicked, generate!
$("button.generate").on("click", () => notatio())