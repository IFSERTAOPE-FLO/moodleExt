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
// along with Moodle.  See the file COPYING.txt for details.

/**
 * Frontpage layout for Sertão Conecta theme.
 *
 * @package    theme_sertao
 * @copyright  2026 Victor Kauê / Sertão Conecta
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

// Initialize theme JS.
$PAGE->requires->js_call_amd('theme_sertao/init', 'init');

$templatecontext = [
    'sitename' => format_string($SITE->fullname, true, ['context' => context_system::instance()]),
    'output' => $OUTPUT,
    'bodyattributes' => $OUTPUT->body_attributes(),
    'sidepreblocks' => $OUTPUT->blocks('side-pre'),
    'logo_url' => $OUTPUT->image_url('logo-sertao-conecta', 'theme_sertao'),
    'login_url' => new moodle_url('/login/index.php'),
];

echo $OUTPUT->render_from_template('theme_sertao/frontpage', $templatecontext);

// To satisfy the Moodle layout validator, we must have the following line:
echo $OUTPUT->main_content();
