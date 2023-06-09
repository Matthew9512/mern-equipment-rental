require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connectDB');

/**
 * @todo cors optios
 */

const PORT = 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.use(compression());

app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/szukaj', require('./routes/productsRouter'));

app.use('/wynajem', require('./routes/rentRouter'));

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`server, rental`);
});

// =================================
// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       kategoriaProduktu: 'zageszczarki',
//       nazwaProduktu: 'zagęszczarka rewersyjna 143 KG WEBER CR 2 HD',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Zagęszczarka rewersyjna Weber CR 2 Hd sprawdzi się przy zagęszczaniu piasku, żwiru, asfaltu czy kostki brukowej.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'typ silnika': 'spalinowy (benzyna)',
//          'producent i model silnika': 'Honda GX 160',
//          paliwo: 'benzyna',
//          moc: '3,6 kW / 4,9 KM',
//          częstotliwość: '100 Hz',
//          'siła odśrodkowa': '25 kN',
//          rozwuch: 'ręczny',
//          'szerokość robocza': '45 cm',
//          ciężar: '143 kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'zageszczarki',
//       nazwaProduktu: 'zagęszczarka rewersyjna CR 5 Hd',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Zagęszczarka rewersyjna CR 5 Hd marki Weber zapewnia idealne zagęszczenie niemal wszystkich materiałów stosowanych w budownictwie ziemnym (piasek, żwir czy tłuczeń).',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'typ silnika': 'spalinowy (benzyna)',
//          'producent i model silnika': 'Honda GX 270',
//          paliwo: 'benzyna',
//          moc: '6 kW / 8 KM',
//          częstotliwość: '75 Hz',
//          'siła odśrodkowa': '42 kN',
//          'szerokość robocza': '55 cm',
//          rozwuch: 'ręczny',
//          'poziom wibracji': '< 2,5 m/s² (dłoń)',
//          ciężar: '273 kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'narzedzia ogrodnicze',
//       nazwaProduktu: 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Wertykulator służy do spilśniania, nacinania i napowietrzania trawników. Działanie ostrzy w trawniku i w ziemi usuwa gęstą warstwę mchu, liści i korzeni, które blokują przepływ powietrza. Poprzez takie działanie deszcz oraz sole mineralne swobodnie wnikają w ziemię aż do korzeni.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          Głębokość: '32 mm',
//          'Szerokość robocza': '470 mm',
//          'Moc silnika': '5 KM',
//          'Rodzaj paliwa': 'Benzyna',
//          Waga: '56kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'zacieraczka Kreber K-600 ETP',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Zacieraczka K-600 przeznaczona jest do wygładzania i zacierania posadzek betonowych w budownictwie mieszkaniowym. Dzięki ruchomej dźwigni sterowniczej maszyna jest praktyczna w czasie transportu, a podczas pracy możemy dostosować jej położenie do wzrostu operatora.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          Napięcie: ' 230 V',
//          Moc: '1,1 kW',
//          'Szerokość robocza talerza': 'Ø 600 mm',
//          Wydajność: '75 m2/h',
//          Ciężar: '39kg',
//       },
//    },
// ]);
// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       kategoriaProduktu: 'elektronarzedzia',
//       nazwaProduktu: 'młot udarowy GSH 27 VC BOSCH',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Bosch GSH 27 VC Professional to młot do prac wyburzeniowych prowadzonych w betonie, kamieniu oraz asfalcie. Urządzenie osiąga średnią wydajność 3,2 tony urobku na godzinę - szybkie i skuteczne działanie. Ponadto, dzięki zastosowaniu mechanizmu udarowego o obniżonym poziomie drgań oraz odseparowaniu rękojeści, wartość drgań wynosi jedynie 8,0m/s2. Dzięki temu dozwolony czas czynnej pracy tym urządzeniem wynosi ponad 3 godziny dziennie.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          moc: '2000 W',
//          'energia udaru': '62 J',
//          'system antywibracji': 'tak',
//          długość: '760 mm',
//          Szerokość: '600 mm',
//          Masa: '29,5 kg',
//          'liczba udarów przy nominalnej prędkości obrotowej': '1.000-1min',
//          'wydajność kucia w betonie': '3200 kg/h',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'listwa łata wibracyjna Kreber K-LW 2000 B',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Pływające listwy wibracyjne przeznaczone są do zagęszczania i wygładzania powierzchni betonowych. Dzięki zastosowaniu lekkich materiałów i długiej rękojeści nie wymaga szyn prowadzących.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'Szerokość robocza': '2000 mm',
//          Ciężar: '19 kg',
//          'Rodzaj silnika': 'Spalinowy, 4-suw, dwucylindrowy',
//          Paliwo: 'Benzyna',
//          Szerokość: '600 mm',
//          'Moc silnika': '1,0 KM',
//          Obroty: '7000 / min',
//       },
//    },

