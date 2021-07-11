<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'k140745_marlute_neu' );


/** MySQL database username */

define( 'DB_USER', 'k140745_mardbuser' );


/** MySQL database password */

define( 'DB_PASSWORD', 'dwahiodw.kdwhjaADWA483454?' );


/** MySQL hostname */

define( 'DB_HOST', '10.35.46.152:3306' );


/** Database Charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The Database Collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         '4^q-+WtY1i_a@kUY]b`[XCG}{K1( +eh_h&Bqj?zrR]~}aGPmrJcAI `}N$IK%)P' );

define( 'SECURE_AUTH_KEY',  'PpOxEu|,9;SzLj/+&|0y4uU$Yxn4lo(H.qfR^vpR]pdR*_N_d[<j0T.`,u)j>rfY' );

define( 'LOGGED_IN_KEY',    'H:EMA> sC-4!h}i=qXXU4f.}%jt#A%d5U05E?6:E}([bJgp6h,]p:mbOMBqcxQT<' );

define( 'NONCE_KEY',        'fk]xs<af0DX./6};H:JDliTi!`>A|?UEq(2vE! =5B.cD{GDvL2YAk(G9v(f*dJd' );

define( 'AUTH_SALT',        'nxy}X)2F >O3ykn;MKBC`Q@Bi )FY%B6|6W3QS({mgWL~&WJOR1+@G[kRC;R|wxd' );

define( 'SECURE_AUTH_SALT', '$e$*m1~ rfZu!Uf}q?iCq4+8U20_c<>*w%HkJ}`-Z!Wod=~2vWMVMBAHFt=b@w`H' );

define( 'LOGGED_IN_SALT',   '*_my^@Q0Mw^AE:t5,cLeN0x*yQunE,U)6L??4sJ60z AiJ-<tHxC,l+x!WR^xm:s' );

define( 'NONCE_SALT',       'A|3P}AvEz=)0O2_F,Kgw:1.:h}uNP*#I$X_#Al;vi9=/:n{P~ho((|%m*&C1`}K*' );


/**#@-*/


/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


define( 'WP_DEBUG_DISPLAY', false );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/** Test Set*/

define( 'WP_HOME', 'https://marlute.de' );

define( 'WP_SITEURL', 'https://marlute.de' );



