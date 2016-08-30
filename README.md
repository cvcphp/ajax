<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
</head>
<body>
<code class="language-javascript">普通form表单式提交</code>
</br>
<code class="language-javascript">WITAJAX.ajaxform(form,url,success,error)</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>
<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>form</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">string</td>
  <td>表单名称</td>
</tr>
<tr class="alt">
    <td>url</td>
    <td align="center"><span style="color:#FF8000">是</span></td>
    <td align="center">string</td>
 	<td>服务器url地址</td>
</tr>
<tr class="altblank">
  <td>success</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">function</td>
  <td>成功回调函数</td>
</tr>
<tr class="alt">
    <td>error</td>
    <td align="center"><span style="color:#FF8000">是</span></td>
    <td align="center">function</td>
 	<td>失败回调函数</td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre><code class="language-javascript">&lt;form id="myform"&gt;
&lt;input type="text" id="userphone" value="15990717885"/&gt;
&lt;input type="text" id="userpassword" value="1111"/&gt;
&lt;input type="text" value="我不会被提交到服务器，因为没有id值和name值"/&gt;
&lt;/form&gt;
&lt;script&gt;
    var form="myform";
    var url="http://***.***.***.***/login.do";
    WITAJAX.ajaxform("myform",url,success,error);
    
    //提交成功
    function success()
    {
        alert(arguments[0]);
    }
    //提交失败
    function error()
    {
        alert(arguments[0]);
    }
&lt;/script&gt;</code>
</pre>
	</td>
</tr>
</table>
<br>
<code class="language-javascript">键值式提交(key-value)</code>
</br>
<code class="language-javascript">WITAJAX.ajaxmap(map,url,success, error)</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>

<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>map</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">Map</td>
  <td >map 键值列表</td>
</tr>
<tr class="alt">
    <td>url</td>
    <td align="center"><span style="color:#FF8000">是</span></td>
    <td align="center">string</td>
 	<td>服务器url地址</td>
</tr>
<tr class="altblank">
  <td>success</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">function</td>
  <td>成功回调函数</td>
</tr>
<tr class="alt">
    <td>error</td>
    <td align="center"><span style="color:#FF8000">是</span></td>
    <td align="center">function</td>
 	<td>失败回调函数</td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre class="line-numbers"><code class="language-javascript">&lt;script&gt;
    var url="http://***.***.***.***/login.do";
    var map = new Map();
    map.put("userphone",15990717885);
    map.put("userpassword","123456");
    WITAJAX.ajaxmap(map,url,success,error);
    
    //提交成功
    function success()
    {
        alert(arguments[0]);
    }
    //提交失败
    function error()
    {
        alert(arguments[0]);
    }
&lt;/script&gt;</code>
</pre>
	</td>
</tr>
</table>
<br>
<code class="language-javascript">创建键值(Map)</code>
</br>
<code class="language-javascript">new Map()</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>

<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>new Map()</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">function</td>
  <td>创建Map</td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre class="line-numbers"><code class="language-javascript"> var map = new Map();
    map.put("userphone",15990717885);
    map.put("userpassword","1111");</code>
</pre>
	</td>
</tr>
</table>
</section>
<br>
<code class="language-javascript">BASE64编码</code>
</br>
<code class="language-javascript">WITAJAX.encodebase64(input)</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>

<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>input</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">string</td>
  <td>要编码成BASE64的字符串</td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre class="line-numbers"><code class="language-javascript">var witweb="http://www.witknow.com";
var base64=WITAJAX.encodebase64(witweb);
alert(base64);
//aHR0cDovL3d3dy53aXRrbm93LmNvbQ==</code>
</pre>
	</td>
</tr>
</table>

<br>
<code class="language-javascript">BASE64解码</code>
</br>
<code class="language-javascript">WITAJAX.decodebase64();</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>

<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>input</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">string</td>
  <td>要解码的BASE64字符串</td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre class="line-numbers"><code class="language-javascript">var base64="aHR0cDovL3d3dy53aXRrbm93LmNvbQ==";