//    {
//       kategoriaProduktu: 'elektronarzedzia',
//       nazwaProduktu: 'bruzdownica Metabo MFE 40',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Idealna przy pracach elektroinstalacyjnych do podtynkowego układania kabli i rur kablowych, głębokość frezowania do 40 mm.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          Zasilanie: 'sieciowe',
//          'Napięcie zasilania': '230 V',
//          'Moc znamionowa': '1900 W',
//          ' Moc oddawana': '1120 W',
//          'Średnica tarczy tnącej': ' 125 mm',
//          'Regulowana głębokość cięcia': '10 - 40 mm',
//          'Możliwe szerokości rowków': '9 / 15.5 / 22 / 28.5 / 35 mm',
//          'Prędkość obrotowa na biegu jałowym': '5000 /min',
//          'Prędkość obrotowa pod obciążeniem': '4200 /min',
//          'Moment obrotowy': '6 Nm',
//          'Ciężar bez kabla': '4.6 kg',
//          'Długość przewodu': '4 m',
//       },
//    },
//    {
//       kategoriaProduktu: 'nagrzewnice',
//       nazwaProduktu: 'nagrzewnica olejowa Master B 95 CEL',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Nagrzewnica olejowa MASTER B 95 CEL bez odprowadzenia spalin to wysoce wydajne urządzenie zapewniające stały dopływ dużych ilości ogrzanego powietrza tam, gdzie jest ono pożądane.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'Moc grzewcza [kW]': '29,0',
//          'Przepływ powietrza [m³/h]': '800',
//          Termostat: 'wbudowany elektroniczny',
//          Zapłon: 'elektroda',
//          'Zużycie paliwa [l/h]': '2,7',
//          'Pojemność zbiornika [l]': '44,0',
//          'Prąd znamionowy [A]': '2',
//          'Minimalny czas pracy na pełnym zbiorniku [h]': '16',
//          'Napięcie [V]': '230 / 1-fazowe',
//          'Pobór mocy [kW]': '0,23',
//          'Szerokość [cm]': '40,0',
//          'Długość [cm]': '109,0',
//          'Wysokość [cm]': '44,0',
//          'Waga [kg]': '25,0',
//       },
//    },
//    {
//       kategoriaProduktu: 'nagrzewnice',
//       nazwaProduktu: 'nagrzewnica elektryczna MASTER B 3 ECA',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Nagrzewnica elektryczna Master B 3 ECA to bardzo efektywne urządzenie wykorzystywane w najróżniejszych warunkach. Zapewnia czyste, efektywne i bezpieczne ogrzewanie. Ze względu na to, że jest w pełni przenośne i łatwe w obsłudze świetnie nadaje się do okazjonalnego, bądź awaryjnego ogrzewania pomieszczeń.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          Wydajność: '1,65 / 3,0 kW',
//          'Przepływ powietrza': '288 m3/h',
//          Zasilanie: '230V / 50Hz',
//          'Maksymalne zużycie prądu': '14,5 A',
//          'Nastawa pozycja 1': 'OFF',
//          'Nastawa pozycja 2': 'wentylator',
//          'Nastawa pozycja 3': '1,65 kW',
//          'Nastawa pozycja 4': '3,3 kW',
//          'Zakres termostatu': '5-35 °C',
//          Waga: '5,6 kg',
//          'Wymiary (dł x szer x wys)': '25 x 25 x 40 cm',
//       },
//    },
//    {
//       kategoriaProduktu: 'osuszacze',
//       nazwaProduktu: 'osuszacz powietrza Master DH 732 P',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Idealny w budownictwie, w czasie prac konserwatorskich, w sklepach i magazynach. Przydatne w domach prywatnych, kawiarniach, piwnicach, hotelach, biurach, centrach sportowych. Niezastąpione w czasie malowania i podczas remontów. Osuszacz Master DH 721 świetnie sprawdza się także w bibliotekach, archiwach, muzeach i kościołach.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'Wydajność osuszania [l/24h]': '30',
//          'Zalecany do kubatury [m³]': '450',
//          'Przepływ powietrza [m³/h]': '200',
//          'Pobór mocy [kW]': '0.68',
//          'Pojemność zbiornika [l]': '6.5',
//          'Wydajność osuszania w 30°C i 80%RH [l/24h]': '30',
//          'Wydajność osuszania w 20°C i 60%RH [l/24h]': '10.8',
//          'Zakres temperatury pracy [ºC]': '5-35',
//          'Zakres pracy wilgotność [%RH]': '35-95',
//          'Napięcie [V]': '230 / 1-fazowe',
//          'Waga [kg]': '19.5',
//          'Szerokość [cm]': '33.8',
//          'Długość [cm]': '35.8',
//          'Wysokość [cm]': '55.0',
//       },
//    },
//    {
//       kategoriaProduktu: 'elektronarzedzia',
//       nazwaProduktu: 'niwelator laserowy Nivel System NL540',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Niwelator laserowy NL540 Nivel System jest wielozadaniowym urządzeniem wykorzystującym czerwoną wiązkę laserową, a także opcję cyfrowego wyznaczania spadków. Sprzęt może z powodzeniem być wykorzystany w: opis z koteym jest problem',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'Źródło światła ': 'laser czerwony',
//          Dokładność: '± 1,0 mm/10 m',
//          'Zasięg pracy ': '500 m (z czujnikiem)',
//          'Pochylenie płaszczyzn': ' ± 10% (oś X, os Y)',
//          'Pilot zdalnego sterowania': 'tak',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'przecinarka spalinowa ręczna Stihl TS420',
//       rodzaj: true,
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Możliwość cięcia na sucho i na mokro idealnie nadaje się w pracach budowlanych. Sprawdza się przy cięciu w: beton stary cegła ceramiczna cegła wapienno-piaskowa cegła zwykła gazobeton krawężniki betonowe mur ceglany płyty drogowe pol-bruk poroterm',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'Maksymalna średnica tarczy': '350 mm',
//          'Maksymalna głębokość ciecia': '125 mm',
//          'Typ silnika': 'spalinowy 2-suw (benzynowy)',
//          'Moc silnika': '4,4 KM',
//          ' Ciężar': '9,6 kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'narzedzia ogrodnicze',
//       nazwaProduktu: 'wiertnica spalinowa Oleo Mac MTL 51',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Idealne do prac polegających na wykonaniu otworów w glebie do sadzenia winorośli lub innych roślin, na wsporniki lub pale w cieplarniach i szklarniach, a także do prac podczas przygotowania oświetlenia ulicznego.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          Waga: '9,1 kg',
//          'Moc silnika': '2,1 KM',
//          'Średnice wierteł': '10cm, 15cm, 20cm',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'wibrator do betonu ENAR AVMU',
//       rodzaj: true,
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Wibratory służą do zagęszczania wylewanego betonu. Wibracje pomagają pozbyć się pęcherzyków powietrza, co powoduje, że rozprowadzony materiał staje się bardziej spójny, co w efekcie zwiększa wytrzymałość po jego zaschnięciu.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          Częstotliwość: '50-60 Hz',
//          'Długość wałka': '3 m',
//          'Długość buławy': '335 mm',
//          'Średnica buławy': '40 mm',
//          Moc: '2300 W',
//          'Częstotliwość wibracji': '18000 RPM',
//          Ciężar: '11.7 kg',
//          'Typ silnika': 'Elektryczny',
//          Napięcie: '230 V',
//       },
//    },
//    {
//       kategoriaProduktu: 'zageszczarki',
//       nazwaProduktu: 'zageszczarka jednokierunkowa ALTRAD BELLE PCX 20/50',
//       rodzaj: true,
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Zagęszczarka odznacza się wyjątkową siłą wibracji, jest bardzo szybka na każdym podłożu - idealna do podjazdów, chodników, lokalnych dróg, do zagęszczania piasku, kostki brukowej.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'maks. prędkość posuwu': '25 m/min',
//          moc: '4 kW / 5,5 KM',
//          'siła odśrodkowa': '20 kN',
//          'statyczna siła zagęszczania': '501 kg/m²',
//          'szerokość płyty roboczej': '500 mm',
//          'częstotliwość wibracji': '3,5 m/s²',
//          'producent i model silnika': 'Honda GX 160',
//          ciężar: '97 kg',
//       },
//    },
// ]);
// =================================

// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       kategoriaProduktu: 'narzedzia ogrodnicze',
//       nazwaProduktu: 'wertykulator22',
//       cena: 3300,
//       kaucja: 1100,
//       ilosc: 10,
//       // dostepneOd: Date,
//       opis: 'wertykulator sluzy do splisniania, naciniania i napowietrzania trawnikow',
//       zdjecia:
//          'https://images.pexels.com/photos/832521/pexels-photo-832521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          glebokosc: '56mm',
//          szerokoscRobocza: '470mm',
//          mocSilnika: '5km',
//          rodzajPaliwa: 'disel',
//          waga: '84kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'zacieraczkaaa',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 20,
//       // dostepneOd: Date,
//       opis: 'zacieraczka przeznaczona jest do wygladzania i zacierania posadzek betonowych',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          napiecie: '1500v',
//          szerokoscRoboczaTalerza: '600mm',
//          wydajnosc: '75m2/h',
//          waga: '48kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'zacieraczka',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 20,
//       // dostepneOd: Date,
//       opis: 'zacieraczka przeznaczona jest do wygladzania i zacierania posadzek betonowych',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          napiecie: '230v',
//          szerokoscRoboczaTalerza: '600mm',
//          wydajnosc: '75m2/h',
//          waga: '39kg',
//       },
//    },
// ]);
