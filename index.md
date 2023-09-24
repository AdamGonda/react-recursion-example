# React-ban lehet ilyet?

# Hook 14s
Probaltal mar interaktiv file strukturat renderelni Reakt-ban?
Meglepnelek ha azt mondanam, hogy mutatok egy teknikat,
amivel egy egyettlen onmagara hivatkozo komponensel meg lehetne oldani?
Izgi? Nezzuk meg!

# Devsetup 14
Codesandbox-ot fogok hasznalni
ami egy online kod editor
azert fasza mert nem kell a local dev setuppal bajlodni
nektek se meg nekem se
es ebbol egy linkelheto pelda lesz
amit tudtok nyomkodni vagy szerkeszteni
link a leirasban

# Goal setting 22s
That ez a cel ahova el szeretnenk jutni
egy ilyen kis interaktiv file struktura
amit dinamikusan renderelunk ki egy fa szerkezetbol
Tehat latjatok hogy vannak mappak es file-ok
a mappakat es azok nyitott vagy csukott alapotat ezek az ujjak jelzik
es itt van ez a kis expand/close all button is
ami ugye azt tudja hogy az osszes mappat kinyitja vagy becsukja

# Adat 44s
Okes akkor kezdjuk az adattal
ez az object lesz a dinamikus renderunk alapja
egy fa struktura
amiben ezek a nodeok vannak
mindegyiknek van neve
es vannak olyanok amiknek vannak child nodejai is
tehat ha ezt becsukom
ezt meg kicsitom
akkor lehet latni az osszefuggeseket
itt a `project` a root nodeunk
amit ha lenyitunk itt van a `readme`
meg a `tsconfig`
es a `src` mappank
amit ha lenyitnk itt vanak benne a komponenseink
meg a `utils`
tehat ez alapjan fogjuk kirenderelni a file strukturankat
ami azt jelenti hogy ha hozzaadunk meg egy filet a komponensekhez
akkor az szepen megjelenik itt

# Start new Codesandbox 25s
okes tehat elso lepes
egy uj tabban react.new
ami nyit egy uj react sandboxot a bongeszodben

aztan ezeket ki lehet vagni
ezutan nyargalunk gyorsan a css-be
ahova ezt gyorsan be is masolom
ezt masoljatok nyugodtan az en projektembol link ugye lent
a kovi pedig a fa amit szinten masolok

# ^^^^^^^^^^^^^^^^^^^^ bevezeto & setup 2min

# Atvezeto & nyeremeny 25s
es ezzel meg is vagyunk az elokeszuletekkel
kezdodhet a moka!!

Viszont meg mielott elkezdjuk aki erzi magaban a csit az nyugodtan ugorjon neki es nezze meg hogy mire jut,
kommentben johetnek a sandbox linkek
a bekuldok kozott `xxx` konyvet szorsolok ki
elore kozlom a konyv nem uj de ettol persze meg lehet hasznos

# Rekurzio
tadadada! el jutottunk a nagy leleplezesig
lassuk! mi is ez a teknika, amit a video elejen igertem
`drumroll` hat persze hogy a rekurzio!

gyorsan belovom a quokkat
hogy lehessen faszan latni real time a helyzetet

na nezzuk hogy mi is ez pontosan
a leheto legeszszerubb peldaval kezdjuk

a cel az hogy irjunk egy olyan fugvenyt ami
kiprinteli az osszes szamot n tol 5 ig, ahol n dinamikus

`example-0.js`
ugye ezt egy sima forloop-pal is meg lehet oldani
de ha rekurzivan szeretnenk akkor azt igy lehet

`example-1.js`
itt egy masik pelda ahol pedig egy listaba
szeretnenk gyujteni az osszes fibonacsi szamot
bizonyos parameterek alapjan
ami azt jelenti hogy megadjuk neki mi az elso ket szam es allitunk egy limitet
hogy meddig generalja ezeket a szamokat
ami ebben a peldaban 13

