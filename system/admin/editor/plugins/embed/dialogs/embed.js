﻿/*
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.dialog.add('embed',function(a){var b=CKEDITOR.env.isCustomDomain();return{title:a.lang.clipboard.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?370:350,minHeight:CKEDITOR.env.quirks?250:245,htmlToLoad:'<!doctype html><script type="text/javascript">window.onload = function(){if ( '+CKEDITOR.env.ie+' ) '+'document.body.contentEditable = "true";'+'else '+'document.designMode = "on";'+'var iframe = new window.parent.CKEDITOR.dom.element( frameElement );'+'var dialog = iframe.getCustomData( "dialog" );'+''+'iframe.getFrameDocument().on( "keydown", function( e )\t\t\t\t\t\t{\t\t\t\t\t\t\tif ( e.data.getKeystroke() == 27 )\t\t\t\t\t\t\t\tdialog.hide();\t\t\t\t\t\t});'+'};'+'</script><style>body { margin: 3px; height: 95%; } </style><body></body>',onShow:function(){var h=this;if(CKEDITOR.env.ie)h.getParentEditor().document.getBody().$.contentEditable='false';h.parts.dialog.$.offsetHeight;var c=h.getContentElement('general','editing_area').getElement(),d=CKEDITOR.dom.element.createFromHtml('<iframe src="javascript:void(0)" frameborder="0" allowtransparency="1"></iframe>'),e=h.getParentEditor().lang;d.setStyles({width:'346px',height:'130px','background-color':'white',border:'1px solid black'});d.setCustomData('dialog',h);var f=e.editorTitle.replace('%1',e.clipboard.title);if(CKEDITOR.env.ie)c.setHtml('<legend style="position:absolute;top:-1000000px;left:-1000000px;">'+CKEDITOR.tools.htmlEncode(f)+'</legend>');else{c.setHtml('');c.setAttributes({role:'region',title:f});d.setAttributes({role:'region',title:' '});}c.append(d);if(CKEDITOR.env.ie)c.setStyle('height',d.$.offsetHeight+2+'px');if(b){CKEDITOR._cke_htmlToLoad=h.definition.htmlToLoad;d.setAttribute('src','javascript:void( (function(){document.open();document.domain="'+document.domain+'";'+'document.write( window.parent.CKEDITOR._cke_htmlToLoad );'+'delete window.parent.CKEDITOR._cke_htmlToLoad;'+'document.close();'+'})() )');}else{var g=d.$.contentWindow.document;g.open();g.write(h.definition.htmlToLoad);g.close();}},onHide:function(){if(CKEDITOR.env.ie)this.getParentEditor().document.getBody().$.contentEditable='true';},onLoad:function(){if((CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&(a.lang.dir=='rtl'))this.parts.contents.setStyle('overflow','hidden');},onOk:function(){var c=this.getContentElement('general','editing_area').getElement(),d=c.getElementsByTag('iframe').getItem(0),e=this.getParentEditor(),f=d.$.contentWindow.document.body.innerHTML;setTimeout(function(){e.insertHtml(f);},0);},contents:[{id:'general',label:a.lang.common.generalTab,elements:[{type:'html',id:'securityMsg',html:'<div style="white-space:normal;width:340px;">'+a.lang.clipboard.securityMsg+'</div>'},{type:'html',id:'embedMsg',html:'<div style="white-space:normal;width:340px;">'+a.lang.clipboard.embedMsg+'</div>'},{type:'html',id:'editing_area',style:'width: 100%; height: 100%;',html:'<fieldset></fieldset>',focus:function(){var c=this.getElement(),d=c.getElementsByTag('iframe');
if(d.count()<1)return;d=d.getItem(0);setTimeout(function(){d.$.contentWindow.focus();},500);}}]}]};});
