const { SlashCommandBuilder } = require('discord.js');

const superscriptMap = {
	'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
	'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'ᵠ', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
	'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
	'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
	'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᵠ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ',
	'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
	'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
	'+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾', '/': '⁄', ' ': ' ',
	'!': 'ᵎ', '@': 'ᶿ', '#': 'ᶻ', '$': '₍', '%': '‰', '^': 'ᶯ', '&': '⁾', '*': '∗', '_': '₋', '`': 'ᵞ',
	'{': '⁾', '}': '⁾', '[': '⁾', ']': '⁾', '|': 'ᵚ', ';': '⁻', ':': 'ᵕ', ',': '˳', '.': 'ʳ', '<': '‹',
	'>': '›', '?': 'ˀ', '/': '⸢', '\\': '⸥', "'": 'ᵎ', '"': '˶',
};

const subscriptMap = {
	'A': 'ₐ', 'B': 'ₑ', 'C': 'ₒ', 'D': 'ₒ', 'E': 'ₑ', 'F': 'ₑ', 'G': 'ₕ', 'H': 'ᵢ', 'I': 'ⱼ', 'J': 'ₖ',
	'K': 'ₖ', 'L': 'ₗ', 'M': 'ₘ', 'N': 'ₙ', 'O': 'ₒ', 'P': 'ₚ', 'Q': 'ᵣ', 'R': 'ᵤ', 'S': 'ₛ', 'T': 'ₜ',
	'U': 'ᵤ', 'V': 'ᵥ', 'W': 'ₓ', 'X': 'ₓ', 'Y': 'ᵧ', 'Z': '₂',
	'a': 'ₐ', 'b': 'ₑ', 'c': 'ₒ', 'd': 'ₒ', 'e': 'ₑ', 'f': 'ₑ', 'g': 'ₕ', 'h': 'ᵢ', 'i': 'ⱼ', 'j': 'ₖ',
	'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'q': 'ᵣ', 'r': 'ᵤ', 's': 'ₛ', 't': 'ₜ',
	'u': 'ᵤ', 'v': 'ᵥ', 'w': 'ₓ', 'x': 'ₓ', 'y': 'ᵧ', 'z': '₂',
	'0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
	'+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎', '/': '₋', ' ': ' ',
	'!': 'ᵎ', '@': 'ₐ', '#': 'ₕ', '$': 'ₚ', '%': 'ꜥ', '^': 'ᵤ', '&': '₋', '*': '₊', '_': '₋', '`': 'ᵞ',
	'{': '₎', '}': '₎', '[': '₎', ']': '₎', '|': '₎', ';': '₋', ':': '₎', ',': '₍', '.': 'ᵣ', '<': '₎',
	'>': '₎', '?': '₍', '/': '⸢', '\\': '⸥', "'": 'ₑ', '"': 'ₑ',
};

const frakturMap = {
	'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
	'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
	'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
	'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
	'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
	'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷'
};

const cursiveMap = {
	'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
	'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
	'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
	'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
	'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
	'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃',
	'0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
};

const greekMap = {
	'a': 'α', 'b': 'β', 'c': 'ς', 'd': 'δ', 'e': 'ε',
	'f': 'φ', 'g': 'γ', 'h': 'χ', 'i': 'ι', 'j': 'ς',
	'k': 'χ', 'l': 'κ', 'm': 'λ', 'n': 'μ', 'o': 'ν',
	'p': 'ο', 'q': 'π', 'r': 'κ', 's': 'υ', 't': 'ρ',
	'u': 'σ', 'v': 'τ', 'w': 'υ', 'x': 'φ', 'y': 'υ',
	'z': 'ξ',
	'A': 'Α', 'B': 'Β', 'C': 'Σ', 'D': 'Δ', 'E': 'Ε',
	'F': 'Φ', 'G': 'Γ', 'H': 'Χ', 'I': 'Ι', 'J': 'Σ',
	'K': 'Χ', 'L': 'Κ', 'M': 'Λ', 'N': 'Μ', 'O': 'Ν',
	'P': 'Ο', 'Q': 'Π', 'R': 'Κ', 'S': 'Υ', 'T': 'Ρ',
	'U': 'Σ', 'V': 'Τ', 'W': 'Υ', 'X': 'Φ', 'Y': 'Υ',
	'Z': 'Ξ',
};

const smallCapsMap = {
	'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ',
	'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
	'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ',
	'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ',
	'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ',
	'Z': 'ᴢ',
};

const mathScript = {
	'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖',
	'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
	'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠',
	'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
	'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪',
	'z': '𝕫',
	'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼',
	'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
	'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆',
	'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
	'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐',
	'Z': 'ℤ',
};

