var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var WITAJAX={
ajaxform:function(formname, url, success, error) {
	var form, divform, fileObj;
	var checkboxstr = "";
	var filename = "";
	form = new FormData();
	divform = document.getElementById(formname).childNodes;
	for (var i = 0; i < divform.length; i++) {
		if(divform[i].id=="")continue;
		if (divform[i].nodeName.toLowerCase() == "div") {
			form.append(divform[i].id, divform[i].innerHTML);
			continue;
		}
		if (divform[i].nodeType != 1) { continue; }
		else {
			if (divform[i].type == "text") {
				form.append(divform[i].id, divform[i].value);
				continue;
			}
			if (divform[i].type == "textarea") {
				form.append(divform[i].id, divform[i].value);
				continue;
			}
			if (divform[i].type == "checkbox") {
				if (checkboxstr != divform[i].name) {
					checkboxstr = divform[i].name;
					var ck = document.getElementsByName(checkboxstr);
					var ckstr = "";
					for (var j = 0; j < ck.length; j++) {
						if (ck[j].checked) {
							if (ckstr == "") {
								ckstr = ck[j].value;
							} else {
								ckstr = ckstr + "," + ck[j].value;
							}
						}
					}
					form.append(checkboxstr, ckstr);
				}
				continue;
			}
			if (divform[i].type == "radio") {
				if (divform[i].checked) form.append(divform[i].name, divform[i].value);
				continue;
			}
			if (divform[i].type == "file") {
				if (filename != divform[i].name) {
					filename = divform[i].name;
					var myfiles = document.getElementsByName(divform[i].name);
					for (var fcount = 0; fcount < myfiles.length; fcount++) {
						fileObj = myfiles[fcount].files[0];
						if (fileObj != "" && fileObj != null && fileObj != undefined) {
							form.append(divform[i].name, fileObj);
						} 
					} 
				}
				continue;
			}
		} 
	}
	var XMLHttpReq = new XMLHttpRequest();
	//XMLHttpReq.upload.onprogress = updateProgress;
	//XMLHttpReq.addEventListener("load", function(){}, false);
	XMLHttpReq.addEventListener("error", function(){error("提交出错，请检查网址或者参数是否都正确，以及是否被禁止跨域，status:"+XMLHttpReq.status);}, false);
	XMLHttpReq.addEventListener("abort", function(){error("提交被取消,status:"+XMLHttpReq.status);}, false);
	XMLHttpReq.open("post", url, true);
	XMLHttpReq.onreadystatechange = function () {
	if (XMLHttpReq.readyState == 4 && XMLHttpReq.status == 200) {success(WITJSON.parse(XMLHttpReq.responseText));}};
	XMLHttpReq.send(form);
	//form.remove();
},
ajaxmap:function(map,url,success,error)
{
	form = new FormData();
	var array = map.keySet();
	var params="";
	 for(var i=0;i<array.length;i++)
	 {
		 if(typeof map.get(array[i])!="object")
		 {
			 form.append(array[i],map.get(array[i]));
		 }
		 else
		 {
			 form.append(array[i],WITJSON.stringify(map.get(array[i])));
		 }
		 
	}
	var XMLHttpReq = new XMLHttpRequest();
	XMLHttpReq.addEventListener("error", function(){error("提交出错，请检查网址或者参数是否都正确，以及是否被禁止跨域，status:"+XMLHttpReq.status);}, false);
	XMLHttpReq.addEventListener("abort", function(){error("提交被取消,status:"+XMLHttpReq.status);}, false);
	XMLHttpReq.open("post", url, true);
	XMLHttpReq.onreadystatechange = function () {
	if (XMLHttpReq.readyState == 4 && XMLHttpReq.status == 200) {success(WITJSON.parse(XMLHttpReq.responseText));}};
	XMLHttpReq.send(form);
},
ajaxmapget:function(map,url,success,error)
{
	var array = map.keySet();
	var params="";
	 for(var i=0;i<array.length;i++)
	 {
		 if(typeof map.get(array[i])!="object")
		 {
			 if(params=="")
			 {
				params=array[i]+"="+map.get(array[i]); 
			 }
			 else
			 {
				 params=params+"&"+array[i]+"="+map.get(array[i]);
			 }
		 }
		 else
		 {
			 if(params=="")
			 {
				params=array[i]+"="+WITJSON.stringify(map.get(array[i])); 
			 }
			 else
			 {
				 params=params+"&"+array[i]+"="+WITJSON.stringify(map.get(array[i]));
			 }
		 } 
	}
	var XMLHttpReq = new XMLHttpRequest();
	XMLHttpReq.addEventListener("error", function(){error("提交出错，请检查网址或者参数是否都正确，以及是否被禁止跨域,status:"+XMLHttpReq.status);}, false);
	XMLHttpReq.addEventListener("abort", function(){error("提交被取消,status:"+XMLHttpReq.status);}, false);
	XMLHttpReq.open("get", url+"?"+params, true);
	XMLHttpReq.onreadystatechange = function () {
	if (XMLHttpReq.readyState == 4 && XMLHttpReq.status == 200) {success(WITJSON.parse(XMLHttpReq.responseText));}};
	XMLHttpReq.send(null);
},
maptourlparams:function(map)
{
	var array = map.keySet();
	var params="";
	 for(var i=0;i<array.length;i++)
	 {
		 if(typeof map.get(array[i])!="object")
		 {
			 if(params=="")
			 {
				params=array[i]+"="+map.get(array[i]); 
			 }
			 else
			 {
				 params=params+"&"+array[i]+"="+map.get(array[i]);
			 }
		 }
		 else
		 {
			 if(params=="")
			 {
				params=array[i]+"="+WITJSON.stringify(map.get(array[i])); 
			 }
			 else
			 {
				 params=params+"&"+array[i]+"="+WITJSON.stringify(map.get(array[i]));
			 }
		 } 
	}
	return params;
},
encodebase64:function (input) {
	var output = "";
	var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	var i = 0;
	input = _utf8_encode(input);
	while (i < input.length) {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		if (isNaN(chr2)) {
			enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
			enc4 = 64;
		}
		output = output +
		_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
		_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
}
return output;
},
decodebase64:function (input) {
	var output = "";
	var chr1, chr2, chr3;
	var enc1, enc2, enc3, enc4;
	var i = 0;
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	while (i < input.length) {
		enc1 = _keyStr.indexOf(input.charAt(i++));
		enc2 = _keyStr.indexOf(input.charAt(i++));
		enc3 = _keyStr.indexOf(input.charAt(i++));
		enc4 = _keyStr.indexOf(input.charAt(i++));
		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;
		output = output + String.fromCharCode(chr1);
		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}
	}
	output = _utf8_decode(output);
	return output;
}
		
}
 function _utf8_encode(string) {
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			utftext += String.fromCharCode(c);
		} else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		} else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}

	}
	return utftext;
}
 function _utf8_decode(utftext) {
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;
	while ( i < utftext.length ) {
		c = utftext.charCodeAt(i);
		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		} else if((c > 191) && (c < 224)) {
			c2 = utftext.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		} else {
			c2 = utftext.charCodeAt(i+1);
			c3 = utftext.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}
	}
	return string;
}
function Map(){
	this.container = new Object();
	}
	Map.prototype.put = function(key, value){
	this.container[key] = value;
	}
	Map.prototype.get = function(key){
	return this.container[key];
	}
	Map.prototype.keySet = function() {
	var keyset = new Array();
	var count = 0;
	for (var key in this.container) {
	if (key == 'extend') {
	continue;
	}
	keyset[count] = key;
	count++;
	}
	return keyset;
	}
	Map.prototype.size = function() {
	var count = 0;
	for (var key in this.container) {
	// 跳过object的extend函数
	if (key == 'extend'){
	continue;
	}
	count++;
	}
	return count;
	}
	Map.prototype.remove = function(key) {
	delete this.container[key];
	}
	Map.prototype.toString = function(){
	var str = "";
	for (var i = 0, keys = this.keySet(), len = keys.length; i < len; i++) {
	str = str + keys[i] + "=" + this.container[keys[i]] + ";\n";
	}
	return str;
	}
	
