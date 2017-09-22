(function () {

    function eventindexcontroller(eventservice, $timeout, $state) {
        var ad = this;
        ad.events = [];

        activate();

        function activate() {
            return geteventsdata(function () {
                console.log("Activated");
            });
        }

        function geteventsdata() {
            return eventservice.getevent()
                .then(function (data) {
                    ad.events = data;
                    return ad.events;
                });
        }

        eventservice.getevent();
        $timeout(function () {
            activate();
        }, 500);

        ad.indexdeleteclicked = function (index) {
            var deleteid = ad.events[index].eid;
            eventservice.deleteevent(deleteid);
            $timeout(function () {
                activate();
            }, 500);
        }

        ad.go = function (index) {
            $state.go('addevent', { 'index': index, 'events': ad.events[index] });
        }
    }
    angular.module('mainApp')
        .controller('eventindexctrl', eventindexcontroller);
    eventindexcontroller.$inject = ['eventservice', '$timeout', '$state'];
})();

