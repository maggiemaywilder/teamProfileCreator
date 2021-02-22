// file just for generating the page elements dynamically

function constructors(team) {
    console.log(team);
    function isManager() {
        team.filter(function(member) {
        return team[member][0] == 'team manager';
    }) 
    };
    // var engineers = team.filter(function(p) {
    //     return team[p][0] === 'engineer';
    // });
    // var interns = team.filter(function(p) {
    //     return team[p][0] === 'intern';
    // });
    console.log('here');
    // console.log('generatePage line16', managers);

    }
    

function createPage(team) {
    constructors(team);

}

module.exports = createPage;

