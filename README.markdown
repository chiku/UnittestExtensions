README
======

Include the extension CSS and JS file

<code>

<script src="js/prototype.js" type="text/javascript"> </script>
<script src="js/scriptaculous.js" type="text/javascript"> </script>
<script src="js/unittest.js" type="text/javascript"> </script>
<script src="js/unittest-extensions.js" type="text/javascript"> </script>

<link rel="stylesheet" href="css/test.css" type="text/css"/>
<link rel="stylesheet" href="css/test-extensions.css" type="text/css"/>

</code>

Add the test class.

<code>

<div id="testlog1"></div>
<div id="testlog2"></div>
<div id="testlog3"></div>
<script>
    new Test.Unit.Runner(Test1, {testLog: 'testlog1', testRunTitle: 'Test 1'});
    new Test.Unit.Runner(Test2, {testLog: 'testlog2', testRunTitle: 'Test 2'});
    new Test.Unit.Runner(Test3, {testLog: 'testlog3', testRunTitle: 'Test 3'});
</script>

</code>

That's it!
