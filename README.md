# Dummy Webshop - Inlämning 3 - Javascript 2 

#### Projekt på utbildningen:
[Front end webbutvecklare](https://gritacademy.se/front-end-webbutvecklare/) 400 YH-poäng - [Grit Academy](https://gritacademy.se/)  
(2023-2025)

#### Kurs
FE23 | Javascript 2

---

## Uppgiften
Du ska skapa en sida för att visa produkter i en webshop. Produkterna kommer från dummy json. Produkterna ska visas på ett sätt så att det ser ut som en riktig webshop, men den enda fungerande funktionaliteten som behövs är att en användare ska kunna söka på en viss produkt.

### Krav

#### Innehåll och GUI
* Produkterna ska hämtas från dummyjson.com - https://dummyjson.com/docs/products 
* En användare ska kunna söka på en produkt och se alla produkter som matchar i form av product cards.
* Du väljer själv hur varje product card ska se ut men varje produkt ska visa minst
    * Image
    * Title
    * Description
    * Rating
    * Stock, visa även en varning om stock är mindre än 10
    * Category
    * Knapp för att lägga till i kundvagnen (Knappen behöver inte fungera)

Det är fritt fram att lägga till mer funktionalitet!

#### TypeScript
* Alla filer ska vara ts-filer
* Lägg till en TS-typ till allting du inte tilldelat ett värde. (ex. const a = 3 blir automatiskt type number så du behöver inte ange det)
    * Variabler
    * Parametrar
    * Det en funktion returnerar, inklusive async-funktioner
* Type-casta till rätt typ där TypeScript inte kan räkna ut vilken typ som är rätt. 
* Skapa type aliases för objekt där du vet att det kommer finnas flera objekt med exakt samma struktur.

#### Bundler
* Använd Parcel

