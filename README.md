thriftalicious
==============

Link til oppgaver: https://nanna.bekk.no/confluence/display/BEKK/Thrift

## Case: Utfør et kjøp av en vare
* Funksjonelle problemstillinger:
* Kjøpe samme varen to ganger på rad
* To forskjellige kjøper samme vare

  Thrift har ingen formening om message-semantikk. Man kan legge en message-queue på toppen av thrift. 

* Støtte flere ulike klienter

  Thrift er språk-uavhengig.
* Støtte flere versjoner av ordreformat
* Bekreftelse på kjøp
* Flere?


## Er teknologien/stilen/mønsteret:
* (Disse bør en kunne svare på i løpet av dagen)
* Basert på standarder (åpne/lukkede/finnes ingen)
  Har sin egen standard
* Teknologi-agnostisk
  Ja. Kan generere typer og interface (klient og server) for de fleste aktuelle språk.
* Testbar
* Godt dokumentert:
  På ingen måte. Til tider feildokumentert. Lite eksempler på fullstack "enterprise" bruk.
* Moden
  Ja. I stor bruk hos mange aktører.
  Brukt hos: Facebook, Evernote, LastFM, Simens.
* Utviklingsvennlig
* Simpel/enkel (basert på erfaringer i dag)
  Rent kodemessig er det få ting du må kjenne til. Ser ikke ut til å ta over kodebasen i noen større grad enn f.eks. Jersey.
  Må riktig kunne Thrift-DSL-et for å kunne få generert typer og klasser, men det er vel en trade-off mot at du kan bruke ulike språk mot samme type.
* Transparent (enkelt å se hva som skjer)
* Flere?


## Hvordan håndterer teknologien/stilen/mønsteret:
* (Her kan en prioritere selv hva en vil se nærmere på)
* versjonering/endringer (data format evolution and extensibility)
* Timeliness: Integration should minimize the length of time between when one application decides to share some data and other applications have that data.
* Garantert mottak
* Håndtere samme melding flere ganger
* Skalering
* Robusthet
* Recovery/resilience
* Tilgjengeliggjøring av funksjonalitet (ikke bare data)
* Temporal kobling http://iansrobinson.com/2009/04/27/temporal-and-behavioural-coupling/
* Spatial kobling (oppslag, lastbalansering, etc)
* Responstid
* Feil
* Monitorering
* Sikkerhet
* "Egendefinerte datatyper" i format, eks dato i JSON
* Flere?

