(function () {

    function eventservice($http) {
        return {
            getevent: getevent,
            postevent: postevent,
            deleteevent: deleteevent,
            updateevent: updateevent
        };

        function getevent() {
            return $http.get('http://localhost:8080/api/events')
                .then(geteventsuccess)
                .catch(geteventfailure);

            function geteventsuccess(response) {
                return response.data;
            };

            function geteventfailure(response) {
                console.log(response.statusText);
            };
        }

        function postevent(event) {
            return $http.post('http://localhost:8080/api/events', event)
                .then(posteventsuccess)
                .catch(posteventfailure);

            function posteventsuccess(response) {
                console.log(response.data);
                return response.data;
            };

            function posteventfailure(response) {
                console.log(response.data);
                console.log(response.statusText);
            };
        }

        function deleteevent(id) {
            console.log(id);
            console.log(event);
            return $http.delete('http://localhost:8080/api/events/' + id)
                .then(deleteeventsuccess)
                .catch(deleteeventfailure);

            function deleteeventsuccess(response) {
                return response.data;
            };

            function deleteeventfailure(response) {
                console.log(response.statusText);
            };
        }

        function updateevent(event, id) {
            return $http.post('http://localhost:8080/api/events/' + id, event)
                .then( updateeventsuccess)
                .catch(updateeventfailure);

            function updateeventsuccess(response) {
                return response.data;
            };

            function updateeventfailure(response) {
                console.log(response.statusText);
            };
        }
    };
    angular.module('mainApp')
        .factory('eventservice', eventservice);
    eventservice.$inject = ['$http'];
})();