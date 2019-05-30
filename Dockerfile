from wordpress

WORKDIR /var/www/html

RUN echo "define('FS_METHOD', 'direct');" >> wp-config.php
RUN echo "define('FS_METHOD', 'direct');" >> wp-test.php
