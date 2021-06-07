# Weather sonification

Cu ajutorul patcher-ului Max "weathersounds.maxpat" se preiau pentru o anumita locatie prin intermediul site-ului https://openweathermap.org/ - identificata pe baza coordonatelor geografice (latitudine / longitudine) - datele privitoare la starea curenta a vremii afișând temperatura, temperatura resimtita, viteza vantului, presiunea atmosferica, umiditatea, tara si localitatea, cu precizarea ca pentru ultimii doi parametri atunci cand coordonatele sunt generate aleator este posibil ca acestea sa nu fie indicate (ne putem gasi pe o zona care sa nu apartina nici unei localitati sau tari). 

Coordonatele geografice vor fi obtinute pe baza unui algoritm. Aceste coordonate vor fi afisate pe harta. 

Valorile temperaturii si ale vitezei vantului vor fi datele de intrare ale unui sintetizator. Parametrii acestuia - tipul de generator de semnal si frecventa modulatoare - vor varia pe baza de algoritm pentru a crea un mai mare dinamism. 

Algortimul implementat va fi urmatorul: 
- genereaza aleator o latitudine cu valoarea intre -90 si +90 (la fiecare 20sec): 
- simultan cu latitudinea generata, se va genera aleator un meridian, iar apoi acesta va fi incrementat la fiecare 2sec, practic la o valoare a latutudinii vor fi 10 meridiane a caror valoare va fi incrementata cu 1;
- parametrii meteo vor fi cititi pentru locatia respectiva la fiecare secunda;
- la fiecare 20sec (odata cu schimbarea latitudinii), se modifica valoarea frecventei modulatoare (care are valori fixe de 2, 4, 8, 16, 32, 64, 128, 256 Hz);
- la fiecare 2 sec (odata cu schimbarea merdianului), se modifica tipul generatorului de semnal din sintetizator (sinusoidal, SAW, rectangular, triunghiular, loop.wav;
- dupa 20 secunde, procesul se reia.

In afara algoritmului, exista preseturi create ce vor permite afisarea pentru diferite orase a conditiilor meteo, precum si localizarea pe harta. 

Cu ajutorul hartii pot fi obtinute conditiile meteo din orice punct al hartii. 

## Utilizare
Pentru utilizatrea patch-ului - care va porni direct in "Presentation mode" - exista urmatoarele:
- un buton de ON, care va porni algoritmul;
- un buton de OFF, care va opri algoritmul;
- cu algoritmul oprit se pot face urmatoarele:
   - apelarea unor preseturi care reprezinta orase, rezultatul fiind afisarea parametrilor meteo mentionati mai sus si pozitia acestuia pe harta;
   - cu ajutorul mouse-ului se poate alege un punct de pe harta, iar patcher-ul va afisa denumirea localitatii si a tarii (cu exceptia celor mentionate mai sus privitoare la acesti parametri) si datele meteo. 
- pot fi ajustati parametrii sintetizatorului - ADSR, durata notelor MIDI generate de pictslider, volumul. 
- Parametrii ADSR pot fi resetati la valorile implicite;
- exista posibilitatea inregistrarii, si apoi a redarii unui fragment de 10 secunde al sintetizatorului.

## Istoric

(13.05) afisarea corecta a parametrilor: temperatura, temperatura resimtita, viteza vantului, tara, localitatea prin introducerea coordonatelor 

(3.06) Generare aleatoare a coordonatelor geografice (aici m-am gandit la un anumit algoritm):
      - genereaza aleator o latitudine cu valoarea intre -90 si +90 (la fiecare 50secunde): 
      - cu latitudinea generata, se va genera aleator un meridian, iar acesta va fi incrementat la fiecare 10secunde;
      - parametrii meteo vor fi cititi pentru locatia respectiva la fiecare secunda;
      - dupa 50 secunde, procesul se reia cu o noua valoare de latitudine
      - Duratele algoritmului le voi mai ajusta functie de testele pe care le voi face. 
      - obs: valoarile de 50s si 10s din algoritm reprezinta o prima faza a proiectului.
      
(3.06) Valorile temperaturii (sau temperatura resimtita, sau diferenta dintre ele) si viteza vantului vor fi date de intrare intr-un sintetizator (posibil, cel lucrat la teme, dar modificat special pentru acest proiect).
   

(12.06) Finalizarea interfetei, folosirea interactiva a hartii. 

## Link-uri
1. https://www.npmjs.com/package/openweather-apis;
2. https://openweathermap.org/;
3. www.google.ro/maps;
4. https://cycling74.com/articles/node-for-max-intro-%E2%80%93-let%E2%80%99s-get-started;
5. https://nodejs.org/en/
6. https://www.youtube.com/watch?v=Qq4EzgKIzoM
7. https://www.youtube.com/watch?v=gLb1s87YWHw&list=PLF0Dm1j2ix_w2UG_PI75-C2U_uXfzaz0w&index=29&t=960s;
8. https://cycling74.com/tutorials/page/1;


