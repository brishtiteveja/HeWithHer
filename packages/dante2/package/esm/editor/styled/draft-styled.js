import { _ as _taggedTemplateLiteral } from '../../_rollupPluginBabelHelpers-09096d66.js';
import styled from '@emotion/styled';

var _templateObject;
var DraftBaseStyles = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  \n\t/**\n\t * @providesModule DraftEditor\n\t * @permanent\n\t */\n\n\t/**\n\t * We inherit the height of the container by default\n\t */\n\n\t.DraftEditor-root,\n\t.DraftEditor-editorContainer,\n\t.public-DraftEditor-content {\n\t\theight: inherit;\n\t\ttext-align: initial;\n\t}\n\n\t.DraftEditor-root {\n\t\tposition: relative;\n\t}\n\n\t/*HACK FOR ISSUE  https://github.com/facebook/draft-js/issues/304 , proposal from @bradbumbalough*/\n\t.DraftEditor-root {\n\t\t//overflow: auto;\n\t}\n\n\t/**\n\t * Zero-opacity background used to allow focus in IE. Otherwise, clicks\n\t * fall through to the placeholder.\n\t */\n\n\t.DraftEditor-editorContainer {\n\t\tbackground-color: rgba(255, 255, 255, 0);\n\t\t/* Repair mysterious missing Safari cursor */\n\t\tborder-left: 0.1px solid transparent;\n\t\tposition: relative;\n\t\tz-index: 1;\n\t}\n\n\t.public-DraftEditor-content {\n\t\toutline: none;\n\t\twhite-space: pre-wrap;\n\t}\n\n\t.public-DraftEditor-block {\n\t\tposition: relative;\n\t}\n\n\t.DraftEditor-alignLeft .public-DraftStyleDefault-block {\n\t\ttext-align: left;\n\t}\n\n\t.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n\t\tleft: 0;\n\t\ttext-align: left;\n\t}\n\n\t.DraftEditor-alignCenter .public-DraftStyleDefault-block {\n\t\ttext-align: center;\n\t}\n\n\t.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n\t\tmargin: 0 auto;\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t}\n\n\t.DraftEditor-alignRight .public-DraftStyleDefault-block {\n\t\ttext-align: right;\n\t}\n\n\t.DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n\t\tright: 0;\n\t\ttext-align: right;\n\t}\n\t/**\n\t * @providesModule DraftEditorPlaceholder\n\t */\n\n\t.public-DraftEditorPlaceholder-root {\n\t\tcolor: #9197a3;\n\t\tposition: absolute;\n\t\tz-index: 0;\n\t\tbackground-color: white;\n\t}\n\n\t.public-DraftEditorPlaceholder-hasFocus {\n\t\tcolor: #bdc1c9;\n\t}\n\n\t.DraftEditorPlaceholder-hidden {\n\t\tdisplay: none;\n\t}\n\t/**\n\t * @providesModule DraftStyleDefault\n\t */\n\n\t.public-DraftStyleDefault-block {\n\t\tposition: relative;\n\t\twhite-space: pre-wrap;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-ltr {\n\t\tdirection: ltr;\n\t\ttext-align: left;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-rtl {\n\t\tdirection: rtl;\n\t\ttext-align: right;\n\t}\n\n\t/**\n\t * These rules provide appropriate text direction for counter pseudo-elements.\n\t */\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-listLTR {\n\t\tdirection: ltr;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-listRTL {\n\t\tdirection: rtl;\n\t}\n\n\t/**\n\t * Default spacing for list container elements. Override with CSS as needed.\n\t */\n\n\t.public-DraftStyleDefault-ul,\n\t.public-DraftStyleDefault-ol {\n\t\tmargin: 16px 0;\n\t\tpadding: 0;\n\t}\n\n\t/**\n\t * Default counters and styles are provided for five levels of nesting.\n\t * If you require nesting beyond that level, you should use your own CSS\n\t * classes to do so. If you care about handling RTL languages, the rules you\n\t * create should look a lot like these.\n\t */\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {\n\t\tmargin-left: 1.5em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {\n\t\tmargin-right: 1.5em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {\n\t\tmargin-left: 3em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {\n\t\tmargin-right: 3em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {\n\t\tmargin-left: 4.5em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {\n\t\tmargin-right: 4.5em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {\n\t\tmargin-left: 6em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {\n\t\tmargin-right: 6em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {\n\t\tmargin-left: 7.5em;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {\n\t\tmargin-right: 7.5em;\n\t}\n\n\t/**\n\t * Only use square list-style after the first two levels.\n\t */\n\n\t.public-DraftStyleDefault-unorderedListItem {\n\t\tlist-style-type: square;\n\t\tposition: relative;\n\t}\n\n\t.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {\n\t\tlist-style-type: disc;\n\t}\n\n\t.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {\n\t\tlist-style-type: circle;\n\t}\n\n\t/**\n\t * Ordered list item counters are managed with CSS, since all list nesting is\n\t * purely visual.\n\t */\n\n\t.public-DraftStyleDefault-orderedListItem {\n\t\tlist-style-type: none;\n\t\tposition: relative;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {\n\t\tleft: -36px;\n\t\tposition: absolute;\n\t\ttext-align: right;\n\t\twidth: 30px;\n\t}\n\n\t/* @noflip */\n\n\t.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {\n\t\tposition: absolute;\n\t\tright: -36px;\n\t\ttext-align: left;\n\t\twidth: 30px;\n\t}\n\n\t/**\n\t * Counters are reset in JavaScript. If you need different counter styles,\n\t * override these rules. If you need more nesting, create your own rules to\n\t * do so.\n\t */\n\n\t.public-DraftStyleDefault-orderedListItem:before {\n\t\tcontent: counter(ol0) \". \";\n\t\tcounter-increment: ol0;\n\t}\n\n\t.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {\n\t\tcontent: counter(ol1) \". \";\n\t\tcounter-increment: ol1;\n\t}\n\n\t.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {\n\t\tcontent: counter(ol2) \". \";\n\t\tcounter-increment: ol2;\n\t}\n\n\t.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {\n\t\tcontent: counter(ol3) \". \";\n\t\tcounter-increment: ol3;\n\t}\n\n\t.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {\n\t\tcontent: counter(ol4) \". \";\n\t\tcounter-increment: ol4;\n\t}\n\n\t.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {\n\t\tcounter-reset: ol0;\n\t}\n\n\t.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {\n\t\tcounter-reset: ol1;\n\t}\n\n\t.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {\n\t\tcounter-reset: ol2;\n\t}\n\n\t.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {\n\t\tcounter-reset: ol3;\n\t}\n\n\t.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {\n\t\tcounter-reset: ol4;\n\t}\n"])));

export { DraftBaseStyles as default };
