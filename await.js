let getSecretValue = _ => 0;
let publicValue = 1;

const dataRetrieval = new Promise((resolve, reject) => {
    setTimeout(_ => {
        getSecretValue = (_ => {
            let secretValue = Math.floor(Math.random() * 1e9 + 7);
            publicValue = secretValue;

            return function() {
                const expiredValue = secretValue;
                secretValue = Math.floor(Math.random() * 1e9 + 7 + expiredValue);
                return expiredValue;
            }
        })();
        
        resolve();
    }, Math.floor(Math.random() * 2000) + 1000);
});

async function mainFunction() {
    // TODO: fill the missing code below to make the function return 'data retrieved!'.
    
    if (publicValue && publicValue === getSecretValue()) {
        
      return 'data retrieved';
    } else {
        
      return 'data not found :(';
    }
}

module.exports = { mainFunction };