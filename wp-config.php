<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
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
define( 'DB_NAME', 'portfolio_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'LS[-&9?JSEGtg;_$0riX -Ww2q[f|kRv57WyWvh{pL7%4E;y;SwoM7$)!9xZgJ!|' );
define( 'SECURE_AUTH_KEY',  'HIjR&eNOX} Rb2=vgV^1a9-(*1Wzx[i4eu]`aXv~n5&y|5)gD!L|G1S03])>%Z)`' );
define( 'LOGGED_IN_KEY',    'Eb<<wgPm9t:l?RI/w<]~3s&/cH2+^0>Ev7&#SPM7~%iSecGd%%~PmyJlyE!tv%S$' );
define( 'NONCE_KEY',        '$:a=qV<gZ-l#Yvm}aK}8I,4@KzfipyagL{(yH<!-WNlRJOu7ij}:{?gY7PPaO!-s' );
define( 'AUTH_SALT',        'o`TY4Q<bFF6UZ)=x0(jfcZ^Ln<tx9Ea)=;PY[^E 4GXL$]4)yIQ<xG|Tt2+K>bf~' );
define( 'SECURE_AUTH_SALT', ' =*e7G-^OZjSB?!uJNT(;<Jr*+Yf(T_z|&EnbZ^%D_mh9Gg,&zU-<qF|vX|$2tV0' );
define( 'LOGGED_IN_SALT',   'mm`+<..tyDyz#D@)f5!j_]3rHXT**yq!!B;l5t,Z<Q9|,^e-W.Ltc~x|GV0IC5Dy' );
define( 'NONCE_SALT',       '!r_F oObj|I8aI}%lLNc#%MIa`^o&!1eG9V>c/Z5Q D%4C-_/+?}8hEB@OoP`K8h' );

/**#@-*/

/**
 * WordPress database table prefix.
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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
