<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Theme configuration.
 *
 * @package    theme_sertao
 * @copyright  2026 Victor Kauê / Sertão Conecta
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$THEME->name = 'sertao';

// Inherit from Boost.
$THEME->parents = ['boost'];

// Custom SCSS files.
$THEME->scss = function($theme) {
    return theme_sertao_get_main_scss_content($theme);
};

// Layout definitions.
$THEME->layouts = [
    // The frontpage layout is where we will implement the Landing Page.
    'frontpage' => [
        'file' => 'frontpage.php',
        'regions' => ['side-pre'],
        'defaultregion' => 'side-pre',
        'options' => ['nonavbar' => true],
    ],
    // Default layout.
    'standard' => [
        'file' => 'columns2.php',
        'regions' => ['side-pre'],
        'defaultregion' => 'side-pre',
    ],
];

// Enable docking (optional, Boost doesn't use it much).
$THEME->enable_dock = false;

// Custom JS.
$THEME->javascripts_footer = ['sertao_init'];

// Icons.
$THEME->iconsheet = false;

// Renderer factory.
$THEME->rendererfactory = 'theme_overridden_renderer_factory';
