/*
	styling the header
	a notatio file
*/


/**
 * @method fix_header_alignment
 * @return {Null}
 * Aligns the sentence vertically in the window based on its height
 */
const fix_header_alignment = () => {
	const LARGE_HEADER = $("h1")[0]
	const LH_HEIGHT = $(LARGE_HEADER).height()

	const MAIN = $("main")[0]

	if($(window).width() > 1080) {
		$(LARGE_HEADER).css("top", `calc(50vh - ${LH_HEIGHT/2}px)`)
	} else if($(window).width() < 1080) {
		$(LARGE_HEADER).css("top", `calc(50vh - ${LH_HEIGHT}px)`)
	}
}