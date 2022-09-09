function shuffle(array) {
   var currentIndex = array.length,
      randomIndex;

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex],
      ];
   }

   return array;
}

function spin() {

   // Play the sound
   wheel.play();

   const box = document.getElementById("box");
   const element = document.getElementById("mainbox");
   let SelectedItem = "";

   let MagicRoaster = shuffle([1890, 2250, 2610]);
   let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
   let RiceCooker = shuffle([1810, 2170, 2530]);
   let LunchBox = shuffle([1770, 2130, 2490]);
   let Sanken = shuffle([1750, 2110, 2470]);
   let Electrolux = shuffle([1630, 1990, 2350]);
   let JblSpeaker = shuffle([1570, 1930, 2290]);
   let f1 = shuffle([1470, 1870, 2190]);
   let f2 = shuffle([1340, 1820, 2150]);
   let f3 = shuffle([1300, 1790, 2100]);

   let Hasil = shuffle([
      MagicRoaster[0],
      Sepeda[0],
      RiceCooker[0],
      LunchBox[0],
      Sanken[0],
      Electrolux[0],
      JblSpeaker[0],
      f1[0],
      f2[0],
      f3[0]
   ]);
   // console.log(Hasil[0]);

   // get the value of selected item
   if (MagicRoaster.includes(Hasil[0])) SelectedItem = document.getElementById('m-1').innerHTML;
   if (Sepeda.includes(Hasil[0])) SelectedItem = document.getElementById('m-2').innerHTML;
   if (RiceCooker.includes(Hasil[0])) SelectedItem = document.getElementById('m-3').innerHTML;
   if (LunchBox.includes(Hasil[0])) SelectedItem = document.getElementById('m-4').innerHTML;
   if (Sanken.includes(Hasil[0])) SelectedItem = document.getElementById('m-5').innerHTML;
   if (Electrolux.includes(Hasil[0])) SelectedItem = document.getElementById('m-6').innerHTML;
   if (JblSpeaker.includes(Hasil[0])) SelectedItem = document.getElementById('m-7').innerHTML;
   if (f1.includes(Hasil[0])) SelectedItem = document.getElementById('m-8').innerHTML;
   if (f2.includes(Hasil[0])) SelectedItem = document.getElementById('m-9').innerHTML;
   if (f3.includes(Hasil[0])) SelectedItem = document.getElementById('m-10').innerHTML;



   // spin
   box.style.setProperty("transition", "all ease 5s");
   box.style.transform = "rotate(" + Hasil[0] + "deg)";
   element.classList.remove("animate");
   setTimeout(function () {
      element.classList.add("animate");
   }, 5000);

   // alert
   setTimeout(function () {
      // applause.play();
      swal(
         "بابا بيقولك ",
         "اطلب" + SelectedItem + ".",
         '/imgs/logo.svg'
      );
   }, 5500);

   // delay
   setTimeout(function () {
      box.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
   }, 6000);
}