# AI Models Radar

Statyczny dashboard po polsku do podsumowania kwietniowych newsow AI i porownywania wyłącznie modeli AI.

## Co jest w srodku

- `index.html` - struktura strony.
- `styles.css` - cala warstwa wizualna i responsywnosc.
- `script.js` - dane newsow, dane modeli, zrodla, filtrowanie, sortowanie i kalkulator kosztow.

## Jak uruchomic

Otworz `index.html` w przegladarce. Strona nie wymaga build stepow, frameworka ani serwera.

## Jak opublikowac na GitHub Pages

1. Utworz repozytorium na GitHubie.
2. Wrzuc pliki z tego folderu do repozytorium.
3. Wejdz w `Settings -> Pages`.
4. Ustaw `Deploy from a branch`, branch `main`, folder `/root`.
5. Zapisz i poczekaj na adres strony.

## Jak aktualizowac dane

Dane newsow sa w tablicy `newsItems` w `script.js`. Dane porownywanych modeli sa w tablicy `models`, a zrodla w obiekcie `sources`. Przy aktualizacji najlepiej:

1. dopisac lub zmienic rekord w `models`,
2. dodac zrodlo w `sources`,
3. podpiac klucz zrodla w polu `sources` danego modelu,
4. uruchomic `node --check script.js`.

Ostatnia aktualizacja danych: 30 kwietnia 2026.
