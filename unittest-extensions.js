Test.Unit.Logger.prototype.initialize = function(log, options) {
  var options = options || {};
  this.testRunTitle = options.testRunTitle || '';
  this.log = $(log);
  if (this.log) {
    this._createLogTable();
  }
};

Test.Unit.Logger.prototype.subscript = 0;

Test.Unit.Logger.prototype._createLogTable = function() {
  var subscript = ++Test.Unit.Logger.prototype.subscript;
  var header = this.testRunTitle ? '<div class="logheader">' + this.testRunTitle + '</div>' : '';
  this.log.innerHTML =
    header +
    '<div id="logsummary' + subscript + '" class="logsummary"></div>' +
    '<table id="logtable' + subscript + '" class="logtable">' +
    '<thead><tr><th>Status</th><th>Test</th><th>Message</th></tr></thead>' +
    '<tbody id="loglines' + subscript + '" class="loglines"></tbody>' +
    '</table>' + 
    '<br/><br/>';
    this.logsummary = $('logsummary' + subscript);
    this.loglines = $('loglines' + subscript);
  };
  
Test.Unit.Runner.prototype.initialize = function(testcases) {
  this.options = Object.extend({
    testLog: 'testlog'
  }, arguments[1] || {});
  this.options.resultsURL = this.parseResultsURLQueryParameter();
  this.options.tests      = this.parseTestsQueryParameter();
  if (this.options.testLog) {
    this.options.testLog = $(this.options.testLog) || null;
  }
  if(this.options.tests) {
    this.tests = [];
    for(var i = 0; i < this.options.tests.length; i++) {
      if(/^test/.test(this.options.tests[i])) {
        this.tests.push(new Test.Unit.Testcase(this.options.tests[i], testcases[this.options.tests[i]], testcases["setup"], testcases["teardown"]));
      }
    }
  } else {
    if (this.options.test) {
      this.tests = [new Test.Unit.Testcase(this.options.test, testcases[this.options.test], testcases["setup"], testcases["teardown"])];
    } else {
      this.tests = [];
      for(var testcase in testcases) {
        if(/^test/.test(testcase)) {
          this.tests.push(
             new Test.Unit.Testcase(
               this.options.context ? ' -> ' + this.options.titles[testcase] : testcase, 
               testcases[testcase], testcases["setup"], testcases["teardown"]
             ));
        }
      }
    }
  }
  this.currentTest = 0;
  this.logger = new Test.Unit.Logger(this.options.testLog, {testRunTitle: this.options.testRunTitle});
  setTimeout(this.runTests.bind(this), 1000);
};
