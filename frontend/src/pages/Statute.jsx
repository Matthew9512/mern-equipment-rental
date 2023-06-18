export const Statute = () => {
   scrollTo({
      top: 0,
   });

   return (
      <article className='flex gap-6 py-16 flex-col mx-8 lg:w-3/5 lg:mx-auto'>
         <p className='font-bold py-2'>Regulamin naszej wypożyczalni:</p>
         <ol className='list-inside list-decimal'>
            <li>
               Jako zabezpieczenie ewentualnych roszczeń Wynajmującego wobec Najemcy, powstałych w związku z realizacją
               umowy, Najemca wpłaca kaucję
            </li>
            <li>
               Najemca zobowiązuje się płacić Wynajmującemu opłatę w wysokości wynikającej z przemnożenia ilości dni
               najmu i stawki za jedną dobę
            </li>
            <li>Koszt transportu sprzętu obciąża Wynajmującego. </li>
            <li>
               Od chwili odbioru sprzętu od Wynajmującego do momentu jego zwrotu Najemca ponosi odpowiedzialność za jego
               zaginięcie lub uszkodzenie; kradzież lub dewastacje Najemca ma obowiązek bezzwłocznie zgłosić organom
               ścigania.
            </li>
            <li>
               W razie zaginięcia, utraty lub zniszczenia sprzętu, Najemca zobowiązany jest zapłacić Wynajmującemu
               równowartość jego ceny rynkowej.
            </li>
         </ol>
         <p className='font-bold py-2'>Do obowiązków Najemcy należy:</p>
         <ol className='list-inside list-decimal'>
            <li>Użytkowanie sprzętu zgodnie z jego przeznaczeniem i instrukcją obsługi,</li>
            <li>Zabezpieczenie sprzętu przed uszkodzeniem, kradzieżą oraz zniszczeniem,</li>
            <li>
               Niezwłoczne informowanie Wynajmującego o zaistniałych awariach, nie później niż w pierwszym dniu roboczym
               od jej wystąpienia,
            </li>
            <li>Nie dokonywanie żadnych samodzielnych napraw bez wiedzy i zgody Wynajmującego,</li>
            <li>Nie oddawanie przedmiotu najmu osobie trzeciej do używania lub w podnajem,</li>
            <li>Utrzymywanie sprzętu w dobrym stanie,</li>
            <li>
               Pokrywanie z własnych środków kosztów materiałów eksploatacyjnych oraz napraw wynikłych na skutek
               niewłaściwej eksploatacji,
            </li>
            <li>
               Dostarczenie na swój koszt sprzętu do Wynajmującego w celu wykonania przeglądu technicznego, w przypadku,
               gdy okres wypożyczenia wynosi więcej niż 14 dni,
            </li>
            <li>
               Pokrywanie z własnych środków kosztów materiałów eksploatacyjnych oraz napraw wynikłych na skutek
               niewłaściwej eksploatacji,
            </li>
         </ol>
      </article>
   );
};
