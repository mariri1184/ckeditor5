/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Font from '@ckeditor/ckeditor5-font/src/font';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Paragraph,
	Essentials,
	Autoformat,
	Indent,
	List,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine,
	Alignment,
	Bold,
	Italic,
	Underline,
	Subscript,
	Superscript,
	Font,
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			"bold",
			"italic",
			"underline",
			"|",
			"fontSize",
			"|",
			"subscript",
			"superscript",
			"|",
			"alignment",
			"|",
			"outdent",
			"indent",
			"|",
			"bulletedList",
			"numberedList",
			"|",
			"insertTable",
			"horizontalLine",
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "de",
};