function geturlparams(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   var r = window.location.search.substr(1).match(reg);
   if (r!=null) return (r[2]); return null;
}	
if (typeof WITJSON !== "object") {
    WITJSON = {}
}(function () {
    "use strict";
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        return n < 10 ? "0" + n : n
    }

    function this_value() {
        return this.valueOf()
    }
    if (typeof Date.prototype.toWITJSON !== "function") {
        Date.prototype.toWITJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        Boolean.prototype.toWITJSON = this_value;
        Number.prototype.toWITJSON = this_value;
        String.prototype.toWITJSON = this_value
    }
    var gap;
    var indent;
    var meta;
    var rep;

    function quote(string) {
        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + "\"" : "\"" + string + "\""
    }

    function str(key, holder) {
        var i;
        var k;
        var v;
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];
        if (value && typeof value === "object" && typeof value.toWITJSON === "function") {
            value = value.toWITJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof WITJSON.stringify !== "function") {
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        WITJSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("WITJSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof WITJSON.parse !== "function") {
        WITJSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
			while (text.search(/[^"]\d{16}\d*[,\]\}]/g) >= 0) {
            text = text.replace(/(:)(\d{16}\d*)/g,':\"$2\"');
        	}
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) {
                j = eval("(" + text + ")");
                return (typeof reviver === "function") ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("WITJSON.parse")
        }
    }
}());
Date.prototype.Format = function(fmt)  
{ 
 var o = {  
  "M+" : this.getMonth()+1,           
  "d+" : this.getDate(),            
  "h+" : this.getHours(),            
  "m+" : this.getMinutes(),         
  "s+" : this.getSeconds(),           
  "q+" : Math.floor((this.getMonth()+3)/3),  
  "S" : this.getMilliseconds()         
 };  
 if(/(y+)/.test(fmt))  
  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));  
 for(var k in o)  
  if(new RegExp("("+ k +")").test(fmt))  
 fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
 return fmt;  
}