const upsideDown = {
	'a': 'ɒ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ',
	'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
	'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o',
	'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
	'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ',
	'z': 'z',
	'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ',
	'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
	'K': 'K', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O',
	'P': 'Ԁ', 'Q': 'ꓵ', 'R': 'ꓷ', 'S': 'ꓨ', 'T': 'ꓤ',
	'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄',
	'Z': 'Z',
};

const textBox = {
  'A': '🄰', 'B': '🄱', 'C': '🄲', 'D': '🄳', 'E': '🄴',
  'F': '🄵', 'G': '🄶', 'H': '🄷', 'I': '🄸', 'J': '🄹',
  'K': '🄺', 'L': '🄻', 'M': '🄼', 'N': '🄽', 'O': '🄾',
  'P': '🄿', 'Q': '🅀', 'R': '🅁', 'S': '🅂', 'T': '🅃',
  'U': '🅄', 'V': '🅅', 'W': '🅆', 'X': '🅇', 'Y': '🅈',
  'Z': '🅉',
};

const whiteTextBox = {
	'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴',
	'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
	'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾',
	'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
	'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈',
	'Z': '🆉',
};

const borderText = {
	'A': '『A』', 'B': '『B』', 'C': '『C』', 'D': '『D』', 'E': '『E』',
	'F': '『F』', 'G': '『G』', 'H': '『H』', 'I': '『I』', 'J': '『J』',
	'K': '『K』', 'L': '『L』', 'M': '『M』', 'N': '『N』', 'O': '『O』',
	'P': '『P』', 'Q': '『Q』', 'R': '『R』', 'S': '『S』', 'T': '『T』',
	'U': '『U』', 'V': '『V』', 'W': '『W』', 'X': '『X』', 'Y': '『Y』',
	'Z': '『Z』',
};



module.exports = {
	data: new SlashCommandBuilder()
	.setName('fun-text')
	.setDescription('Create cool text.')
	.addStringOption(option => 
		option
		.setName('style')
		.setDescription('The style of text to convert.')
		.setRequired(true)
		.addChoices(
			{ name: "ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ", value: "superscript" },
			{ name: "ₛᵤbₛ꜀ᵣᵢₚₜ", value: "subscript" },
			{ name: "sᴍᴀʟʟᴄᴀᴘs", value: "smallcaps" },
			{ name: "𝕥𝕖𝕩𝕥𝕓𝕠𝕩", value: "best" },
			{ name: "𝖋𝖗𝖆𝖐𝖙𝖚𝖗", value: "fraktur" },
			{ name: "𝓬𝓾𝓻𝓼𝓲𝓿𝓮", value: "cursive" },
			{ name: "γρεεκ", value: "greek" },
			{ name: "uʍop-ǝpısdn", value: "upsidedown" },
			{ name: "『t』『e』『x』『t』『b』『o』『x』", value: "bordertext" },
			{ name: "🅃🄴🅇🅃🄱🄾🅇", value: "textbox" },
			{ name: "🆃🅴🆇🆃🅱🅾🆇", value: "whitetextbox" }
		),
	)
	.addStringOption(option => option
		.setName('text')
		.setDescription('The text to convert.')
		.setMaxLength(280)
		.setRequired(true)
	),
	async execute(interaction) {
		const style = interaction.options.getString("style");
		const text = interaction.options.getString('text');

		switch (style) {
			case 'superscript':
				interaction.reply(
					text
					.split('')
					.map((char) => superscriptMap[char] || char)
					.join('')
				);
				break;
			case 'subscript':
				interaction.reply({ content: 
					text
					.split('')
					.map((char) => subscriptMap[char] || char)
					.join('') 
				});
				break;
			case 'fraktur':
				interaction.reply(
					text.split('')
					.map((char) => frakturMap[char] || char)
					.join('')
				);
				break;
			case 'fancy':
				interaction.reply(
					text.split('')
					.map((char) => cursiveMap[char] || char)
					.join('')
				)
				break;
			case 'greek':
				interaction.reply(
					text.split('')
					.map((char) => greekMap[char] || char)
					.join('')
				)
				break;
			case 'smallcaps':
				interaction.reply(
					text.split('')
					.map((char) => smallCapsMap[char] || char)
					.join('')
				)
				break;
			case 'upsidedown':
				interaction.reply(
					text.split('')
					.map((char) => upsideDown[char] || char)
					.join('')
				)
				break;
			case 'textbox':
				interaction.reply(
					text.split('')
					.map((char) => textBox[char] || char)
					.join('')
				)
				break;
			case 'whitetextbox':
				interaction.reply(
					text.split('')
					.map((char) => whiteTextBox[char] || char)
					.join('')
				)
				break;
			case 'bordertext':
				interaction.reply(
					text.split('')
					.map((char) => borderText[char] || char)
					.join('')
				)
				break;
			case 'best':
				interaction.reply(
					text.split('')
					.map((char) => mathScript[char] || char)
					.join('')
				)
				break;
			default:
				interaction.reply('Invalid subcommand.');
				break;
		}
		
	}
}