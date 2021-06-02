# Weather sound

Prin intermediul unui patcher Max se preiau pentru o anumita locatie - identificata pe baza coordonatelor geografice - date privitoare la starea curenta a vremii, se va afisa temperatura, temperatura resimtita, viteza vantului, tara si localitatea, cu precizarea ca pentru ultimii doi parametri atunci cand coordonatele sunt generate aleator este posibil ca acestea sa nu fie indicate (ne putem gasi pe o zona care sa nu apartina nici unei localitati sau tari). Coordonatele pot fi introduse atat manual, dupa ce sunt citite pe o www.google.ro/maps, fie prin intermediul unui algoritm pe care il voi dezvolta.

## (Utilizare)
Avand in vedere ceea ce am lucrat pana acum, este posibila introducerea in Presentation Mode a unor valori pentru latitudine si longitudine (acestea pot fi obtinute si cu ajutorul www.google.ro/maps ce apare in Presentation. Va vor aparea temperatura, temperatura resimtita, viteza vantului, tara, localitatea.


## (Istoric)

(13.05) afisarea corecta a parametrilor: temperatura, temperatura resimtita, viteza vantului, tara, localitatea prin introducerea coordonatelor 

(3.06) Generare aleatoare a coordonatelor geografice (aici m-am gandit la un anumit algoritm):
      - genereaza aleator o latitudine cu valoarea intre -90 si +90 (la fiecare 50secunde): 
      - cu latitudinea generata, se va genera aleator un meridian, iar acesta va fi incrementat la fiecare 10secunde;
      - parametrii meteo vor fi cititi pentru locatia respectiva la fiecare secunda;
      - dupa 50 secunde, procesul se reia cu o noua valoare de latitudine
      - Duratele algoritmului le voi mai ajusta functie de testele pe care le voi face. 
      - obs: valoarile de 50s si 10s din algoritm reprezinta o prima faza a proiectului.
      
(3.06) Valorile temperaturii (sau temperatura resimtita, sau diferenta dintre ele) si viteza vantului vor fi date de intrare intr-un sintetizator (posibil, cel lucrat la teme, dar modificat special pentru acest proiect).
      

(X.06) Eventual control de la distanta al algoritmului; modificari finale; modelarea unei intrefete in Presentation Mode.

## (Link-uri)
...

# Dezvoltarea proiectului

Pentru început:

1. Creează-ți cont pe Github
2. Download și install [Github Desktop](https://desktop.github.com/)
3. Citește [acest ghid](https://charlesmartin.com.au/blog/2020/08/09/student-project-repository) și ține la îndemână [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet).

Apoi, procesul este următorul (inspirat de [aici](https://cs.anu.edu.au/courses/comp1720/deliverables/05-major-project/#submission-process)):

1. *fork* al acestui template către propriul tău cont de Github

![](assets/fork.gif)

_(dacă preferi cumva ca repo-ul să nu fie vizibil de către public, îl poți seta ca Private din Settings - "Change visibility". Atunci trebuie să mă adaugi drept colaborator, ca eu să am acces.)_

2. *clone* al repo-ului din Github Desktop pentru a-l downloada local

![](assets/clone.gif)

3. *commit* și *push* pe măsură ce lucrezi la proiect. Ultima versiune push-ată pe server înainte de deadline va conta pentru evaluare.

![](assets/commit.gif)

## Elemente obligatorii

1. Acest readme completat. Titlu, descriere, mod de utilizare, istoric, link-uri utile.

   Poți include și imagini și chiar [gif-uri animate](https://www.screentogif.com/), sau link-uri către materiale audio/video.
   
   Vezi [aici](https://charlesmartin.com.au/blog/2020/08/09/student-project-repository) mai multe sugestii.

2. [Declarația de originalitate](statement-of-originality.yml) completată. Tot ce nu este inclus acolo va fi considerat 100% contribuție proprie.

    *(formatul este adaptat de [aici](https://gitlab.cecs.anu.edu.au/comp1720/2018/comp1720-2018-major-project/-/blob/master/statement-of-originality.yml). Da, este un pic ironic să refolosim un doc [de altundeva](https://cs.anu.edu.au/courses/comp1720/resources/faq/#how-do-i-fill-out-my-statement-of-originality), dar menționăm sursa deci nu este plagiat!)*

3. Proiectul în sine. Tot codul trebuie să fie prezent, proiectul trebuie să poată rula conform instrucțiunilor din readme. Dacă e nevoie de asset-uri mari (sunete, video etc), [folosește Git LFS](https://git-lfs.github.com/) sau include link de download în instrucțiunile de instalare.

