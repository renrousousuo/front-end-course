#!/bin/bash

# bash -c "$( curl http://fouber.github.io/install-php-cgi/install-php.sh -k )" -o 5.3.5

echo

set -e
trap 'echo Error on line $BASH_SOURCE:$LINENO' ERR

if [ -z $2 ]
then
    PHP_PREFIX="`pwd`/php-linux"
else
    PHP_PREFIX="${2}"
fi

if [ ! -d "${PHP_PREFIX}" ]; then
    mkdir -p "${PHP_PREFIX}"
fi

TEMP="${HOME}/.php-linux"
if [ ! -d "${TEMP}" ]; then
    mkdir -p "${TEMP}"
fi

echo "**************************************"
echo "* Install libxml2 v2.7.8 to ${PHP_PREFIX}"
echo "**************************************"
echo

cd "${TEMP}"

LIBXML_FILE="libxml2-2.7.8.tar.gz"

if [ ! -f "${LIBXML_FILE}" ]; then
    curl "ftp://xmlsoft.org/libxml2/${LIBXML_FILE}" -o "${LIBXML_FILE}"
fi

echo "**************************************"
echo "* Uncompress ${LIBXML_FILE}"
echo "**************************************"
echo

tar zxvf "${LIBXML_FILE}"
cd "libxml2-2.7.8"

echo "**************************************"
echo "* Compiling libxml2 ... "
echo "**************************************"
echo

./configure --prefix=${PHP_PREFIX}
make -j 4 && make install

echo "**************************************"
echo "* libxml2 installed successfully"
echo "**************************************"
echo

if [ -z $1 ]
then
    PHP_VERSION="5.2.17"
else
    PHP_VERSION="${1}"
fi

echo "**************************************"
echo "* Install php v${PHP_VERSION} to ${PHP_PREFIX}"
echo "**************************************"
echo

cd "${TEMP}"

PHP_FILE="php-${PHP_VERSION}.tar.gz"

if [ ! -f "${PHP_FILE}" ]; then
    # curl "http://museum.php.net/php5/${PHP_FILE}" -o "${PHP_FILE}"
    curl "http://cn2.php.net/distributions/${PHP_FILE}" -o "${PHP_FILE}"
fi



echo "**************************************"
echo "* Uncompress ${PHP_FILE}"
echo "**************************************"
echo

tar zxvf "${PHP_FILE}"
cd "php-${PHP_VERSION}"

echo "**************************************"
echo "* Compiling php ... "
echo "**************************************"
echo

./configure --prefix=${PHP_PREFIX} --enable-fastcgi --with-libxml-dir=${PHP_PREFIX} --with-curl --enable-mbstring   --with-zlib
make -j 4 && make install

if [ -e "${PHP_PREFIX}/bin/php-cgi.dSYM" ]
then
    ln -s "${PHP_PREFIX}/bin/php-cgi.dSYM" "${PHP_PREFIX}/bin/php-cgi"
fi

cd "${PHP_PREFIX}"

echo "**************************************"
echo "* Add the environment variable "
echo "**************************************"
echo

echo "sudo ln -s ${PHP_PREFIX}/bin/php-cgi /usr/local/bin/php-cgi"
sudo ln -s "${PHP_PREFIX}/bin/php-cgi" /usr/local/bin/php-cgi

php-cgi -v

rm -rf "${TEMP}"
