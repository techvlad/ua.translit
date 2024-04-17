# Transliteration for ukraine language

## How to setup
```bash
# clone project
git clone git@github.com:techvlad/ua.translit.git
# change directory
cd ua.translit
# install packages
pnpm install
# start
pnpm dev

# build
pnpm build
```

## Code usage
> I don't see any reason to publish this as a package, code is pretty simple
```
# download file to your project
wget https://raw.githubusercontent.com/techvlad/ua.translit/main/transliteration.ts
```
```typescript
import { transliterate } from './transliteration'

transliterate('Влад') // -> 'Vlad'
```
