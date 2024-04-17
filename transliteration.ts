const simpleMap: Record<string, string> = {
  А: 'A',
  а: 'a',
  Б: 'B',
  б: 'b',
  В: 'V',
  в: 'v',
  Г: 'H',
  г: 'h',
  Ґ: 'G',
  ґ: 'g',
  Д: 'D',
  д: 'd',
  Е: 'E',
  е: 'e',
  // Єє
  Ж: 'Zh',
  ж: 'zh',
  З: 'Z',
  з: 'z',
  И: 'Y',
  и: 'y',
  І: 'I',
  і: 'i',
  // Її
  // Йй
  К: 'K',
  к: 'k',
  Л: 'L',
  л: 'l',
  М: 'M',
  м: 'm',
  Н: 'N',
  н: 'n',
  О: 'O',
  о: 'o',
  П: 'P',
  п: 'p',
  Р: 'R',
  р: 'r',
  С: 'S',
  с: 's',
  Т: 'T',
  т: 't',
  У: 'U',
  у: 'u',
  Ф: 'F',
  ф: 'f',
  Х: 'Kh',
  х: 'kh',
  Ц: 'Ts',
  ц: 'ts',
  Ч: 'Ch',
  ч: 'ch',
  Ш: 'Sh',
  ш: 'sh',
  Щ: 'Shch',
  щ: 'shch',
  Ь: '',
  ь: '',
  // Юю
  // Яя
  "'": '',
}

const onStartMap: Record<string, string> = {
  Є: 'Ye',
  є: 'ye',
  Ї: 'Yi',
  ї: 'yi',
  Й: 'Y',
  й: 'y',
  Ю: 'Yu',
  ю: 'yu',
  Я: 'Ya',
  я: 'ya',
}

const inWordMap: Record<string, string> = {
  Є: 'Ie',
  є: 'ie',
  Ї: 'I',
  ї: 'i',
  Й: 'i',
  й: 'i',
  Ю: 'Iu',
  ю: 'iu',
  Я: 'Ia',
  я: 'ia',
}

const isLetterRegExp = new RegExp(/^\p{L}/, 'u')
const isUpperCase = (char: string) => char.toUpperCase() === char

export type TransliterateOptions = {
  apostropheSymbols?: string[]
}

export function transliterate(input: string, options?: TransliterateOptions): string {
  const apostropheSymbols = options?.apostropheSymbols ?? ["'"]

  let output = ''

  for (let i = 0; i < input.length; i++) {
    if ('Зз'.includes(input[i]) && 'Гг'.includes(input[i + 1])) {
      output += isUpperCase(input[i] ?? '') ? 'Zgh' : 'zgh'
      i++
      continue
    }

    const prevIsLetter = isLetterRegExp.test(input[i - 1] ?? '')
    const prevIsApostrophe = apostropheSymbols.includes(input[i - 1] ?? '')

    const positionMap = (prevIsLetter || prevIsApostrophe) ? inWordMap : onStartMap

    output += positionMap[input[i]] ?? simpleMap[input[i]] ?? input[i]
  }

  return output
}
