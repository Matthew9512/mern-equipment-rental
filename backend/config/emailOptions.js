const emailOptions = (reservedProductsArr, client) => {
   const { imie, nazwisko, email, numer } = client;

   const ownerTemplate = reservedProductsArr
      .map(
         (value) =>
            `<p>nazwa narzedzia: ${value.product?.nazwaProduktu}</p>
               <p>cena: ${value.product?.cena}</p>
               <p>kaucja: ${value.product?.kaucja}</p>
               <p>ilosc: ${value?.ilosc}</p>
               <p>wynajecie: ${value?.wynajem}</p>
               <p>zwrot: ${value?.zwrot}</p>`
      )
      .join('');

   const html = `<h1>nowy klient</h1>
         <p>imie: ${imie}</p>
         <p>nazwisko: ${nazwisko}</p>
         <p>email: ${email}</p>
         <p>numer: ${numer}</p>`;

   const clientHtmlBody = `
            <p>Produkt zarezerwowany prawidlowo w razie jakichkolwiek pytan prosimy o kontakt telefoniczny</p>
            ${ownerTemplate}
            <p>Wiadomosc wygenerowana automatycznie, prosze na nia nie odpowiadac</p>`;

   const ownerHtmlBody = html.concat(ownerTemplate);

   const recipientsOptionsArr = [
      { email: process.env.mail_reciver_user, html: ownerHtmlBody },
      { email: email, html: clientHtmlBody },
   ];

   return recipientsOptionsArr;
};

module.exports = emailOptions;