`example-0.js`
tehat miert is erdemes tudni mi az a rekurzio?
vannak olyan alltalaban grafos problemak amikre ez a legjobb megoldas
nyilvan figyelni kell ra hogy az adott kornyezetben
milyen feltetelek vannak memoria eroforrasok szempontjabol hogy ki ne fussunk belole
es vagy az adott adat halmaz merete nem tul nagy e
pont ugyanezert

na de nezzuk is milyen reszekre lehet bontani egy rekurziv fugvenyt
leginkabb kettore
van egy ugynevezett base case ami megszakitja a rekurziot
es van egy rekurziv case ami pedig folytatja at

ami itt azt jelenti hogy ha n egyenlo 5-tel akkor megszakad a folyamat
egyebkent pedig ujra meghivjuk a fugvenyt ez a rekurziv resz

`example-1.js`
ebben az esetben pedig ha a next nagyobb mint
a limit akkor elerunk a base case-hez tehat itt megszakad a folyamat
viszont ha kissebb megyunk tovabb es ujra meghivjuk a fugvenyunket

# Atvezeto
akkor nezzuk ezt a teknikat felhasznalva
hogy tudnank eloszor is csak kirenderelni a neveket
ebbol a fa strukturabol

# Recurson in React - Név lista render
eloszor is kell nekunk egy uj komponens
amit Node nak fogok elnevezni
ami annyi fog tudni hogy var egy `current` propot
majd egy divbe agyazva ki is rendereljuk a nevet egy p tegbe

nezzuk eddig ez mit is tud
tehat meghivjuk a Node-ot es a `current` hez pedig importaljuk a data-bol
az objecktunket amit atpasszolunk a Node-nak
es lass csodat kiiroott az adott nodehoz tartozo nev
vagyis a `project`

`rekurziv resz`
na most jon a rekurziv resz
atmappelunk az adott node childjain
es mindegyikre returnolunk egy Node-ot

amivel effektive el is ertuk a celunkat
vagyis megvan a listank a nevekkel

# Recurson in React - explanation
nezzuk hogy is mukodik ez a rekurziv Node komponens
var egy current propot ami az aktualis node amit ki szeretnenk renderelni
aminek van neve meg lehetnek gyerekei

aztan elsokent kirendereljuk a nevet
ami ugye minden Node-nak van tehat nem kell semmilyen csekk hogy letezik e

aztan pedig jon a fun part ahol atmeppelunk az osszes gyereken a node-nak
mar ha van amit ez a kis `optional chaning operator` biztosit

ami a gyakorlatban azt jelenti hogy ez a `base case`-unk
mert ha egy olyan node nak probalunk meg at-mappelni a childjain aminek nincsenek
ez a kis kerdojel `undefined` ot add vissza
amit a React nem renderel igy ott megszakat a folyamat

viszont ha vannak gyerekei akkor eljutunk a `rekurziv case`-hez
ahol at-meppelunk a gyerekeken es ujra meghivjuk a kis komponensunket
az aktualis childal

# Indentation
oke akkor eljutottunk odaig hogy kirendereltuk az egesz strukturat
de ez nem hasonlit egy file rendszerre
mert nem latjuk hogy mi mi ala tartozik
amit egyszeruen meg tudunk oldani ha hozzaadunk
egy margin leftet minden nodehoz
ami indentalja oket

viszont aki szemfules eszrevette hogy igy
a root-hoz is hozza lett adva egy margin left
viszont en ezt nem szeretnem
theat introducolunk egy uj propot
amit ugy nevezunk el hogy isChild
ez egy sima boolean filed lesz
ami alapjan tudunk csinalni egy egyszeru ki ternarit
ami radobja a margint ha kell

es akkor mar csak egy dolog maradt hatra
theat itt a rootnal ezt nem adom meg
igy ez alapbol false lesz
viszont itt a gyerekeknel hozzacsapom
igy azokra rakerul a 20 pixeles behuzas

# Ujjak es indikatorok
oke nezzuk hol tartunk
hianyoznak az ujjak
theat most jon az a resz
hogy szeretnenk indikalni valahogy
hogy ez egy folderek e vagy file

