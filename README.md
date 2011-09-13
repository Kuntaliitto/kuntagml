# KuntaGML-skeemat

## Skeemojen sovellussäännöt

XML-tiedostojen luomisessa on sovittu käytettäväksi seuraavia oletusarvoja ja ehtoja:

- Puuttuva päivämäärätieto ilmaistaan arvolla: `1.1.1001`
- Puuttuva numeroarvo ilmaistaan käyttämällä XML-attribuuttia `nil`, esimerkiksi `<rakval:vakuudenmaara xsi:nil="true"></rakval:vakuudenmaara>`
- GML/XML-tiedostossa on oltava otsaketiedoissa `xsi:schemaLocation`
- Koordinaattien(x,y,z) yksikkö on metri (m).
- Koordinaattien järjestys : 1. itään, 2. pohjoiseen, (3. korkeus).
- Jos aineistossa on käytetty Z-koordinaattia, niin `3`, muutoin `srsDimension="2"`
- Koordinaattiluvussa korkeintaan 10 desimaalia.
- Suuntakulmien yksikkö on radiaani.
- Kulmien 0-suunta on aina pohjoiseen (sekä labelit, että symbolit).
- Labelien (tekstien) suunta oletuksena itään.
- Pistesymbolien suunta oletuksena pohjoiseen.
- Pistesymbolien asemointipiste on keskipiste, poikkeuksena nuolimaiset symbolit, joiden asemointipiste on nuolen kärki.
- Suunta kiertää koko ympyrän myötäpäivään.
- Suunnan puuttuessa sen oletusarvo on `0.0`
- Ympyrän kaari aina `gml:Arc` -kohteena.
- Koko ympyrä: kuten kaaren esitys, mutta alku- ja loppupiste sama ja välipiste keskeltä eli alku- ja välipisteen etäisyys on ympyrän halkaisija
- Jos kyseessä on symboliviiva, niin symboli tulee aina oikealle viivan kulkusuuntaan nähden
- Jos aluekohde koostuu segmenteistä, niin segmentit ja segmenttien pisteet ovat:
  - Pääalueissa myötäpäivään kiertävässä järjestyksessä
  - saarien (reikien) alueissa vastapäivään kiertävässä järjestyksessä
- Suositellaan käytettäväksi seuraavia geometriatyyppejä:
  - Suorakulmio: `Envelope` (käytetään aineistorajauksessa)
  - Piste: `Point`/`pos`
  - Viiva (murto): `LineString`/`pos`
  - Viiva (ympyränkaari): `Curve`/`Arc`/`pos`
  - Alue (yksinkertaiset): `Polygon`/`LinearRing`/`pos` (alueen tai sen saarien reuna esitetään yhdellä murtoviivalla)
  - Alue (monimutkaiset): `PolyhedralSurface`/`PolygonPatch`/`Ring`/`Curve`/`LineStringSegment`/`pos` tai `Arc`/`pos` (alueen tai sen saarien reuna esitetään usealla viivalla, joka on murtoviiva tai ympyränkaari)

## Asemakaava

- [Asemakaava](gml/asemakaava.xsd)

## Kantakartta

Yksittäiset skeematiedostot:

- [Kantakartta-skeema](gml/kantakartta/kantakartta.xsd)
- [Kantakartta-kantakohteet](gml/kantakartta/kantakartta_perusta.xsd)
- [Kohteiden ominaisuuksien arvojoukkomäärittelyt](gml/kantakartta/arvojoukot.xsd)
- [Hallinnolliset aluejaot](gml/kantakartta/hallinnolliset_aluejaot.xsd)
- [Ilmaliikenneverkko](gml/kantakartta/ilmaliikenneverkko.xsd)
- [Kaasuverkko](gml/kantakartta/kaasuverkko.xsd)
- [Kaukolampoverkko](gml/kantakartta/kaukolampoverkko.xsd)
- [Karttatekstit](gml/kantakartta/karttatekstit.xsd)
- [Kasvillisuus](gml/kantakartta/kasvillisuus.xsd)
- [Kiinteistotiedot](gml/kantakartta/kiinteistotiedot.xsd)
- [Luokittelemattomat](gml/kantakartta/luokittelemattomat.xsd)
- [Luonnonsuojelu](gml/kantakartta/luonnonsuojelu.xsd)
- [Maaliikenneverkko](gml/kantakartta/maaliikenneverkko.xsd)
- [Maanpinnan korkeus](gml/kantakartta/maanpinnan_korkeus.xsd)
- [Maanpinta](gml/kantakartta/maanpinta.xsd)
- [Paikannusjärjestelmät](gml/kantakartta/paikannusjarjestelmat.xsd)
- [Rakennetut tilat](gml/kantakartta/rakennetut_tilat.xsd)
- [Rakenteet](gml/kantakartta/rakenteet.xsd)
- [Rautatieliikenneverkko](gml/kantakartta/rautatieliikenneverkko.xsd)
- [Sähköverkko](gml/kantakartta/sahkoverkko.xsd)
- [Tietoliikenneverkko](gml/kantakartta/tietoliikenneverkko.xsd)
- [Tonttijako](gml/kantakartta/tonttijako.xsd)
- [Vesiliikenneverkko](gml/kantakartta/vesiliikenneverkko.xsd)
- [Vesistöt](gml/kantakartta/vesistot.xsd)
- [Vesiverkko](gml/kantakartta/vesiverkko.xsd)
- [Viemariverkko](gml/kantakartta/viemariverkko.xsd)

## Opastavat tiedot

- [Opaskartta](gml/opastavattiedot/opaskartta.xsd)
- [Osoitteet](gml/opastavattiedot/osoitteet.xsd)
- [Palvelut](gml/opastavattiedot/palvelut.xsd)
- [Verkkotopologia](gml/opastavattiedot/verkkotopologia.xsd)

# Poikkeamispäätös ja suunnittelutarveratkaisu

- [Poikkeamispäätös ja suunnittelutarveratkaisu](gml/poikkeamispaatos_ja_suunnittelutarveratkaisu.xsd)

## Rakennusvalvonta

- [Rakennusvalvonta](gml/rakennusvalvonta.xsd)

## Ympäristö

- [Ilmoitukset](gml/ymparisto/ilmoitukset.xsd)
- [Luontokohteet](gml/ymparisto/luontokohteet.xsd)
- [Maa-ainesluvat](gml/ymparisto/maa_ainesluvat.xsd)
- [Pilaantuneet maa-alueet](gml/ymparisto/pilaantuneet_maa_alueet.xsd)
- [Vesihuoltolaki](gml/ymparisto/vesihuoltolaki.xsd)
- [Ympäristöluvat](gml/ymparisto/ymparistoluvat.xsd)
- [Ympäristön tila ja seuranta](gml/ymparisto/ympariston_tila_ja_seuranta.xsd)
