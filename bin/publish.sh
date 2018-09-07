#!/bin/sh

git log > log.txt
node link.js > link.sh
chmod a+x link.sh
./link.sh

rm -f ../gml/maankayttomuutos
rm -f ../gml/ymparisto/imoitukset
ln -sf maankaytonmuutos ../gml/maankayttomuutos
ln -sf ilmoitukset ../gml/ymparisto/imoitukset
