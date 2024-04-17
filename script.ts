import { transliterate } from './transliteration'

document.addEventListener('DOMContentLoaded', () => {
  const sourceRef = document.querySelector<HTMLTextAreaElement>('#source');
  const transliteratedRef = document.querySelector<HTMLTextAreaElement>('#transliterated');
  if (sourceRef === null) {
    alert('Source input not found')
    return;
  }
  if (transliteratedRef === null) {
    alert('Transliterated input not found')
    return;
  }

  sourceRef.addEventListener('input', () => {
    transliteratedRef.value = transliterate(sourceRef.value)
  })
})