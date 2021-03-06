README
======

Include the extension CSS and JS file

```HTML
<script src="js/prototype.js" type="text/javascript"> </script>
<script src="js/scriptaculous.js" type="text/javascript"> </script>
<script src="js/unittest.js" type="text/javascript"> </script>
<script src="js/unittest-extensions.js" type="text/javascript"> </script>

<link rel="stylesheet" href="css/test.css" type="text/css"/>
<link rel="stylesheet" href="css/test-extensions.css" type="text/css"/>
```

Add the test class.

```HTML
<div id="testlog1"></div>
<div id="testlog2"></div>
<div id="testlog3"></div>
<script>
    new Test.Unit.Runner(Test1, {testLog: 'testlog1', testRunTitle: 'Test 1'});
    new Test.Unit.Runner(Test2, {testLog: 'testlog2', testRunTitle: 'Test 2'});
    new Test.Unit.Runner(Test3, {testLog: 'testlog3', testRunTitle: 'Test 3'});
</script>
```

That's it!

LICENSE
=======

The source code is released under the MIT license. Please refer LICENSE for more details.

The original source code from script.aculo.us is release under the MIT license. https://github.com/madrobby/scriptaculous/blob/master/MIT-LICENSE