es en erre hasznaltam
ezeket az ujjatak meg a kotojelet

theat kell valamilyen kondicio ami alapjan
ezeket ki tudjuk renderelni a nev ele
ami ugye adott
hogy ha egy node-nak vannak gyerekei
akkor az biztos hogy nem file

theat megvan a feltetelunk
ami alapjan meg tudjuk fogalmazni a ternarinket
ha van children akkor az egy uj
ha nincs akkor egy kotojel

ami amint latjuk szepen mukodik is

# IsOpen state
viszont meg nem lehet oket becsukni
amit most ovosolunk is

szugsegunk van valamilyen statere
ami alapjan meg tudjuk mondani hogy
egy adott node nyitva van e vagy sem
es amit tudunk tolleelni

ugyhogy behuzom a Reactet es csinalok
egy useState hookot
aminek az lesz a neve hogy isOpen

amit aztan tudunk arra hasznalni hogy azt mondjuk hogy
ha isOpen akkor muti a gyerekeket
amugy meg ne

amivel elertuk hogy nem rendereljuk a gyerekeket
mivel ugye ez alapbol false ezert nem latunk semmit

de ez meg nem csinal semmit ha rakattintok
ugyhogy hallgatnunk kene az onClick-re
amit ide a p be rakok
tehat egy callbackben settelem a statet
mindig az ellenkezojere egy egyszeru tagadassal
tehat ha nyitva van becsukjuk es
ha zarva akkor pedig kinyitjuk

viszont ez az uj nem azt mutatja amit szeretnek
mert nem reagal a valozasokra
ennek erre kene mutatnia ha zarva van es lefel ha nyitva

tehat ide meg kell egy turnary
ami az isOpen alapjan eldonti melyik ujjat mutassa

# Lift state up to App
es akkor mar mondhatnank hogy
meg is vagyunk kb mindennel
kiveve hogy hianyzik meg egy funkcio

nevlegesen az hogy ki vagy be
tudjuk csukni egyszerre az osszes mappat

ami azert erdekes mert nekunk csak
node szinten vannak statejeink
nem tudjuk egyszerre manipulalni az osszes state et

igy a legkizenfekvobb az hogy ezt innen kiemeljuk
az appba ahonnan lepasszoljuk azt minden nodenak
meg a lehetoseget hogy updateeljek

that ezt ugy ahogy van megfogom es atrakom ide
persze ezt atnevezzuk, met a sttert is
es ide pedig rakunk egy olyat hogy...
isOpen
ugye ez a setOpen meg nincs meg
meg az isOpen se dinamikus

theat kell nekunk minden nodban az aktualis
top level state
meg setState
amiket at passzolunk nekik
es ezeket hasznalnuk is kell (a nodenal is)
viszont meg elotte vegig kene gondolunk hogy
hogyan is szeretnenk nyomonkovetni mi van nyitva vagy zarva

amire en azt mondom hogy ez legyen egy lista
amiben benne vannak az aktualisan nyitott mappak nevei

theat miutan ezt tudjuk
itt a nodeban meg tudjuk hatarozni hogy hogyan szamolodik az isOpen
es mivel ez egy sima lista nevekkel
azt tudjuk mondani hogy ha az adott nodenak a nevet tartalmazza a lista akkor nyitva van

es akkor maradt az onClick handler
amit ujra kell gondolnunk
aminek itt csinalok gyorsan egy fugvenyt
handleClick
es akkor ezt fogjuk e helyett hasznalni
itt theat az alapjan hogy a nodeu nyitva van e vagy csukva
kulonbozo keppen kell cselekednunk

tehat ide rakok egy if-else et
ami az isOpen alapjan fog elagazni
es akkor itt vegig kene gondolnunk hogy ha a
node nyitva van hogyan zarjuk be es forditva

ami viszonylag egyszeru
mivel a state egy lista
amibol ki kell vennunk vagy be kell tennunk egy nevet

vagyis itt a becsukasnal azt tudjuk mondani
hogy a listabol kifilterezzuk az adot nodenak a nevet
es a kinyitasnal pedig hozzaadjuk