var witweb=WITAJAX.decodebase64(base64);
alert(witweb);
//http://www.witknow.com</code>
</pre>
	</td>
</tr>
</table>
<br>
<code class="language-javascript">字符串转json对象</code>
</br>
<code class="language-javascript">WITJSON.parse(text,reviver)</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>
<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>text</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">string</td>
  <td>要转成json格式的字符串</td>
</tr>
<tr class="alt">
    <td>reviver</td>
    <td align="center">否</td>
    <td align="center">function</td>
 	<td>
<pre>一个转换结果的函数。 将为对象的每个成员调用此函数。 
如果成员包含嵌套对象，则先于父对象转换嵌套对象。 
对于每个成员，会发生以下情况：
如果 reviver 返回一个有效值，则成员值将替换为转换后的值。
如果 reviver 返回它接收的相同值，则不修改成员值。
如果 reviver 返回 null 或 undefined，则删除成员。</pre>
</td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre class="line-numbers"><code class="language-javascript">var jsontext = 
'{"companyname":"浙江慧脑信息科技有限公司",
"address":"文三路90号",
"tel":["0571-87352269","50571-87352268"],
"per":{"name":"李天静","age":30}}'; 

	//普通式调用
    var contact = JSON.parse(jsontext); 
    var companyname=contact.companyname;
	var address=contact.address;
	var per=contact.per;
	var name=per.name;//从per对象中取name值
	var age=per.age;
	var telarray=contact.tel;//电话号码 数组型
    
    //回调式调用
    var Reviver = JSON.parse(jsontext,Reviverfun); 
	function Reviverfun(key,value)
	{
		//返回json对象中每个key值和value值
        //value值类型有：Object、String等
		alert(key+":"+value);
	}</code>
</pre>
	</td>
</tr>
</table>
<br>
<br>
<code class="language-javascript">json对象转字符串</code>
</br>
<code class="language-javascript">WITJSON.stringify(value,replacer,space)</code>
</br>
<code class="language-javascript">支持系统：FireFox,Mozillar,opera,safari,IE7以上</code>
<table id="customers">
<tr >
  <th width="30%">参数名</th>
  <th width="11%">必选</th>
  <th width="15%">类型</th>
  <th width="24%">描述</th>
</tr>
<tr class="altblank">
  <td>value</td>
  <td align="center"><span style="color:#FF8000">是</span></td>
  <td align="center">Object</td>
  <td>json对象</td>
</tr>
<tr class="alt">
    <td>replacer</td>
    <td align="center">否</td>
    <td align="center">function</td>
 	<td>
<pre>
一个转换结果的函数。 将为对象的每个成员调用此函数。
</pre>
 </td>
</tr>
<tr class="altblank">
    <td>space</td>
    <td align="center">否</td>
    <td align="center">string、number</td>
 	<td>
<pre>
1）如果省略此参数，则直接输出来 。
2）如果是数字，那么它就定义缩进几个字符，最大值为10。
3）如果是转义字符，比如“\t”，表示回车，那么它每行一个回车。 
4）如果是字符串，就在每行输出值的时候把这些字符串附加上去。 
</pre>
 </td>
</tr>
<tr class="altblank">
  <td>示例代码</td>
</tr>
<tr class="altblank">
	<td>
<pre class="line-numbers"><code class="language-javascript">var jsonobject = 
{"companyname":"浙江慧脑信息科技有限公司","address":"文三路90号",
"tel":"["0571-87352269","50571-87352268"]",
"per":{"name":"李天静","age":30}};

	//普通式调用
    var text = WITJSON.stringify(jsonobject); 
    
    //回调式调用
    var Reviver = WITJSON.stringify(jsonobject,Reviverfun); 
	function Reviverfun(key,value)
	{
		//返回json对象中每个key值和value值
        //value值类型有：Object、String等
		alert(key+":"+value);
	}</code>
</pre>
	</td>
</tr>
</table>
</body>
</html>
