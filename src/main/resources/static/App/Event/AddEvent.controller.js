(function () {

    function addeventcontroller(eventservice, $stateParams) {
        var ad = this;
        ad.eventname;
        ad.eventdate = new Date(ad.eventdate).toLocaleDateString();
        ad.eventstatus;
        ad.eventlocation;

        ad.agendas = [];
        ad.agendatime;
        ad.agendadesc;
        ad.agendainstruction;

        ad.addnew = function () {

            var received = {
                adesc: ad.agendadesc,
                ains: ad.agendainstruction,
                atime: ad.agendatime
            }
            ad.agendas.push(received);
            console.log(angular.toJson(ad.agendas));
            ad.agendatime = '';
            ad.agendadesc = '';
            ad.agendainstruction = '';
        }

        ad.editclicked = function (index) {
            console.log("Edit");

            ad.agendatime = ad.agendas[index].atime;
            ad.agendadesc = ad.agendas[index].adesc;
            ad.agendainstruction = ad.agendas[index].ains;
        }

        ad.saveclicked = function (index) {
            console.log("save");

            ad.agendas[index].atime = ad.agendatime;
            ad.agendas[index].adesc = ad.agendadesc;
            ad.agendas[index].ains = ad.agendainstruction;
            console.log(angular.toJson(ad.agendas));
            ad.agendatime = '';
            ad.agendadesc = '';
            ad.agendainstruction = '';
        }

        var editindex = $stateParams.index;
        console.log(editindex);

        ad.deleteclicked = function (index) {
            ad.agendas.splice(index, 1);
            console.log(angular.toJson(ad.agendas));
        }

        var editrow = $stateParams.events;
        if (editrow) {
            ad.eventdate = editrow.edate;
            ad.eventid = editrow.eid;
            ad.eventlocation = editrow.elocation;
            ad.eventname = editrow.ename;
            ad.eventstatus = editrow.estatus;
            ad.agendas = editrow.agenda;
        };

        ad.finalsave = function () {

            if (editindex !== null) {

                var updated = {
                    agenda: ad.agendas,
                    edate: ad.eventdate,
                    eid: ad.eventid,
                    elocation: ad.eventlocation,
                    ename: ad.eventname,
                    estatus: ad.eventstatus
                }
                console.log(updated);
                eventservice.updateevent(updated, ad.eventid);
                editindex = null;
                console.log(editindex);
            }
            else {
                var newdata = {
                    agenda: ad.agendas,
                    edate: ad.eventdate,
                    eid: 0,
                    elocation: ad.eventlocation,
                    ename: ad.eventname,
                    estatus: ad.eventstatus
                }
                console.log(angular.toJson(newdata));
                eventservice.postevent(newdata);
            }
        }
    }
    angular.module('mainApp')
        .controller('addeventctrl', addeventcontroller);
    addeventcontroller.$inject = ['eventservice', '$stateParams'];
})();