String.prototype.Trim = function() 
{ 
return this.replace(/^\s+/g,"").replace(/\s+$/g,""); 
} 
String.prototype.left = function (length_) 
{
	return this.substring(0,length_);
}
String.prototype.right = function (length_)  
{  
	var _from = this.length - length_;  
	if (_from < 0) _from = 0;  
	return this.substring(this.length - length_, this.length);  
}; 
function WITCookie() 
{ 
	this.GetCookie = function(key) 
	{ 
	var cookie = document.cookie; 
	var cookieArray = cookie.split(';'); 
	var getvalue = ""; 
	for(var i = 0;i<cookieArray.length;i++) 
	{ 
	if(cookieArray[i].Trim().substr(0,key.length) == key) 
	{ 
	getvalue = cookieArray[i].Trim().substr(key.length + 1); 
	break; 
	} 
	} 
	return getvalue; 
	}; 
	this.GetChild = function(cookiekey,childkey) 
	{ 
	var child = this.GetCookie(cookiekey); 
	var childs = child.split('&'); 
	var getvalue = ""; 
	for(var i = 0;i < childs.length;i++) 
	{ 
	if(childs[i].Trim().substr(0,childkey.length) == childkey) 
	{ 
	getvalue = childs[i].Trim().substr(childkey.length + 1); 
	break; 
	} 
	} 
	return getvalue; 
	}; 
	this.SetCookie = function(key,value,expire,domain,path) 
	{ 
	var cookie = ""; 
	if(key != null && value != null) 
	cookie += key + "=" + value + ";"; 
	if(expire != null) 
	cookie += "expires=" + expire.toGMTString() + ";"; 
	if(domain != null) 
	cookie += "domain=" + domain + ";"; 
	if(path != null) 
	cookie += "path=" + path + ";"; 
	document.cookie = cookie; 
	}; 
	this.Expire = function(key) 
	{ 
	expire_time = new Date(); 
	expire_time.setFullYear(expire_time.getFullYear() - 1); 
	var cookie = " " + key + "=e;expires=" + expire_time + ";" 
	document.cookie = cookie; 
	} 
}