# Expand/close all
es ezzel el is jutottunk oda ahonnan elindultunk
csak most top level van a state az Appban egy listaformajaban
ami azert fasza mert igy mar tudjuk manipulalni az osszes Nodeot

Mivel ez nem egy olyan izgalmas resz
en ide bemasolok egy Button komponenst
amit tudunk hasznalni majd az appban

ez annyit tud hogy styleolja a buttont
var egy onclicket es rendereli a childokat
vagyis megkonnyiti az eletnket

es ezt a komponenst felhasznalva
letre tudjuk hozni a hinyzo gombunkat
ami kinyitja vagy becsukja majd az osszes nodeot

es akkor kell nekunk egy extra valtozo
ami azt mondja majd hogy van e nyitva node vagy sem
mert ez alapjan kell renderelnunk a gombunkat

tehat ha van akkor a close all valtozat ot kell mutatnuk
viszont ha nincs akkor az open allt

ennek a neve legyen anyOpen
es az erteke pedig attol fog fuggeni
hogy a listank ures e
vagyis hogy a hossza nagyobb e mint nulla

ezen kivul kell nekunk ket event handler
amik nevlegesen a closeAll es expandAll lesznek
ezeket egyenlore uresen hagyom

es igy mar letre tudjuk hozni a varva vart gombunkat
amit ezzel az expressionnel az anyOpen alapjan
renderelunk ki

ha van nyitott akkor be akarjuk zarni mindet
ha pedig nincs akkor kinyitni az osszeset
itt ezt a kis jopofa gombot hasznaljuk mindket esetben
viszont a feliratok es az event handlerek elternek

amik egyenlore ugye uresek
minek okan ez a gomb egyenlore teljesen haszontalan
amit most orvosolunk is
tehat kezdjuk a closeAll al
itt anyi a dolgunk hogy a listabol kipucoljunk mindent
that egy ures listara settelem a stateunket
igy nem lesznek benne nevek vagyis
az osszes mappa becsukodik
ezzel meg is vagyunk

viszont az expandAll egy kicsit bonyolunltabb lesz
de miert is?
mert itt tudnunk kell az osszes mappa nevet
tehat alkalmazhatjuk az ujjonan tanul teknikankat
mert ahhoz hogy megtudjuk milyen mappa nevek vannak
rekurzivan meg kell vizsgalnunk a Nodokat
es egy listaba gyujteni a mappa neveket

tehat lesz egy listank ami eloszor tok uresek
ebbe fogjuk gyujteni a neveinket
majd letrehozunk egy rekurziv fugvenyt

aminek a base case-e ahol megszakad a rekurzio
az lesz amikor az adott nodenak nincsenek gyerekei
es a rekurziv case pedig amikor vannak
es ott igazabol csak annyit csinalunk hogy atmeppelunk rajtuk
es ujra meghivjuk a kis fugvenyunket az adott Nodedal
viszont a neveket meg nem gyujtottuk ki
igy ide meg beszurom ezt az if-et
tehat ha a nodenak vannak gyerekei vagyis egy mappa
akkor a nevet pusholom a listaba

es akkor mar csak ket dolgunk maradt hatra
meghivni a rekurziv fugvenyunket ami osszegyujti a neveket
majd updateelni a sztateunket

# Closeing
es ezzel el is jutottunk odaig hogy minden faszan fukodik
a title-t meg be lehet ide rakni
de igy mar feature complete az appunk

tehat megvan a file bongeszonk
ami dinamikusan renderelodik
mappakkal es fileokkal
amit az ujjak es a kotojelek jeleznek
a mapakat ki es be lehet csukni egyessevel
es van egy gombunk amivel pedig az osszeset be lehet zarni
vagy ki lehet nyitni

viszont ebben az implementacioban van 2 olyan dolog
amibe en bele tudnek kotni

az egyik a statehez kapcsolodik
a masik pedig egy potencialis performancia issue lehet

kommentben johetnek a megfejtesek
es ha van ra igeny csinalhatok egy followup vodeot
ahol mutatok megoldast ezekre
