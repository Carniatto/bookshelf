/* jshint -W117, -W030 */
describe('blocks / logger', function() {
    describe('when using real toastr', function() {

        beforeEach(module('blocks.logger'));

        // This is the behavior we want to AVOID in our unit tests
        it('it writes to the DOM when test is enabled', function() {

            /* jshint -W027 */
            return; // remove this return during demo

            inject(function(logger) {
                // watch what happens in a browser test runner
                logger.error('Test Error');
                logger.success('Test Success');
                logger.warning('Test Warning');
            });
            /* jshint +W027 */
        });
    });

    describe('when replace with test dummy', function() {
        var $log;
        var toastr;
        var logger;
        var testLogMsg = 'a test log message';

        // starting with the 'blocks.logger' module ...
        beforeEach(module('blocks.logger',

            // ... replace the 'toastr' recipe with empty dummy
            // that will throw exception if used
            function($provide) {
                $provide.constant('toastr', {});
            }
        ));

        beforeEach(inject(function(_$log_, _logger_, _toastr_) {
            $log   = _$log_;
            logger = _logger_;
            toastr = _toastr_;

        }));

        it('`logger.log` does not call toastr', function() {
            // would have thrown if it called toastr
            logger.log(testLogMsg);
        });

        it('`logger.log` does call `$log.log`', function() {
            logger.log(testLogMsg);
            var logLogs = $log.log.logs;
            expect(logLogs).to.have.length(1, '$log.log.logs');
            expect(logLogs[0][0]).to.contain(testLogMsg);
        });

        it('toastr is called by logger.info', function() {
            expect(function() {
                toastr.info(testLogMsg);
            }).to.throw(TypeError);
        });
    });

    describe('when stub toastr with sinon', function() {
        var toastr;
        var testError = 'a test error message';

        // starting with the 'blocks.logger' module ...
        beforeEach(module('blocks.logger'));

        // inject toastr and mock its methods
        beforeEach(inject(function (_toastr_) {
            toastr = _toastr_;
            // mock specific methods
            sinon.stub(toastr, 'error');
            sinon.stub(toastr, 'info');
            sinon.stub(toastr, 'success');
            sinon.stub(toastr, 'warning');
        }));
    });

    describe('when stub toastr routinely with $provide', function() {
        var toastr;

        // Because we need to fake toastr all over the place
        // and do so in apps that might not even use toastr
        // we create a service "constant" for this purpose.
        //
        // See this very same method in bard.js
        function fakeToastr($provide) {

            toastr = sinon.stub({
                info: function() {},
                error: function() {},
                warning: function() {},
                success: function() {}
            });

            $provide.constant('toastr', toastr);
        }

        // then simply include it among the test module recipes
        // as needed ... as we do here
        beforeEach(module('blocks.logger', fakeToastr));

        // afterEach not needed because replacing the toastr service each time

        it('calls `toastr.success` when log a success message', inject(function(logger) {
            var testSuccess = 'a test success message';
            logger.success(testSuccess);

            expect(toastr.success).to.be.calledOnce;
            expect(toastr.success).to.be.calledWith(testSuccess);
            expect(toastr.success.getCall(0).args).to.have.length(2,
                'success should be called w/ two args');
        }));

        it('calls `toastr.warning` when log a warning message', inject(function(logger) {
            var testWarning = 'a test warning message';
            logger.warning(testWarning);

            expect(toastr.warning).to.be.calledOnce;
            expect(toastr.warning).to.be.calledWith(testWarning);
            expect(toastr.warning.getCall(0).args).to.have.length(2,
                'warning should be called w/ two args');
        }));
    });
});
